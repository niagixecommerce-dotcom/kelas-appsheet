import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  Copy,
  ExternalLink,
  HelpCircle,
  Info,
  Lightbulb,
  ListChecks,
  RotateCcw,
  ShieldAlert,
  Square,
  Layers,
} from 'lucide-react';
import { modules } from '../data/modules';

function CodeBlock({ title, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <div className="my-4 rounded-2xl overflow-hidden border border-slate-800/80 shadow-md bg-[#16181D]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1E2128] border-b border-slate-700/70">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-bold text-slate-300 ml-1.5">
            {title || 'AppSheet Expression / Konfigurasi'}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-orange-500/80 text-[11px] font-semibold text-slate-200 hover:text-white transition"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Disalin!' : 'Salin'}</span>
        </button>
      </div>
      <pre className="p-4 text-xs sm:text-sm font-mono text-amber-200 overflow-x-auto leading-relaxed whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
}

function OpenQuizBlock({ intro, questions, moduleId }) {
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});

  useEffect(() => {
    setAnswers({});
    setRevealed({});
  }, [moduleId]);

  return (
    <div className="space-y-4 my-4">
      {intro && <p className="text-sm font-semibold text-slate-700">{intro}</p>}
      {questions.map((item, idx) => {
        const isShown = !!revealed[idx];
        return (
          <div
            key={idx}
            className="rounded-2xl border border-orange-100 bg-orange-50/30 p-4 sm:p-5 space-y-3"
          >
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-berfest-gradient-h text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="font-bold text-slate-900 text-sm sm:text-base">{item.q}</p>
            </div>
            <textarea
              rows={2}
              value={answers[idx] || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [idx]: e.target.value }))}
              placeholder="Taip jawapan latihan anda di sini untuk latihan kendiri..."
              className="w-full rounded-xl border border-orange-200/80 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="flex items-center justify-between">
              <button
                onClick={() => setRevealed((prev) => ({ ...prev, [idx]: !prev[idx] }))}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 hover:text-red-700"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{isShown ? 'Sembunyikan Panduan Jawapan' : 'Semak Panduan Jawapan'}</span>
              </button>
              {answers[idx]?.trim().length > 5 && (
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Dicatat
                </span>
              )}
            </div>
            {isShown && (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                <span className="font-extrabold text-emerald-800 block mb-1">
                  Panduan Jawapan (Mengikut Nota):
                </span>
                {item.guide}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function McqQuizBlock({ questions, moduleId }) {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelected({});
    setSubmitted(false);
  }, [moduleId]);

  const totalAnswered = Object.keys(selected).length;
  const correctCount = questions.reduce(
    (acc, q) => (selected[q.number] === q.answer ? acc + 1 : acc),
    0
  );

  return (
    <div className="space-y-4 my-4">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-berfest-gradient-soft border border-orange-200 rounded-2xl p-4">
        <div>
          <h4 className="font-extrabold text-slate-900 text-sm">
            Kuiz Interaktif Pengukuhan ({questions.length} Soalan)
          </h4>
          <p className="text-xs text-slate-600 mt-0.5">
            Pilih jawapan yang paling tepat dan tekan &ldquo;Semak Markah&rdquo;.
          </p>
        </div>
        {submitted && (
          <div className="flex items-center gap-2">
            <span className="px-4 py-1.5 rounded-full bg-berfest-gradient-h text-white text-sm font-extrabold shadow-sm">
              Skor: {correctCount} / {questions.length} (
              {Math.round((correctCount / questions.length) * 100)}%)
            </span>
            <button
              onClick={() => {
                setSelected({});
                setSubmitted(false);
              }}
              className="p-2 rounded-full bg-white border border-orange-200 text-orange-700 hover:bg-orange-50"
              title="Ulang kuiz"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {questions.map((q) => {
        const userAns = selected[q.number];
        return (
          <div
            key={q.number}
            className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm space-y-3"
          >
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                {q.number}
              </span>
              <p className="font-bold text-slate-900 text-sm sm:text-base">{q.q}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5 pl-0 sm:pl-10">
              {q.options.map((opt) => {
                const isPicked = userAns === opt.key;
                const isCorrect = opt.key === q.answer;
                let style =
                  'border-slate-200 bg-slate-50/70 hover:bg-orange-50/70 hover:border-orange-300 text-slate-800';
                if (!submitted && isPicked) {
                  style = 'border-orange-500 bg-orange-50 text-orange-950 ring-2 ring-orange-200';
                } else if (submitted && isCorrect) {
                  style = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-300';
                } else if (submitted && isPicked && !isCorrect) {
                  style = 'border-red-400 bg-red-50 text-red-900';
                }

                return (
                  <button
                    key={opt.key}
                    disabled={submitted}
                    onClick={() =>
                      setSelected((prev) => ({ ...prev, [q.number]: opt.key }))
                    }
                    className={`flex items-start gap-2.5 text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${style}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                        submitted && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : submitted && isPicked && !isCorrect
                          ? 'bg-red-600 text-white'
                          : isPicked
                          ? 'bg-orange-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <span className="pt-0.5">{opt.text}</span>
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div
                className={`ml-0 sm:ml-10 rounded-xl p-3 text-xs leading-relaxed ${
                  userAns === q.answer
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                    : 'bg-amber-50 border border-amber-200 text-amber-950'
                }`}
              >
                <span className="font-extrabold">
                  {userAns === q.answer ? '✓ Tepat! ' : `✗ Jawapan Tepat: ${q.answer}. `}
                </span>
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {!submitted && (
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-500 font-medium">
            Dijawab: {totalAnswered} / {questions.length} soalan
          </span>
          <button
            onClick={() => setSubmitted(true)}
            disabled={totalAnswered === 0}
            className="btn-berfest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Semak Markah Kuiz</span>
          </button>
        </div>
      )}
    </div>
  );
}

function InteractiveChecklist({ id, intro, groups }) {
  const storageKey = `appsheet_checklist_${id}`;
  const [checked, setChecked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch {
      return {};
    }
  });

  const toggle = (key) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const totalItems = groups.reduce((s, g) => s + g.items.length, 0);
  const doneItems = Object.values(checked).filter(Boolean).length;
  const pct = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <div className="my-4 space-y-4">
      <div className="rounded-2xl bg-berfest-gradient-soft border border-orange-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <ListChecks className="w-4 h-4 text-orange-600" />
            {intro || 'Tandakan setiap perkara selepas selesai:'}
          </p>
          <p className="text-xs text-slate-600 mt-0.5">
            Kemajuan senarai semak disimpan automatik dalam pelayar anda.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-28 h-2 bg-orange-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-berfest-gradient-h transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-extrabold text-orange-700">
            {doneItems}/{totalItems} ({pct}%)
          </span>
        </div>
      </div>

      {groups.map((group, gIdx) => (
        <div key={gIdx} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
          {group.title && (
            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-xs font-extrabold uppercase tracking-wider text-orange-800">
              {group.title}
            </div>
          )}
          <div className="divide-y divide-slate-100">
            {group.items.map((item, iIdx) => {
              const key = `${gIdx}-${iIdx}`;
              const isChecked = !!checked[key];
              return (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                    isChecked ? 'bg-emerald-50/50 text-slate-500 line-through' : 'hover:bg-orange-50/40 text-slate-800'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <Square className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  )}
                  <span className="font-medium">{item}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderBlock(block, idx, moduleId) {
  switch (block.type) {
    case 'p':
      return (
        <p key={idx} className="text-sm sm:text-[15px] text-slate-700 leading-relaxed my-2.5">
          {block.text}
        </p>
      );
    case 'subheading':
      return (
        <h4
          key={idx}
          className="text-base sm:text-lg font-extrabold text-slate-900 mt-6 mb-2.5 flex items-center gap-2"
        >
          <span className="w-1.5 h-5 rounded-full bg-berfest-gradient flex-shrink-0" />
          <span>{block.text}</span>
        </h4>
      );
    case 'label':
      return (
        <p key={idx} className="text-sm font-extrabold text-slate-800 mt-4 mb-1.5">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={idx} className="my-2.5 space-y-1.5 pl-1">
          {block.items.map((item, i) => {
            const text = typeof item === 'string' ? item : item.text;
            const subitems = typeof item === 'object' ? item.subitems : null;
            return (
              <li key={i} className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span>{text}</span>
                </div>
                {subitems && (
                  <ul className="pl-7 mt-1.5 space-y-1">
                    {subitems.map((sub, si) => (
                      <li key={si} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full border border-orange-500 mt-2 flex-shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="my-2.5 space-y-2 pl-1">
          {block.items.map((item, i) => {
            const text = typeof item === 'string' ? item : item.text;
            const subitems = typeof item === 'object' ? item.subitems : null;
            return (
              <li key={i} className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{text}</span>
                </div>
                {subitems && (
                  <ul className="pl-11 mt-1.5 space-y-1">
                    {subitems.map((sub, si) => (
                      <li key={si} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      );
    case 'code':
      return <CodeBlock key={idx} title={block.title} code={block.code} />;
    case 'table':
      return (
        <div key={idx} className="my-4 rounded-2xl border border-orange-100 overflow-hidden shadow-sm">
          {block.title && (
            <div className="px-4 py-2.5 bg-berfest-gradient-soft border-b border-orange-100 text-xs font-extrabold text-orange-900">
              {block.title}
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {block.headers.map((h, hi) => (
                    <th key={hi} className="px-4 py-2.5 font-bold whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100/70 bg-white">
                {block.rows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={block.headers.length}
                      className="px-4 py-2.5 text-xs text-slate-400 italic"
                    >
                      (Baris pertama jadual — Header Column)
                    </td>
                  </tr>
                ) : (
                  block.rows.map((row, ri) => (
                    <tr key={ri} className="hover:bg-orange-50/40 transition-colors">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-2.5 text-slate-700 ${
                            ci === 0 ? 'font-bold text-slate-900' : ''
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
    case 'callout': {
      const styles = {
        important: {
          box: 'bg-red-50/90 border-red-200 text-red-950',
          iconBg: 'bg-red-600 text-white',
          Icon: ShieldAlert,
        },
        warning: {
          box: 'bg-amber-50/90 border-amber-200 text-amber-950',
          iconBg: 'bg-amber-500 text-white',
          Icon: AlertTriangle,
        },
        tip: {
          box: 'bg-orange-50/90 border-orange-200 text-orange-950',
          iconBg: 'bg-berfest-gradient text-white',
          Icon: Lightbulb,
        },
        note: {
          box: 'bg-slate-50 border-slate-200 text-slate-800',
          iconBg: 'bg-slate-700 text-white',
          Icon: Info,
        },
      };
      const cfg = styles[block.variant] || styles.note;
      const Icon = cfg.Icon;
      return (
        <div
          key={idx}
          className={`my-4 rounded-2xl border p-4 sm:p-5 flex items-start gap-3.5 ${cfg.box}`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${cfg.iconBg}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div className="space-y-1.5 text-sm leading-relaxed">
            <div className="font-extrabold uppercase tracking-wide text-xs">{block.title}</div>
            {block.text && <p>{block.text}</p>}
            {block.items && (
              <ul className="space-y-1 pt-1">
                {block.items.map((it, ii) => (
                  <li key={ii} className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    }
    case 'links':
      return (
        <div key={idx} className="my-4 flex flex-wrap gap-2.5">
          {block.items.map((lk, li) => (
            <a
              key={li}
              href={lk.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 hover:border-orange-400 hover:bg-orange-50 text-xs sm:text-sm font-bold text-orange-700 shadow-sm transition"
            >
              <span>{lk.label}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      );
    case 'quiz_open':
      return (
        <OpenQuizBlock
          key={idx}
          intro={block.intro}
          questions={block.questions}
          moduleId={moduleId}
        />
      );
    case 'quiz_mcq':
      return <McqQuizBlock key={idx} questions={block.questions} moduleId={moduleId} />;
    case 'checklist':
      return (
        <InteractiveChecklist
          key={idx}
          id={block.id}
          intro={block.intro}
          groups={block.groups}
        />
      );
    default:
      return null;
  }
}

export default function ModuleViewer({
  moduleId,
  targetSectionId,
  onSelectModule,
  onOpenPractical,
  completedModules,
  onToggleComplete,
}) {
  const currentModule = modules.find((m) => m.id === moduleId) || modules[0];
  const isCompleted = completedModules.includes(currentModule.id);
  const prevModule = modules.find((m) => m.id === currentModule.id - 1);
  const nextModule = modules.find((m) => m.id === currentModule.id + 1);

  useEffect(() => {
    if (targetSectionId) {
      const el = document.getElementById(`sec-${targetSectionId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [moduleId, targetSectionId]);

  return (
    <div className="min-h-screen bg-[#FCFCFD] pb-20">
      {/* Top Module Switcher Strip */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {modules.map((m) => {
              const active = m.id === currentModule.id;
              const done = completedModules.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => onSelectModule(m.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    active
                      ? 'bg-berfest-gradient-h text-white shadow-sm'
                      : done
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-orange-50 hover:text-orange-700'
                  }`}
                >
                  {done && <CheckCircle2 className="w-3.5 h-3.5" />}
                  <span>M{m.id}: {m.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Sidebar — Table of Contents */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-4">
            <div className="berfest-card p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600">
                  Isi Kandungan {currentModule.code}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {currentModule.sections.length} topik
                </span>
              </div>
              <nav className="space-y-1 max-h-[55vh] overflow-y-auto pr-1">
                {currentModule.sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#sec-${sec.id}`}
                    className="flex items-start gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-orange-700 hover:bg-orange-50 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{sec.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick CTA to Practical Project */}
            <div className="rounded-3xl bg-berfest-gradient p-5 text-white shadow-berfest">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-yellow-200">
                <Layers className="w-4 h-4" />
                <span>Amali Projek Sebenar</span>
              </div>
              <p className="text-sm font-bold mt-2 leading-snug">
                Sistem Pinjaman Barang (SPB)
              </p>
              <p className="text-xs text-orange-50/90 mt-1 leading-relaxed">
                Praktikkan ilmu {currentModule.code} terus dalam simulator &amp; database SPB.
              </p>
              <button
                onClick={() => onOpenPractical('simulator')}
                className="mt-4 w-full py-2 rounded-full bg-white text-orange-700 font-extrabold text-xs shadow hover:bg-orange-50 transition"
              >
                Buka Makmal Amali →
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-6">
            {/* Module Header Banner */}
            <div className="relative rounded-3xl bg-white border border-orange-100 shadow-berfest p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-berfest-gradient-h" />
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-extrabold text-white bg-berfest-gradient-h shadow-sm">
                    {currentModule.code}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-800 border border-orange-200">
                    {currentModule.level}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                    {currentModule.pages}
                  </span>
                </div>

                <button
                  onClick={() => onToggleComplete(currentModule.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                    isCompleted
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isCompleted ? 'Modul Selesai' : 'Tandakan Selesai'}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {currentModule.code}: {currentModule.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                {currentModule.subtitle}
              </p>
            </div>

            {/* All Module Sections */}
            {currentModule.sections.map((section) => (
              <section
                key={section.id}
                id={`sec-${section.id}`}
                className="scroll-mt-24 berfest-card p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-orange-100/80">
                  <div className="berfest-icon-circle w-9 h-9 text-xs font-extrabold">
                    {section.id}
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                    {section.title}
                  </h2>
                </div>

                <div>
                  {section.blocks.map((block, bIdx) =>
                    renderBlock(block, bIdx, currentModule.id)
                  )}
                </div>
              </section>
            ))}

            {/* Bottom Module Navigation */}
            <div className="berfest-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevModule ? (
                <button
                  onClick={() => onSelectModule(prevModule.id)}
                  className="btn-berfest-outline w-full sm:w-auto text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>
                    {prevModule.code}: {prevModule.shortTitle}
                  </span>
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={() => {
                  if (!isCompleted) onToggleComplete(currentModule.id);
                  if (nextModule) onSelectModule(nextModule.id);
                  else onOpenPractical('guide');
                }}
                className="btn-berfest w-full sm:w-auto text-sm"
              >
                {nextModule ? (
                  <>
                    <span>
                      Selesai &amp; Terus ke {nextModule.code}: {nextModule.shortTitle}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4" />
                    <span>Tamat Modul 9 — Mula Projek Sistem Pinjaman Barang</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
