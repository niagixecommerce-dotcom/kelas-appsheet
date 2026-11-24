import React, { useState, useMemo } from 'react';
import {
  BarChart3,
  Bell,
  Box,
  Check,
  CheckCircle2,
  ClipboardList,
  Mail,
  PackageCheck,
  PlusCircle,
  Send,
  Shield,
  Smartphone,
  UserCheck,
  XCircle,
  AlertTriangle,
} from 'lucide-react';

function getAvailableQty(item, loans) {
  const locked = loans
    .filter((l) => l.ItemID === item.ItemID && (l.Status === 'Approved' || l.Status === 'Borrowed'))
    .reduce((sum, l) => sum + (Number(l.Quantity) || 0), 0);
  return Math.max(0, (Number(item.TotalQty) || 0) - locked);
}

const statusColors = {
  Pending: 'bg-amber-100 text-amber-800 border-amber-200',
  Approved: 'bg-blue-100 text-blue-800 border-blue-200',
  Borrowed: 'bg-orange-100 text-orange-800 border-orange-200',
  Returned: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Rejected: 'bg-red-100 text-red-800 border-red-200',
};

export default function SpbAppSimulator({ db, onUpdateDb }) {
  const [activeEmail, setActiveEmail] = useState(db.USERS[2]?.Email || 'ali@organisasi.edu.my');
  const [phoneTab, setPhoneTab] = useState('catalog'); // catalog | form | loans | dashboard
  const [botLogs, setBotLogs] = useState([
    {
      id: 'BOT-INIT',
      botName: 'Bot Pinjaman Baharu',
      event: 'Data Change: LOANS (Adds)',
      time: '09:15',
      to: 'pegawai@organisasi.edu.my',
      subject: 'Permohonan Pinjaman Barang Baharu [LN001]',
      body: 'Pemohon: ali@organisasi.edu.my | Barang: Projektor LCD Epson EB-X51 (1 unit) | Status: Pending',
      status: 'SUCCESS',
    },
  ]);

  // Loan Form State
  const todayStr = new Date().toISOString().slice(0, 10);
  const [formItemId, setFormItemId] = useState(db.ITEMS[0]?.ItemID || '');
  const [formQty, setFormQty] = useState(1);
  const [formLoanDate, setFormLoanDate] = useState(todayStr);
  const [formDueDate, setFormDueDate] = useState(todayStr);
  const [formPurpose, setFormPurpose] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Reject Modal inline state
  const [rejectingLoanId, setRejectingLoanId] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [rejectErr, setRejectErr] = useState('');

  // Return Modal inline state
  const [returningLoanId, setReturningLoanId] = useState(null);
  const [returnCondition, setReturnCondition] = useState('Baik');
  const [returnRemarks, setReturnRemarks] = useState('');

  const activeUser = useMemo(
    () => db.USERS.find((u) => u.Email === activeEmail) || db.USERS[0],
    [db.USERS, activeEmail]
  );
  const role = activeUser?.Role || 'User';
  const canApprove = role === 'Admin' || role === 'Approver';

  // Simulate Security Filter on LOANS!
  const visibleLoans = useMemo(() => {
    if (canApprove) return db.LOANS;
    return db.LOANS.filter((l) => l.UserEmail === activeEmail);
  }, [db.LOANS, canApprove, activeEmail]);

  const itemMap = useMemo(() => {
    const map = {};
    db.ITEMS.forEach((it) => {
      map[it.ItemID] = it;
    });
    return map;
  }, [db.ITEMS]);

  const pushBotLog = (botName, event, to, subject, body) => {
    const nowTime = new Date().toTimeString().slice(0, 5);
    setBotLogs((prev) => [
      {
        id: `BOT-${Date.now().toString().slice(-4)}`,
        botName,
        event,
        time: nowTime,
        to,
        subject,
        body,
        status: 'SUCCESS',
      },
      ...prev,
    ]);
  };

  // Submit Loan Form (simulates AppSheet Valid If + UNIQUEID + USEREMAIL + Bot 1)
  const handleCreateLoan = (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    const item = itemMap[formItemId];
    if (!item) {
      setFormError('Sila pilih barang yang ingin dipinjam.');
      return;
    }
    const avail = getAvailableQty(item, db.LOANS);
    if (formLoanDate < todayStr) {
      setFormError('Valid If Gagal: [LoanDate] >= TODAY() — Tarikh pinjam tidak boleh pada masa lalu.');
      return;
    }
    if (formDueDate < formLoanDate) {
      setFormError('Valid If Gagal: [DueDate] >= [LoanDate] — Tarikh pulang mesti selepas tarikh pinjam.');
      return;
    }
    if (Number(formQty) <= 0 || Number(formQty) > avail) {
      setFormError(
        `Valid If Gagal: Kuantiti (${formQty}) melebihi baki stok tersedia (${avail} unit).`
      );
      return;
    }
    if (!formPurpose.trim()) {
      setFormError('Required Field: Tujuan pinjaman wajib diisi.');
      return;
    }

    const newLoanId = `LN${Math.random().toString(16).slice(2, 6).toUpperCase()}`;
    const nowStr = new Date().toISOString().replace('T', ' ').slice(0, 16);
    const newLoan = {
      LoanID: newLoanId,
      UserID: activeUser.UserID,
      UserEmail: activeEmail,
      ItemID: formItemId,
      Quantity: Number(formQty),
      LoanDate: formLoanDate,
      DueDate: formDueDate,
      Purpose: formPurpose.trim(),
      Status: 'Pending',
      RejectionReason: '',
      ApprovedBy: '',
      ApprovedDate: '',
      CreatedAt: nowStr,
    };

    onUpdateDb({
      ...db,
      LOANS: [newLoan, ...db.LOANS],
    });

    pushBotLog(
      'Bot Pinjaman Baharu',
      'Data Change: LOANS (Adds)',
      'pegawai@organisasi.edu.my',
      `Permohonan Pinjaman Baharu [${newLoanId}]`,
      `Pemohon: ${activeEmail} | Barang: ${item.ItemName} (${formQty} unit) | Tarikh: ${formLoanDate} hingga ${formDueDate}`
    );

    setFormPurpose('');
    setFormQty(1);
    setFormSuccess(`Permohonan ${newLoanId} berjaya dihantar! Bot menghantar e-mel notifikasi.`);
    setTimeout(() => {
      setFormSuccess('');
      setPhoneTab('loans');
    }, 1400);
  };

  // Grouped Action: Approve Loan (updates LOANS + inserts APPROVALS + fires Bot 2)
  const handleApproveLoan = (loan) => {
    const nowStr = new Date().toISOString().replace('T', ' ').slice(0, 16);
    const updatedLoans = db.LOANS.map((l) =>
      l.LoanID === loan.LoanID
        ? { ...l, Status: 'Approved', ApprovedBy: activeEmail, ApprovedDate: nowStr }
        : l
    );
    const newApproval = {
      ApprovalID: `APR${String(db.APPROVALS.length + 1).padStart(3, '0')}`,
      LoanID: loan.LoanID,
      ApproverEmail: activeEmail,
      ApprovalDate: nowStr,
      ApprovalStatus: 'Approved',
      Remarks: 'Diluluskan melalui Grouped Action Simulator.',
    };
    onUpdateDb({
      ...db,
      LOANS: updatedLoans,
      APPROVALS: [newApproval, ...db.APPROVALS],
    });

    const itemName = itemMap[loan.ItemID]?.ItemName || loan.ItemID;
    pushBotLog(
      'Bot Notifikasi Kelulusan',
      'Data Change: LOANS (Updates → Approved)',
      loan.UserEmail,
      `Permohonan Pinjaman ${loan.LoanID} Diluluskan`,
      `Salam sejahtera, permohonan pinjaman ${itemName} (${loan.Quantity} unit) telah DILULUSKAN oleh ${activeEmail}.`
    );
  };

  // Action: Reject Loan with Required If RejectionReason + Bot 3
  const handleConfirmReject = (loan) => {
    if (!rejectReason.trim()) {
      setRejectErr('Required If Gagal: [Status] = "Rejected" mewajibkan Sebab Penolakan diisi!');
      return;
    }
    const nowStr = new Date().toISOString().replace('T', ' ').slice(0, 16);
    const updatedLoans = db.LOANS.map((l) =>
      l.LoanID === loan.LoanID
        ? {
            ...l,
            Status: 'Rejected',
            RejectionReason: rejectReason.trim(),
            ApprovedBy: activeEmail,
            ApprovedDate: nowStr,
          }
        : l
    );
    const newApproval = {
      ApprovalID: `APR${String(db.APPROVALS.length + 1).padStart(3, '0')}`,
      LoanID: loan.LoanID,
      ApproverEmail: activeEmail,
      ApprovalDate: nowStr,
      ApprovalStatus: 'Rejected',
      Remarks: rejectReason.trim(),
    };
    onUpdateDb({
      ...db,
      LOANS: updatedLoans,
      APPROVALS: [newApproval, ...db.APPROVALS],
    });
    pushBotLog(
      'Bot Notifikasi Penolakan',
      'Data Change: LOANS (Updates → Rejected)',
      loan.UserEmail,
      `Permohonan Pinjaman ${loan.LoanID} Tidak Diluluskan`,
      `Dukacita dimaklumkan permohonan anda ditolak. Sebab: ${rejectReason.trim()}`
    );
    setRejectingLoanId(null);
    setRejectReason('');
    setRejectErr('');
  };

  // Action: Mark Borrowed
  const handleMarkBorrowed = (loan) => {
    onUpdateDb({
      ...db,
      LOANS: db.LOANS.map((l) =>
        l.LoanID === loan.LoanID ? { ...l, Status: 'Borrowed' } : l
      ),
    });
  };

  // Grouped Action: Confirm Return (updates LOANS -> Returned + adds LOAN_RETURNS + restores stock)
  const handleConfirmReturn = (loan) => {
    const newReturn = {
      ReturnID: `RET${String(db.LOAN_RETURNS.length + 1).padStart(3, '0')}`,
      LoanID: loan.LoanID,
      ReturnDate: todayStr,
      ReturnQty: loan.Quantity,
      ItemCondition: returnCondition,
      CheckedBy: activeEmail,
      Remarks: returnRemarks.trim() || 'Barang dipulangkan dan disemak.',
    };
    onUpdateDb({
      ...db,
      LOANS: db.LOANS.map((l) =>
        l.LoanID === loan.LoanID ? { ...l, Status: 'Returned' } : l
      ),
      LOAN_RETURNS: [newReturn, ...db.LOAN_RETURNS],
    });
    const itemName = itemMap[loan.ItemID]?.ItemName || loan.ItemID;
    pushBotLog(
      'Bot Pengesahan Pemulangan',
      'Data Change: LOAN_RETURNS (Adds)',
      loan.UserEmail,
      `Barang ${itemName} Telah Dipulangkan [${loan.LoanID}]`,
      `Pemulangan ${loan.Quantity} unit disahkan oleh ${activeEmail}. Keadaan: ${returnCondition}. Baki stok dipulihkan.`
    );
    setReturningLoanId(null);
    setReturnCondition('Baik');
    setReturnRemarks('');
  };

  // Dashboard Stats
  const stats = useMemo(() => {
    const counts = { Pending: 0, Approved: 0, Borrowed: 0, Returned: 0, Rejected: 0 };
    visibleLoans.forEach((l) => {
      if (counts[l.Status] !== undefined) counts[l.Status]++;
    });
    return counts;
  }, [visibleLoans]);

  return (
    <div className="space-y-6">
      {/* Top Role Switcher Banner — Live Security Filter Tester */}
      <div className="berfest-card p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-berfest-gradient-soft border-orange-200">
        <div className="flex items-start gap-3">
          <div className="berfest-icon-circle w-10 h-10 mt-0.5">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Tukar Akaun Pengguna (Uji Security Filter &amp; Kawalan Role)
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Perhatikan bagaimana senarai pinjaman dan butang Action <strong>Luluskan / Tolak / Pulang</strong> berubah serta-merta mengikut peranan <code className="font-mono bg-white px-1.5 py-0.5 rounded text-orange-700">USEREMAIL()</code>!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {db.USERS.map((u) => {
            const active = u.Email === activeEmail;
            return (
              <button
                key={u.UserID}
                onClick={() => setActiveEmail(u.Email)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-bold border transition-all text-left ${
                  active
                    ? 'bg-berfest-gradient-h text-white border-transparent shadow-md'
                    : 'bg-white text-slate-700 border-orange-200 hover:bg-orange-50'
                }`}
              >
                <div>{u.FullName.split(' (')[0]}</div>
                <div className={`text-[10px] ${active ? 'text-yellow-200' : 'text-orange-600'}`}>
                  Role: {u.Role}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split: Left Phone Device Mockup + Right Live Automation Monitor & Security Inspector */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Phone Device Mockup (Berfest Phone Device Slide Inspiration) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[390px] bg-slate-900 rounded-[46px] p-3.5 shadow-2xl border-[5px] border-slate-800 relative">
            {/* Notch */}
            <div className="w-28 h-5 bg-slate-900 rounded-b-2xl mx-auto absolute top-3.5 left-1/2 -translate-x-1/2 z-20" />

            <div className="bg-[#FCFCFD] rounded-[34px] overflow-hidden flex flex-col h-[640px]">
              {/* App Header */}
              <div className="bg-berfest-gradient px-5 pt-8 pb-4 text-white flex-shrink-0">
                <div className="flex items-center justify-between text-[10px] font-bold opacity-95">
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3" /> SPB APPSHEET PREVIEW
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/25">
                    {role}: {activeUser?.FullName.split(' ')[0]}
                  </span>
                </div>
                <h4 className="font-extrabold text-lg mt-1 leading-tight">
                  Sistem Pinjaman Barang
                </h4>
                <p className="text-[11px] text-orange-100 truncate">
                  USEREMAIL(): {activeEmail}
                </p>
              </div>

              {/* Phone Body Scroll Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {/* TAB 1: KATALOG BARANG */}
                {phoneTab === 'catalog' && (
                  <>
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        Katalog Barang (Deck View)
                      </h5>
                      <span className="text-[11px] font-bold text-orange-600">
                        {db.ITEMS.length} aset
                      </span>
                    </div>
                    {db.ITEMS.map((item) => {
                      const avail = getAvailableQty(item, db.LOANS);
                      return (
                        <div
                          key={item.ItemID}
                          className="bg-white rounded-2xl p-3.5 border border-orange-100 shadow-sm space-y-2"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-bold uppercase text-orange-600">
                                {item.Category} • {item.ItemID}
                              </span>
                              <h6 className="font-extrabold text-sm text-slate-900 leading-snug">
                                {item.ItemName}
                              </h6>
                              <p className="text-[11px] text-slate-500 mt-0.5">
                                Lokasi: {item.Location}
                              </p>
                            </div>
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold flex-shrink-0 ${
                                avail > 0
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              Baki: {avail}/{item.TotalQty}
                            </span>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                            <span className="text-[10px] text-slate-400 font-mono">
                              SN: {item.SerialNo}
                            </span>
                            <button
                              disabled={avail === 0}
                              onClick={() => {
                                setFormItemId(item.ItemID);
                                setFormQty(1);
                                setPhoneTab('form');
                              }}
                              className="px-3 py-1 rounded-full bg-berfest-gradient-h text-white text-[11px] font-bold disabled:opacity-40"
                            >
                              Mohon Pinjam →
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}

                {/* TAB 2: BORANG PINJAMAN */}
                {phoneTab === 'form' && (
                  <form onSubmit={handleCreateLoan} className="space-y-3">
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Borang Pinjaman Baharu (Form View)
                    </h5>

                    {formError && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-800 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{formError}</span>
                      </div>
                    )}
                    {formSuccess && (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{formSuccess}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Pilih Barang (Ref → ITEMS) *
                      </label>
                      <select
                        value={formItemId}
                        onChange={(e) => setFormItemId(e.target.value)}
                        className="w-full rounded-xl border border-orange-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      >
                        {db.ITEMS.map((it) => (
                          <option key={it.ItemID} value={it.ItemID}>
                            {it.ItemName} (Baki: {getAvailableQty(it, db.LOANS)})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Kuantiti *
                        </label>
                        <input
                          type="number"
                          min={1}
                          value={formQty}
                          onChange={(e) => setFormQty(e.target.value)}
                          className="w-full rounded-xl border border-orange-200 bg-white px-3 py-2 text-xs font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Status Awal
                        </label>
                        <input
                          type="text"
                          value="Pending"
                          disabled
                          className="w-full rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold text-amber-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Tarikh Pinjam *
                        </label>
                        <input
                          type="date"
                          value={formLoanDate}
                          onChange={(e) => setFormLoanDate(e.target.value)}
                          className="w-full rounded-xl border border-orange-200 bg-white px-2.5 py-2 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Tarikh Pulang *
                        </label>
                        <input
                          type="date"
                          value={formDueDate}
                          onChange={(e) => setFormDueDate(e.target.value)}
                          className="w-full rounded-xl border border-orange-200 bg-white px-2.5 py-2 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Tujuan Pinjaman (LongText) *
                      </label>
                      <textarea
                        rows={3}
                        value={formPurpose}
                        onChange={(e) => setFormPurpose(e.target.value)}
                        placeholder="Nyatakan kegunaan dan lokasi peralatan..."
                        className="w-full rounded-xl border border-orange-200 bg-white px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>

                    <button type="submit" className="w-full btn-berfest py-2.5 text-xs">
                      <Send className="w-3.5 h-3.5" />
                      <span>Hantar Permohonan Pinjaman</span>
                    </button>
                  </form>
                )}

                {/* TAB 3: REKOD PINJAMAN & ACTIONS */}
                {phoneTab === 'loans' && (
                  <>
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        {canApprove ? 'Semua Pinjaman (Admin/Approver)' : 'Pinjaman Saya (Security Filter)'}
                      </h5>
                      <span className="text-[11px] font-bold text-orange-600">
                        {visibleLoans.length} rekod
                      </span>
                    </div>

                    {visibleLoans.map((loan) => {
                      const itemName = itemMap[loan.ItemID]?.ItemName || loan.ItemID;
                      return (
                        <div
                          key={loan.LoanID}
                          className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm space-y-2"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="text-[10px] font-mono font-bold text-slate-400">
                                {loan.LoanID} • {loan.UserEmail}
                              </div>
                              <h6 className="font-extrabold text-xs text-slate-900 mt-0.5">
                                {itemName} ({loan.Quantity} unit)
                              </h6>
                              <p className="text-[11px] text-slate-600 mt-0.5">{loan.Purpose}</p>
                              <p className="text-[10px] text-slate-400 mt-1">
                                Tarikh: {loan.LoanDate} → {loan.DueDate}
                              </p>
                            </div>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border flex-shrink-0 ${
                                statusColors[loan.Status] || 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {loan.Status}
                            </span>
                          </div>

                          {loan.Status === 'Rejected' && loan.RejectionReason && (
                            <div className="p-2 rounded-xl bg-red-50 text-[11px] text-red-800 border border-red-100">
                              <strong>Sebab Tolak:</strong> {loan.RejectionReason}
                            </div>
                          )}

                          {/* Role-Gated Action Buttons */}
                          {canApprove && loan.Status === 'Pending' && (
                            <div className="pt-2 border-t border-slate-100 space-y-2">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleApproveLoan(loan)}
                                  className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold"
                                >
                                  <Check className="w-3.5 h-3.5" /> Luluskan
                                </button>
                                <button
                                  onClick={() => {
                                    setRejectingLoanId(loan.LoanID);
                                    setRejectReason('');
                                    setRejectErr('');
                                  }}
                                  className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold"
                                >
                                  <XCircle className="w-3.5 h-3.5" /> Tolak
                                </button>
                              </div>

                              {rejectingLoanId === loan.LoanID && (
                                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 space-y-2">
                                  <input
                                    type="text"
                                    value={rejectReason}
                                    onChange={(e) => setRejectReason(e.target.value)}
                                    placeholder="Masukkan RejectionReason (Wajib)..."
                                    className="w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-[11px]"
                                  />
                                  {rejectErr && (
                                    <p className="text-[10px] font-bold text-red-700">{rejectErr}</p>
                                  )}
                                  <div className="flex justify-end gap-1.5">
                                    <button
                                      onClick={() => setRejectingLoanId(null)}
                                      className="px-2.5 py-1 text-[10px] font-bold text-slate-600"
                                    >
                                      Batal
                                    </button>
                                    <button
                                      onClick={() => handleConfirmReject(loan)}
                                      className="px-3 py-1 rounded-lg bg-red-700 text-white text-[10px] font-bold"
                                    >
                                      Sahkan Penolakan
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {canApprove && loan.Status === 'Approved' && (
                            <div className="pt-2 border-t border-slate-100">
                              <button
                                onClick={() => handleMarkBorrowed(loan)}
                                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-bold"
                              >
                                <Box className="w-3.5 h-3.5" /> Serah Barang (Set Borrowed)
                              </button>
                            </div>
                          )}

                          {canApprove && loan.Status === 'Borrowed' && (
                            <div className="pt-2 border-t border-slate-100 space-y-2">
                              <button
                                onClick={() => setReturningLoanId(loan.LoanID)}
                                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold"
                              >
                                <PackageCheck className="w-3.5 h-3.5" /> Sahkan Pemulangan Barang
                              </button>
                              {returningLoanId === loan.LoanID && (
                                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                                  <select
                                    value={returnCondition}
                                    onChange={(e) => setReturnCondition(e.target.value)}
                                    className="w-full rounded-lg border border-emerald-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold"
                                  >
                                    <option value="Baik">Keadaan: Baik</option>
                                    <option value="Rosak Ringan">Keadaan: Rosak Ringan</option>
                                    <option value="Rosak Teruk">Keadaan: Rosak Teruk</option>
                                  </select>
                                  <input
                                    type="text"
                                    value={returnRemarks}
                                    onChange={(e) => setReturnRemarks(e.target.value)}
                                    placeholder="Catatan pemeriksaan (optional)..."
                                    className="w-full rounded-lg border border-emerald-200 bg-white px-2.5 py-1.5 text-[11px]"
                                  />
                                  <button
                                    onClick={() => handleConfirmReturn(loan)}
                                    className="w-full py-1.5 rounded-lg bg-emerald-700 text-white text-[11px] font-bold"
                                  >
                                    Simpan Rekod LOAN_RETURNS
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                )}

                {/* TAB 4: DASHBOARD & CHART */}
                {phoneTab === 'dashboard' && (
                  <div className="space-y-3">
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Dashboard Statistik (Chart View)
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Pending', val: stats.Pending, cls: 'bg-amber-50 text-amber-800 border-amber-200' },
                        { label: 'Approved', val: stats.Approved, cls: 'bg-blue-50 text-blue-800 border-blue-200' },
                        { label: 'Borrowed', val: stats.Borrowed, cls: 'bg-orange-50 text-orange-800 border-orange-200' },
                        { label: 'Returned', val: stats.Returned, cls: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
                      ].map((s) => (
                        <div key={s.label} className={`rounded-2xl p-3 border ${s.cls}`}>
                          <div className="text-2xl font-extrabold">{s.val}</div>
                          <div className="text-[11px] font-bold">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-2xl p-3.5 border border-slate-200 space-y-2.5">
                      <div className="text-xs font-extrabold text-slate-800">
                        Carta Taburan Status Pinjaman
                      </div>
                      {Object.entries(stats).map(([status, count]) => {
                        const pct = visibleLoans.length
                          ? Math.round((count / visibleLoans.length) * 100)
                          : 0;
                        return (
                          <div key={status} className="space-y-1">
                            <div className="flex justify-between text-[11px] font-bold text-slate-700">
                              <span>{status}</span>
                              <span>
                                {count} ({pct}%)
                              </span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-berfest-gradient-h rounded-full transition-all duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Primary Navigation Bar (AppSheet Style) */}
              <div className="bg-white border-t border-orange-100 px-2 py-2 grid grid-cols-4 gap-1 flex-shrink-0">
                {[
                  { id: 'catalog', label: 'Katalog', icon: Box },
                  { id: 'form', label: 'Mohon', icon: PlusCircle },
                  { id: 'loans', label: 'Pinjaman', icon: ClipboardList },
                  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = phoneTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setPhoneTab(tab.id)}
                      className={`flex flex-col items-center justify-center py-1.5 rounded-xl text-[10px] font-bold transition ${
                        active ? 'text-orange-600 bg-orange-50' : 'text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-0.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Live Security Filter Inspector + Automation Monitor */}
        <div className="lg:col-span-6 space-y-5">
          {/* Live Security Inspector */}
          <div className="berfest-card p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="berfest-icon-circle w-9 h-9">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base">
                  Pemeriksa Keselamatan &amp; Security Filter Masa Nyata
                </h4>
                <p className="text-xs text-slate-500">
                  Menunjukkan kesan formula Modul 9 pada akaun aktif sekarang
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-100">
                <div className="font-bold text-orange-800">Role Aktif (LOOKUP)</div>
                <div className="text-lg font-extrabold text-slate-900 mt-0.5">{role}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{activeEmail}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-700">Rekod LOANS Dimuatkan</div>
                <div className="text-lg font-extrabold text-slate-900 mt-0.5">
                  {visibleLoans.length} / {db.LOANS.length} rekod
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {canApprove
                    ? 'Semua rekod dibenarkan (Admin/Approver)'
                    : 'Ditapis oleh [UserEmail] = USEREMAIL()'}
                </div>
              </div>
            </div>
          </div>

          {/* Live Automation Monitor (Modul 8.14) */}
          <div className="berfest-card p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="berfest-icon-crimson w-9 h-9">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">
                    Automation Monitor (Log Pelaksanaan Bot)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Cuba hantar pinjaman, luluskan, tolak atau pulangkan barang untuk lihat Bot dicetuskan!
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800">
                {botLogs.length} Log
              </span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {botLogs.map((log) => (
                <div
                  key={log.id}
                  className="rounded-2xl border border-orange-100 bg-orange-50/30 p-4 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-extrabold text-xs text-slate-900 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-orange-600" />
                      {log.botName}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">{log.time}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-700">
                        {log.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-orange-800">{log.event}</div>
                  <div className="text-xs bg-white rounded-xl p-2.5 border border-orange-100 space-y-1">
                    <div>
                      <span className="font-bold text-slate-500">To:</span>{' '}
                      <span className="font-semibold text-slate-800">{log.to}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500">Subject:</span>{' '}
                      <span className="font-bold text-slate-900">{log.subject}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                      {log.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
