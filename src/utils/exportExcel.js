import * as XLSX from 'xlsx';

/**
 * Muat turun keseluruhan database (pelbagai jadual) sebagai fail Excel .xlsx sebenar
 * yang sedia dimuat naik terus ke Google Drive -> Google Sheets -> Google AppSheet.
 */
export function downloadWorkbookXlsx(tablesObj, filename = 'SPB_DATABASE.xlsx') {
  const wb = XLSX.utils.book_new();

  Object.entries(tablesObj).forEach(([sheetName, rows]) => {
    const ws = XLSX.utils.json_to_sheet(rows);
    // Auto-width columns for readability
    if (rows.length > 0) {
      const keys = Object.keys(rows[0]);
      ws['!cols'] = keys.map((k) => {
        const maxLen = Math.max(
          k.length,
          ...rows.map((r) => String(r[k] ?? '').length)
        );
        return { wch: Math.min(Math.max(maxLen + 3, 12), 42) };
      });
    }
    XLSX.utils.book_append_sheet(wb, ws, sheetName.slice(0, 31));
  });

  XLSX.writeFile(wb, filename);
}

/**
 * Muat turun satu jadual sebagai fail CSV
 */
export function downloadTableCsv(rows, tableName) {
  if (!rows || rows.length === 0) return;
  const headers = Object.keys(rows[0]);
  const escapeCsv = (val) => {
    const str = String(val ?? '');
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };
  const csvContent = [
    headers.join(','),
    ...rows.map((row) => headers.map((h) => escapeCsv(row[h])).join(',')),
  ].join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${tableName}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Salin jadual sebagai TSV (Tab-Separated Values) supaya boleh terus Ctrl+V ke dalam Google Sheets!
 */
export async function copyTableForGoogleSheets(rows) {
  if (!rows || rows.length === 0) return false;
  const headers = Object.keys(rows[0]);
  const tsv = [
    headers.join('\t'),
    ...rows.map((row) =>
      headers.map((h) => String(row[h] ?? '').replace(/\t|\r|\n/g, ' ')).join('\t')
    ),
  ].join('\n');
  await navigator.clipboard.writeText(tsv);
  return true;
}
