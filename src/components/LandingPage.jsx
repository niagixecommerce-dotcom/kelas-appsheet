import React from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Database,
  Download,
  Layers,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  FileSpreadsheet,
  Award,
  Clock,
} from 'lucide-react';
import { courseInfo, modules } from '../data/modules';
import { initialSpbDatabase, fbmsSampleDatabase } from '../data/practicalProject';
import { downloadWorkbookXlsx } from '../utils/exportExcel';
import { CornerBlob, HeroOrganicWave } from './BrandDecoration';

export default function LandingPage({
  onOpenModule,
  onOpenPractical,
  completedModules,
}) {
  const progressPct = Math.round((completedModules.length / modules.length) * 100);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION — Berfest Inspired Clean White + Organic Warm Gradient Wave & Phone Mockup */}
      <section className="relative overflow-hidden bg-white pt-10 pb-24 sm:pt-14 sm:pb-32">
        {/* Top-right organic gradient shape */}
        <CornerBlob position="top-right" className="w-[420px] h-[420px] opacity-20" />

        {/* Bottom signature Berfest wave */}
        <div className="absolute bottom-0 inset-x-0 h-44 sm:h-56 opacity-95 pointer-events-none">
          <HeroOrganicWave />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-berfest-gradient" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-800">
                  {courseInfo.category} • {courseInfo.level}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Platform Lengkap{' '}
                <span className="text-berfest-gradient">Google AppSheet</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mt-2">
                  From Beginner to Application Developer
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Ikuti <strong>100% kandungan rasmi 9 modul lengkap (132 muka surat)</strong> tanpa
                satu pun topik tertinggal — dilengkapi{' '}
                <strong className="text-slate-900">
                  Projek Praktikal Sebenar Sistem Pinjaman Barang (SPB)
                </strong>
                , fail pangkalan data sedia guna, simulator aplikasi interaktif dan makmal formula.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenModule(completedModules.length > 0 && completedModules.length < 9 ? completedModules.length + 1 : 1)}
                  className="btn-berfest text-sm sm:text-base px-7 py-3.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>
                    {completedModules.length > 0 ? 'Sambung Belajar Nota' : 'Mula Modul 1 Sekarang'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenPractical('simulator')}
                  className="btn-berfest-outline text-sm sm:text-base px-6 py-3.5"
                >
                  <PlayCircle className="w-4 h-4 text-orange-600" />
                  <span>Buka Amali Sistem Pinjaman Barang</span>
                </button>
              </div>

              {/* Key Stats Floating Strip (Berfest Card style) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {[
                  { value: '9 Modul', label: '100% Nota Lengkap', accent: 'from-amber-400 to-orange-500' },
                  { value: '132 M/S', label: 'Tiada Tertinggal', accent: 'from-orange-500 to-red-600' },
                  { value: '5 Jadual', label: 'Database SPB Sebenar', accent: 'from-red-600 to-red-800' },
                  { value: `${progressPct}%`, label: 'Kemajuan Anda', accent: 'from-amber-500 to-red-600' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/95 backdrop-blur rounded-2xl p-3.5 border border-orange-100 shadow-berfest-card"
                  >
                    <div
                      className={`text-xl sm:text-2xl font-extrabold bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual — Berfest Style Phone + Floating Cards Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              {/* Warm Gradient Organic Circle Behind Phone */}
              <div
                className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full shadow-berfest-lg"
                style={{
                  background:
                    'linear-gradient(145deg, #FACC15 0%, #F97316 48%, #B91C1C 100%)',
                }}
              />

              {/* Phone Device Mockup (inspired by Berfest "Phone device slide") */}
              <div className="relative z-10 w-[268px] sm:w-[290px] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800">
                <div className="w-24 h-5 bg-slate-900 rounded-b-2xl mx-auto absolute top-3 left-1/2 -translate-x-1/2 z-20" />
                <div className="bg-[#FCFCFD] rounded-[30px] overflow-hidden">
                  {/* App Header */}
                  <div className="bg-berfest-gradient px-4 pt-8 pb-4 text-white">
                    <div className="flex items-center justify-between text-[10px] font-semibold opacity-90">
                      <span>SPB APPSHEET</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/20">Live Demo</span>
                    </div>
                    <h3 className="font-extrabold text-base mt-1">Sistem Pinjaman Barang</h3>
                    <p className="text-[11px] text-orange-50/90">Google Sheets → AppSheet</p>
                  </div>

                  {/* App Body Preview */}
                  <div className="p-3.5 space-y-2.5">
                    <div className="grid grid-cols-3 gap-1.5 text-center">
                      <div className="bg-amber-50 border border-amber-200/70 rounded-xl p-2">
                        <div className="text-sm font-extrabold text-amber-700">6</div>
                        <div className="text-[9px] font-bold text-amber-800">Aset</div>
                      </div>
                      <div className="bg-orange-50 border border-orange-200/70 rounded-xl p-2">
                        <div className="text-sm font-extrabold text-orange-700">1</div>
                        <div className="text-[9px] font-bold text-orange-800">Pending</div>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200/70 rounded-xl p-2">
                        <div className="text-sm font-extrabold text-emerald-700">28</div>
                        <div className="text-[9px] font-bold text-emerald-800">Unit Baki</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: 'Projektor LCD Epson', qty: 'Baki: 5 unit', status: 'Pending', color: 'bg-amber-100 text-amber-800' },
                        { name: 'Laptop Dell Latitude', qty: 'Baki: 6 unit', status: 'Borrowed', color: 'bg-orange-100 text-orange-800' },
                        { name: 'Kamera DSLR Canon', qty: 'Baki: 3 unit', status: 'Returned', color: 'bg-emerald-100 text-emerald-800' },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-sm flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold text-slate-800 truncate">{item.name}</p>
                            <p className="text-[10px] text-slate-500">{item.qty}</p>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold flex-shrink-0 ${item.color}`}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenPractical('simulator')}
                      className="w-full py-2 rounded-xl bg-berfest-gradient-h text-white text-xs font-bold shadow-sm hover:brightness-105 transition"
                    >
                      Cuba Simulator Interaktif →
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Pill Card Top Left */}
              <div className="hidden sm:flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 shadow-berfest border border-orange-100 absolute -left-4 top-10 z-20">
                <div className="berfest-icon-circle w-9 h-9">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">SPB_DATABASE.xlsx</p>
                  <p className="text-[10px] text-slate-500">5 Jadual Sedia Muat Turun</p>
                </div>
              </div>

              {/* Floating Pill Card Bottom Right */}
              <div className="hidden sm:flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 shadow-berfest border border-orange-100 absolute -right-2 bottom-8 z-20">
                <div className="berfest-icon-crimson w-9 h-9">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Automation & Role</p>
                  <p className="text-[10px] text-slate-500">Bot + Security Filter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL MASTER — Berfest 3-Column Feature Cards ("About our Vision / Service") */}
      <section className="py-16 sm:py-20 bg-[#FCFCFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Ekosistem Pembelajaran Menyeluruh
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Teori 100% Lengkap + Amali Projek Sebenar
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Direka supaya peserta bukan sekadar membaca nota, tetapi terus membina dan menguji
              aplikasi pengurusan sebenar daripada Google Sheets hingga Deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: '100% Nota Rasmi 9 Modul',
                desc: 'Merangkumi kesemua 132 muka surat nota asal termasuk jadual, formula AppSheet sedia salin, kajian kes FBMS, 56+ soalan latihan pengukuhan interaktif dan senarai semak pembangunan.',
                badge: 'Modul 1 – 9',
                action: () => onOpenModule(1),
                cta: 'Terokai Semua Modul',
              },
              {
                icon: FileSpreadsheet,
                title: 'Database Sedia Muat Turun',
                desc: 'Dilengkapi SPB_DATABASE.xlsx (5 jadual Sistem Pinjaman Barang) dan bonus FBMS_DATABASE.xlsx. Boleh terus diedit dalam pelayar, disalin ke Google Sheets, atau dimuat turun.',
                badge: 'Excel .xlsx & CSV',
                action: () => onOpenPractical('database'),
                cta: 'Buka Database & Muat Turun',
              },
              {
                icon: Smartphone,
                title: 'Makmal Amali & Simulator',
                desc: 'Uji sendiri aplikasi Sistem Pinjaman Barang secara masa nyata — tukar Role Admin/Approver/User, uji Valid If baki stok, tekan Action kelulusan, pantau Bot Monitor & uji formula!',
                badge: 'Hands-on Sandbox',
                action: () => onOpenPractical('simulator'),
                cta: 'Lancarkan Simulator',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="berfest-card-hover p-7 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-100/70 to-transparent rounded-bl-full pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="berfest-icon-circle w-12 h-12">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-orange-50 text-orange-700 border border-orange-100">
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2.5">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                  <button
                    onClick={card.action}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-600 group-hover:text-red-700 transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9 MODULES CURRICULUM GRID */}
      <section className="py-16 bg-white border-y border-orange-100/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
                Kurikulum Penuh 100% Mengikut Nota
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1.5">
                Peta Pembelajaran 9 Modul AppSheet
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-orange-50/80 px-4 py-2.5 rounded-2xl border border-orange-100">
              <Award className="w-5 h-5 text-orange-600" />
              <div className="text-xs">
                <span className="font-bold text-slate-800">
                  {completedModules.length} daripada {modules.length} modul selesai
                </span>
                <div className="w-36 h-1.5 bg-orange-200/70 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-berfest-gradient-h rounded-full transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => {
              const isDone = completedModules.includes(mod.id);
              return (
                <div
                  key={mod.id}
                  onClick={() => onOpenModule(mod.id)}
                  className={`berfest-card-hover p-6 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                    isDone ? 'ring-2 ring-emerald-400/70 border-emerald-200' : ''
                  }`}
                >
                  {/* Top warm accent strip */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1.5 ${
                      isDone ? 'bg-emerald-500' : 'bg-berfest-gradient-h'
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold text-white bg-berfest-gradient-h shadow-sm">
                        {mod.code}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-slate-400">{mod.pages}</span>
                        {isDone && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-orange-700 transition-colors leading-snug">
                      {mod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {mod.subtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                        {mod.sections.length} Seksyen
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                        {mod.duration}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:translate-x-0.5 transition-transform">
                      Buka <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL PRACTICAL PROJECT SHOWCASE — Berfest Warm Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[36px] bg-berfest-gradient p-8 sm:p-12 text-white shadow-berfest-lg overflow-hidden">
          {/* Decorative translucent shapes */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-yellow-300/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-red-950/30 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
                <span>Projek Praktikal Sebenar + Makmal Amali</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Sistem Pinjaman Barang (SPB)
                <span className="block text-yellow-200 text-xl sm:text-2xl font-bold mt-1">
                  Daripada Google Sheets Hingga Aplikasi Siap Guna
                </span>
              </h2>

              <p className="text-orange-50 text-sm sm:text-base leading-relaxed max-w-2xl">
                Aplikasikan kesemua 9 modul dalam membina sistem sebenar organisasi: kawalan baki
                stok automatik menggunakan <code className="bg-black/20 px-1.5 py-0.5 rounded font-mono text-xs">SELECT()</code> &amp;{' '}
                <code className="bg-black/20 px-1.5 py-0.5 rounded font-mono text-xs">SUM()</code>,
                kelulusan satu klik melalui Grouped Actions, notifikasi e-mel Bot automatik,
                rekod pemulangan barang serta kawalan akses Security Filter mengikut Role.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenPractical('guide')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-orange-700 font-extrabold text-sm shadow-lg hover:bg-orange-50 transition"
                >
                  <Layers className="w-4 h-4" />
                  <span>Panduan 8 Fasa &amp; Amali</span>
                </button>
                <button
                  onClick={() => downloadWorkbookXlsx(initialSpbDatabase, 'SPB_DATABASE.xlsx')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white font-bold text-sm border border-white/20 shadow-lg transition"
                >
                  <Download className="w-4 h-4 text-yellow-300" />
                  <span>Muat Turun SPB_DATABASE.xlsx</span>
                </button>
                <button
                  onClick={() => downloadWorkbookXlsx(fbmsSampleDatabase, 'FBMS_DATABASE.xlsx')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 backdrop-blur-sm transition"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Bonus: FBMS_DATABASE.xlsx</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              {[
                { icon: Database, title: '5 Jadual Relasi', sub: 'USERS, ITEMS, LOANS, LOAN_RETURNS, APPROVALS' },
                { icon: Smartphone, title: 'Simulator Langsung', sub: 'Tukar peranan Admin, Approver & User' },
                { icon: Terminal, title: 'Makmal Expressions', sub: 'Uji formula AppSheet terus pada data SPB' },
                { icon: ShieldCheck, title: '10 Test Case UAT', sub: 'Validasi stok, Security Filter & Bot Monitor' },
              ].map((box, idx) => {
                const Icon = box.icon;
                return (
                  <div
                    key={idx}
                    onClick={() =>
                      onOpenPractical(
                        idx === 0 ? 'database' : idx === 1 ? 'simulator' : idx === 2 ? 'lab' : 'guide'
                      )
                    }
                    className="bg-white/95 text-slate-900 rounded-2xl p-4 shadow-lg hover:-translate-y-1 transition cursor-pointer"
                  >
                    <div className="berfest-icon-circle w-9 h-9 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-sm">{box.title}</h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">{box.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
