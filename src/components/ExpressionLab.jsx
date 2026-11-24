import React, { useState } from 'react';
import { Play, Sparkles, Terminal, CheckCircle2, AlertCircle, User } from 'lucide-react';
import { expressionLabChallenges } from '../data/practicalProject';

function splitTopLevelArgs(str) {
  const args = [];
  let depth = 0;
  let inQuote = false;
  let current = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '"') inQuote = !inQuote;
    if (!inQuote) {
      if (ch === '(' || ch === '{') depth++;
      if (ch === ')' || ch === '}') depth--;
      if (ch === ',' && depth === 0) {
        args.push(current.trim());
        current = '';
        continue;
      }
    }
    current += ch;
  }
  if (current.trim()) args.push(current.trim());
  return args;
}

function evaluateAppSheetExpression(rawExpr, db, activeUserEmail, sampleLoanRow) {
  const expr = rawExpr.trim();
  if (!expr) return { ok: false, error: 'Sila masukkan formula AppSheet terlebih dahulu.' };

  const evalValue = (node, currentRow = sampleLoanRow) => {
    const s = node.trim();

    // String literal
    if (s.startsWith('"') && s.endsWith('"')) return s.slice(1, -1);

    // Boolean / Number literal
    if (s.toUpperCase() === 'TRUE') return true;
    if (s.toUpperCase() === 'FALSE') return false;
    if (!isNaN(Number(s)) && s !== '') return Number(s);

    // List literal {"A", "B"}
    if (s.startsWith('{') && s.endsWith('}')) {
      return splitTopLevelArgs(s.slice(1, -1)).map((item) => evalValue(item, currentRow));
    }

    // Basic zero-arg functions
    if (/^USEREMAIL\(\)$/i.test(s)) return activeUserEmail;
    if (/^TODAY\(\)$/i.test(s)) return new Date().toISOString().slice(0, 10);
    if (/^NOW\(\)$/i.test(s)) return new Date().toISOString().replace('T', ' ').slice(0, 16);
    if (/^UNIQUEID\(\)$/i.test(s))
      return Math.random().toString(16).substring(2, 10).toUpperCase();

    // Dereference [RefCol].[TargetCol]
    const derefMatch = s.match(/^\[(\w+)\]\.\[(\w+)\]$/);
    if (derefMatch) {
      const [, refCol, targetCol] = derefMatch;
      const refVal = currentRow?.[refCol];
      if (refCol === 'ItemID') {
        const found = db.ITEMS.find((it) => it.ItemID === refVal);
        return found ? found[targetCol] ?? '' : '';
      }
      if (refCol === 'UserID') {
        const found = db.USERS.find((u) => u.UserID === refVal);
        return found ? found[targetCol] ?? '' : '';
      }
      return '';
    }

    // Column reference [Col]
    const colMatch = s.match(/^\[(\w+)\]$/);
    if (colMatch) {
      return currentRow ? currentRow[colMatch[1]] ?? '' : '';
    }

    // Table[Column] shorthand list
    const tableColMatch = s.match(/^(\w+)\[(\w+)\]$/);
    if (tableColMatch) {
      const [, tName, cName] = tableColMatch;
      const rows = db[tName.toUpperCase()];
      if (!rows) throw new Error(`Jadual "${tName}" tidak ditemui dalam SPB_DATABASE.`);
      return rows.map((r) => r[cName]);
    }

    // Function calls NAME(...)
    const fnMatch = s.match(/^([A-Za-z_]+)\(([\s\S]*)\)$/);
    if (fnMatch) {
      const fnName = fnMatch[1].toUpperCase();
      const args = splitTopLevelArgs(fnMatch[2]);

      if (fnName === 'NOT') return !evalValue(args[0], currentRow);
      if (fnName === 'ISBLANK') {
        const v = evalValue(args[0], currentRow);
        return v === '' || v === null || v === undefined;
      }
      if (fnName === 'AND') return args.every((a) => Boolean(evalValue(a, currentRow)));
      if (fnName === 'OR') return args.some((a) => Boolean(evalValue(a, currentRow)));
      if (fnName === 'IN') {
        const val = evalValue(args[0], currentRow);
        const list = evalValue(args[1], currentRow);
        return Array.isArray(list) ? list.includes(val) : false;
      }
      if (fnName === 'CONTAINS') {
        const haystack = String(evalValue(args[0], currentRow)).toLowerCase();
        const needle = String(evalValue(args[1], currentRow)).toLowerCase();
        return haystack.includes(needle);
      }
      if (fnName === 'TEXT') return String(evalValue(args[0], currentRow));
      if (fnName === 'CONCATENATE') {
        return args.map((a) => String(evalValue(a, currentRow))).join('');
      }
      if (fnName === 'IF') {
        return evalValue(args[0], currentRow)
          ? evalValue(args[1], currentRow)
          : evalValue(args[2], currentRow);
      }
      if (fnName === 'IFS') {
        for (let i = 0; i < args.length; i += 2) {
          if (evalValue(args[i], currentRow)) return evalValue(args[i + 1], currentRow);
        }
        return '';
      }
      if (fnName === 'SELECT') {
        const tc = args[0].match(/^(\w+)\[(\w+)\]$/);
        if (!tc) throw new Error('Sintaks SELECT memerlukan format Table[Column], contoh: LOANS[LoanID]');
        const [, tName, cName] = tc;
        const rows = db[tName.toUpperCase()];
        if (!rows) throw new Error(`Jadual "${tName}" tidak wujud.`);
        const cond = args[1] || 'TRUE';
        return rows
          .filter((r) => Boolean(evalValue(cond, r)))
          .map((r) => r[cName]);
      }
      if (fnName === 'FILTER') {
        const tName = String(evalValue(args[0], currentRow)).toUpperCase();
        const rows = db[tName];
        if (!rows) throw new Error(`Jadual "${tName}" tidak wujud.`);
        const keyCol = Object.keys(rows[0] || {})[0];
        return rows.filter((r) => Boolean(evalValue(args[1], r))).map((r) => r[keyCol]);
      }
      if (fnName === 'LOOKUP') {
        const searchVal = evalValue(args[0], currentRow);
        const tName = String(evalValue(args[1], currentRow)).toUpperCase();
        const searchCol = String(evalValue(args[2], currentRow));
        const returnCol = String(evalValue(args[3], currentRow));
        const rows = db[tName];
        if (!rows) throw new Error(`Jadual "${tName}" tidak wujud.`);
        const match = rows.find((r) => String(r[searchCol]) === String(searchVal));
        return match ? match[returnCol] ?? '' : '';
      }
      if (fnName === 'ANY') {
        const list = evalValue(args[0], currentRow);
        return Array.isArray(list) ? list[0] ?? '' : list;
      }
      if (fnName === 'COUNT') {
        const list = evalValue(args[0], currentRow);
        return Array.isArray(list) ? list.length : 0;
      }
      if (fnName === 'SUM') {
        const list = evalValue(args[0], currentRow);
        return Array.isArray(list) ? list.reduce((a, b) => a + (Number(b) || 0), 0) : 0;
      }
      if (fnName === 'AVERAGE') {
        const list = evalValue(args[0], currentRow);
        if (!Array.isArray(list) || list.length === 0) return 0;
        return (list.reduce((a, b) => a + (Number(b) || 0), 0) / list.length).toFixed(2);
      }
      if (fnName === 'MAX') {
        const list = evalValue(args[0], currentRow);
        return Array.isArray(list) ? Math.max(...list.map(Number)) : 0;
      }
      if (fnName === 'MIN') {
        const list = evalValue(args[0], currentRow);
        return Array.isArray(list) ? Math.min(...list.map(Number)) : 0;
      }
      throw new Error(`Fungsi "${fnName}()" belum disokong dalam makmal simulator ini.`);
    }

    // Binary comparison operators (=, <>, >=, <=, >, <)
    const ops = ['<>', '>=', '<=', '=', '>', '<'];
    for (const op of ops) {
      let depth = 0;
      let inQ = false;
      for (let i = 0; i <= s.length - op.length; i++) {
        const ch = s[i];
        if (ch === '"') inQ = !inQ;
        if (!inQ) {
          if (ch === '(' || ch === '{') depth++;
          if (ch === ')' || ch === '}') depth--;
          if (depth === 0 && s.slice(i, i + op.length) === op) {
            const left = evalValue(s.slice(0, i), currentRow);
            const right = evalValue(s.slice(i + op.length), currentRow);
            if (op === '=') return String(left) === String(right);
            if (op === '<>') return String(left) !== String(right);
            if (op === '>=') return left >= right;
            if (op === '<=') return left <= right;
            if (op === '>') return left > right;
            if (op === '<') return left < right;
          }
        }
      }
    }

    throw new Error(`Sintaks tidak dapat ditafsir: "${s}". Semak kurungan, nama Column [Column] dan tanda petikan "teks".`);
  };

  try {
    const result = evalValue(expr, sampleLoanRow);
    return { ok: true, result };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export default function ExpressionLab({ db }) {
  const [activeEmail, setActiveEmail] = useState(db.USERS[2]?.Email || 'ali@organisasi.edu.my');
  const [formula, setFormula] = useState('COUNT(SELECT(LOANS[LoanID], [Status] = "Pending"))');
  const [output, setOutput] = useState(() =>
    evaluateAppSheetExpression(
      'COUNT(SELECT(LOANS[LoanID], [Status] = "Pending"))',
      db,
      db.USERS[2]?.Email || 'ali@organisasi.edu.my',
      db.LOANS[0]
    )
  );

  const sampleRow = db.LOANS[0] || {};

  const runFormula = (exprToRun = formula, emailToUse = activeEmail) => {
    setOutput(evaluateAppSheetExpression(exprToRun, db, emailToUse, sampleRow));
  };

  return (
    <div className="grid lg:grid-cols-12 gap-6 items-start">
      {/* Left: Challenges */}
      <div className="lg:col-span-5 space-y-3">
        <div className="berfest-card p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="berfest-icon-circle w-9 h-9">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">7 Cabaran Amali Formula</h3>
              <p className="text-xs text-slate-500">Klik cabaran untuk muatkan &amp; uji terus!</p>
            </div>
          </div>

          <div className="space-y-2">
            {expressionLabChallenges.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  setFormula(ch.sampleFormula);
                  runFormula(ch.sampleFormula, activeEmail);
                }}
                className="w-full text-left p-3.5 rounded-2xl border border-orange-100 hover:border-orange-400 hover:bg-orange-50/70 transition-all group"
              >
                <div className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-orange-700">
                  {ch.title}
                </div>
                <p className="text-xs text-slate-600 mt-1">{ch.prompt}</p>
                <div className="mt-2 font-mono text-[11px] text-orange-700 bg-orange-50 px-2.5 py-1 rounded-lg inline-block">
                  {ch.sampleFormula}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Interactive Formula Runner */}
      <div className="lg:col-span-7 space-y-5">
        <div className="berfest-card p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="berfest-icon-crimson w-9 h-9">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">
                  Expression Assistant Simulator (Data: SPB_DATABASE)
                </h3>
                <p className="text-xs text-slate-500">
                  Konteks rekod semasa: <strong className="text-slate-700">{sampleRow.LoanID || 'LN001'}</strong> (Status: {sampleRow.Status || 'Pending'})
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200">
              <User className="w-3.5 h-3.5 text-orange-600" />
              <select
                value={activeEmail}
                onChange={(e) => {
                  setActiveEmail(e.target.value);
                  runFormula(formula, e.target.value);
                }}
                className="bg-transparent text-xs font-bold text-orange-900 focus:outline-none"
              >
                {db.USERS.map((u) => (
                  <option key={u.UserID} value={u.Email}>
                    {u.Email} ({u.Role})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#16181D]">
            <div className="px-4 py-2 bg-[#1E2128] text-[11px] font-bold text-slate-300 flex items-center justify-between">
              <span>Taip AppSheet Expression anda di sini:</span>
              <span className="text-amber-300 font-mono">USEREMAIL(), SELECT(), LOOKUP(), IF(), COUNT(), SUM()</span>
            </div>
            <textarea
              rows={4}
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              className="w-full bg-transparent p-4 font-mono text-sm text-amber-200 focus:outline-none resize-y"
              placeholder='Contoh: LOOKUP(USEREMAIL(), "USERS", "Email", "Role")'
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {['UNIQUEID()', 'TODAY()', 'USEREMAIL()', 'FILTER("LOANS", [Status] = "Pending")'].map(
                (quick) => (
                  <button
                    key={quick}
                    onClick={() => {
                      setFormula(quick);
                      runFormula(quick, activeEmail);
                    }}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-100 hover:bg-orange-100 text-slate-700 hover:text-orange-800 transition"
                  >
                    {quick}
                  </button>
                )
              )}
            </div>
            <button onClick={() => runFormula()} className="btn-berfest py-2.5 px-6 text-xs sm:text-sm">
              <Play className="w-4 h-4" />
              <span>Jalankan Formula</span>
            </button>
          </div>

          {/* Result Panel */}
          <div
            className={`rounded-2xl p-5 border ${
              output.ok
                ? 'bg-emerald-50/80 border-emerald-200'
                : 'bg-red-50/80 border-red-200'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider mb-2">
              {output.ok ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-800">Hasil Penilaian Expression (Sah)</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="text-red-800">Ralat Sintaks / Penilaian</span>
                </>
              )}
            </div>
            {output.ok ? (
              <div className="font-mono text-sm sm:text-base font-bold text-slate-900 bg-white rounded-xl p-3.5 border border-emerald-200/80 break-all">
                {Array.isArray(output.result)
                  ? output.result.length > 0
                    ? `[ ${output.result.map((v) => `"${v}"`).join(', ')} ]`
                    : '[ ] (Senarai Kosong)'
                  : String(output.result)}
              </div>
            ) : (
              <p className="text-xs sm:text-sm font-medium text-red-900">{output.error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
