export const module2 = {
  id: 2,
  code: 'MODUL 2',
  title: 'Kegunaan, Fungsi dan Ekosistem Google AppSheet',
  shortTitle: 'Fungsi & Ekosistem',
  subtitle: 'Mendalami operasi CRUD, borang digital, visualisasi data, automasi, actions, keselamatan, ekosistem Google dan kajian kes.',
  pages: 'Muka surat 5 – 14',
  duration: '45 minit',
  level: 'Beginner',
  sections: [
    {
      id: '2.1',
      title: '2.1 OBJEKTIF PEMBELAJARAN',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Mengenal pasti fungsi utama Google AppSheet.',
            'Memahami komponen dan ekosistem pembangunan AppSheet.',
            'Menjelaskan bagaimana AppSheet membantu mengurus proses kerja organisasi.',
            'Memahami jenis data yang boleh digunakan dalam aplikasi.',
            'Mengenal pasti fungsi asas dan lanjutan AppSheet.',
            'Membezakan aplikasi mudah dengan aplikasi yang mempunyai aliran kerja automatik.',
            'Mengenal pasti batasan dan perkara yang perlu dipertimbangkan sebelum membangunkan aplikasi.',
          ],
        },
      ],
    },
    {
      id: '2.2',
      title: '2.2 FUNGSI UTAMA GOOGLE APPSHEET',
      blocks: [
        {
          type: 'p',
          text: 'Google AppSheet menyediakan pelbagai fungsi yang membolehkan pengguna membina aplikasi untuk menyelesaikan masalah pengurusan dan operasi organisasi.',
        },
        { type: 'p', text: 'Antara fungsi utamanya ialah:' },

        { type: 'subheading', text: 'A. DATA MANAGEMENT (PENGURUSAN DATA)' },
        {
          type: 'p',
          text: 'Fungsi ini membolehkan pengguna menyimpan, membaca, mengemas kini dan memadam rekod melalui aplikasi.',
        },
        { type: 'p', text: 'Empat operasi asas pengurusan data dikenali sebagai CRUD:' },
        {
          type: 'ol',
          items: [
            'Create – Menambah rekod baharu.',
            'Read – Melihat atau membaca rekod.',
            'Update – Mengemas kini rekod sedia ada.',
            'Delete – Memadam rekod.',
          ],
        },
        { type: 'label', text: 'Contoh:' },
        { type: 'p', text: 'Dalam sistem pengurusan inventori, pengguna boleh:' },
        {
          type: 'ul',
          items: [
            'Mendaftarkan barang baharu.',
            'Melihat senarai barang.',
            'Mengemas kini kuantiti stok.',
            'Memadam rekod barang yang tidak lagi digunakan.',
          ],
        },

        { type: 'subheading', text: 'B. DIGITAL FORM (BORANG DIGITAL)' },
        { type: 'p', text: 'AppSheet membolehkan pengguna menghasilkan borang digital untuk mengumpul maklumat.' },
        { type: 'label', text: 'Contoh penggunaan:' },
        {
          type: 'ul',
          items: [
            'Borang pendaftaran peserta.',
            'Borang permohonan cuti.',
            'Borang tempahan bilik.',
            'Borang laporan kerosakan.',
            'Borang pemeriksaan aset.',
          ],
        },
        { type: 'label', text: 'Antara jenis medan yang boleh digunakan termasuk:' },
        {
          type: 'ul',
          items: [
            'Text – Memasukkan teks.',
            'Name – Memasukkan nama.',
            'Email – Memasukkan alamat e-mel.',
            'Phone – Memasukkan nombor telefon.',
            'Number – Memasukkan nombor.',
            'Date – Memilih tarikh.',
            'DateTime – Memilih tarikh dan masa.',
            'Time – Memilih masa.',
            'Enum – Memilih satu pilihan daripada senarai.',
            'EnumList – Memilih beberapa pilihan.',
            'Yes/No – Pilihan ya atau tidak.',
            'Image – Memuat naik atau mengambil gambar.',
            'File – Melampirkan fail.',
            'Signature – Merekod tandatangan.',
            'Location – Merekod lokasi.',
          ],
        },
        { type: 'p', text: 'Jenis medan yang tersedia bergantung pada konfigurasi dan sokongan platform.' },

        { type: 'subheading', text: 'C. DATA VISUALIZATION (PAPARAN DATA)' },
        {
          type: 'p',
          text: 'AppSheet membolehkan data dipaparkan dalam beberapa bentuk supaya pengguna mudah memahami maklumat.',
        },
        { type: 'label', text: 'Antara paparan yang boleh digunakan:' },
        {
          type: 'ol',
          items: [
            'Table View – Memaparkan data dalam bentuk jadual.',
            'Deck View – Memaparkan rekod dalam bentuk kad.',
            'Gallery View – Memaparkan rekod dengan imej.',
            'Detail View – Memaparkan maklumat terperinci sesuatu rekod.',
            'Form View – Memaparkan borang untuk memasukkan data.',
            'Chart View – Memaparkan data dalam bentuk carta.',
            'Dashboard View – Menggabungkan beberapa paparan dalam satu skrin.',
            'Calendar View – Memaparkan rekod mengikut tarikh.',
            'Map View – Memaparkan rekod berdasarkan lokasi.',
          ],
        },
        { type: 'p', text: 'Pemilihan jenis paparan bergantung pada tujuan aplikasi dan keperluan pengguna.' },

        { type: 'subheading', text: 'D. AUTOMATION (AUTOMASI)' },
        {
          type: 'p',
          text: 'Automation membolehkan aplikasi melaksanakan sesuatu tindakan secara automatik apabila syarat atau peristiwa tertentu berlaku.',
        },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ol',
          items: [
            'Menghantar e-mel apabila permohonan diterima.',
            'Menghantar notifikasi apabila stok mencapai tahap minimum.',
            'Menghasilkan dokumen apabila tempahan diluluskan.',
            'Menghantar peringatan apabila tarikh tamat tempoh semakin hampir.',
            'Mengemas kini proses kerja berdasarkan sesuatu peristiwa.',
          ],
        },
        { type: 'label', text: 'Automation biasanya dibina menggunakan komponen seperti:' },
        {
          type: 'ul',
          items: [
            'Event – Peristiwa yang mencetuskan automasi.',
            'Process – Aliran proses yang perlu dilaksanakan.',
            'Step – Langkah yang terdapat dalam proses.',
            'Task – Tindakan yang perlu dilaksanakan.',
          ],
        },
        { type: 'label', text: 'Contoh aliran:' },
        {
          type: 'code',
          title: 'Aliran Proses Automasi',
          code: 'Pengguna menghantar permohonan → Sistem mengesan rekod baharu → Sistem menjalankan proses → E-mel pemberitahuan dihantar.',
        },

        { type: 'subheading', text: 'E. ACTIONS (TINDAKAN)' },
        {
          type: 'p',
          text: 'Actions membolehkan pengguna melaksanakan sesuatu operasi melalui butang atau tindakan tertentu dalam aplikasi.',
        },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Butang Approve untuk meluluskan permohonan.',
            'Butang Reject untuk menolak permohonan.',
            'Butang Update untuk mengemas kini rekod.',
            'Butang Navigate untuk membuka paparan tertentu.',
            'Butang Call untuk membuat panggilan telefon.',
            'Butang Email untuk membuka fungsi e-mel.',
          ],
        },
        { type: 'p', text: 'Actions boleh digunakan untuk menjadikan aplikasi lebih interaktif.' },

        { type: 'subheading', text: 'F. SECURITY AND ACCESS CONTROL (KESELAMATAN DAN KAWALAN AKSES)' },
        { type: 'p', text: 'AppSheet menyediakan fungsi keselamatan untuk mengawal penggunaan aplikasi.' },
        { type: 'label', text: 'Antara fungsi yang boleh digunakan:' },
        {
          type: 'ol',
          items: [
            'User Authentication – Pengesahan identiti pengguna.',
            'Require Sign-In – Menghendaki pengguna log masuk.',
            'Security Filters – Mengehadkan rekod yang dihantar kepada pengguna berdasarkan syarat tertentu.',
            'User Roles – Mengurus peranan pengguna menggunakan konfigurasi aplikasi.',
            'Access Control – Mengawal siapa yang boleh mengakses aplikasi dan data.',
          ],
        },
        { type: 'label', text: 'Contoh:' },
        { type: 'p', text: 'Dalam sistem pengurusan pelajar:' },
        {
          type: 'ul',
          items: [
            'Admin boleh melihat semua rekod.',
            'Pensyarah boleh melihat rekod pelajar yang berkaitan dengannya.',
            'Pelajar hanya boleh melihat maklumat rekod sendiri.',
          ],
        },
        {
          type: 'callout',
          variant: 'important',
          title: 'PENTING',
          text: 'Security Filter dan kawalan akses perlu dikonfigurasikan dengan betul. Menyembunyikan sesuatu paparan atau butang sahaja tidak bermaksud data tersebut telah dilindungi.',
        },
      ],
    },
    {
      id: '2.3',
      title: '2.3 MEMAHAMI EKOSISTEM GOOGLE APPSHEET',
      blocks: [
        {
          type: 'p',
          text: 'Untuk membangunkan aplikasi yang berfungsi dengan baik, peserta perlu memahami hubungan antara AppSheet dengan platform lain.',
        },
        { type: 'subheading', text: 'A. GOOGLE SHEETS' },
        { type: 'p', text: 'Google Sheets boleh digunakan sebagai sumber data utama untuk aplikasi AppSheet.' },
        { type: 'label', text: 'Fungsinya:' },
        {
          type: 'ul',
          items: [
            'Menyimpan rekod.',
            'Menyediakan struktur jadual.',
            'Menyimpan maklumat pengguna.',
            'Menyimpan transaksi.',
            'Membolehkan data disemak dan dikemas kini.',
          ],
        },
        { type: 'label', text: 'Contoh:' },
        { type: 'p', text: 'Sistem tempahan bilik boleh menggunakan Google Sheets yang mempunyai jadual:' },
        { type: 'ol', items: ['Users', 'Rooms', 'Bookings', 'Approvals'] },
        { type: 'p', text: 'Setiap jadual menyimpan jenis maklumat yang berbeza.' },

        { type: 'subheading', text: 'B. GOOGLE DRIVE' },
        { type: 'p', text: 'Google Drive digunakan untuk menyimpan fail dan dokumen yang berkaitan dengan aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Gambar produk.',
            'Dokumen permohonan.',
            'Lampiran laporan.',
            'Fail PDF.',
            'Dokumen yang dijana melalui automasi.',
          ],
        },

        { type: 'subheading', text: 'C. GMAIL' },
        { type: 'p', text: 'Gmail boleh digunakan dalam proses pemberitahuan melalui fungsi e-mel AppSheet.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Pemberitahuan permohonan baharu.',
            'Pengesahan tempahan.',
            'Makluman kelulusan.',
            'Peringatan kepada pengguna.',
          ],
        },
        { type: 'p', text: 'Ketersediaan fungsi penghantaran e-mel bergantung pada konfigurasi dan pelan penggunaan.' },

        { type: 'subheading', text: 'D. GOOGLE DOCS' },
        { type: 'p', text: 'Google Docs boleh digunakan sebagai templat dokumen untuk menghasilkan dokumen secara automatik.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Surat kelulusan.',
            'Surat pengesahan.',
            'Borang tempahan.',
            'Laporan rasmi.',
          ],
        },
        {
          type: 'p',
          text: 'Melalui proses automasi, data daripada aplikasi boleh dimasukkan ke dalam templat dokumen yang disediakan.',
        },

        { type: 'subheading', text: 'E. GOOGLE CALENDAR' },
        {
          type: 'p',
          text: 'Google Calendar boleh digunakan dalam aliran kerja yang melibatkan pengurusan jadual dan tarikh.',
        },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Pengurusan jadual tempahan.',
            'Penyelarasan aktiviti.',
            'Pengurusan tarikh mesyuarat.',
          ],
        },
        { type: 'p', text: 'Integrasi dan kaedah pelaksanaannya bergantung pada ciri serta sambungan yang tersedia.' },
      ],
    },
    {
      id: '2.4',
      title: '2.4 MEMAHAMI JENIS PENGGUNA APLIKASI',
      blocks: [
        { type: 'p', text: 'Dalam pembangunan aplikasi, pengguna boleh dibahagikan mengikut peranan.' },
        { type: 'label', text: 'Contoh pembahagian pengguna:' },

        { type: 'subheading', text: 'A. ADMINISTRATOR' },
        { type: 'p', text: 'Administrator ialah pengguna yang mempunyai tanggungjawab mengurus sistem.' },
        { type: 'label', text: 'Tugas:' },
        {
          type: 'ul',
          items: [
            'Mengurus data.',
            'Mengurus pengguna.',
            'Memantau transaksi.',
            'Menyemak laporan.',
            'Mengurus konfigurasi aplikasi.',
          ],
        },

        { type: 'subheading', text: 'B. APPROVER' },
        { type: 'p', text: 'Approver ialah pengguna yang bertanggungjawab menyemak dan membuat keputusan terhadap permohonan.' },
        { type: 'label', text: 'Tugas:' },
        {
          type: 'ul',
          items: [
            'Menyemak permohonan.',
            'Meluluskan permohonan.',
            'Menolak permohonan.',
            'Memberikan catatan atau ulasan.',
          ],
        },

        { type: 'subheading', text: 'C. STANDARD USER' },
        { type: 'p', text: 'Standard User ialah pengguna biasa yang menggunakan aplikasi untuk menjalankan urusan harian.' },
        { type: 'label', text: 'Tugas:' },
        {
          type: 'ul',
          items: [
            'Mengisi borang.',
            'Menghantar permohonan.',
            'Melihat rekod berkaitan.',
            'Menyemak status permohonan.',
          ],
        },
        {
          type: 'p',
          text: 'Pembahagian peranan ini boleh dilaksanakan menggunakan e-mel pengguna, jadual pengguna, formula dan konfigurasi keselamatan.',
        },
      ],
    },
    {
      id: '2.5',
      title: '2.5 PERBEZAAN APLIKASI STATIK DAN APLIKASI DINAMIK',
      blocks: [
        { type: 'subheading', text: 'A. APLIKASI STATIK' },
        {
          type: 'p',
          text: 'Aplikasi statik merujuk kepada aplikasi yang mempunyai fungsi terhad dan tidak banyak bertindak balas terhadap perubahan data atau keadaan tertentu.',
        },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Paparan senarai maklumat.',
            'Direktori nombor telefon.',
            'Paparan maklumat jabatan.',
          ],
        },
        { type: 'subheading', text: 'B. APLIKASI DINAMIK' },
        {
          type: 'p',
          text: 'Aplikasi dinamik mempunyai fungsi yang boleh berubah berdasarkan data, tindakan dan keadaan pengguna.',
        },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Paparan dashboard mengikut pengguna.',
            'Status permohonan berubah selepas kelulusan.',
            'Notifikasi apabila rekod baharu diterima.',
            'Pengiraan baki stok secara automatik.',
            'Paparan maklumat berdasarkan kategori.',
          ],
        },
        {
          type: 'p',
          text: 'AppSheet boleh digunakan untuk membangunkan aplikasi dinamik melalui Expression, Actions, Slices, Security Filters dan Automation.',
        },
      ],
    },
    {
      id: '2.6',
      title: '2.6 KELEBIHAN DAN BATASAN GOOGLE APPSHEET',
      blocks: [
        { type: 'subheading', text: 'KELEBIHAN' },
        {
          type: 'ol',
          items: [
            'Mempercepatkan pembangunan aplikasi.',
            'Mengurangkan keperluan menulis kod pengaturcaraan.',
            'Memudahkan pengurusan data.',
            'Menyediakan fungsi automasi.',
            'Menyokong pelbagai jenis peranti.',
            'Sesuai untuk aplikasi pengurusan operasi organisasi.',
            'Boleh disesuaikan mengikut keperluan pengguna.',
          ],
        },
        { type: 'subheading', text: 'BATASAN' },
        {
          type: 'ol',
          items: [
            'Fungsi tertentu bergantung pada pelan langganan.',
            'Penggunaan sumber data yang besar boleh mempengaruhi prestasi.',
            'Aplikasi yang kompleks memerlukan perancangan struktur data yang baik.',
            'Fungsi tertentu memerlukan sambungan internet.',
            'Integrasi dengan sistem luar mungkin memerlukan konfigurasi tambahan.',
            'Pengurusan keselamatan perlu dilakukan dengan teliti.',
            'AppSheet bukan pengganti kepada semua jenis pembangunan perisian tradisional.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Sebelum menggunakan aplikasi untuk operasi sebenar, pembangun perlu menyemak pelan, had penggunaan, ciri keselamatan dan syarat pelesenan terkini melalui dokumentasi rasmi AppSheet.',
        },
      ],
    },
    {
      id: '2.7',
      title: '2.7 CONTOH KAJIAN KES',
      blocks: [
        { type: 'subheading', text: 'KAJIAN KES: SISTEM PENGURUSAN TEMPAHAN BILIK' },
        { type: 'p', text: 'Sebuah institusi mempunyai beberapa bilik mesyuarat dan makmal komputer.' },
        {
          type: 'p',
          text: 'Sebelum menggunakan sistem digital, tempahan dilakukan secara manual menggunakan borang dan rekod Excel.',
        },
        { type: 'label', text: 'Masalah yang dihadapi:' },
        {
          type: 'ol',
          items: [
            'Pertindihan tempahan bilik.',
            'Sukar menyemak status permohonan.',
            'Rekod tempahan tidak tersusun.',
            'Proses kelulusan mengambil masa.',
            'Sukar menghasilkan laporan penggunaan bilik.',
          ],
        },
        { type: 'label', text: 'Penyelesaian:' },
        { type: 'p', text: 'Membangunkan aplikasi menggunakan Google AppSheet.' },
        { type: 'label', text: 'Fungsi yang diperlukan:' },
        {
          type: 'ol',
          items: [
            'Pendaftaran pengguna.',
            'Senarai bilik.',
            'Borang tempahan.',
            'Semakan kekosongan.',
            'Kelulusan tempahan.',
            'Notifikasi status.',
            'Dashboard laporan.',
          ],
        },
        { type: 'label', text: 'HASIL YANG DIHARAPKAN:' },
        {
          type: 'p',
          text: 'Pengguna boleh membuat tempahan melalui telefon pintar, manakala pentadbir boleh mengurus dan meluluskan tempahan melalui aplikasi yang sama.',
        },
      ],
    },
    {
      id: '2.8',
      title: '2.8 LATIHAN PENGUKUHAN',
      blocks: [
        {
          type: 'quiz_open',
          intro: 'Jawab soalan berikut:',
          questions: [
            {
              q: 'Apakah fungsi CRUD dalam AppSheet?',
              guide: 'CRUD ialah empat operasi asas pengurusan data: Create (menambah rekod baharu), Read (melihat/membaca rekod), Update (mengemas kini rekod sedia ada), dan Delete (memadam rekod).',
            },
            {
              q: 'Nyatakan lima jenis paparan yang boleh digunakan dalam AppSheet.',
              guide: 'Mana-mana lima daripada: Table View, Deck View, Gallery View, Detail View, Form View, Chart View, Dashboard View, Calendar View, Map View.',
            },
            {
              q: 'Apakah perbezaan antara Actions dengan Automation?',
              guide: 'Actions membolehkan pengguna melaksanakan operasi secara manual melalui butang atau tindakan dalam aplikasi (cth. Approve, Reject, Navigate), manakala Automation membolehkan sistem melaksanakan tindakan secara automatik apabila peristiwa (Event) atau syarat tertentu berlaku tanpa campur tangan manual.',
            },
            {
              q: 'Apakah fungsi Security Filter?',
              guide: 'Security Filter berfungsi mengehadkan rekod yang dihantar dan dimuatkan kepada pengguna berdasarkan syarat tertentu untuk melindungi data.',
            },
            {
              q: 'Apakah peranan Google Sheets dalam ekosistem AppSheet?',
              guide: 'Google Sheets berfungsi sebagai sumber data utama untuk menyimpan rekod, menyediakan struktur jadual, menyimpan maklumat pengguna dan transaksi serta membolehkan data disemak dan dikemas kini.',
            },
            {
              q: 'Apakah fungsi Google Docs dalam proses automasi?',
              guide: 'Google Docs digunakan sebagai templat dokumen untuk menghasilkan dokumen secara automatik seperti surat kelulusan, surat pengesahan, borang tempahan dan laporan rasmi menggunakan data daripada aplikasi.',
            },
            {
              q: 'Mengapakah sistem memerlukan pembahagian peranan pengguna?',
              guide: 'Untuk memastikan setiap kategori pengguna (Administrator, Approver, Standard User) hanya mengakses fungsi dan data yang berkaitan dengan tanggungjawab dan tugas mereka demi keselamatan dan kelancaran operasi.',
            },
            {
              q: 'Berikan tiga contoh penggunaan Automation.',
              guide: 'Menghantar e-mel apabila permohonan diterima, menghantar notifikasi apabila stok mencapai tahap minimum, menghasilkan dokumen apabila tempahan diluluskan, atau menghantar peringatan tarikh tamat tempoh.',
            },
            {
              q: 'Apakah perbezaan aplikasi statik dengan aplikasi dinamik?',
              guide: 'Aplikasi statik mempunyai fungsi terhad dan tidak banyak bertindak balas terhadap perubahan data (cth. direktori nombor telefon), manakala aplikasi dinamik boleh berubah mengikut data, tindakan dan keadaan pengguna melalui Expression, Actions, Slices, Security Filters dan Automation.',
            },
            {
              q: 'Nyatakan tiga batasan penggunaan Google AppSheet.',
              guide: 'Antaranya: fungsi tertentu bergantung pada pelan langganan, sumber data yang besar boleh mempengaruhi prestasi, fungsi tertentu memerlukan sambungan internet, integrasi sistem luar perlukan konfigurasi tambahan, dan keselamatan perlu dikonfigurasi teliti.',
            },
          ],
        },
      ],
    },
    {
      id: '2.9',
      title: '2.9 AKTIVITI AMALI',
      blocks: [
        { type: 'subheading', text: 'AKTIVITI: MERANCANG APLIKASI ORGANISASI' },
        { type: 'label', text: 'Arahan:' },
        {
          type: 'ol',
          items: [
            'Kenal pasti satu masalah pengurusan dalam organisasi.',
            'Cadangkan satu aplikasi yang boleh dibangunkan menggunakan AppSheet.',
            'Senaraikan pengguna yang akan menggunakan aplikasi.',
            'Tentukan fungsi yang diperlukan.',
            'Kenal pasti jenis data yang perlu disimpan.',
            'Tentukan jenis paparan yang sesuai.',
            'Kenal pasti proses yang boleh diautomasikan.',
          ],
        },
        { type: 'label', text: 'Contoh hasil aktiviti:' },
        { type: 'p', text: 'Nama Aplikasi: Sistem Pengurusan Aduan Kerosakan.' },
        { type: 'label', text: 'Pengguna:' },
        { type: 'ul', items: ['Administrator.', 'Pegawai teknikal.', 'Pelapor.'] },
        { type: 'label', text: 'Fungsi:' },
        {
          type: 'ul',
          items: [
            'Pendaftaran aduan.',
            'Muat naik gambar kerosakan.',
            'Penetapan pegawai bertugas.',
            'Kemaskini status.',
            'Rekod tindakan.',
            'Laporan aduan.',
          ],
        },
      ],
    },
    {
      id: '2.10',
      title: '2.10 RUMUSAN MODUL & RUJUKAN RASMI',
      blocks: [
        {
          type: 'p',
          text: 'Google AppSheet bukan sekadar platform untuk menghasilkan borang digital. Ia merupakan platform pembangunan aplikasi yang mempunyai fungsi pengurusan data, paparan maklumat, kawalan akses, tindakan pengguna dan automasi proses kerja.',
        },
        {
          type: 'p',
          text: 'Pemahaman terhadap ekosistem AppSheet membolehkan pembangun merancang aplikasi dengan lebih sistematik sebelum memulakan proses pembangunan.',
        },
        {
          type: 'p',
          text: 'Dalam modul seterusnya, peserta akan mempelajari cara menyediakan Google Sheets sebagai sumber data yang betul sebelum membina aplikasi pertama menggunakan AppSheet.',
        },
        { type: 'subheading', text: 'RUJUKAN RASMI' },
        {
          type: 'links',
          items: [
            { label: '1. Google AppSheet', url: 'https://www.appsheet.com/' },
            { label: '2. AppSheet Help', url: 'https://support.google.com/appsheet/' },
            { label: '3. AppSheet Documentation', url: 'https://support.google.com/appsheet/topic/10102630' },
          ],
        },
      ],
    },
  ],
};
