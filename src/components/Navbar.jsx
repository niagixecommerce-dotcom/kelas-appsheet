import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Layers,
  Home,
  Search,
  X,
  CheckCircle2,
  Database,
  Sparkles,
  ArrowRight,
  Menu,
} from 'lucide-react';
import { BerfestLogo } from './BrandDecoration';
import { modules } from '../data/modules';

export default function Navbar({
  activeView,
  activeModuleId,
  onNavigate,
  completedModules,
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const progressPct = Math.round((completedModules.length / modules.length) * 100);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q || q.length < 2) return [];
    const results = [];
    modules.forEach((mod) => {
      mod.sections.forEach((sec) => {
        const textBlob = [
          mod.title,
          sec.title,
          ...sec.blocks.map((b) => {
            if (b.text) return b.text;
            if (b.code) return b.code;
            if (b.items)
              return b.items
                .map((it) => (typeof it === 'string' ? it : `${it.text} ${(it.subitems || []).join(' ')}`))
                .join(' ');
            if (b.rows) return b.rows.flat().join(' ');
            return '';
          }),
        ]
          .join(' ')
          .toLowerCase();
        if (textBlob.includes(q)) {
          results.push({
            moduleId: mod.id,
            moduleCode: mod.code,
            moduleTitle: mod.shortTitle,
            sectionId: sec.id,
            sectionTitle: sec.title,
          });
        }
      });
    });
    return results.slice(0, 14);
  }, [searchQuery]);

  const navItems = [
    { id: 'home', label: 'Utama', icon: Home },
    { id: 'module', label: 'Nota 9 Modul', icon: BookOpen },
    { id: 'practical', label: 'Projek Pinjaman Barang', icon: Layers, highlight: true },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-100/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group"
          >
            <BerfestLogo size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-none">
                  AppSheet<span className="text-berfest-gradient">Studio</span>
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
                  No-Code Academy
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block mt-0.5">
                Beginner to Application Developer • 9 Modul + Projek SPB
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-orange-50/70 p-1 rounded-full border border-orange-100">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() =>
                    item.id === 'module'
                      ? onNavigate('module', activeModuleId || 1)
                      : onNavigate(item.id)
                  }
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-berfest-gradient-h text-white shadow-sm'
                      : item.highlight
                      ? 'text-orange-800 hover:bg-orange-100/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.highlight && !isActive && (
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2.5">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 text-slate-600 hover:text-orange-700 text-xs font-semibold transition-all"
              title="Cari dalam semua 9 modul"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Cari Nota & Formula...</span>
            </button>

            {/* Progress pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-orange-100 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-600" />
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-2 text-[10px] font-bold text-slate-700 leading-none">
                  <span>Kemajuan</span>
                  <span className="text-orange-600">{progressPct}%</span>
                </div>
                <div className="w-16 h-1.5 bg-orange-100 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-berfest-gradient-h rounded-full transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-orange-50 text-orange-700 border border-orange-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-orange-100 bg-white px-4 py-3 space-y-2 shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    item.id === 'module'
                      ? onNavigate('module', activeModuleId || 1)
                      : onNavigate(item.id);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-semibold ${
                    isActive
                      ? 'bg-berfest-gradient-h text-white'
                      : 'text-slate-700 hover:bg-orange-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 px-2">
              <span>Kemajuan Pembelajaran</span>
              <span className="font-bold text-orange-600">
                {completedModules.length} / {modules.length} Modul ({progressPct}%)
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-start justify-center pt-16 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-berfest-lg border border-orange-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-orange-100 bg-berfest-gradient-soft">
              <Search className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari topik, formula (cth: UNIQUEID, LOOKUP, Security Filter, Slice, Bot)..."
                className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-full hover:bg-white text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto p-3">
              {searchQuery.trim().length < 2 ? (
                <div className="p-5 text-center space-y-3">
                  <Sparkles className="w-7 h-7 text-orange-500 mx-auto" />
                  <p className="text-sm font-semibold text-slate-700">
                    Carian Pantas Merentas Kesemua 9 Modul (132 Muka Surat)
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['UNIQUEID()', 'Security Filter', 'SELECT()', 'Grouped Action', 'Dashboard', 'Ref', 'Automation Monitor'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-sm text-slate-500">
                  Tiada padanan ditemui untuk &ldquo;{searchQuery}&rdquo;. Cuba kata kunci lain.
                </div>
              ) : (
                <div className="space-y-1.5">
                  {searchResults.map((res, idx) => (
                    <button
                      key={`${res.moduleId}-${res.sectionId}-${idx}`}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                        onNavigate('module', res.moduleId, res.sectionId);
                      }}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl hover:bg-orange-50/80 text-left transition-colors group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
                            {res.moduleCode}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {res.moduleTitle}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-slate-800 mt-1 group-hover:text-orange-700">
                          {res.sectionTitle}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-orange-500" />
                Termasuk projek praktikal Sistem Pinjaman Barang
              </span>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  onNavigate('practical');
                }}
                className="font-bold text-orange-600 hover:underline"
              >
                Buka Projek SPB →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
