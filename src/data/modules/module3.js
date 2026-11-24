export const module3 = {
  id: 3,
  code: 'MODUL 3',
  title: 'Persediaan Pangkalan Data Menggunakan Google Sheets',
  shortTitle: 'Pangkalan Data Sheets',
  subtitle: 'Membina struktur jadual yang betul, 7 peraturan Google Sheets, 16 jenis data, Key & UNIQUEID(), Label, Ref dan projek FBMS_DATABASE.',
  pages: 'Muka surat 15 – 30',
  duration: '60 minit',
  level: 'Beginner',
  sections: [
    {
      id: '3.1',
      title: '3.1 OBJEKTIF PEMBELAJARAN',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Memahami konsep pangkalan data (Database).',
            'Menjelaskan fungsi Google Sheets sebagai sumber data AppSheet.',
            'Membina struktur jadual yang sesuai untuk aplikasi.',
            'Memahami konsep Table, Column dan Row.',
            'Mengenal pasti jenis data yang sesuai untuk setiap medan.',
            'Memahami konsep Key dan Label.',
            'Memahami hubungan antara jadual menggunakan Ref.',
            'Membina pangkalan data asas untuk projek aplikasi.',
          ],
        },
      ],
    },
    {
      id: '3.2',
      title: '3.2 APAKAH ITU DATABASE?',
      blocks: [
        {
          type: 'p',
          text: 'Database atau pangkalan data ialah tempat untuk menyimpan dan mengurus maklumat secara tersusun supaya maklumat tersebut mudah dicapai, dikemas kini dan digunakan.',
        },
        { type: 'label', text: 'Contoh maklumat yang boleh disimpan:' },
        {
          type: 'ul',
          items: [
            'Maklumat pelajar.',
            'Maklumat pekerja.',
            'Rekod inventori.',
            'Rekod tempahan.',
            'Maklumat pelanggan.',
            'Rekod transaksi.',
          ],
        },
        {
          type: 'p',
          text: 'Dalam Google AppSheet, pangkalan data boleh menggunakan Google Sheets sebagai sumber data.',
        },
        { type: 'p', text: 'Contohnya, sebuah sistem pengurusan pelajar memerlukan maklumat seperti:' },
        {
          type: 'ul',
          items: [
            'ID Pelajar.',
            'Nama Pelajar.',
            'No. Kad Pengenalan.',
            'Program.',
            'Semester.',
            'No. Telefon.',
            'Alamat E-mel.',
          ],
        },
        { type: 'p', text: 'Maklumat ini disimpan dalam satu jadual yang tersusun.' },
      ],
    },
    {
      id: '3.3',
      title: '3.3 APAKAH GOOGLE SHEETS?',
      blocks: [
        {
          type: 'p',
          text: 'Google Sheets ialah aplikasi hamparan elektronik yang disediakan oleh Google untuk menghasilkan, menyimpan dan mengurus data.',
        },
        { type: 'p', text: 'Google Sheets boleh digunakan sebagai sumber data bagi aplikasi AppSheet.' },
        {
          type: 'links',
          items: [{ label: 'Alamat laman web Google Sheets', url: 'https://sheets.google.com/' }],
        },
        { type: 'label', text: 'Kelebihan Google Sheets:' },
        {
          type: 'ol',
          items: [
            'Boleh digunakan secara dalam talian.',
            'Data boleh dikongsi dengan pengguna lain.',
            'Menyokong pengurusan data dalam bentuk jadual.',
            'Boleh disambungkan kepada Google AppSheet.',
            'Menyokong formula dan fungsi pengiraan.',
            'Memudahkan proses penyelenggaraan data.',
          ],
        },
      ],
    },
    {
      id: '3.4',
      title: '3.4 MEMAHAMI STRUKTUR JADUAL',
      blocks: [
        { type: 'p', text: 'Sebelum membina database, peserta perlu memahami tiga komponen asas.' },
        { type: 'subheading', text: 'A. TABLE (JADUAL)' },
        { type: 'p', text: 'Table ialah kumpulan data yang mempunyai struktur tertentu.' },
        {
          type: 'table',
          title: 'Contoh — Jadual: STUDENTS',
          headers: ['StudentID', 'StudentName', 'Programme', 'Semester'],
          rows: [
            ['ST001', 'Ali', 'DIT', '1'],
            ['ST002', 'Siti', 'DIT', '2'],
            ['ST003', 'Ahmad', 'DKA', '1'],
          ],
        },
        { type: 'subheading', text: 'B. COLUMN (LAJUR)' },
        { type: 'p', text: 'Column ialah medan yang mewakili jenis maklumat tertentu dalam jadual.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['StudentID.', 'StudentName.', 'Programme.', 'Semester.'] },
        { type: 'p', text: 'Setiap Column perlu mempunyai nama yang jelas dan konsisten.' },
        { type: 'subheading', text: 'C. ROW (BARIS)' },
        { type: 'p', text: 'Row ialah satu rekod lengkap dalam jadual.' },
        { type: 'p', text: 'Contohnya, maklumat Ali dalam jadual STUDENTS merupakan satu Row.' },
        { type: 'label', text: 'Kesimpulannya:' },
        {
          type: 'ul',
          items: [
            'Table = Jadual.',
            'Column = Medan atau lajur.',
            'Row = Rekod atau baris.',
          ],
        },
      ],
    },
    {
      id: '3.5',
      title: '3.5 PERATURAN MEMBINA GOOGLE SHEETS UNTUK APPSHEET',
      blocks: [
        { type: 'p', text: 'Terdapat beberapa amalan yang perlu dipatuhi apabila menyediakan Google Sheets.' },

        { type: 'subheading', text: 'PERATURAN 1: SETIAP JADUAL MESTI MEMPUNYAI HEADER' },
        { type: 'p', text: 'Baris pertama perlu mengandungi nama Column.' },
        {
          type: 'table',
          title: 'Contoh yang betul:',
          headers: ['StudentID', 'StudentName', 'Email', 'Phone'],
          rows: [],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Contoh yang tidak sesuai',
          text: 'Meletakkan tajuk besar "Maklumat Pelajar" pada baris pertama sebelum baris Header "ID | Nama | Emel | Telefon".',
        },

        { type: 'subheading', text: 'PERATURAN 2: ELAKKAN HEADER BERULANG' },
        { type: 'p', text: 'Jangan gunakan beberapa baris tajuk sebelum baris Header.' },
        { type: 'p', text: 'AppSheet memerlukan struktur jadual yang konsisten.' },

        { type: 'subheading', text: 'PERATURAN 3: ELAKKAN MERGE CELLS' },
        { type: 'p', text: 'Elakkan menggabungkan beberapa sel dalam kawasan jadual.' },
        { type: 'p', text: 'Setiap Column dan Row perlu mempunyai struktur yang jelas.' },

        { type: 'subheading', text: 'PERATURAN 4: SATU ROW UNTUK SATU REKOD' },
        { type: 'p', text: 'Setiap baris perlu mewakili satu rekod.' },
        {
          type: 'table',
          title: 'Contoh:',
          headers: ['ItemID', 'ItemName', 'Quantity'],
          rows: [
            ['I001', 'Mouse', '10'],
            ['I002', 'Keyboard', '5'],
            ['I003', 'Monitor', '8'],
          ],
        },
        {
          type: 'p',
          text: 'Jangan masukkan beberapa item dalam satu baris jika setiap item perlu diuruskan sebagai rekod berasingan.',
        },

        { type: 'subheading', text: 'PERATURAN 5: ELAKKAN BARIS KOSONG DALAM DATA' },
        { type: 'p', text: 'Pastikan jadual tidak mempunyai baris kosong yang memisahkan rekod secara tidak konsisten.' },

        { type: 'subheading', text: 'PERATURAN 6: GUNAKAN NAMA COLUMN YANG KONSISTEN' },
        { type: 'label', text: 'Contoh nama yang disarankan:' },
        {
          type: 'ul',
          items: ['StudentID', 'StudentName', 'StudentEmail', 'StudentPhone', 'RegistrationDate'],
        },
        { type: 'label', text: 'Elakkan penggunaan nama yang tidak jelas seperti:' },
        { type: 'ul', items: ['Data1', 'Field2', 'Info', 'ColumnA'] },

        { type: 'subheading', text: 'PERATURAN 7: ELAKKAN PENGGUNAAN FORMULA YANG TIDAK DIPERLUKAN' },
        {
          type: 'p',
          text: 'Google Sheets boleh menggunakan formula, tetapi untuk aplikasi AppSheet, sesetengah pengiraan lebih sesuai dilakukan menggunakan AppSheet Expression.',
        },
        { type: 'label', text: 'Contohnya:' },
        {
          type: 'ul',
          items: [
            'Mengira jumlah harga.',
            'Menentukan status permohonan.',
            'Mengira baki stok.',
            'Menentukan kelayakan pengguna.',
          ],
        },
        { type: 'p', text: 'Pemilihan kaedah bergantung pada keperluan aplikasi.' },
      ],
    },
    {
      id: '3.6',
      title: '3.6 MEMAHAMI DATA TYPE',
      blocks: [
        { type: 'p', text: 'Data Type menentukan jenis maklumat yang disimpan dalam sesuatu Column.' },
        { type: 'p', text: 'AppSheet menyediakan pelbagai jenis Data Type. Antara jenis yang penting ialah:' },

        { type: 'subheading', text: 'A. TEXT' },
        { type: 'p', text: 'Digunakan untuk menyimpan teks biasa.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Nama.', 'Alamat.', 'Keterangan.', 'Nama jabatan.'] },

        { type: 'subheading', text: 'B. NUMBER' },
        { type: 'p', text: 'Digunakan untuk menyimpan nombor.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Kuantiti.', 'Bilangan pekerja.', 'Jumlah unit.'] },

        { type: 'subheading', text: 'C. DECIMAL' },
        { type: 'p', text: 'Digunakan untuk menyimpan nombor perpuluhan.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Berat.', 'Ukuran.', 'Nilai perpuluhan.'] },

        { type: 'subheading', text: 'D. PRICE' },
        { type: 'p', text: 'Digunakan untuk menyimpan nilai kewangan.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Harga barang.', 'Jumlah bayaran.', 'Kos pembelian.'] },

        { type: 'subheading', text: 'E. DATE' },
        { type: 'p', text: 'Digunakan untuk menyimpan tarikh.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Tarikh pendaftaran.', 'Tarikh tempahan.', 'Tarikh pemeriksaan.'] },

        { type: 'subheading', text: 'F. DATETIME' },
        { type: 'p', text: 'Digunakan untuk menyimpan tarikh berserta masa.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Tarikh dan masa transaksi.', 'Tarikh dan masa laporan dihantar.'] },

        { type: 'subheading', text: 'G. TIME' },
        { type: 'p', text: 'Digunakan untuk menyimpan masa sahaja.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Masa mula mesyuarat.', 'Masa tamat tempahan.'] },

        { type: 'subheading', text: 'H. EMAIL' },
        { type: 'p', text: 'Digunakan untuk menyimpan alamat e-mel.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['admin@gmail.com', 'user@gmail.com'] },

        { type: 'subheading', text: 'I. PHONE' },
        { type: 'p', text: 'Digunakan untuk menyimpan nombor telefon.' },

        { type: 'subheading', text: 'J. YES/NO' },
        { type: 'p', text: 'Digunakan untuk menyimpan pilihan benar atau salah.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Aktif atau tidak aktif.', 'Diluluskan atau tidak.', 'Sudah bayar atau belum.'] },

        { type: 'subheading', text: 'K. ENUM' },
        { type: 'p', text: 'Digunakan untuk membolehkan pengguna memilih satu nilai daripada senarai pilihan.' },
        { type: 'label', text: 'Contoh — Status:' },
        { type: 'ul', items: ['Pending.', 'Approved.', 'Rejected.'] },

        { type: 'subheading', text: 'L. ENUMLIST' },
        { type: 'p', text: 'Digunakan untuk membolehkan pengguna memilih lebih daripada satu nilai.' },
        { type: 'label', text: 'Contoh — Kemudahan:' },
        { type: 'ul', items: ['Projektor.', 'Komputer.', 'Sistem Audio.'] },

        { type: 'subheading', text: 'M. IMAGE' },
        { type: 'p', text: 'Digunakan untuk menyimpan rujukan gambar dalam aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Gambar produk.', 'Gambar kerosakan.', 'Gambar aset.'] },

        { type: 'subheading', text: 'N. FILE' },
        { type: 'p', text: 'Digunakan untuk melampirkan fail.' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Dokumen PDF.', 'Surat permohonan.', 'Dokumen sokongan.'] },

        { type: 'subheading', text: 'O. SIGNATURE' },
        { type: 'p', text: 'Digunakan untuk merekod tandatangan digital.' },

        { type: 'subheading', text: 'P. LOCATION' },
        { type: 'p', text: 'Digunakan untuk merekod maklumat lokasi.' },
      ],
    },
    {
      id: '3.7',
      title: '3.7 MEMAHAMI KEY DALAM APPSHEET',
      blocks: [
        {
          type: 'p',
          text: 'Key ialah Column yang digunakan untuk mengenal pasti setiap rekod secara unik dalam sesuatu jadual.',
        },
        { type: 'p', text: 'Setiap rekod perlu mempunyai nilai Key yang berbeza.' },
        {
          type: 'table',
          title: 'Contoh:',
          headers: ['StudentID', 'StudentName'],
          rows: [
            ['ST001', 'Ali'],
            ['ST002', 'Siti'],
            ['ST003', 'Ahmad'],
          ],
        },
        { type: 'p', text: 'Dalam contoh ini, StudentID boleh digunakan sebagai Key.' },
        { type: 'label', text: 'Mengapa Key penting?' },
        {
          type: 'ol',
          items: [
            'Mengenal pasti rekod secara unik.',
            'Mengelakkan kekeliruan antara rekod.',
            'Membolehkan hubungan antara jadual.',
            'Membolehkan rekod dikemas kini dengan tepat.',
            'Membantu AppSheet mengurus data.',
          ],
        },
        { type: 'subheading', text: 'Apakah UNIQUEID()?' },
        {
          type: 'p',
          text: 'UNIQUEID() ialah fungsi AppSheet yang boleh digunakan untuk menghasilkan pengecam unik bagi sesuatu rekod.',
        },
        {
          type: 'code',
          title: 'Contoh: Column StudentID → Initial Value',
          code: 'UNIQUEID()',
        },
        { type: 'p', text: 'Apabila pengguna menambah rekod baharu, sistem akan menjana ID unik secara automatik.' },
        {
          type: 'callout',
          variant: 'important',
          title: 'PENTING',
          items: [
            'Key mestilah unik.',
            'Key tidak boleh kosong.',
            'Key sebaik-baiknya tidak berubah selepas rekod diwujudkan.',
            'Jangan gunakan nama individu sebagai Key kerana nama mungkin berulang atau berubah.',
          ],
        },
      ],
    },
    {
      id: '3.8',
      title: '3.8 MEMAHAMI LABEL',
      blocks: [
        { type: 'p', text: 'Label ialah Column yang digunakan untuk mewakili sesuatu rekod dalam paparan aplikasi.' },
        {
          type: 'table',
          title: 'Contoh:',
          headers: ['StudentID', 'StudentName'],
          rows: [
            ['ST001', 'Ali'],
            ['ST002', 'Siti'],
          ],
        },
        { type: 'p', text: 'StudentID digunakan sebagai Key. StudentName digunakan sebagai Label.' },
        {
          type: 'p',
          text: 'Apabila pengguna memilih rekod pelajar dalam aplikasi, nama pelajar boleh dipaparkan berbanding ID sahaja.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Perbezaan',
          items: [
            'Key = Pengenalan unik rekod.',
            'Label = Nama atau maklumat yang mewakili rekod dalam paparan pengguna.',
          ],
        },
      ],
    },
    {
      id: '3.9',
      title: '3.9 MEMAHAMI REF (RELATIONSHIP ANTARA JADUAL)',
      blocks: [
        {
          type: 'p',
          text: 'Ref ialah jenis Column dalam AppSheet yang digunakan untuk menghubungkan satu jadual dengan jadual yang lain.',
        },
        { type: 'p', text: 'Contoh: Kita mempunyai dua jadual:' },
        {
          type: 'table',
          title: 'TABLE 1: CUSTOMERS',
          headers: ['CustomerID', 'CustomerName'],
          rows: [
            ['C001', 'Ali'],
            ['C002', 'Siti'],
          ],
        },
        {
          type: 'table',
          title: 'TABLE 2: ORDERS',
          headers: ['OrderID', 'OrderDate', 'CustomerID'],
          rows: [
            ['O001', '10/11/2026', 'C001'],
            ['O002', '11/11/2026', 'C002'],
          ],
        },
        { type: 'label', text: 'Dalam contoh ini:' },
        {
          type: 'ul',
          items: [
            'CustomerID dalam CUSTOMERS ialah Key.',
            'CustomerID dalam ORDERS menjadi Ref kepada jadual CUSTOMERS.',
          ],
        },
        { type: 'p', text: 'Ini membolehkan setiap pesanan dikaitkan dengan pelanggan yang betul.' },

        { type: 'subheading', text: 'JENIS HUBUNGAN DATA' },
        { type: 'label', text: 'A. ONE-TO-ONE (1:1)' },
        { type: 'p', text: 'Satu rekod dalam jadual pertama mempunyai satu rekod berkaitan dalam jadual kedua.' },
        { type: 'ul', items: ['Contoh: Seorang pekerja mempunyai satu profil khusus.'] },

        { type: 'label', text: 'B. ONE-TO-MANY (1:M)' },
        { type: 'p', text: 'Satu rekod dalam jadual pertama boleh mempunyai banyak rekod dalam jadual kedua.' },
        { type: 'ul', items: ['Contoh: Seorang pelanggan boleh membuat banyak pesanan.'] },

        { type: 'label', text: 'C. MANY-TO-MANY (M:M)' },
        {
          type: 'p',
          text: 'Banyak rekod dalam jadual pertama boleh mempunyai banyak hubungan dengan rekod dalam jadual kedua.',
        },
        {
          type: 'ul',
          items: [
            'Contoh: Seorang pelajar boleh mengikuti banyak kursus.',
            'Satu kursus boleh mempunyai ramai pelajar.',
          ],
        },
        { type: 'p', text: 'Hubungan seperti ini biasanya memerlukan satu jadual penghubung (Junction Table).' },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['STUDENTS', 'COURSES', 'STUDENT_COURSES'] },
      ],
    },
    {
      id: '3.10',
      title: '3.10 PROJEK AMALI: MEMBINA DATABASE SISTEM TEMPAHAN BILIK',
      blocks: [
        { type: 'p', text: 'Dalam kursus ini, peserta akan menggunakan satu projek utama iaitu:' },
        { type: 'label', text: 'FACILITY BOOKING MANAGEMENT SYSTEM (FBMS).' },
        { type: 'p', text: 'Sebelum membina aplikasi, peserta perlu menyediakan database. Database ini akan mempunyai empat jadual utama.' },

        { type: 'subheading', text: 'TABLE 1: USERS' },
        { type: 'p', text: 'Tujuan: Menyimpan maklumat pengguna sistem.' },
        {
          type: 'table',
          title: 'Struktur & Cadangan Data Type — USERS',
          headers: ['No.', 'Column', 'Cadangan Data Type'],
          rows: [
            ['1', 'UserID', 'Text (Key)'],
            ['2', 'UserName', 'Name'],
            ['3', 'Email', 'Email'],
            ['4', 'Phone', 'Phone'],
            ['5', 'UserRole', 'Enum'],
            ['6', 'Department', 'Text'],
            ['7', 'IsActive', 'Yes/No'],
          ],
        },

        { type: 'subheading', text: 'TABLE 2: ROOMS' },
        { type: 'p', text: 'Tujuan: Menyimpan maklumat bilik dan kemudahan.' },
        {
          type: 'table',
          title: 'Struktur & Cadangan Data Type — ROOMS',
          headers: ['No.', 'Column', 'Cadangan Data Type'],
          rows: [
            ['1', 'RoomID', 'Text (Key)'],
            ['2', 'RoomName', 'Text (Label)'],
            ['3', 'RoomLocation', 'Text'],
            ['4', 'Capacity', 'Number'],
            ['5', 'Facilities', 'EnumList'],
            ['6', 'RoomStatus', 'Enum'],
          ],
        },

        { type: 'subheading', text: 'TABLE 3: BOOKINGS' },
        { type: 'p', text: 'Tujuan: Menyimpan rekod tempahan bilik.' },
        {
          type: 'table',
          title: 'Struktur & Cadangan Data Type — BOOKINGS',
          headers: ['No.', 'Column', 'Cadangan Data Type'],
          rows: [
            ['1', 'BookingID', 'Text (Key)'],
            ['2', 'UserID', 'Ref kepada USERS'],
            ['3', 'RoomID', 'Ref kepada ROOMS'],
            ['4', 'BookingDate', 'Date'],
            ['5', 'StartTime', 'Time'],
            ['6', 'EndTime', 'Time'],
            ['7', 'Purpose', 'LongText'],
            ['8', 'BookingStatus', 'Enum'],
            ['9', 'CreatedAt', 'DateTime'],
          ],
        },

        { type: 'subheading', text: 'TABLE 4: APPROVALS' },
        { type: 'p', text: 'Tujuan: Menyimpan rekod kelulusan tempahan.' },
        {
          type: 'table',
          title: 'Struktur & Cadangan Data Type — APPROVALS',
          headers: ['No.', 'Column', 'Cadangan Data Type'],
          rows: [
            ['1', 'ApprovalID', 'Text (Key)'],
            ['2', 'BookingID', 'Ref kepada BOOKINGS'],
            ['3', 'ApproverEmail', 'Email'],
            ['4', 'ApprovalDate', 'DateTime'],
            ['5', 'ApprovalStatus', 'Enum'],
            ['6', 'Remarks', 'LongText'],
          ],
        },
      ],
    },
    {
      id: '3.11',
      title: '3.11 LANGKAH MEMBINA DATABASE DALAM GOOGLE SHEETS',
      blocks: [
        { type: 'p', text: 'Ikuti langkah berikut:' },
        {
          type: 'ol',
          items: [
            'LANGKAH 1: Buka Google Sheets (https://sheets.google.com/).',
            'LANGKAH 2: Klik Blank Spreadsheet untuk menghasilkan fail baharu.',
            'LANGKAH 3: Namakan fail: FBMS_DATABASE',
            'LANGKAH 4: Tukarkan nama Sheet1 kepada USERS.',
            'LANGKAH 5: Masukkan nama Column seperti yang disenaraikan dalam bahagian 3.10.',
            'LANGKAH 6: Tambahkan Sheet baharu dan namakan: ROOMS',
            'LANGKAH 7: Masukkan Column yang telah ditetapkan untuk jadual ROOMS.',
            {
              text: 'LANGKAH 8: Ulang proses untuk menghasilkan jadual:',
              subitems: ['BOOKINGS', 'APPROVALS'],
            },
            'LANGKAH 9: Masukkan beberapa rekod contoh bagi setiap jadual.',
            'LANGKAH 10: Pastikan semua nama Sheet dan Column adalah betul.',
            'LANGKAH 11: Pastikan fail disimpan dalam Google Drive.',
          ],
        },
        {
          type: 'callout',
          variant: 'important',
          title: 'PENTING',
          text: 'Pastikan setiap jadual mempunyai Header pada baris pertama. Jangan gabungkan sel dan jangan letakkan tajuk tambahan di atas Header.',
        },
      ],
    },
    {
      id: '3.12',
      title: '3.12 LATIHAN PENGUKUHAN',
      blocks: [
        {
          type: 'quiz_open',
          intro: 'Jawab soalan berikut:',
          questions: [
            {
              q: 'Apakah maksud Database?',
              guide: 'Database atau pangkalan data ialah tempat untuk menyimpan dan mengurus maklumat secara tersusun supaya mudah dicapai, dikemas kini dan digunakan.',
            },
            {
              q: 'Apakah perbezaan antara Table, Column dan Row?',
              guide: 'Table = jadual (kumpulan data berstruktur), Column = medan/lajur (jenis maklumat tertentu), dan Row = baris (satu rekod lengkap dalam jadual).',
            },
            {
              q: 'Mengapakah Header penting dalam Google Sheets?',
              guide: 'Header pada baris pertama mengenal pasti nama setiap Column supaya AppSheet dapat membaca dan membina struktur jadual aplikasi secara konsisten.',
            },
            {
              q: 'Apakah fungsi Data Type?',
              guide: 'Data Type menentukan jenis maklumat yang boleh disimpan, dipaparkan dan diproses dalam sesuatu Column (cth. Text, Number, Date, Email, Enum, Ref).',
            },
            {
              q: 'Apakah perbezaan antara Text dengan Number?',
              guide: 'Text digunakan untuk menyimpan teks biasa seperti nama dan alamat, manakala Number digunakan untuk menyimpan nombor bagi kuantiti, bilangan atau pengiraan.',
            },
            {
              q: 'Apakah fungsi Key?',
              guide: 'Key ialah Column yang mengenal pasti setiap rekod secara unik dalam jadual untuk mengelakkan kekeliruan, membolehkan kemas kini tepat serta membolehkan hubungan antara jadual.',
            },
            {
              q: 'Mengapakah UNIQUEID() digunakan?',
              guide: 'UNIQUEID() digunakan dalam Initial Value pada Column Key bagi menjana pengecam unik secara automatik setiap kali rekod baharu ditambah.',
            },
            {
              q: 'Apakah perbezaan antara Key dengan Label?',
              guide: 'Key ialah pengenalan unik rekod (biasanya ID), manakala Label ialah nama atau maklumat mesra pengguna yang mewakili rekod tersebut dalam paparan aplikasi.',
            },
            {
              q: 'Apakah fungsi Ref?',
              guide: 'Ref ialah jenis Column yang menghubungkan satu jadual dengan jadual yang lain berdasarkan Key jadual rujukan.',
            },
            {
              q: 'Apakah perbezaan hubungan One-to-One dengan One-to-Many?',
              guide: 'One-to-One (1:1) bermaksud satu rekod jadual pertama mempunyai satu rekod berkaitan di jadual kedua, manakala One-to-Many (1:M) bermaksud satu rekod jadual pertama boleh mempunyai banyak rekod di jadual kedua.',
            },
            {
              q: 'Mengapakah hubungan antara jadual penting dalam pembangunan aplikasi?',
              guide: 'Untuk mengelakkan pertindihan data, memastikan integriti rekod, membolehkan pautan automatik antara rekod berkaitan (cth. pesanan kepada pelanggan) dan memudahkan pengurusan serta pelaporan.',
            },
            {
              q: 'Apakah fungsi Junction Table dalam hubungan Many-to-Many?',
              guide: 'Junction Table (jadual penghubung seperti STUDENT_COURSES) menghubungkan dua jadual yang mempunyai hubungan banyak-ke-banyak supaya setiap pasangan hubungan dapat direkod dengan teratur.',
            },
          ],
        },
      ],
    },
    {
      id: '3.13',
      title: '3.13 AKTIVITI AMALI',
      blocks: [
        { type: 'subheading', text: 'TAJUK: MEMBINA DATABASE SISTEM TEMPAHAN BILIK' },
        { type: 'label', text: 'Arahan:' },
        {
          type: 'ol',
          items: [
            'Bina satu Google Spreadsheet baharu.',
            'Namakan fail FBMS_DATABASE.',
            {
              text: 'Sediakan empat jadual:',
              subitems: ['USERS', 'ROOMS', 'BOOKINGS', 'APPROVALS'],
            },
            'Masukkan semua Column yang telah ditetapkan.',
            'Kenal pasti Key bagi setiap jadual.',
            'Kenal pasti Column yang akan menggunakan Ref.',
            {
              text: 'Masukkan sekurang-kurangnya:',
              subitems: [
                '3 rekod pengguna.',
                '3 rekod bilik.',
                '3 rekod tempahan.',
                '2 rekod kelulusan.',
              ],
            },
            'Semak struktur database sebelum digunakan dalam AppSheet.',
          ],
        },
        { type: 'label', text: 'HASIL YANG PERLU DIHANTAR:' },
        {
          type: 'ul',
          items: [
            'Fail Google Sheets.',
            'Empat jadual yang lengkap.',
            'Rekod contoh.',
            'Senarai Key dan Ref bagi setiap jadual.',
          ],
        },
      ],
    },
    {
      id: '3.14',
      title: '3.14 RUMUSAN MODUL & RUJUKAN RASMI',
      blocks: [
        {
          type: 'p',
          text: 'Google Sheets boleh digunakan sebagai sumber data untuk membina aplikasi menggunakan AppSheet.',
        },
        {
          type: 'p',
          text: 'Pembangun perlu memahami struktur jadual, jenis data, Key, Label dan hubungan antara jadual sebelum memulakan pembangunan aplikasi.',
        },
        {
          type: 'p',
          text: 'Struktur database yang baik akan memudahkan proses pembangunan aplikasi, pengurusan data, penghasilan laporan dan pelaksanaan automasi.',
        },
        {
          type: 'p',
          text: 'Dalam modul seterusnya, peserta akan mula menggunakan database yang telah dibina untuk menghasilkan aplikasi pertama menggunakan Google AppSheet.',
        },
        { type: 'subheading', text: 'RUJUKAN RASMI' },
        {
          type: 'links',
          items: [
            { label: '1. Google Sheets', url: 'https://sheets.google.com/' },
            { label: '2. Google AppSheet', url: 'https://www.appsheet.com/' },
            { label: '3. AppSheet Help', url: 'https://support.google.com/appsheet/' },
            { label: '4. AppSheet Data Documentation', url: 'https://support.google.com/appsheet/topic/10102630' },
          ],
        },
      ],
    },
  ],
};
