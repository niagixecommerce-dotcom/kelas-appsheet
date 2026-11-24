export const module4 = {
  id: 4,
  code: 'MODUL 4',
  title: 'Membina Aplikasi Pertama Menggunakan Google AppSheet',
  shortTitle: 'Bina Aplikasi Pertama',
  subtitle: 'Panduan lengkap langkah demi langkah membina aplikasi FBMS dari Google Sheets, menyemak Table, menetapkan UNIQUEID(), Ref, Preview, Save dan menyelesaikan 5 masalah lazim.',
  pages: 'Muka surat 31 – 44',
  duration: '60 minit',
  level: 'Beginner',
  sections: [
    {
      id: '4.1',
      title: '4.1 OBJEKTIF PEMBELAJARAN',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Mengakses platform Google AppSheet.',
            'Membina aplikasi baharu menggunakan Google Sheets.',
            'Menyambungkan sumber data kepada AppSheet.',
            'Memahami proses penjanaan aplikasi secara automatik.',
            'Mengenali struktur asas AppSheet Editor.',
            'Mengurus jadual dan Column dalam aplikasi.',
            'Membuat perubahan pada aplikasi.',
            'Menguji aplikasi menggunakan fungsi Preview.',
            'Menyimpan dan mengakses aplikasi yang telah dibangunkan.',
          ],
        },
      ],
    },
    {
      id: '4.2',
      title: '4.2 PENGENALAN KEPADA APPSHEET EDITOR',
      blocks: [
        {
          type: 'p',
          text: 'AppSheet Editor ialah persekitaran pembangunan aplikasi yang membolehkan pengguna mengkonfigurasi dan mengurus aplikasi.',
        },
        { type: 'label', text: 'Melalui editor ini, pembangun boleh:' },
        {
          type: 'ul',
          items: [
            'Menambah sumber data.',
            'Mengurus jadual.',
            'Mengubah jenis data.',
            'Menghasilkan paparan aplikasi.',
            'Mengurus borang.',
            'Membina tindakan.',
            'Mengkonfigurasi automasi.',
            'Menetapkan keselamatan aplikasi.',
            'Menguji aplikasi.',
          ],
        },
        {
          type: 'links',
          items: [{ label: 'Untuk mengakses AppSheet, layari', url: 'https://www.appsheet.com/' }],
        },
        {
          type: 'p',
          text: 'Log masuk menggunakan akaun Google yang mempunyai akses kepada Google Sheets yang ingin digunakan.',
        },
      ],
    },
    {
      id: '4.3',
      title: '4.3 KAEDAH MEMBINA APLIKASI DALAM APPSHEET',
      blocks: [
        { type: 'p', text: 'Terdapat beberapa pendekatan untuk memulakan pembangunan aplikasi.' },

        { type: 'subheading', text: 'A. START WITH EXISTING DATA' },
        {
          type: 'p',
          text: 'Kaedah ini membolehkan pengguna membina aplikasi berdasarkan sumber data yang telah tersedia.',
        },
        { type: 'label', text: 'Contoh:' },
        { type: 'ul', items: ['Google Sheets.', 'Microsoft Excel.', 'Sumber data lain yang disokong.'] },
        { type: 'p', text: 'Kaedah ini sesuai digunakan apabila pengguna telah menyediakan database terlebih dahulu.' },

        { type: 'subheading', text: 'B. START WITH A TEMPLATE' },
        {
          type: 'p',
          text: 'Pengguna boleh menggunakan templat aplikasi yang telah disediakan sebagai asas pembangunan.',
        },
        { type: 'p', text: 'Templat boleh membantu pengguna memahami struktur dan fungsi aplikasi.' },

        { type: 'subheading', text: 'C. START WITH AN IDEA' },
        {
          type: 'p',
          text: 'Pengguna boleh menerangkan idea aplikasi yang ingin dibina dan menggunakan bantuan AI AppSheet untuk membantu menghasilkan struktur awal aplikasi.',
        },
        {
          type: 'p',
          text: 'Ketersediaan dan paparan pilihan ini mungkin berubah mengikut versi editor serta akaun pengguna.',
        },
      ],
    },
    {
      id: '4.4',
      title: '4.4 PROJEK AMALI: MEMBINA APLIKASI FBMS',
      blocks: [
        { type: 'label', text: 'Nama projek:' },
        { type: 'p', text: 'FACILITY BOOKING MANAGEMENT SYSTEM' },
        { type: 'label', text: 'Tujuan:' },
        { type: 'p', text: 'Membangunkan aplikasi untuk mengurus tempahan bilik dan kemudahan organisasi.' },
        { type: 'label', text: 'Database yang digunakan:' },
        { type: 'code', code: 'FBMS_DATABASE' },
        { type: 'label', text: 'Jadual yang telah disediakan:' },
        { type: 'ol', items: ['USERS', 'ROOMS', 'BOOKINGS', 'APPROVALS'] },
      ],
    },
    {
      id: '4.5',
      title: '4.5 LANGKAH 1: AKSES GOOGLE APPSHEET',
      blocks: [
        {
          type: 'ol',
          items: [
            'Buka pelayar web.',
            'Layari https://www.appsheet.com/',
            'Klik Sign In jika belum log masuk.',
            'Pilih akaun Google.',
            'Berikan kebenaran akses yang diperlukan.',
            'Pastikan pengguna berjaya memasuki AppSheet.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Peringatan',
          text: 'Pastikan akaun Google yang digunakan mempunyai akses kepada fail FBMS_DATABASE.',
        },
      ],
    },
    {
      id: '4.6',
      title: '4.6 LANGKAH 2: MEMBINA APLIKASI BAHARU',
      blocks: [
        {
          type: 'ol',
          items: [
            'Pada halaman utama AppSheet, cari pilihan untuk menghasilkan aplikasi baharu.',
            'Pilih Create atau pilihan New App yang tersedia.',
            'Pilih kaedah Start with existing data.',
            'Berikan nama aplikasi: FBMS - FACILITY BOOKING MANAGEMENT SYSTEM',
            'Pilih kategori yang sesuai jika diminta.',
            'Pilih sumber data Google Sheets.',
            'Cari fail FBMS_DATABASE dalam Google Drive.',
            'Pilih fail tersebut.',
            'Teruskan proses penciptaan aplikasi.',
          ],
        },
        { type: 'p', text: 'AppSheet akan membaca struktur data dan cuba menghasilkan aplikasi secara automatik.' },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Nama butang dan susunan menu mungkin berbeza mengikut versi AppSheet Editor.',
        },
      ],
    },
    {
      id: '4.7',
      title: '4.7 LANGKAH 3: MEMAHAMI PROSES AUTO-GENERATION',
      blocks: [
        {
          type: 'p',
          text: 'Apabila sumber data berjaya disambungkan, AppSheet akan menganalisis struktur jadual.',
        },
        { type: 'label', text: 'Sistem akan cuba mengenal pasti:' },
        {
          type: 'ul',
          items: [
            'Nama jadual.',
            'Nama Column.',
            'Jenis data.',
            'Key.',
            'Label.',
            'Struktur hubungan data.',
            'Paparan asas aplikasi.',
          ],
        },
        { type: 'p', text: 'Berdasarkan struktur tersebut, AppSheet akan menghasilkan aplikasi awal.' },
        {
          type: 'callout',
          variant: 'important',
          title: 'PENTING',
          text: 'Auto-generation tidak bermaksud aplikasi telah siap sepenuhnya. Pembangun masih perlu menyemak dan membetulkan konfigurasi yang dijana secara automatik.',
        },
        { type: 'label', text: 'Antara perkara yang perlu diperiksa:' },
        {
          type: 'ol',
          items: [
            'Key setiap jadual.',
            'Label setiap jadual.',
            'Data Type.',
            'Hubungan Ref.',
            'Susunan paparan.',
            'Borang kemasukan data.',
            'Kebenaran pengguna.',
          ],
        },
      ],
    },
    {
      id: '4.8',
      title: '4.8 LANGKAH 4: MEMAHAMI APPSHEET EDITOR',
      blocks: [
        { type: 'p', text: 'AppSheet Editor mempunyai beberapa bahagian utama untuk mengurus aplikasi.' },

        { type: 'subheading', text: 'A. DATA' },
        { type: 'p', text: 'Bahagian Data digunakan untuk mengurus sumber data dan struktur jadual.' },
        { type: 'label', text: 'Fungsi utama:' },
        {
          type: 'ul',
          items: [
            'Melihat senarai jadual.',
            'Menambah jadual.',
            'Mengurus Column.',
            'Menentukan Data Type.',
            'Menetapkan Key.',
            'Menetapkan Label.',
            'Mengurus hubungan Ref.',
            'Menetapkan konfigurasi data.',
          ],
        },

        { type: 'subheading', text: 'B. APP' },
        { type: 'p', text: 'Bahagian ini digunakan untuk mengurus reka bentuk dan paparan aplikasi.' },
        { type: 'label', text: 'Antara perkara yang boleh dikonfigurasikan:' },
        {
          type: 'ul',
          items: [
            'Views.',
            'Navigation.',
            'Dashboard.',
            'Paparan utama.',
            'Susunan menu.',
            'Konfigurasi paparan pengguna.',
          ],
        },

        { type: 'subheading', text: 'C. ACTIONS' },
        { type: 'p', text: 'Bahagian Actions digunakan untuk menghasilkan tindakan yang boleh dilakukan oleh pengguna.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Meluluskan tempahan.',
            'Menolak permohonan.',
            'Membuka paparan tertentu.',
            'Mengemas kini status rekod.',
          ],
        },

        { type: 'subheading', text: 'D. AUTOMATION' },
        { type: 'p', text: 'Bahagian Automation digunakan untuk membina proses automatik.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Menghantar e-mel.',
            'Menghasilkan dokumen.',
            'Menghantar pemberitahuan.',
            'Melaksanakan proses apabila rekod baharu dimasukkan.',
          ],
        },

        { type: 'subheading', text: 'E. SECURITY' },
        { type: 'p', text: 'Bahagian Security digunakan untuk mengurus keselamatan aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Pengesahan pengguna.',
            'Keperluan log masuk.',
            'Kawalan akses.',
            'Security Filters.',
          ],
        },

        { type: 'subheading', text: 'F. SETTINGS' },
        { type: 'p', text: 'Bahagian Settings digunakan untuk mengurus konfigurasi aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Nama aplikasi.',
            'Penerangan aplikasi.',
            'Identiti visual.',
            'Konfigurasi paparan.',
            'Tetapan penggunaan.',
          ],
        },

        { type: 'subheading', text: 'G. INTELLIGENCE' },
        {
          type: 'p',
          text: 'Bahagian Intelligence menyediakan fungsi berkaitan pemprosesan maklumat dan keupayaan pintar yang disokong oleh AppSheet. Fungsi yang tersedia bergantung pada ciri dan pelan penggunaan.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Susunan menu dan nama seksyen mungkin berubah mengikut kemas kini platform.',
        },
      ],
    },
    {
      id: '4.9',
      title: '4.9 LANGKAH 5: MENYEMAK TABLE',
      blocks: [
        { type: 'p', text: 'Selepas aplikasi berjaya dijana:' },
        {
          type: 'ol',
          items: [
            'Buka bahagian Data.',
            'Pilih jadual USERS.',
            'Semak semua Column.',
            'Pastikan nama Column adalah betul.',
            'Semak Data Type.',
            'Pastikan UserID ditetapkan sebagai Key.',
            'Tetapkan UserName sebagai Label.',
            'Ulang proses bagi jadual ROOMS.',
            'Ulang proses bagi jadual BOOKINGS.',
            'Ulang proses bagi jadual APPROVALS.',
          ],
        },
        {
          type: 'table',
          title: 'Contoh konfigurasi — TABLE: USERS',
          headers: ['Column', 'Data Type', 'Tetapan'],
          rows: [
            ['UserID', 'Text', 'Key'],
            ['UserName', 'Name', 'Label'],
            ['Email', 'Email', '-'],
            ['Phone', 'Phone', '-'],
            ['UserRole', 'Enum', '-'],
            ['Department', 'Text', '-'],
            ['IsActive', 'Yes/No', '-'],
          ],
        },
        { type: 'p', text: 'Pastikan tetapan Key dan Label dibuat dengan betul.' },
      ],
    },
    {
      id: '4.10',
      title: '4.10 LANGKAH 6: MENETAPKAN UNIQUEID()',
      blocks: [
        { type: 'p', text: 'Untuk memastikan setiap rekod mempunyai pengecam unik, gunakan fungsi UNIQUEID().' },
        {
          type: 'code',
          title: 'Contoh: Jadual USERS → Column UserID',
          code: 'Type: Text\nKey: ON\nInitial Value: UNIQUEID()',
        },
        { type: 'label', text: 'Langkah:' },
        {
          type: 'ol',
          items: [
            'Buka Data.',
            'Pilih USERS.',
            'Pilih Column UserID.',
            'Pastikan Type ialah Text.',
            'Aktifkan pilihan Key.',
            'Masukkan UNIQUEID() dalam ruangan Initial Value.',
            'Simpan konfigurasi.',
          ],
        },
        { type: 'label', text: 'Ulang proses untuk:' },
        { type: 'ul', items: ['RoomID.', 'BookingID.', 'ApprovalID.'] },
        {
          type: 'callout',
          variant: 'important',
          title: 'PENTING',
          text: 'Jika database telah mempunyai rekod sedia ada, pastikan semua rekod tersebut mempunyai nilai Key yang unik sebelum mengaktifkan konfigurasi ini. Initial Value digunakan untuk menjana nilai apabila rekod baharu diwujudkan. Ia bukan fungsi yang secara automatik membetulkan semua rekod lama.',
        },
      ],
    },
    {
      id: '4.11',
      title: '4.11 LANGKAH 7: MENETAPKAN REF',
      blocks: [
        { type: 'p', text: 'Sekarang kita akan menghubungkan jadual.' },
        { type: 'subheading', text: 'A. REF USERID' },
        {
          type: 'ol',
          items: [
            'Buka jadual BOOKINGS.',
            'Cari Column UserID.',
            'Tukar Data Type kepada Ref.',
            'Pilih jadual rujukan USERS.',
            'Simpan konfigurasi.',
          ],
        },
        { type: 'subheading', text: 'B. REF ROOMID' },
        {
          type: 'ol',
          items: [
            'Buka jadual BOOKINGS.',
            'Cari Column RoomID.',
            'Tukar Data Type kepada Ref.',
            'Pilih jadual rujukan ROOMS.',
            'Simpan konfigurasi.',
          ],
        },
        { type: 'subheading', text: 'C. REF BOOKINGID' },
        {
          type: 'ol',
          items: [
            'Buka jadual APPROVALS.',
            'Cari Column BookingID.',
            'Tukar Data Type kepada Ref.',
            'Pilih jadual rujukan BOOKINGS.',
            'Simpan konfigurasi.',
          ],
        },
        {
          type: 'p',
          text: 'Selepas hubungan ini ditetapkan, AppSheet boleh menghubungkan rekod antara jadual berdasarkan Key yang digunakan.',
        },
      ],
    },
    {
      id: '4.12',
      title: '4.12 LANGKAH 8: MENGUJI APLIKASI MELALUI PREVIEW',
      blocks: [
        {
          type: 'p',
          text: 'AppSheet menyediakan fungsi Preview untuk membolehkan pembangun melihat paparan aplikasi semasa proses pembangunan.',
        },
        { type: 'label', text: 'Langkah:' },
        {
          type: 'ol',
          items: [
            'Cari bahagian Preview dalam AppSheet Editor.',
            'Pilih paparan telefon jika diperlukan.',
            'Perhatikan paparan utama aplikasi.',
            'Cuba membuka senarai USERS.',
            'Cuba membuka senarai ROOMS.',
            'Cuba melihat rekod BOOKINGS.',
            'Cuba membuka borang baharu.',
            'Periksa sama ada maklumat dipaparkan dengan betul.',
          ],
        },
        { type: 'label', text: 'Perkara yang perlu diperiksa:' },
        {
          type: 'ul',
          items: [
            'Adakah nama jadual dipaparkan?',
            'Adakah rekod berjaya dipaparkan?',
            'Adakah borang berfungsi?',
            'Adakah pilihan Ref menunjukkan maklumat yang betul?',
            'Adakah paparan sesuai digunakan pada telefon?',
          ],
        },
        {
          type: 'callout',
          variant: 'important',
          title: 'PENTING',
          text: 'Preview digunakan untuk menguji pengalaman pengguna. Ia tidak menggantikan ujian keselamatan, penyegerakan data dan ujian aplikasi sebenar.',
        },
      ],
    },
    {
      id: '4.13',
      title: '4.13 LANGKAH 9: MENYIMPAN PERUBAHAN',
      blocks: [
        { type: 'p', text: 'Selepas membuat perubahan pada konfigurasi aplikasi:' },
        {
          type: 'ol',
          items: [
            'Semak semula perubahan.',
            'Klik Save jika diperlukan.',
            'Tunggu proses penyimpanan selesai.',
            'Semak mesej ralat atau amaran.',
            'Pastikan aplikasi tidak mempunyai konfigurasi kritikal yang belum diselesaikan.',
          ],
        },
        { type: 'p', text: 'AppSheet lazimnya menyediakan fungsi penyimpanan perubahan melalui editor.' },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Peringatan',
          text: 'Jangan anggap aplikasi telah sedia digunakan hanya kerana perubahan berjaya disimpan.',
        },
      ],
    },
    {
      id: '4.14',
      title: '4.14 LANGKAH 10: UJIAN KEMASUKAN DATA',
      blocks: [
        { type: 'p', text: 'Sekarang kita akan menguji fungsi kemasukan data.' },
        { type: 'subheading', text: 'Ujian pertama: USERS' },
        {
          type: 'ol',
          items: [
            'Buka paparan USERS.',
            'Pilih butang tambah rekod.',
            'Masukkan nama pengguna.',
            'Masukkan alamat e-mel.',
            'Masukkan nombor telefon.',
            'Pilih UserRole.',
            'Masukkan Department.',
            'Tetapkan status aktif.',
            'Simpan rekod.',
          ],
        },
        { type: 'subheading', text: 'Ujian kedua: ROOMS' },
        {
          type: 'ol',
          items: [
            'Buka paparan ROOMS.',
            'Tambah rekod baharu.',
            'Masukkan nama bilik.',
            'Masukkan lokasi.',
            'Masukkan kapasiti.',
            'Pilih kemudahan.',
            'Tetapkan status bilik.',
            'Simpan rekod.',
          ],
        },
        { type: 'subheading', text: 'Ujian ketiga: BOOKINGS' },
        {
          type: 'ol',
          items: [
            'Buka paparan BOOKINGS.',
            'Tambah rekod baharu.',
            'Pilih pengguna.',
            'Pilih bilik.',
            'Pilih tarikh tempahan.',
            'Masukkan masa mula.',
            'Masukkan masa tamat.',
            'Masukkan tujuan tempahan.',
            'Simpan rekod.',
          ],
        },
        {
          type: 'p',
          text: 'Pastikan pilihan UserID dan RoomID memaparkan rekod daripada jadual USERS dan ROOMS.',
        },
      ],
    },
    {
      id: '4.15',
      title: '4.15 MASALAH LAZIM SEMASA MEMBINA APLIKASI',
      blocks: [
        { type: 'subheading', text: 'MASALAH 1: DATA TIDAK DIPAPARKAN' },
        { type: 'label', text: 'Kemungkinan punca:' },
        {
          type: 'ul',
          items: [
            'Jadual belum disambungkan.',
            'Nama Sheet tidak betul.',
            'Struktur Header tidak konsisten.',
            'Pengguna tiada akses kepada sumber data.',
          ],
        },
        { type: 'p', text: 'Penyelesaian: Semak sumber data dan konfigurasi jadual.' },

        { type: 'subheading', text: 'MASALAH 2: KEY TIDAK DIKENAL PASTI' },
        { type: 'label', text: 'Kemungkinan punca:' },
        {
          type: 'ul',
          items: [
            'Tiada Column yang unik.',
            'Terdapat nilai Key berulang.',
            'Terdapat nilai Key kosong.',
          ],
        },
        {
          type: 'p',
          text: 'Penyelesaian: Gunakan Column yang mempunyai nilai unik dan pastikan semua rekod mempunyai Key.',
        },

        { type: 'subheading', text: 'MASALAH 3: REF TIDAK BERFUNGSI' },
        { type: 'label', text: 'Kemungkinan punca:' },
        {
          type: 'ul',
          items: [
            'Column Ref menggunakan jenis data yang salah.',
            'Jadual rujukan tidak betul.',
            'Nilai Ref tidak sepadan dengan Key jadual induk.',
          ],
        },
        { type: 'p', text: 'Penyelesaian: Semak jenis data dan jadual rujukan.' },

        { type: 'subheading', text: 'MASALAH 4: APLIKASI TIDAK BERJAYA DI-SAVE' },
        { type: 'label', text: 'Kemungkinan punca:' },
        {
          type: 'ul',
          items: [
            'Terdapat konfigurasi yang tidak lengkap.',
            'Terdapat masalah sambungan.',
            'Terdapat ralat dalam Expression.',
          ],
        },
        {
          type: 'p',
          text: 'Penyelesaian: Semak mesej ralat yang dipaparkan oleh AppSheet Editor dan baiki konfigurasi berkaitan.',
        },

        { type: 'subheading', text: 'MASALAH 5: DATA TIDAK DIKEMAS KINI' },
        { type: 'label', text: 'Kemungkinan punca:' },
        {
          type: 'ul',
          items: [
            'Data belum disegerakkan.',
            'Pengguna tidak mempunyai kebenaran mengemas kini.',
            'Konfigurasi Column tidak membenarkan perubahan.',
          ],
        },
        { type: 'p', text: 'Penyelesaian: Semak tetapan kemasukan data dan jalankan proses Sync.' },
      ],
    },
    {
      id: '4.16',
      title: '4.16 LATIHAN PENGUKUHAN',
      blocks: [
        {
          type: 'quiz_open',
          intro: 'Jawab soalan berikut:',
          questions: [
            {
              q: 'Apakah fungsi AppSheet Editor?',
              guide: 'AppSheet Editor ialah persekitaran pembangunan aplikasi untuk mengkonfigurasi dan mengurus sumber data, jadual, jenis data, paparan, borang, tindakan, automasi, keselamatan dan pengujian aplikasi.',
            },
            {
              q: 'Apakah perbezaan Start with Existing Data dengan Start with a Template?',
              guide: 'Start with Existing Data membina aplikasi daripada sumber data sedia ada (cth. Google Sheets/Excel yang telah dibina), manakala Start with a Template menggunakan templat aplikasi sedia ada sebagai asas pembangunan.',
            },
            {
              q: 'Apakah fungsi bahagian Data?',
              guide: 'Mengurus sumber data dan struktur jadual termasuk melihat/menambah jadual, mengurus Column, menentukan Data Type, menetapkan Key, Label, Ref dan konfigurasi data.',
            },
            {
              q: 'Apakah fungsi bahagian Actions?',
              guide: 'Menghasilkan tindakan yang boleh dilakukan oleh pengguna dalam aplikasi seperti meluluskan tempahan, menolak permohonan, membuka paparan tertentu dan mengemas kini status rekod.',
            },
            {
              q: 'Apakah fungsi bahagian Automation?',
              guide: 'Membina proses automatik seperti menghantar e-mel, menghasilkan dokumen, menghantar pemberitahuan dan melaksanakan proses apabila rekod baharu dimasukkan.',
            },
            {
              q: 'Mengapakah kita perlu menyemak Key selepas aplikasi dijana?',
              guide: 'Kerana proses auto-generation tidak semestinya memilih Key yang tepat; Key mesti unik, tidak kosong, dan konsisten supaya rekod dapat dikenal pasti dan dihubungkan melalui Ref.',
            },
            {
              q: 'Apakah fungsi Preview?',
              guide: 'Membolehkan pembangun melihat dan menguji paparan aplikasi, borang, senarai dan pengalaman pengguna (termasuk paparan telefon) semasa proses pembangunan.',
            },
            {
              q: 'Apakah fungsi Ref dalam jadual BOOKINGS?',
              guide: 'Menghubungkan jadual BOOKINGS kepada jadual USERS (melalui UserID) dan jadual ROOMS (melalui RoomID) supaya setiap tempahan dikaitkan dengan pengguna dan bilik yang betul.',
            },
            {
              q: 'Mengapakah ujian kemasukan data perlu dilakukan?',
              guide: 'Untuk memastikan borang berfungsi dengan baik, nilai Key/Ref dipaparkan dengan betul, dan rekod baharu berjaya disimpan serta disegerakkan ke Google Sheets.',
            },
            {
              q: 'Apakah tindakan yang perlu dilakukan apabila aplikasi gagal memaparkan data?',
              guide: 'Semak sama ada jadual telah disambungkan, pastikan nama Sheet betul, struktur Header konsisten pada baris pertama dan pengguna mempunyai akses kepada sumber data.',
            },
          ],
        },
      ],
    },
    {
      id: '4.17',
      title: '4.17 AKTIVITI AMALI',
      blocks: [
        { type: 'subheading', text: 'TAJUK: MEMBINA APLIKASI PERTAMA FBMS' },
        { type: 'label', text: 'Arahan:' },
        {
          type: 'ol',
          items: [
            'Buka Google AppSheet.',
            'Log masuk menggunakan akaun Google.',
            'Pilih Start with Existing Data.',
            'Pilih fail FBMS_DATABASE.',
            'Bina aplikasi baharu.',
            'Semak empat jadual yang telah dijana.',
            'Tetapkan Key dan Label.',
            'Tetapkan hubungan Ref.',
            'Uji paparan setiap jadual.',
            'Tambah sekurang-kurangnya satu rekod baharu.',
            'Pastikan rekod berjaya disimpan dalam sumber data.',
            'Uji aplikasi melalui Preview.',
          ],
        },
        { type: 'label', text: 'HASIL YANG PERLU DIHANTAR:' },
        {
          type: 'ul',
          items: [
            'Aplikasi FBMS yang berjaya dijana.',
            'Empat jadual yang disambungkan.',
            'Konfigurasi Key dan Label.',
            'Konfigurasi Ref.',
            'Bukti paparan aplikasi.',
            'Bukti kemasukan rekod baharu.',
          ],
        },
      ],
    },
    {
      id: '4.18',
      title: '4.18 SENARAI SEMAK PEMBANGUNAN',
      blocks: [
        {
          type: 'checklist',
          id: 'mod4_checklist',
          intro: 'Tandakan setiap perkara selepas selesai:',
          groups: [
            {
              title: 'Senarai Semak Aplikasi Pertama FBMS',
              items: [
                'Berjaya mengakses Google AppSheet.',
                'Berjaya menghasilkan aplikasi baharu.',
                'Berjaya menyambungkan Google Sheets.',
                'Berjaya memaparkan jadual USERS.',
                'Berjaya memaparkan jadual ROOMS.',
                'Berjaya memaparkan jadual BOOKINGS.',
                'Berjaya memaparkan jadual APPROVALS.',
                'Berjaya menetapkan Key.',
                'Berjaya menetapkan Label.',
                'Berjaya menetapkan Ref.',
                'Berjaya menguji Preview.',
                'Berjaya memasukkan rekod baharu.',
                'Berjaya menyemak rekod dalam Google Sheets.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: '4.19',
      title: '4.19 RUMUSAN MODUL & RUJUKAN RASMI',
      blocks: [
        {
          type: 'p',
          text: 'Dalam modul ini, peserta telah mempelajari proses asas membangunkan aplikasi menggunakan Google AppSheet.',
        },
        {
          type: 'p',
          text: 'Peserta telah diperkenalkan kepada AppSheet Editor, proses menyambungkan sumber data, konfigurasi jadual, penetapan Key dan Label serta pembinaan hubungan antara jadual menggunakan Ref.',
        },
        {
          type: 'p',
          text: 'Peserta juga telah mempelajari cara menguji aplikasi melalui Preview dan melakukan ujian kemasukan data.',
        },
        { type: 'p', text: 'Pengetahuan ini menjadi asas kepada pembangunan aplikasi yang lebih kompleks.' },
        {
          type: 'p',
          text: 'Dalam modul seterusnya, peserta akan mempelajari dengan lebih mendalam struktur AppSheet Editor, konfigurasi Table, Column dan pelbagai tetapan penting yang mempengaruhi cara aplikasi berfungsi.',
        },
        { type: 'subheading', text: 'RUJUKAN RASMI' },
        {
          type: 'links',
          items: [
            { label: '1. Google AppSheet', url: 'https://www.appsheet.com/' },
            { label: '2. AppSheet Help', url: 'https://support.google.com/appsheet/' },
            { label: '3. AppSheet Data', url: 'https://support.google.com/appsheet/answer/10106618' },
          ],
        },
      ],
    },
  ],
};
