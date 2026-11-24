import fs from 'node:fs';
import path from 'node:path';
import * as XLSX from 'xlsx';
import { initialSpbDatabase, fbmsSampleDatabase } from '../src/data/practicalProject.js';

const outDir = path.resolve('database');
const csvDir = path.join(outDir, 'csv');
fs.mkdirSync(csvDir, { recursive: true });

function writeWorkbook(tablesObj, targetPath) {
  const wb = XLSX.utils.book_new();
  for (const [sheetName, rows] of Object.entries(tablesObj)) {
    const ws = XLSX.utils.json_to_sheet(rows);
    if (rows.length > 0) {
      const keys = Object.keys(rows[0]);
      ws['!cols'] = keys.map((k) => {
        const maxLen = Math.max(k.length, ...rows.map((r) => String(r[k] ?? '').length));
        return { wch: Math.min(Math.max(maxLen + 3, 12), 42) };
      });
    }
    XLSX.utils.book_append_sheet(wb, ws, sheetName.slice(0, 31));
  }
  XLSX.writeFile(wb, targetPath);
}

writeWorkbook(initialSpbDatabase, path.join(outDir, 'SPB_DATABASE.xlsx'));
writeWorkbook(fbmsSampleDatabase, path.join(outDir, 'FBMS_DATABASE.xlsx'));

for (const [sheetName, rows] of Object.entries(initialSpbDatabase)) {
  const ws = XLSX.utils.json_to_sheet(rows);
  const csv = XLSX.utils.sheet_to_csv(ws);
  fs.writeFileSync(path.join(csvDir, `SPB_${sheetName}.csv`), csv, 'utf8');
}

console.log('Berjaya menjana database/SPB_DATABASE.xlsx, database/FBMS_DATABASE.xlsx dan fail CSV SPB.');
