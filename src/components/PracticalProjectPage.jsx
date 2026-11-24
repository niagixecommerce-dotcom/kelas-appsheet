import React, { useState } from 'react';
import {
  Check,
  CheckSquare,
  Copy,
  Database,
  Download,
  Layers,
  ShieldCheck,
  Smartphone,
  Square,
  Terminal,
  Sparkles,
} from 'lucide-react';
import {
  spbProjectMeta,
  spbPhases,
  spbTestCases,
  initialSpbDatabase,
} from '../data/practicalProject';
import { downloadWorkbookXlsx } from '../utils/exportExcel';
import SpbDatabaseSandbox from './SpbDatabaseSandbox';
import SpbAppSimulator from './SpbAppSimulator';
import ExpressionLab from './ExpressionLab';

function CopyFormulaBox({ label, code }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#16181D] my-3">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1E2128] border-b border-slate-700/70">
        <span className="text-[11px] font-bold text-slate-300">{label}</span>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-orange-500 text-[11px] font-bold text-slate-200 hover:text-white transition"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Disalin!' : 'Salin'}</span>
        </button>
      </div>
      <pre className="p-3.5 text-xs font-mono text-amber-200 overflow-x-auto leading-relaxed whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
}

export default function PracticalProjectPage({ initialTab = 'guide' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [spbDb, setSpbDb] = useState(() => {
    try {
      const saved = localStorage.getItem('appsheet_spb_database_v1');
      return saved ? JSON.parse(saved) : initialSpbDatabase;
    } catch {
      return initialSpbDatabase;
    }
  });

  const [completedPhases, setCompletedPhases] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('appsheet_spb_phases_v1') || '[]');
    } catch {
      return [];
    }
  });

  const handleUpdateDb = (nextDb) => {
    setSpbDb(nextDb);
    try {
      localStorage.setItem('appsheet_spb_database_v1', JSON.stringify(nextDb));
    } catch {
      // ignore
    }
  };

  const handleResetDb = () => {
    handleUpdateDb(initialSpbDatabase);
  };

  const togglePhase = (phaseNum) => {
    setCompletedPhases((prev) => {
      const next = prev.includes(phaseNum)
        ? prev.filter((p) => p !== phaseNum)
        : [...prev, phaseNum];
      try {
        localStorage.setItem('appsheet_spb_phases_v1', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const tabs = [
    { id: 'guide', label: 'Panduan 8 Fasa & UAT', icon: Layers },
    { id: 'database', label: 'Database & Muat Turun', icon: Database },
    { id: 'simulator', label: 'Simulator Aplikasi SPB', icon: Smartphone },
    { id: 'lab', label: 'Makmal Expressions', icon: Terminal },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFD] pb-20">
      {/* Header Banner */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-extrabold text-orange-800 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>{spbProjectMeta.code} • Amali Menyeluruh Modul 1–9</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {spbProjectMeta.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                {spbProjectMeta.englishName} — Projek praktikal lengkap dengan 5 jadual database
                sebenar, panduan pembinaan 8 fasa, simulator aplikasi interaktif dan penguji formula.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => downloadWorkbookXlsx(spbDb, 'SPB_DATABASE.xlsx')}
                className="btn-berfest text-xs sm:text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Muat Turun SPB_DATABASE.xlsx</span>
              </button>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 mt-7">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
                    active
                      ? 'bg-berfest-gradient-h text-white shadow-md'
                      : 'bg-orange-50/70 text-slate-700 hover:bg-orange-100 border border-orange-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* TAB 1: PANDUAN 8 FASA & UAT */}
        {activeTab === 'guide' && (
          <div className="space-y-8">
            {/* Project Overview & Problem Statement */}
            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 berfest-card p-6 sm:p-7 space-y-4">
                <h2 className="text-xl font-extrabold text-slate-900">
                  Latar Belakang &amp; Masalah Yang Diselesaikan
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {spbProjectMeta.problemStatement}
                </p>
                <ul className="space-y-2">
                  {spbProjectMeta.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-xs font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 berfest-card p-6 sm:p-7 space-y-4 bg-berfest-gradient-soft border-orange-200">
                <h2 className="text-xl font-extrabold text-slate-900">
                  3 Peranan Pengguna Sistem
                </h2>
                <div className="space-y-3">
                  {spbProjectMeta.roles.map((r) => (
                    <div
                      key={r.role}
                      className="bg-white rounded-2xl p-3.5 border border-orange-100 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-berfest-gradient-h text-white">
                          {r.role}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">{r.email}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Bar for 8 Phases */}
            <div className="berfest-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">
                  Kemajuan Amali Projek Sistem Pinjaman Barang
                </h3>
                <p className="text-xs text-slate-500">
                  Tandakan setiap fasa setelah anda menyiapkannya di Google Sheets &amp; Google AppSheet.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-36 h-2.5 bg-orange-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-berfest-gradient-h transition-all duration-500"
                    style={{ width: `${Math.round((completedPhases.length / spbPhases.length) * 100)}%` }}
                  />
                </div>
                <span className="text-sm font-extrabold text-orange-700">
                  {completedPhases.length}/{spbPhases.length} Fasa
                </span>
              </div>
            </div>

            {/* 8 Detailed Build Phases */}
            <div className="space-y-5">
              {spbPhases.map((phase) => {
                const done = completedPhases.includes(phase.phase);
                return (
                  <div
                    key={phase.phase}
                    className={`berfest-card p-6 sm:p-7 transition-all ${
                      done ? 'border-emerald-300 bg-emerald-50/20' : ''
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-orange-100">
                      <div className="flex items-start gap-3.5">
                        <div className="berfest-icon-circle w-10 h-10 font-extrabold text-sm">
                          F{phase.phase}
                        </div>
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600">
                            {phase.moduleRef}
                          </span>
                          <h3 className="text-lg font-extrabold text-slate-900">{phase.title}</h3>
                          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{phase.summary}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => togglePhase(phase.phase)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold flex-shrink-0 transition ${
                          done
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100'
                        }`}
                      >
                        {done ? (
                          <CheckSquare className="w-4 h-4" />
                        ) : (
                          <Square className="w-4 h-4" />
                        )}
                        <span>{done ? 'Fasa Selesai' : 'Tanda Selesai'}</span>
                      </button>
                    </div>

                    <ol className="space-y-2.5">
                      {phase.steps.map((step, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                        >
                          <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>

                    {phase.formulas.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                          Formula AppSheet Sedia Salin untuk Fasa {phase.phase}:
                        </p>
                        {phase.formulas.map((f, fIdx) => (
                          <CopyFormulaBox key={fIdx} label={f.label} code={f.code} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 10 Test Cases UAT Table */}
            <div className="berfest-card p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="berfest-icon-crimson w-10 h-10">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    10 Test Case UAT Sistem Pinjaman Barang (SPB)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Gunakan jadual ini untuk menguji aplikasi anda sebelum deployment (Modul 9.12–9.13).
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-orange-100">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-4 py-3 font-bold">No.</th>
                      <th className="px-4 py-3 font-bold">Kategori</th>
                      <th className="px-4 py-3 font-bold">Senario Ujian</th>
                      <th className="px-4 py-3 font-bold">Hasil Dijangka</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100/70 bg-white">
                    {spbTestCases.map((tc) => (
                      <tr key={tc.no} className="hover:bg-orange-50/40">
                        <td className="px-4 py-2.5 font-extrabold text-slate-900">{tc.no}</td>
                        <td className="px-4 py-2.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-100 text-orange-800">
                            {tc.category}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 font-semibold text-slate-800">{tc.test}</td>
                        <td className="px-4 py-2.5 text-slate-600">{tc.expected}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DATABASE SANDBOX & MUAT TURUN */}
        {activeTab === 'database' && (
          <SpbDatabaseSandbox
            db={spbDb}
            onUpdateDb={handleUpdateDb}
            onResetDb={handleResetDb}
          />
        )}

        {/* TAB 3: SIMULATOR APLIKASI SPB */}
        {activeTab === 'simulator' && (
          <SpbAppSimulator db={spbDb} onUpdateDb={handleUpdateDb} />
        )}

        {/* TAB 4: MAKMAL EXPRESSIONS */}
        {activeTab === 'lab' && <ExpressionLab db={spbDb} />}
      </div>
    </div>
  );
}
