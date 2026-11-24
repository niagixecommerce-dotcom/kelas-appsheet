export const module6 = {
  id: 6,
  code: 'MODUL 6',
  title: 'Menguasai AppSheet Expressions dan Formula',
  shortTitle: 'Expressions & Formula',
  subtitle: 'Operator perbandingan, matematik & logik, fungsi asas, IF/IFS, SELECT, FILTER, LOOKUP, ANY, fungsi pengiraan, dereference dan 6 kesilapan lazim.',
  pages: 'Muka surat 64 – 80',
  duration: '90 minit',
  level: 'Intermediate',
  sections: [
    {
      id: '6.1',
      title: '6.1 Pengenalan',
      blocks: [
        {
          type: 'p',
          text: 'AppSheet Expressions ialah formula atau arahan logik yang digunakan untuk mengawal bagaimana aplikasi berfungsi.',
        },
        { type: 'label', text: 'Expressions membolehkan pembangun:' },
        {
          type: 'ul',
          items: [
            'Membuat pengiraan secara automatik.',
            'Menentukan syarat tertentu.',
            'Menapis rekod berdasarkan kriteria.',
            'Mendapatkan maklumat daripada Table lain.',
            'Mengawal paparan sesuatu medan.',
            'Menentukan sama ada sesuatu tindakan dibenarkan.',
            'Menghasilkan nilai secara automatik.',
          ],
        },
        { type: 'label', text: 'Contohnya, dalam Sistem Tempahan Bilik (FBMS), kita boleh menggunakan Expressions untuk:' },
        {
          type: 'ol',
          items: [
            'Mengisi e-mel pengguna secara automatik.',
            'Menentukan status awal tempahan.',
            'Memastikan tarikh tempahan tidak berlaku pada tarikh yang telah berlalu.',
            'Memaparkan hanya tempahan milik pengguna yang sedang log masuk.',
            'Mengira jumlah tempahan.',
            'Mengawal proses kelulusan.',
          ],
        },
      ],
    },
    {
      id: '6.2',
      title: '6.2 Objektif Pembelajaran',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Memahami konsep AppSheet Expressions.',
            'Mengenal pasti fungsi asas Expressions.',
            'Menggunakan operator perbandingan dan logik.',
            'Membina formula menggunakan IF dan IFS.',
            'Menggunakan fungsi SELECT, FILTER dan LOOKUP.',
            'Menggunakan fungsi pengiraan.',
            'Mengawal paparan dan kemasukan data.',
            'Menghasilkan formula berdasarkan situasi sebenar.',
          ],
        },
      ],
    },
    {
      id: '6.3',
      title: '6.3 Di Mana Expressions Digunakan?',
      blocks: [
        { type: 'p', text: 'Expressions boleh digunakan dalam beberapa tetapan AppSheet.' },
        {
          type: 'table',
          title: 'Lokasi & Kegunaan Expressions',
          headers: ['Komponen', 'Kegunaan'],
          rows: [
            ['Initial Value', 'Menetapkan nilai awal'],
            ['App Formula', 'Mengira nilai secara automatik'],
            ['Valid If', 'Menentukan nilai yang dibenarkan'],
            ['Show If', 'Mengawal paparan medan atau komponen'],
            ['Editable If', 'Mengawal kebolehan mengedit'],
            ['Required If', 'Menentukan medan wajib diisi'],
            ['Row Filter Condition', 'Menapis rekod dalam Slice'],
            ['Only If This Condition Is True', 'Mengawal sama ada sesuatu Action boleh dijalankan'],
            ['Format Rules', 'Menentukan keadaan untuk format paparan'],
          ],
        },
        { type: 'code', title: 'Contoh', code: 'USEREMAIL()' },
        { type: 'p', text: 'Formula ini mendapatkan alamat e-mel pengguna yang sedang log masuk.' },
      ],
    },
    {
      id: '6.4',
      title: '6.4 Memahami Operator Asas',
      blocks: [
        { type: 'p', text: 'Operator digunakan untuk membandingkan nilai atau membina pengiraan.' },
        { type: 'subheading', text: 'A. Operator Perbandingan' },
        {
          type: 'table',
          headers: ['Operator', 'Maksud', 'Contoh'],
          rows: [
            ['=', 'Sama dengan', '[Status] = "Approved"'],
            ['<>', 'Tidak sama dengan', '[Status] <> "Rejected"'],
            ['>', 'Lebih besar', '[Age] > 18'],
            ['<', 'Lebih kecil', '[Quantity] < 100'],
            ['>=', 'Lebih besar atau sama', '[Score] >= 50'],
            ['<=', 'Lebih kecil atau sama', '[Price] <= 100'],
          ],
        },
        { type: 'subheading', text: 'B. Operator Matematik' },
        {
          type: 'table',
          headers: ['Operator', 'Fungsi', 'Contoh'],
          rows: [
            ['+', 'Tambah', '[A] + [B]'],
            ['-', 'Tolak', '[A] - [B]'],
            ['*', 'Darab', '[Quantity] * [Price]'],
            ['/', 'Bahagi', '[Total] / [Quantity]'],
          ],
        },
        { type: 'subheading', text: 'C. Operator Logik' },
        {
          type: 'table',
          headers: ['Operator', 'Fungsi'],
          rows: [
            ['AND', 'Semua syarat mesti benar'],
            ['OR', 'Sekurang-kurangnya satu syarat benar'],
            ['NOT', 'Menukar benar kepada palsu atau sebaliknya'],
          ],
        },
        {
          type: 'code',
          title: 'Contoh AND (Kedua-dua syarat mesti dipenuhi)',
          code: 'AND(\n  [Status] = "Pending",\n  [RoomID] = "R001"\n)',
        },
        {
          type: 'code',
          title: 'Contoh OR (Salah satu syarat perlu dipenuhi)',
          code: 'OR(\n  [Status] = "Approved",\n  [Status] = "Pending"\n)',
        },
        {
          type: 'code',
          title: 'Contoh NOT (Benar apabila Status bukan Rejected)',
          code: 'NOT([Status] = "Rejected")',
        },
      ],
    },
    {
      id: '6.5',
      title: '6.5 Fungsi Asas yang Wajib Dikuasai',
      blocks: [
        { type: 'subheading', text: 'A. USEREMAIL()' },
        { type: 'p', text: 'Mendapatkan e-mel pengguna yang sedang log masuk.' },
        { type: 'code', code: 'USEREMAIL()' },
        { type: 'label', text: 'Kegunaan:' },
        {
          type: 'ul',
          items: [
            'Mengisi e-mel pemohon secara automatik.',
            'Menapis rekod mengikut pengguna.',
            'Menentukan akses berdasarkan identiti pengguna.',
          ],
        },
        { type: 'p', text: 'Contoh penggunaan dalam Initial Value: USEREMAIL() — Apabila pengguna membuat tempahan, sistem akan mengisi e-melnya secara automatik.' },

        { type: 'subheading', text: 'B. TODAY()' },
        { type: 'p', text: 'Mendapatkan tarikh semasa.' },
        { type: 'code', title: 'Contoh penggunaan', code: '[BookingDate] >= TODAY()' },
        { type: 'p', text: 'Formula ini memastikan tarikh tempahan tidak lebih awal daripada tarikh hari ini.' },

        { type: 'subheading', text: 'C. NOW()' },
        { type: 'p', text: 'Mendapatkan tarikh dan masa semasa. Boleh digunakan untuk merekodkan masa sesuatu rekod diwujudkan.' },
        { type: 'code', code: 'NOW()' },

        { type: 'subheading', text: 'D. UNIQUEID()' },
        { type: 'p', text: 'Menghasilkan nilai unik untuk mengenal pasti rekod. Sesuai digunakan dalam Initial Value bagi Column Key.' },
        { type: 'code', code: 'UNIQUEID()' },

        { type: 'subheading', text: 'E. ISBLANK()' },
        { type: 'p', text: 'Memeriksa sama ada sesuatu nilai kosong.' },
        { type: 'code', title: 'Menghasilkan TRUE jika Purpose kosong', code: 'ISBLANK([Purpose])' },
        { type: 'code', title: 'Contoh lain — Memastikan UserEmail telah diisi', code: 'NOT(ISBLANK([UserEmail]))' },

        { type: 'subheading', text: 'F. IN()' },
        { type: 'p', text: 'Memeriksa sama ada sesuatu nilai wujud dalam senarai.' },
        { type: 'code', title: 'Menghasilkan TRUE jika Status ialah Pending atau Approved', code: 'IN([Status], {"Pending", "Approved"})' },

        { type: 'subheading', text: 'G. CONTAINS()' },
        { type: 'p', text: 'Memeriksa sama ada teks tertentu terkandung dalam teks lain.' },
        { type: 'code', title: 'Memeriksa sama ada RoomName mengandungi perkataan Makmal', code: 'CONTAINS([RoomName], "Makmal")' },

        { type: 'subheading', text: 'H. TEXT()' },
        { type: 'p', text: 'Menukarkan nilai kepada bentuk teks. Berguna apabila nilai tarikh atau nombor perlu dipaparkan sebagai teks.' },
        { type: 'code', code: 'TEXT([BookingDate])' },
      ],
    },
    {
      id: '6.6',
      title: '6.6 Fungsi IF dan IFS',
      blocks: [
        { type: 'p', text: 'Fungsi IF digunakan untuk membuat keputusan berdasarkan sesuatu syarat.' },
        { type: 'code', title: 'Struktur IF', code: 'IF(condition, value_if_true, value_if_false)' },
        {
          type: 'code',
          title: 'Contoh IF (Markah Lulus / Gagal)',
          code: 'IF(\n  [Score] >= 50,\n  "Lulus",\n  "Gagal"\n)',
        },
        {
          type: 'ul',
          items: [
            'Jika markah 50 atau lebih, paparkan Lulus.',
            'Jika kurang daripada 50, paparkan Gagal.',
          ],
        },
        { type: 'subheading', text: 'Contoh dalam Sistem Tempahan Bilik' },
        { type: 'p', text: 'Katakan kita mahu menentukan status permohonan berdasarkan nilai kelulusan.' },
        {
          type: 'code',
          code: 'IF(\n  [ApprovalStatus] = "Approved",\n  "Tempahan Diluluskan",\n  "Menunggu Kelulusan"\n)',
        },

        { type: 'subheading', text: 'Fungsi IFS' },
        { type: 'p', text: 'IFS digunakan apabila terdapat beberapa syarat.' },
        {
          type: 'code',
          title: 'Struktur IFS',
          code: 'IFS(\n  condition1, result1,\n  condition2, result2,\n  condition3, result3\n)',
        },
        {
          type: 'code',
          title: 'Contoh IFS (Gred Markah)',
          code: 'IFS(\n  [Score] >= 80, "Cemerlang",\n  [Score] >= 65, "Baik",\n  [Score] >= 50, "Lulus",\n  TRUE, "Gagal"\n)',
        },
        { type: 'label', text: 'Maksud:' },
        {
          type: 'ul',
          items: [
            '80 dan ke atas: Cemerlang.',
            '65 hingga 79: Baik.',
            '50 hingga 64: Lulus.',
            'Selain itu: Gagal.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Perhatian',
          text: 'Susunan syarat dalam IFS penting. AppSheet akan menggunakan hasil bagi syarat pertama yang benar.',
        },
      ],
    },
    {
      id: '6.7',
      title: '6.7 Fungsi SELECT()',
      blocks: [
        { type: 'p', text: 'SELECT digunakan untuk mendapatkan senarai nilai daripada sesuatu Table berdasarkan syarat tertentu.' },
        { type: 'code', title: 'Struktur SELECT()', code: 'SELECT(TableName[ColumnName], condition)' },
        {
          type: 'code',
          title: 'Contoh 1: Mendapatkan nama bilik yang mempunyai Availability bernilai Available',
          code: 'SELECT(\n  ROOMS[RoomName],\n  [Availability] = "Available"\n)',
        },
        {
          type: 'code',
          title: 'Contoh 2: Mendapatkan Senarai Tempahan Pengguna',
          code: 'SELECT(\n  BOOKINGS[BookingID],\n  [UserEmail] = USEREMAIL()\n)',
        },
        { type: 'p', text: 'Formula ini mendapatkan senarai BookingID milik pengguna yang sedang log masuk.' },
        {
          type: 'code',
          title: 'Contoh 3: Mendapatkan Tempahan Pending',
          code: 'SELECT(\n  BOOKINGS[BookingID],\n  [Status] = "Pending"\n)',
        },
        { type: 'p', text: 'Formula ini mendapatkan senarai ID tempahan yang masih menunggu kelulusan.' },
        {
          type: 'callout',
          variant: 'important',
          title: 'Nota penting',
          text: 'Dalam SELECT, syarat biasanya dinilai berdasarkan setiap rekod dalam Table yang dirujuk. Oleh itu, rujukan Column dalam syarat perlu difahami berdasarkan konteks Table tersebut.',
        },
      ],
    },
    {
      id: '6.8',
      title: '6.8 Fungsi FILTER()',
      blocks: [
        { type: 'p', text: 'FILTER digunakan untuk mendapatkan senarai Key bagi rekod yang memenuhi sesuatu syarat.' },
        { type: 'code', title: 'Struktur FILTER()', code: 'FILTER("TableName", condition)' },
        {
          type: 'code',
          title: 'Contoh FILTER()',
          code: 'FILTER(\n  "BOOKINGS",\n  [Status] = "Pending"\n)',
        },
        { type: 'p', text: 'Formula ini menghasilkan senarai Key rekod dalam BOOKINGS yang mempunyai Status Pending.' },
        {
          type: 'table',
          title: 'Perbezaan asas SELECT vs FILTER:',
          headers: ['SELECT', 'FILTER'],
          rows: [
            ['Mendapatkan nilai daripada Column tertentu', 'Mendapatkan senarai Key rekod'],
            ['Rujuk Table dan Column', 'Rujuk nama Table'],
            ['Boleh mendapatkan senarai e-mel, ID atau nilai lain', 'Berguna untuk mendapatkan rekod yang memenuhi syarat'],
          ],
        },
      ],
    },
    {
      id: '6.9',
      title: '6.9 Fungsi LOOKUP()',
      blocks: [
        { type: 'p', text: 'LOOKUP digunakan untuk mendapatkan satu nilai daripada Table lain berdasarkan nilai carian.' },
        {
          type: 'code',
          title: 'Struktur LOOKUP()',
          code: 'LOOKUP(\n  search_value,\n  "TableName",\n  "SearchColumn",\n  "ReturnColumn"\n)',
        },
        {
          type: 'code',
          title: 'Contoh LOOKUP()',
          code: 'LOOKUP(\n  [RoomID],\n  "ROOMS",\n  "RoomID",\n  "RoomName"\n)',
        },
        { type: 'label', text: 'Maksud:' },
        {
          type: 'ol',
          items: [
            'Ambil nilai RoomID daripada rekod semasa.',
            'Cari nilai tersebut dalam Column RoomID di Table ROOMS.',
            'Pulangkan nilai RoomName daripada rekod yang sepadan.',
          ],
        },
        {
          type: 'table',
          title: 'Contohnya:',
          headers: ['RoomID', 'RoomName'],
          rows: [
            ['R001', 'Bilik Mesyuarat A'],
            ['R002', 'Makmal Komputer 1'],
          ],
        },
        { type: 'p', text: 'Jika RoomID ialah R001, formula akan memulangkan Bilik Mesyuarat A.' },
      ],
    },
    {
      id: '6.10',
      title: '6.10 Fungsi ANY()',
      blocks: [
        { type: 'p', text: 'ANY digunakan untuk mendapatkan satu nilai daripada senarai atau hasil senarai.' },
        {
          type: 'code',
          title: 'Contoh ANY()',
          code: 'ANY(\n  SELECT(\n    USERS[FullName],\n    [Email] = USEREMAIL()\n  )\n)',
        },
        { type: 'p', text: 'Formula ini mendapatkan satu nama pengguna yang sepadan dengan e-mel pengguna yang sedang log masuk.' },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Perhatian',
          text: 'Pastikan syarat carian menghasilkan rekod yang unik jika anda menjangkakan satu nilai tertentu. Jika terdapat banyak rekod yang sepadan, ANY tidak semestinya memilih rekod berdasarkan susunan yang anda jangkakan.',
        },
      ],
    },
    {
      id: '6.11',
      title: '6.11 Fungsi COUNT(), SUM() dan AVERAGE()',
      blocks: [
        { type: 'p', text: 'Fungsi ini digunakan untuk pengiraan data.' },

        { type: 'subheading', text: 'A. COUNT()' },
        { type: 'p', text: 'Mengira bilangan item dalam senarai.' },
        {
          type: 'code',
          title: 'Formula ini mengira jumlah tempahan yang masih Pending',
          code: 'COUNT(\n  SELECT(\n    BOOKINGS[BookingID],\n    [Status] = "Pending"\n  )\n)',
        },

        { type: 'subheading', text: 'B. SUM()' },
        { type: 'p', text: 'Menjumlahkan semua nilai dalam senarai.' },
        {
          type: 'code',
          title: 'Formula ini menjumlahkan semua transaksi yang telah dibayar',
          code: 'SUM(\n  SELECT(\n    SALES[TotalAmount],\n    [PaymentStatus] = "Paid"\n  )\n)',
        },

        { type: 'subheading', text: 'C. AVERAGE()' },
        { type: 'p', text: 'Mengira nilai purata.' },
        {
          type: 'code',
          title: 'Formula ini mengira purata markah pelajar dalam kelas DIT1',
          code: 'AVERAGE(\n  SELECT(\n    STUDENTS[Score],\n    [Class] = "DIT1"\n  )\n)',
        },

        { type: 'subheading', text: 'D. MAX() dan MIN()' },
        { type: 'p', text: 'MAX mendapatkan nilai paling tinggi. MIN mendapatkan nilai paling rendah.' },
        {
          type: 'code',
          title: 'Contoh MAX() dan MIN()',
          code: 'MAX(BOOKINGS[BookingDate])\nMIN(BOOKINGS[BookingDate])',
        },
        { type: 'p', text: 'Kegunaan bergantung pada jenis data dan konteks pengiraan.' },
      ],
    },
    {
      id: '6.12',
      title: '6.12 Fungsi TEXT(), CONCATENATE() dan TODAY()',
      blocks: [
        { type: 'subheading', text: 'A. CONCATENATE()' },
        { type: 'p', text: 'Menggabungkan beberapa teks.' },
        {
          type: 'code',
          title: 'Contoh CONCATENATE()',
          code: 'CONCATENATE(\n  "Nama Pemohon: ",\n  [FullName],\n  " - ",\n  [Status]\n)',
        },
        { type: 'p', text: 'Contoh hasil: Nama Pemohon: Ali - Pending' },

        { type: 'subheading', text: 'B. TEXT()' },
        { type: 'p', text: 'Menukarkan nilai kepada teks.' },
        { type: 'code', code: 'TEXT([BookingDate])' },

        { type: 'subheading', text: 'C. YEAR(), MONTH() dan DAY()' },
        { type: 'p', text: 'Mendapatkan komponen tarikh.' },
        {
          type: 'code',
          code: 'YEAR([BookingDate])\nMONTH([BookingDate])\nDAY([BookingDate])',
        },
        { type: 'label', text: 'Contoh: Jika BookingDate ialah 20/11/2026:' },
        {
          type: 'ul',
          items: [
            'YEAR menghasilkan 2026.',
            'MONTH menghasilkan 11.',
            'DAY menghasilkan 20.',
          ],
        },
      ],
    },
    {
      id: '6.13',
      title: '6.13 Mengawal Paparan Menggunakan Expressions',
      blocks: [
        { type: 'p', text: 'Expressions boleh digunakan untuk menentukan sama ada sesuatu medan atau komponen perlu dipaparkan.' },

        { type: 'subheading', text: 'A. Show If' },
        { type: 'code', code: '[Status] = "Rejected"' },
        { type: 'p', text: 'Jika digunakan pada medan Catatan Penolakan, medan tersebut hanya dipaparkan apabila Status ialah Rejected.' },

        { type: 'subheading', text: 'B. Editable If' },
        { type: 'code', code: '[Status] = "Pending"' },
        { type: 'p', text: 'Medan hanya boleh diedit apabila status masih Pending.' },

        { type: 'subheading', text: 'C. Required If' },
        { type: 'code', code: '[Status] = "Rejected"' },
        { type: 'p', text: 'Catatan penolakan diwajibkan apabila status permohonan ialah Rejected.' },

        { type: 'subheading', text: 'D. Valid If' },
        { type: 'code', code: '[BookingDate] >= TODAY()' },
        { type: 'p', text: 'Pengguna hanya boleh memilih tarikh hari ini atau tarikh akan datang.' },

        {
          type: 'callout',
          variant: 'important',
          title: 'Peringatan',
          text: 'Show If, Editable If dan Required If membantu mengawal pengalaman pengguna, tetapi bukan pengganti kawalan keselamatan data.',
        },
      ],
    },
    {
      id: '6.14',
      title: '6.14 Contoh Projek: Membina Logik Sistem Tempahan Bilik',
      blocks: [
        { type: 'p', text: 'Dalam bahagian ini, peserta akan membina beberapa Expressions untuk FBMS.' },

        { type: 'subheading', text: 'Tugasan 1: Jana BookingID Secara Automatik' },
        { type: 'p', text: 'Table: BOOKINGS | Column: BookingID | Type: Text | Key: ON | Initial Value:' },
        { type: 'code', code: 'UNIQUEID()' },

        { type: 'subheading', text: 'Tugasan 2: Isi E-mel Pemohon Secara Automatik' },
        { type: 'p', text: 'Column: UserEmail | Initial Value:' },
        { type: 'code', code: 'USEREMAIL()' },
        { type: 'p', text: 'Cadangan: Tetapkan medan ini supaya pengguna tidak boleh mengubah e-mel pemohon secara bebas jika proses sistem memerlukannya.' },

        { type: 'subheading', text: 'Tugasan 3: Tetapkan Tarikh Tempahan' },
        { type: 'p', text: 'Column: BookingDate | Initial Value:' },
        { type: 'code', code: 'TODAY()' },

        { type: 'subheading', text: 'Tugasan 4: Pastikan Tarikh Tidak Berlaku Pada Masa Lalu' },
        { type: 'p', text: 'Column: BookingDate | Valid If:' },
        { type: 'code', code: '[_THIS] >= TODAY()' },

        { type: 'subheading', text: 'Tugasan 5: Tetapkan Status Awal' },
        { type: 'p', text: 'Column: Status | Initial Value:' },
        { type: 'code', code: '"Pending"' },

        { type: 'subheading', text: 'Tugasan 6: Paparkan Catatan Penolakan' },
        { type: 'p', text: 'Column: RejectionReason | Show If & Required If:' },
        { type: 'code', code: '[Status] = "Rejected"' },

        { type: 'subheading', text: 'Tugasan 7: Kira Jumlah Tempahan Pending' },
        {
          type: 'code',
          title: 'Gunakan formula (dalam Virtual Column atau komponen statistik)',
          code: 'COUNT(\n  SELECT(\n    BOOKINGS[BookingID],\n    [Status] = "Pending"\n  )\n)',
        },

        { type: 'subheading', text: 'Tugasan 8: Paparkan Nama Bilik' },
        { type: 'p', text: 'Jika rekod BOOKINGS menyimpan RoomID yang merujuk kepada ROOMS:' },
        { type: 'code', title: 'Dereference Formula', code: '[RoomID].[RoomName]' },
        {
          type: 'p',
          text: 'Formula ini menggunakan dereference untuk mendapatkan RoomName daripada rekod ROOMS yang dirujuk oleh RoomID. Pastikan Column RoomID telah ditetapkan sebagai Ref kepada Table ROOMS.',
        },
      ],
    },
    {
      id: '6.15',
      title: '6.15 Kesilapan Lazim Ketika Menggunakan Expressions',
      blocks: [
        { type: 'subheading', text: 'Kesilapan 1: Nama Column Tidak Tepat' },
        { type: 'code', title: 'Contoh salah (nama sebenar ialah UserEmail)', code: '[User Email] = USEREMAIL()' },
        { type: 'label', text: 'Penyelesaian:' },
        { type: 'ul', items: ['Semak nama Column.', 'Gunakan nama yang tepat.', 'Pilih Column melalui Expression Assistant jika tersedia.'] },

        { type: 'subheading', text: 'Kesilapan 2: Tidak Menggunakan Tanda Petikan' },
        { type: 'code', title: 'Salah vs Betul', code: '// Salah:\n[Status] = Pending\n\n// Betul:\n[Status] = "Pending"' },
        { type: 'p', text: 'Teks perlu diletakkan dalam tanda petikan.' },

        { type: 'subheading', text: 'Kesilapan 3: Jenis Data Tidak Sesuai' },
        { type: 'p', text: 'Contohnya, membandingkan nilai Date dengan teks biasa boleh menghasilkan ralat atau keputusan yang tidak dijangka.' },
        { type: 'ul', items: ['Pastikan Type Column betul.', 'Gunakan fungsi penukaran yang sesuai apabila diperlukan.'] },

        { type: 'subheading', text: 'Kesilapan 4: Kurungan Tidak Lengkap' },
        {
          type: 'code',
          title: 'Contoh Salah vs Betul',
          code: '// Salah (tiada kurungan penutup):\nIF(\n  [Score] >= 50,\n  "Lulus",\n  "Gagal"\n\n// Betul:\nIF(\n  [Score] >= 50,\n  "Lulus",\n  "Gagal"\n)',
        },

        { type: 'subheading', text: 'Kesilapan 5: Formula Menghasilkan Senarai Sedangkan Satu Nilai Diperlukan' },
        {
          type: 'p',
          text: 'Contohnya, SELECT boleh menghasilkan senarai nilai. Jika tetapan memerlukan satu nilai sahaja, pertimbangkan penggunaan ANY atau fungsi lain yang sesuai.',
        },

        { type: 'subheading', text: 'Kesilapan 6: Formula Tidak Mengikut Konteks Table' },
        {
          type: 'p',
          text: 'Formula yang digunakan dalam BOOKINGS mungkin tidak boleh terus digunakan dalam ROOMS tanpa menyesuaikan rujukan Column. Sentiasa semak Table dan konteks formula.',
        },
      ],
    },
    {
      id: '6.16',
      title: '6.16 Latihan Pengukuhan',
      blocks: [
        {
          type: 'quiz_mcq',
          questions: [
            {
              number: 1,
              q: 'Apakah fungsi USEREMAIL()?',
              options: [
                { key: 'A', text: 'Mendapatkan tarikh semasa' },
                { key: 'B', text: 'Mendapatkan e-mel pengguna yang sedang log masuk' },
                { key: 'C', text: 'Menjana ID unik' },
                { key: 'D', text: 'Mengira jumlah rekod' },
              ],
              answer: 'B',
              explanation: 'USEREMAIL() memulangkan alamat e-mel pengguna yang sedang log masuk ke aplikasi.',
            },
            {
              number: 2,
              q: 'Apakah fungsi UNIQUEID()?',
              options: [
                { key: 'A', text: 'Menjana ID unik' },
                { key: 'B', text: 'Mengira purata' },
                { key: 'C', text: 'Menapis rekod' },
                { key: 'D', text: 'Menggabungkan teks' },
              ],
              answer: 'A',
              explanation: 'UNIQUEID() menjana nilai teks pengecam unik secara automatik untuk Column Key.',
            },
            {
              number: 3,
              q: 'Formula manakah yang sesuai untuk memeriksa sama ada Status ialah Approved?',
              options: [
                { key: 'A', text: 'STATUS("Approved")' },
                { key: 'B', text: '[Status] = "Approved"' },
                { key: 'C', text: 'APPROVED([Status])' },
                { key: 'D', text: 'CHECK([Status])' },
              ],
              answer: 'B',
              explanation: 'Nama Column diletakkan dalam kurungan siku [Status] dan teks dibandingkan menggunakan operator = serta tanda petikan "Approved".',
            },
            {
              number: 4,
              q: 'Apakah fungsi SELECT()?',
              options: [
                { key: 'A', text: 'Memadamkan Table' },
                { key: 'B', text: 'Mendapatkan senarai nilai daripada Table berdasarkan syarat' },
                { key: 'C', text: 'Menukar warna paparan' },
                { key: 'D', text: 'Menjana ID secara automatik' },
              ],
              answer: 'B',
              explanation: 'SELECT(TableName[ColumnName], condition) mendapatkan senarai nilai daripada Column tertentu dalam jadual yang memenuhi syarat.',
            },
            {
              number: 5,
              q: 'Apakah fungsi IF()?',
              options: [
                { key: 'A', text: 'Membuat keputusan berdasarkan syarat' },
                { key: 'B', text: 'Mengira jumlah rekod sahaja' },
                { key: 'C', text: 'Menghubungkan dua Table' },
                { key: 'D', text: 'Membina paparan kalendar' },
              ],
              answer: 'A',
              explanation: 'IF(condition, value_if_true, value_if_false) memilih nilai hasil berdasarkan sama ada syarat benar atau palsu.',
            },
            {
              number: 6,
              q: 'Apakah fungsi COUNT()?',
              options: [
                { key: 'A', text: 'Menjumlahkan nilai wang' },
                { key: 'B', text: 'Mengira bilangan item dalam senarai' },
                { key: 'C', text: 'Mendapatkan nilai tertinggi' },
                { key: 'D', text: 'Menukar tarikh kepada teks' },
              ],
              answer: 'B',
              explanation: 'COUNT() mengira berapa banyak elemen atau item yang terdapat dalam sesuatu senarai.',
            },
            {
              number: 7,
              q: 'Formula manakah sesuai untuk mendapatkan tarikh semasa?',
              options: [
                { key: 'A', text: 'NOWDATE()' },
                { key: 'B', text: 'CURRENTDATE()' },
                { key: 'C', text: 'TODAY()' },
                { key: 'D', text: 'DATECURRENT()' },
              ],
              answer: 'C',
              explanation: 'TODAY() memulangkan tarikh semasa, manakala NOW() memulangkan tarikh dan masa semasa.',
            },
            {
              number: 8,
              q: 'Apakah fungsi LOOKUP()?',
              options: [
                { key: 'A', text: 'Mencari nilai berdasarkan kriteria dan memulangkan nilai daripada Column lain' },
                { key: 'B', text: 'Memadamkan rekod' },
                { key: 'C', text: 'Menukar warna aplikasi' },
                { key: 'D', text: 'Menjana nombor rawak' },
              ],
              answer: 'A',
              explanation: 'LOOKUP(search_value, "TableName", "SearchColumn", "ReturnColumn") mencari nilai yang sepadan dalam jadual lain dan memulangkan nilai daripada Column sasaran.',
            },
          ],
        },
      ],
    },
    {
      id: '6.17',
      title: '6.17 Tugasan Amali',
      blocks: [
        { type: 'p', text: 'Peserta perlu melengkapkan tugasan berikut dalam aplikasi FBMS:' },
        {
          type: 'ol',
          items: [
            'Jana BookingID menggunakan UNIQUEID().',
            'Isi UserEmail menggunakan USEREMAIL().',
            'Isi BookingDate menggunakan TODAY().',
            'Tetapkan Status awal kepada Pending.',
            'Pastikan BookingDate tidak boleh lebih awal daripada tarikh semasa.',
            'Paparkan RejectionReason apabila Status ialah Rejected.',
            'Wajibkan RejectionReason apabila Status ialah Rejected.',
            'Kira jumlah tempahan Pending menggunakan COUNT() dan SELECT().',
            'Paparkan RoomName melalui hubungan Ref.',
            'Uji semua formula menggunakan Preview aplikasi.',
          ],
        },
      ],
    },
    {
      id: '6.18',
      title: '6.18 Ringkasan Modul',
      blocks: [
        { type: 'p', text: 'Dalam modul ini, peserta telah mempelajari:' },
        {
          type: 'ol',
          items: [
            'Konsep AppSheet Expressions.',
            'Operator perbandingan, matematik dan logik.',
            'Fungsi asas seperti USEREMAIL(), TODAY(), NOW() dan UNIQUEID().',
            'Fungsi keputusan seperti IF() dan IFS().',
            'Fungsi carian dan penapisan seperti SELECT(), FILTER() dan LOOKUP().',
            'Fungsi senarai seperti ANY().',
            'Fungsi pengiraan seperti COUNT(), SUM(), AVERAGE(), MAX() dan MIN().',
            'Kawalan paparan menggunakan Show If, Editable If, Required If dan Valid If.',
          ],
        },
        { type: 'p', text: 'Expressions ialah asas kepada pembangunan aplikasi yang lebih pintar dan dinamik.' },
      ],
    },
    {
      id: '6.19',
      title: '6.19 Hasil Pembelajaran Modul',
      blocks: [
        { type: 'p', text: 'Peserta dianggap menguasai modul ini apabila berjaya:' },
        {
          type: 'ul',
          items: [
            'Menggunakan sekurang-kurangnya lima fungsi AppSheet.',
            'Membina formula IF dan IFS.',
            'Menggunakan SELECT untuk mendapatkan rekod berdasarkan syarat.',
            'Membina formula pengiraan.',
            'Mengawal paparan dan kemasukan data.',
            'Menyelesaikan masalah formula asas.',
            'Mengaplikasikan Expressions dalam Sistem Tempahan Bilik.',
          ],
        },
      ],
    },
  ],
};
