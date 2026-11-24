import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ModuleViewer from './components/ModuleViewer';
import PracticalProjectPage from './components/PracticalProjectPage';
import { BerfestLogo } from './components/BrandDecoration';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'module' | 'practical'
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [targetSectionId, setTargetSectionId] = useState(null);
  const [practicalTab, setPracticalTab] = useState('guide');

  const [completedModules, setCompletedModules] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('appsheet_completed_modules_v1') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('appsheet_completed_modules_v1', JSON.stringify(completedModules));
    } catch {
      // ignore
    }
  }, [completedModules]);

  const handleNavigate = (view, modId = null, secId = null) => {
    setActiveView(view);
    if (modId) setActiveModuleId(modId);
    setTargetSectionId(secId);
    if (!secId) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModule = (modId, secId = null) => {
    setActiveModuleId(modId);
    setTargetSectionId(secId);
    setActiveView('module');
  };

  const handleOpenPractical = (tab = 'guide') => {
    setPracticalTab(tab);
    setActiveView('practical');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleComplete = (modId) => {
    setCompletedModules((prev) =>
      prev.includes(modId) ? prev.filter((id) => id !== modId) : [...prev, modId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD] text-slate-900">
      <Navbar
        activeView={activeView}
        activeModuleId={activeModuleId}
        onNavigate={handleNavigate}
        completedModules={completedModules}
      />

      <div className="flex-1">
        {activeView === 'home' && (
          <LandingPage
            onOpenModule={handleOpenModule}
            onOpenPractical={handleOpenPractical}
            completedModules={completedModules}
          />
        )}

        {activeView === 'module' && (
          <ModuleViewer
            moduleId={activeModuleId}
            targetSectionId={targetSectionId}
            onSelectModule={(id) => handleOpenModule(id)}
            onOpenPractical={handleOpenPractical}
            completedModules={completedModules}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {activeView === 'practical' && (
          <PracticalProjectPage key={practicalTab} initialTab={practicalTab} />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BerfestLogo size="sm" />
            <div>
              <p className="font-extrabold text-sm text-slate-900">
                AppSheet<span className="text-berfest-gradient">Studio</span> Academy
              </p>
              <p className="text-xs text-slate-500">
                Modul Lengkap Google AppSheet (1–9) &amp; Projek Praktikal Sistem Pinjaman Barang (SPB)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <button onClick={() => handleNavigate('home')} className="hover:text-orange-600">
              Utama
            </button>
            <button onClick={() => handleOpenModule(1)} className="hover:text-orange-600">
              Nota 9 Modul
            </button>
            <button onClick={() => handleOpenPractical('database')} className="hover:text-orange-600">
              Database SPB
            </button>
            <button onClick={() => handleOpenPractical('simulator')} className="hover:text-orange-600">
              Simulator Amali
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
