import React, { useState } from 'react';
import {
  Check,
  ClipboardCopy,
  Database,
  Download,
  FileSpreadsheet,
  GitBranch,
  Plus,
  RotateCcw,
  Table2,
  Trash2,
} from 'lucide-react';
import { spbSchema, fbmsSampleDatabase } from '../data/practicalProject';
import {
  copyTableForGoogleSheets,
  downloadTableCsv,
  downloadWorkbookXlsx,
} from '../utils/exportExcel';

export default function SpbDatabaseSandbox({ db, onUpdateDb, onResetDb }) {
  const tableNames = Object.keys(db);
  const [activeTable, setActiveTable] = useState('ITEMS');
  const [showSchema, setShowSchema] = useState(true);
  const [copiedTable, setCopiedTable] = useState(false);
  const [addingRow, setAddingRow] = useState(false);
  const [newRowData, setNewRowData] = useState({});

  const rows = db[activeTable] || [];
  const schemaDef = spbSchema.find((s) => s.table === activeTable);
  const columns = rows.length > 0 ? Object.keys(rows[0]) : schemaDef?.columns.map((c) => c.name) || [];

  const handleCopyTsv = async () => {
    const ok = await copyTableForGoogleSheets(rows);
    if (ok) {
      setCopiedTable(true);
      setTimeout(() => setCopiedTable(false), 2000);
    }
  };

  const startAddRow = () => {
    const template = {};
    columns.forEach((col, i) => {
      if (i === 0) {
        const prefix = activeTable.slice(0, 3).toUpperCase();
        template[col] = `${prefix}${String(rows.length + 1).padStart(3, '0')}`;
      } else if (col === 'IsActive') {
        template[col] = 'TRUE';
      } else if (col === 'ItemStatus') {
        template[col] = 'Available';
      } else if (col === 'Condition' || col === 'ItemCondition') {
        template[col] = 'Baik';
      } else if (col === 'Status') {
        template[col] = 'Pending';
      } else if (col === 'TotalQty' || col === 'Quantity' || col === 'ReturnQty') {
        template[col] = 1;
      } else if (col.toLowerCase().includes('date')) {
        template[col] = new Date().toISOString().slice(0, 10);
      } else {
        template[col] = '';
      }
    });
    setNewRowData(template);
    setAddingRow(true);
  };

  const handleSaveNewRow = (e) => {
    e.preventDefault();
    const cleaned = { ...newRowData };
    ['TotalQty', 'Quantity', 'ReturnQty'].forEach((numCol) => {
      if (cleaned[numCol] !== undefined) cleaned[numCol] = Number(cleaned[numCol]) || 1;
    });
    onUpdateDb({
      ...db,
      [activeTable]: [...rows, cleaned],
    });
    setAddingRow(false);
  };

  const handleDeleteRow = (rowIndex) => {
    onUpdateDb({
      ...db,
      [activeTable]: rows.filter((_, i) => i !== rowIndex),
    });
  };

  const handleEditCell = (rowIndex, colName, value) => {
    const updatedRows = rows.map((row, i) => {
      if (i !== rowIndex) return row;
      const isNum = ['TotalQty', 'Quantity', 'ReturnQty'].includes(colName);
      return { ...row, [colName]: isNum ? Number(value) || 0 : value };
    });
    onUpdateDb({
      ...db,
      [activeTable]: updatedRows,
    });
  };

  return (
    <div className="space-y-6">
      {/* Download Center Strip */}
      <div className="rounded-3xl bg-berfest-gradient p-6 text-white shadow-berfest flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-yellow-200">
            <FileSpreadsheet className="w-4 h-4" />
            <span>Fail Pangkalan Data Sedia Guna (Google Sheets / AppSheet)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold">
            Muat Turun Database &amp; Terus Bina Aplikasi Sebenar
          </h3>
          <p className="text-xs sm:text-sm text-orange-50/90 max-w-2xl">
            Setiap perubahan yang anda buat dalam editor jadual di bawah akan disertakan terus
            apabila anda memuat turun <strong>SPB_DATABASE.xlsx</strong>. Muat naik ke Google Drive
            → Open with Google Sheets → sambung ke AppSheet!
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 flex-shrink-0">
          <button
            onClick={() => downloadWorkbookXlsx(db, 'SPB_DATABASE.xlsx')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-orange-700 font-extrabold text-xs sm:text-sm shadow-md hover:bg-orange-50 transition"
          >
            <Download className="w-4 h-4" />
            <span>Muat Turun SPB_DATABASE.xlsx</span>
          </button>
          <button
            onClick={() => downloadWorkbookXlsx(fbmsSampleDatabase, 'FBMS_DATABASE.xlsx')}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm border border-white/20 transition"
          >
            <Download className="w-4 h-4 text-yellow-300" />
            <span>Bonus: FBMS_DATABASE.xlsx</span>
          </button>
        </div>
      </div>

      {/* Visual ERD Relationships Card */}
      <div className="berfest-card p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="berfest-icon-circle w-9 h-9">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">
                Hubungan Jadual (ERD &amp; Ref AppSheet) — 5 Jadual SPB
              </h4>
              <p className="text-xs text-slate-500">
                Hubungan One-to-Many (1:M) menggunakan Key &amp; Ref seperti Modul 3.9
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowSchema(!showSchema)}
            className="text-xs font-bold text-orange-600 hover:underline"
          >
            {showSchema ? 'Sembunyi Kamus Data' : 'Tunjuk Kamus Data'}
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {spbSchema.map((tbl) => (
            <button
              key={tbl.table}
              onClick={() => setActiveTable(tbl.table)}
              className={`text-left p-4 rounded-2xl border transition-all ${
                activeTable === tbl.table
                  ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-200 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-orange-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-xs text-slate-900">{tbl.table}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-orange-800">
                  {(db[tbl.table] || []).length} rekod
                </span>
              </div>
              <div className="mt-2 space-y-1 text-[11px] text-slate-600">
                <div>
                  <span className="font-bold text-amber-700">KEY:</span> {tbl.key}
                </div>
                <div>
                  <span className="font-bold text-slate-700">LABEL:</span> {tbl.label}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 p-3.5 rounded-2xl bg-slate-900 text-amber-200 font-mono text-xs overflow-x-auto">
          USERS (1) ──[UserID]──▶ (M) LOANS (1) ──[LoanID]──▶ (M) LOAN_RETURNS &amp; APPROVALS &nbsp;|&nbsp; ITEMS (1) ──[ItemID]──▶ (M) LOANS
        </div>
      </div>

      {/* Schema Dictionary for Selected Table */}
      {showSchema && schemaDef && (
        <div className="berfest-card p-6">
          <div className="mb-3">
            <h4 className="font-extrabold text-slate-900 text-base">
              Kamus Data &amp; Konfigurasi AppSheet: Table {schemaDef.table}
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">{schemaDef.purpose}</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-orange-100">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-3.5 py-2.5 font-bold">Column</th>
                  <th className="px-3.5 py-2.5 font-bold">Data Type</th>
                  <th className="px-3.5 py-2.5 font-bold">Tetapan AppSheet</th>
                  <th className="px-3.5 py-2.5 font-bold">Kegunaan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100/70 bg-white">
                {schemaDef.columns.map((c, i) => (
                  <tr key={i} className="hover:bg-orange-50/40">
                    <td className="px-3.5 py-2 font-mono font-bold text-slate-900 whitespace-nowrap">
                      {c.name}
                    </td>
                    <td className="px-3.5 py-2">
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-orange-100 text-orange-800 whitespace-nowrap">
                        {c.type}
                      </span>
                    </td>
                    <td className="px-3.5 py-2 font-mono text-xs text-slate-700">{c.setting}</td>
                    <td className="px-3.5 py-2 text-slate-600">{c.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Interactive Live Database Editor (CRUD) */}
      <div className="berfest-card p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="berfest-icon-crimson w-9 h-9">
              <Table2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">
                Editor Database Interaktif (Amali CRUD — Table: {activeTable})
              </h4>
              <p className="text-xs text-slate-500">
                Klik mana-mana sel untuk sunting terus, tambah rekod baharu, atau salin ke Google Sheets.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={startAddRow}
              className="btn-berfest py-2 px-4 text-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Rekod</span>
            </button>
            <button
              onClick={handleCopyTsv}
              className="btn-berfest-outline py-2 px-3.5 text-xs"
            >
              {copiedTable ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <ClipboardCopy className="w-3.5 h-3.5" />
              )}
              <span>{copiedTable ? 'Disalin! Tampal di Sheets' : 'Salin ke Google Sheets'}</span>
            </button>
            <button
              onClick={() => downloadTableCsv(rows, activeTable)}
              className="btn-berfest-outline py-2 px-3.5 text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CSV</span>
            </button>
            <button
              onClick={onResetDb}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-red-700 bg-slate-100 hover:bg-red-50 transition"
              title="Set semula data sampel asal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Table Tabs */}
        <div className="flex flex-wrap gap-1.5 pb-1 border-b border-orange-100">
          {tableNames.map((tName) => (
            <button
              key={tName}
              onClick={() => {
                setActiveTable(tName);
                setAddingRow(false);
              }}
              className={`px-4 py-2 rounded-t-xl text-xs font-extrabold transition ${
                activeTable === tName
                  ? 'bg-berfest-gradient-h text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-700'
              }`}
            >
              <Database className="w-3 h-3 inline mr-1.5" />
              {tName} ({db[tName].length})
            </button>
          ))}
        </div>

        {/* Add New Row Form */}
        {addingRow && (
          <form
            onSubmit={handleSaveNewRow}
            className="rounded-2xl bg-orange-50/70 border border-orange-200 p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-extrabold uppercase tracking-wider text-orange-800">
                Tambah Rekod Baharu ke {activeTable}
              </h5>
              <button
                type="button"
                onClick={() => setAddingRow(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                Batal
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {columns.map((col) => (
                <div key={col}>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">{col}</label>
                  <input
                    type={['TotalQty', 'Quantity', 'ReturnQty'].includes(col) ? 'number' : 'text'}
                    value={newRowData[col] ?? ''}
                    onChange={(e) =>
                      setNewRowData((prev) => ({ ...prev, [col]: e.target.value }))
                    }
                    className="w-full rounded-xl border border-orange-200 bg-white px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="btn-berfest py-2 px-5 text-xs">
                Simpan Rekod ke {activeTable}
              </button>
            </div>
          </form>
        )}

        {/* Editable Spreadsheet Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-3 py-2.5 w-10 text-center">#</th>
                {columns.map((col) => (
                  <th key={col} className="px-3 py-2.5 font-mono font-bold whitespace-nowrap">
                    {col}
                  </th>
                ))}
                <th className="px-3 py-2.5 text-center">Padam</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-orange-50/40">
                  <td className="px-3 py-2 text-center font-bold text-slate-400">{rIdx + 1}</td>
                  {columns.map((col) => (
                    <td key={col} className="px-2 py-1.5 min-w-[110px]">
                      <input
                        type="text"
                        value={row[col] ?? ''}
                        onChange={(e) => handleEditCell(rIdx, col, e.target.value)}
                        className="w-full bg-transparent hover:bg-white focus:bg-white px-2 py-1 rounded-lg border border-transparent hover:border-orange-200 focus:border-orange-400 focus:outline-none text-xs text-slate-800"
                      />
                    </td>
                  ))}
                  <td className="px-3 py-2 text-center">
                    <button
                      onClick={() => handleDeleteRow(rIdx)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                      title="Padam baris ini"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
