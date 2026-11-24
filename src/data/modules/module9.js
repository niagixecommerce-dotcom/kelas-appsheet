export const module9 = {
  id: 9,
  code: 'MODUL 9',
  title: 'Security, User Access, Deployment dan Publishing',
  shortTitle: 'Security & Deployment',
  subtitle: 'Authentication, Authorization, Data Security, Require Sign-In, kawalan akses Role, Security Filters vs Slice, Deployment Check, UAT, pengurusan ralat dan senarai semak deployment.',
  pages: 'Muka surat 113 – 132',
  duration: '90 minit',
  level: 'Intermediate',
  sections: [
    {
      id: '9.1',
      title: '9.1 Pengenalan',
      blocks: [
        {
          type: 'p',
          text: 'Selepas aplikasi dibangunkan, pembangun perlu memastikan aplikasi tersebut boleh digunakan oleh pengguna sebenar dengan selamat dan stabil.',
        },
        { type: 'label', text: 'Antara perkara yang perlu diberi perhatian ialah:' },
        {
          type: 'ol',
          items: [
            'Keselamatan data.',
            'Pengesahan identiti pengguna.',
            'Kawalan akses pengguna.',
            'Pengurusan peranan pengguna.',
            'Ujian fungsi aplikasi.',
            'Pengurusan ralat.',
            'Deployment aplikasi.',
            'Pemantauan aplikasi selepas digunakan.',
          ],
        },
        {
          type: 'p',
          text: 'Contohnya, dalam Facility Booking Management System (FBMS), bukan semua pengguna boleh mengakses semua fungsi. Pengguna biasa hanya perlu membuat tempahan dan melihat tempahan sendiri. Pegawai pelulus perlu melihat permohonan yang perlu diluluskan. Pentadbir pula perlu menguruskan keseluruhan sistem.',
        },
        { type: 'p', text: 'Oleh itu, aplikasi perlu dibangunkan dengan sistem keselamatan dan kawalan akses yang sesuai.' },
      ],
    },
    {
      id: '9.2',
      title: '9.2 Objektif Pembelajaran',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Memahami konsep keselamatan AppSheet.',
            'Mengaktifkan pengesahan pengguna.',
            'Menguruskan senarai pengguna aplikasi.',
            'Memahami peranan dan kebenaran pengguna.',
            'Menggunakan Security Filters.',
            'Membezakan Slice dengan Security Filter.',
            'Melaksanakan ujian aplikasi.',
            'Memahami proses Deployment.',
            'Menyediakan aplikasi untuk pengguna sebenar.',
            'Menguruskan aplikasi selepas diterbitkan.',
          ],
        },
      ],
    },
    {
      id: '9.3',
      title: '9.3 Memahami Keselamatan Aplikasi',
      blocks: [
        { type: 'p', text: 'Keselamatan aplikasi ialah proses melindungi data dan fungsi sistem daripada akses yang tidak dibenarkan. Dalam AppSheet, keselamatan perlu dilihat daripada beberapa aspek.' },

        { type: 'subheading', text: 'A. Authentication' },
        { type: 'p', text: 'Authentication ialah proses mengesahkan identiti pengguna.' },
        {
          type: 'ul',
          items: [
            'Pengguna log masuk menggunakan akaun Google.',
            'Sistem mengenal pasti alamat e-mel pengguna.',
            'Pengguna perlu mengesahkan identiti sebelum mengakses aplikasi.',
          ],
        },

        { type: 'subheading', text: 'B. Authorization' },
        { type: 'p', text: 'Authorization ialah proses menentukan perkara yang boleh dilakukan oleh pengguna selepas identitinya disahkan.' },
        {
          type: 'ul',
          items: [
            'Pengguna biasa boleh membuat tempahan.',
            'Pegawai pelulus boleh meluluskan permohonan.',
            'Pentadbir boleh menguruskan rekod sistem.',
          ],
        },

        { type: 'subheading', text: 'C. Data Security' },
        { type: 'p', text: 'Data Security memastikan pengguna hanya menerima data yang dibenarkan untuk diakses.' },
        {
          type: 'ul',
          items: [
            'Pengguna hanya boleh melihat rekod tempahan sendiri.',
            'Pegawai pelulus boleh melihat rekod yang berkaitan dengan tugasnya.',
            'Maklumat pentadbiran tidak boleh diakses oleh pengguna biasa.',
          ],
        },

        {
          type: 'table',
          title: 'Perbezaan penting:',
          headers: ['Konsep', 'Fungsi'],
          rows: [
            ['Authentication', 'Mengesahkan siapa pengguna'],
            ['Authorization', 'Menentukan apa yang pengguna boleh lakukan'],
            ['Data Security', 'Melindungi data daripada akses yang tidak dibenarkan'],
          ],
        },
      ],
    },
    {
      id: '9.4',
      title: '9.4 Mengaktifkan Require Sign-In',
      blocks: [
        { type: 'p', text: 'Require Sign-In memastikan pengguna perlu log masuk sebelum menggunakan aplikasi.' },
        { type: 'label', text: 'Langkah-langkah:' },
        {
          type: 'ol',
          items: [
            'Buka AppSheet Editor.',
            'Pergi ke bahagian Security.',
            'Cari tetapan Require Sign-In.',
            'Aktifkan Require Sign-In.',
            'Pilih kaedah pengesahan yang disokong.',
            'Simpan perubahan.',
            'Uji aplikasi menggunakan akaun pengguna.',
          ],
        },
        { type: 'subheading', text: 'Mengapa Require Sign-In Penting?' },
        {
          type: 'p',
          text: 'Tanpa pengesahan pengguna yang sesuai, pembangun mungkin tidak dapat mengenal pasti pengguna dengan tepat. Fungsi seperti USEREMAIL() juga bergantung pada identiti pengguna yang telah disahkan.',
        },
        { type: 'code', code: 'USEREMAIL()' },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Require Sign-In tidak bermaksud semua data secara automatik dilindungi mengikut peranan. Kawalan akses dan Security Filters masih perlu dikonfigurasikan dengan betul.',
        },
      ],
    },
    {
      id: '9.5',
      title: '9.5 Menguruskan Pengguna Aplikasi',
      blocks: [
        { type: 'p', text: 'AppSheet membolehkan pembangun mengawal siapa yang dibenarkan menggunakan aplikasi.' },
        {
          type: 'table',
          title: 'Contoh senarai pengguna FBMS (disimpan dalam Table USERS)',
          headers: ['Email', 'Nama', 'Role'],
          rows: [
            ['admin@organisasi.edu.my', 'Admin Sistem', 'Admin'],
            ['pegawai@organisasi.edu.my', 'Pegawai Pelulus', 'Approver'],
            ['ali@organisasi.edu.my', 'Ali', 'User'],
            ['abu@organisasi.edu.my', 'Abu', 'User'],
          ],
        },
        {
          type: 'table',
          title: 'Cadangan Struktur Table USERS',
          headers: ['Column', 'Type', 'Kegunaan'],
          rows: [
            ['UserID', 'Text', 'ID pengguna'],
            ['FullName', 'Name', 'Nama pengguna'],
            ['Email', 'Email', 'Alamat e-mel'],
            ['Role', 'Enum', 'Peranan pengguna'],
            ['Department', 'Text', 'Jabatan'],
            ['Active', 'Yes/No', 'Status pengguna'],
          ],
        },
        { type: 'p', text: 'Contoh nilai Role: Admin, Approver, User.' },
        { type: 'subheading', text: 'Mengapa Perlu Ada Role?' },
        { type: 'p', text: 'Role memudahkan pembangun menentukan fungsi yang sesuai untuk setiap kategori pengguna.' },
        { type: 'label', text: 'Admin' },
        { type: 'ul', items: ['Menguruskan pengguna.', 'Menguruskan bilik.', 'Melihat semua tempahan.', 'Melihat laporan.'] },
        { type: 'label', text: 'Approver' },
        { type: 'ul', items: ['Melihat tempahan untuk kelulusan.', 'Meluluskan tempahan.', 'Menolak tempahan.'] },
        { type: 'label', text: 'User' },
        { type: 'ul', items: ['Membuat tempahan.', 'Melihat tempahan sendiri.', 'Menyemak status tempahan.'] },
      ],
    },
    {
      id: '9.6',
      title: '9.6 Mengawal Akses Berdasarkan Role',
      blocks: [
        { type: 'p', text: 'Untuk menentukan peranan pengguna, pembangun boleh menggunakan fungsi LOOKUP().' },
        {
          type: 'code',
          title: 'Contoh mendapatkan Role pengguna yang sedang log masuk',
          code: 'LOOKUP(\n  USEREMAIL(),\n  "USERS",\n  "Email",\n  "Role"\n)',
        },
        {
          type: 'ol',
          items: [
            'Mendapatkan e-mel pengguna.',
            'Mencari e-mel tersebut dalam Table USERS.',
            'Mendapatkan nilai Role pengguna.',
          ],
        },
        {
          type: 'code',
          title: 'Contoh 1: Paparkan Menu Admin Sahaja (Show If)',
          code: 'LOOKUP(\n  USEREMAIL(),\n  "USERS",\n  "Email",\n  "Role"\n) = "Admin"',
        },
        {
          type: 'code',
          title: 'Contoh 2: Paparkan Menu Approver Sahaja',
          code: 'LOOKUP(\n  USEREMAIL(),\n  "USERS",\n  "Email",\n  "Role"\n) = "Approver"',
        },
        {
          type: 'code',
          title: 'Contoh 3: Paparkan Menu untuk Admin dan Approver',
          code: 'IN(\n  LOOKUP(\n    USEREMAIL(),\n    "USERS",\n    "Email",\n    "Role"\n  ),\n  {"Admin", "Approver"}\n)',
        },
        {
          type: 'callout',
          variant: 'important',
          title: 'Penting',
          text: 'Show If hanya mengawal paparan. Ia bukan kawalan keselamatan yang mencukupi untuk melindungi data atau menghalang pengguna daripada menjalankan tindakan melalui laluan lain. Kawalan akses perlu disediakan pada peringkat data dan tindakan juga.',
        },
      ],
    },
    {
      id: '9.7',
      title: '9.7 Memahami Security Filters',
      blocks: [
        { type: 'p', text: 'Security Filter ialah salah satu mekanisme penting untuk mengehadkan rekod yang dihantar kepada pengguna aplikasi.' },
        { type: 'p', text: 'Berbeza dengan Slice, Security Filter digunakan untuk menapis data pada peringkat pemuatan data ke dalam aplikasi.' },
        { type: 'subheading', text: 'Contoh Situasi' },
        { type: 'p', text: 'Katakan Table BOOKINGS mempunyai 1,000 rekod tempahan. Kita mahu pengguna biasa hanya menerima rekod tempahan miliknya.' },
        { type: 'code', title: 'Security Filter Asas', code: '[UserEmail] = USEREMAIL()' },
        {
          type: 'p',
          text: 'Dengan syarat struktur data dan akses pengguna dikonfigurasikan dengan betul, rekod yang tidak memenuhi syarat tidak akan dimuatkan kepada pengguna tersebut melalui Table berkenaan.',
        },
        { type: 'subheading', text: 'Contoh Security Filter Mengikut Role' },
        { type: 'ul', items: ['Admin boleh melihat semua rekod.', 'User hanya boleh melihat rekod sendiri.'] },
        {
          type: 'code',
          title: 'Security Filter Mengikut Role',
          code: 'OR(\n  LOOKUP(\n    USEREMAIL(),\n    "USERS",\n    "Email",\n    "Role"\n  ) = "Admin",\n  [UserEmail] = USEREMAIL()\n)',
        },
        { type: 'p', text: 'Formula ini ialah contoh asas. Ia perlu disesuaikan mengikut keperluan sebenar organisasi dan hubungan antara Table.' },
        { type: 'subheading', text: 'Langkah Mengaktifkan Security Filter' },
        {
          type: 'ol',
          items: [
            'Buka AppSheet Editor.',
            'Pergi ke Data.',
            'Pilih Table yang ingin dilindungi.',
            'Cari bahagian Security Filter.',
            'Masukkan formula yang sesuai.',
            'Simpan perubahan.',
            'Uji menggunakan akaun pengguna yang berbeza.',
          ],
        },
      ],
    },
    {
      id: '9.8',
      title: '9.8 Perbezaan Slice dengan Security Filter',
      blocks: [
        { type: 'p', text: 'Ini merupakan konsep yang sangat penting untuk difahami.' },
        {
          type: 'table',
          title: 'Perbandingan Slice vs Security Filter',
          headers: ['Slice', 'Security Filter'],
          rows: [
            ['Mengawal paparan data dalam aplikasi', 'Menapis data pada peringkat pemuatan data'],
            ['Sesuai untuk menghasilkan paparan khusus', 'Sesuai untuk mengehadkan data yang diterima pengguna'],
            ['Tidak menjamin keselamatan data', 'Merupakan mekanisme keselamatan data'],
            ['Boleh digunakan untuk kategori paparan', 'Digunakan untuk kawalan akses rekod'],
          ],
        },
        { type: 'code', title: 'Contoh Slice (paparan Tempahan Saya) & Security Filter (hadkan muatan rekod)', code: '[UserEmail] = USEREMAIL()' },
        {
          type: 'callout',
          variant: 'important',
          title: 'Kesimpulan',
          text: 'Walaupun formula boleh kelihatan sama, fungsi dan tahap perlindungan Slice dengan Security Filter adalah berbeza.',
        },
      ],
    },
    {
      id: '9.9',
      title: '9.9 Mengawal Action Berdasarkan Role',
      blocks: [
        { type: 'p', text: 'Selain mengawal paparan, pembangun perlu mengawal tindakan yang boleh dilakukan oleh pengguna. Contohnya, hanya Admin dan Approver boleh meluluskan tempahan.' },
        {
          type: 'code',
          title: 'Only if this condition is true (Action Luluskan Tempahan)',
          code: 'AND(\n  [Status] = "Pending",\n  IN(\n    LOOKUP(\n      USEREMAIL(),\n      "USERS",\n      "Email",\n      "Role"\n    ),\n    {"Admin", "Approver"}\n  )\n)',
        },
        { type: 'label', text: 'Formula ini memeriksa:' },
        { type: 'ol', items: ['Status tempahan masih Pending.', 'Role pengguna ialah Admin atau Approver.'] },
        { type: 'p', text: 'Jika kedua-dua syarat dipenuhi, Action boleh digunakan.' },
        {
          type: 'callout',
          variant: 'important',
          title: 'Peringatan keselamatan',
          text: 'Action condition ialah kawalan fungsi pada peringkat aplikasi. Ia perlu digabungkan dengan pengesahan pengguna, kawalan akses data dan konfigurasi keselamatan lain. Jangan bergantung pada butang yang disembunyikan semata-mata untuk melindungi proses penting.',
        },
      ],
    },
    {
      id: '9.10',
      title: '9.10 Memahami Deployment',
      blocks: [
        { type: 'p', text: 'Deployment ialah proses menyediakan aplikasi untuk digunakan dalam persekitaran sebenar. Sebelum aplikasi digunakan, pembangun perlu menyemak sama ada aplikasi memenuhi keperluan asas.' },
        { type: 'label', text: 'Antara perkara yang perlu diperiksa:' },
        { type: 'ul', items: ['Struktur data.', 'Fungsi aplikasi.', 'Formula.', 'Hubungan Table.', 'Keselamatan.', 'Pengalaman pengguna.', 'Automasi.', 'Prestasi.'] },
        { type: 'subheading', text: 'Development dan Production' },
        { type: 'label', text: 'Development Environment — Persekitaran untuk:' },
        { type: 'ul', items: ['Membina aplikasi.', 'Menguji fungsi.', 'Mengubah struktur.', 'Membaiki ralat.'] },
        { type: 'label', text: 'Production Environment — Persekitaran untuk:' },
        { type: 'ul', items: ['Penggunaan sebenar.', 'Pengguna organisasi.', 'Rekod operasi sebenar.', 'Proses kerja harian.'] },
        {
          type: 'p',
          text: 'Tidak semua projek memerlukan dua aplikasi yang berasingan, tetapi pemisahan persekitaran boleh membantu mengurangkan risiko perubahan yang tidak diuji menjejaskan operasi sebenar.',
        },
      ],
    },
    {
      id: '9.11',
      title: '9.11 Menjalankan AppSheet Deployment Check',
      blocks: [
        { type: 'p', text: 'AppSheet menyediakan proses semakan aplikasi sebelum digunakan secara rasmi.' },
        { type: 'label', text: 'Langkah-langkah Umum:' },
        {
          type: 'ol',
          items: [
            'Buka AppSheet Editor.',
            'Cari bahagian Manage atau Deployment mengikut versi Editor.',
            'Pilih Deployment Check.',
            'Jalankan semakan.',
            'Baca hasil pemeriksaan.',
            'Kenal pasti isu yang perlu diselesaikan.',
            'Baiki konfigurasi yang bermasalah.',
            'Jalankan semakan semula.',
          ],
        },
        { type: 'label', text: 'Perkara yang Perlu Diberi Perhatian:' },
        { type: 'ul', items: ['Pengesahan pengguna.', 'Struktur aplikasi.', 'Tetapan keselamatan.', 'Isu konfigurasi.', 'Formula.', 'Keperluan penggunaan aplikasi.'] },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Peringatan',
          text: 'Deployment Check membantu pembangun mengenal pasti isu, tetapi ia tidak menjamin aplikasi bebas daripada semua ralat atau risiko keselamatan.',
        },
      ],
    },
    {
      id: '9.12',
      title: '9.12 Ujian Aplikasi (Application Testing)',
      blocks: [
        { type: 'p', text: 'Sebelum aplikasi diberikan kepada pengguna sebenar, ujian perlu dilakukan untuk memastikan setiap fungsi beroperasi seperti yang dirancang.' },

        { type: 'subheading', text: 'A. Functional Testing' },
        { type: 'p', text: 'Menguji sama ada setiap fungsi berjalan dengan betul. Contoh: Pengguna boleh mendaftar, Pengguna boleh membuat tempahan, Pegawai boleh meluluskan tempahan, Status berubah dengan betul.' },

        { type: 'subheading', text: 'B. Validation Testing' },
        { type: 'p', text: 'Menguji sama ada sistem menerima data yang betul dan menolak data yang tidak sah. Contoh: Tarikh lampau tidak dibenarkan, E-mel mesti menggunakan format yang betul, Medan wajib perlu diisi.' },

        { type: 'subheading', text: 'C. Security Testing' },
        { type: 'p', text: 'Menguji sama ada pengguna hanya boleh mengakses data dan fungsi yang dibenarkan. Contoh: User tidak boleh melihat rekod pengguna lain, User tidak boleh meluluskan tempahan, Approver boleh mengakses fungsi kelulusan, Admin boleh menguruskan data pentadbiran.' },

        { type: 'subheading', text: 'D. Automation Testing' },
        { type: 'p', text: 'Menguji proses automasi. Contoh: E-mel dihantar apabila tempahan dibuat, E-mel dihantar apabila tempahan diluluskan, Notifikasi dihantar apabila tempahan ditolak.' },

        { type: 'subheading', text: 'E. User Acceptance Testing (UAT)' },
        { type: 'p', text: 'UAT ialah ujian penerimaan pengguna. Pengguna sebenar atau wakil organisasi akan mencuba aplikasi dan menentukan sama ada aplikasi memenuhi keperluan kerja.' },
      ],
    },
    {
      id: '9.13',
      title: '9.13 Contoh Test Case FBMS',
      blocks: [
        { type: 'p', text: 'Berikut ialah contoh senarai ujian yang boleh digunakan.' },
        {
          type: 'table',
          title: '10 Test Case FBMS',
          headers: ['No.', 'Ujian', 'Hasil Dijangka'],
          rows: [
            ['1', 'User log masuk', 'Pengguna berjaya mengakses aplikasi'],
            ['2', 'User membuat tempahan', 'Rekod baharu disimpan'],
            ['3', 'User melihat Tempahan Saya', 'Hanya rekod yang dibenarkan dipaparkan'],
            ['4', 'User cuba meluluskan tempahan', 'Tindakan tidak dibenarkan'],
            ['5', 'Approver meluluskan tempahan', 'Status menjadi Approved'],
            ['6', 'Approver menolak tempahan', 'Status menjadi Rejected'],
            ['7', 'Tempahan diluluskan', 'E-mel kelulusan dihantar'],
            ['8', 'Tempahan ditolak', 'E-mel penolakan dihantar'],
            ['9', 'Admin membuka laporan', 'Maklumat laporan dipaparkan'],
            ['10', 'User memasukkan tarikh lampau', 'Sistem menolak nilai yang tidak sah'],
          ],
        },
      ],
    },
    {
      id: '9.14',
      title: '9.14 Pengurusan Ralat',
      blocks: [
        { type: 'p', text: 'Selepas aplikasi digunakan, pembangun mungkin menerima laporan masalah daripada pengguna. Antara masalah yang biasa berlaku:' },

        { type: 'subheading', text: 'A. Data Tidak Dipaparkan' },
        { type: 'label', text: 'Punca yang mungkin:' },
        { type: 'ul', items: ['Security Filter terlalu ketat.', 'Slice mempunyai syarat yang salah.', 'Data sumber tidak lengkap.', 'Pengguna tidak mempunyai akses.'] },
        { type: 'label', text: 'Penyelesaian:' },
        { type: 'ol', items: ['Semak sumber data.', 'Semak formula Slice.', 'Semak Security Filter.', 'Semak identiti pengguna.'] },

        { type: 'subheading', text: 'B. Formula Tidak Berfungsi' },
        { type: 'label', text: 'Punca yang mungkin:' },
        { type: 'ul', items: ['Nama Column salah.', 'Jenis data tidak sesuai.', 'Kurungan tidak lengkap.', 'Rujukan Table tidak tepat.'] },
        { type: 'label', text: 'Penyelesaian:' },
        { type: 'ol', items: ['Buka Expression Assistant.', 'Semak formula.', 'Semak nama Column.', 'Uji menggunakan data contoh.'] },

        { type: 'subheading', text: 'C. Automation Tidak Berjalan' },
        { type: 'label', text: 'Punca yang mungkin:' },
        { type: 'ul', items: ['Event tidak dicetuskan.', 'Bot tidak diaktifkan.', 'Condition tidak dipenuhi.', 'Task mempunyai ralat.'] },
        { type: 'label', text: 'Penyelesaian:' },
        { type: 'ol', items: ['Buka Automation Monitor.', 'Semak pelaksanaan Bot.', 'Kenal pasti Step yang gagal.', 'Baiki konfigurasi.', 'Uji semula.'] },

        { type: 'subheading', text: 'D. Pengguna Tidak Boleh Mengakses Aplikasi' },
        { type: 'label', text: 'Punca yang mungkin:' },
        { type: 'ul', items: ['Pengguna belum dimasukkan ke senarai akses.', 'Akaun yang digunakan tidak betul.', 'Require Sign-In belum dikonfigurasikan dengan betul.', 'Tetapan perkongsian aplikasi tidak sesuai.'] },
        { type: 'label', text: 'Penyelesaian:' },
        { type: 'ol', items: ['Semak e-mel pengguna.', 'Semak senarai pengguna yang dibenarkan.', 'Semak konfigurasi keselamatan.', 'Semak tetapan perkongsian aplikasi.'] },
      ],
    },
    {
      id: '9.15',
      title: '9.15 Pengurusan dan Penyelenggaraan Aplikasi',
      blocks: [
        { type: 'p', text: 'Aplikasi yang telah digunakan perlu diselenggara secara berkala. Antara aktiviti penyelenggaraan:' },
        {
          type: 'ol',
          items: [
            'Menyemak rekod dan data.',
            'Menambah baik fungsi.',
            'Mengemaskini struktur Table.',
            'Menyemak formula.',
            'Menyemak automasi.',
            'Menyemak senarai pengguna.',
            'Menilai prestasi aplikasi.',
            'Menyemak keselamatan.',
            'Menyediakan salinan sandaran sumber data.',
            'Mendokumentasikan perubahan sistem.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Amalan terbaik',
          text: 'Sebelum mengubah struktur data atau fungsi penting, buat salinan sandaran dan uji perubahan menggunakan data yang tidak menjejaskan operasi sebenar.',
        },
      ],
    },
    {
      id: '9.16',
      title: '9.16 Memahami Perkongsian dan Lesen AppSheet',
      blocks: [
        { type: 'p', text: 'Aplikasi AppSheet boleh dikongsi dengan pengguna yang dibenarkan melalui mekanisme perkongsian aplikasi.' },
        { type: 'label', text: 'Walau bagaimanapun, pembangun perlu memahami bahawa penggunaan aplikasi mungkin tertakluk kepada:' },
        { type: 'ul', items: ['Pelan AppSheet.', 'Jenis akaun pengguna.', 'Bilangan pengguna.', 'Ciri yang digunakan.', 'Polisi organisasi.', 'Lesen yang diperlukan.'] },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Peringatan Lesen',
          text: 'Jangan menganggap aplikasi yang berjaya dibina secara percuma semestinya boleh digunakan oleh semua pengguna tanpa sebarang kos. Sebelum deployment, semak pelan dan keperluan lesen semasa melalui dokumentasi rasmi AppSheet.',
        },
      ],
    },
    {
      id: '9.17',
      title: '9.17 Aktiviti Amali: Menyediakan FBMS untuk Penggunaan Sebenar',
      blocks: [
        { type: 'p', text: 'Dalam aktiviti ini, peserta perlu melengkapkan konfigurasi keselamatan dan membuat ujian akhir aplikasi.' },

        { type: 'subheading', text: 'Tugasan 1: Aktifkan Require Sign-In' },
        { type: 'ol', items: ['Buka Security.', 'Aktifkan Require Sign-In.', 'Simpan perubahan.', 'Uji log masuk.'] },

        { type: 'subheading', text: 'Tugasan 2: Semak Table USERS' },
        { type: 'p', text: 'Pastikan Table USERS mempunyai: UserID, FullName, Email, Role, Active.' },

        { type: 'subheading', text: 'Tugasan 3: Kawal Paparan Mengikut Role' },
        { type: 'p', text: 'Bina paparan Dashboard Admin, Dashboard Approver, Dashboard User. Gunakan Show If yang sesuai untuk mengawal paparan.' },

        { type: 'subheading', text: 'Tugasan 4: Bina Security Filter' },
        {
          type: 'code',
          title: 'Pada Table BOOKINGS (hadkan kepada pemilik tempahan dan Admin)',
          code: 'OR(\n  LOOKUP(\n    USEREMAIL(),\n    "USERS",\n    "Email",\n    "Role"\n  ) = "Admin",\n  [UserEmail] = USEREMAIL()\n)',
        },
        { type: 'p', text: 'Semak semula keperluan akses pegawai pelulus. Jika pegawai perlu melihat rekod tertentu, reka bentuk Security Filter perlu memasukkan syarat akses yang sesuai.' },

        { type: 'subheading', text: 'Tugasan 5: Kawal Action' },
        { type: 'p', text: 'Pastikan hanya pengguna yang mempunyai Role Admin atau Approver boleh meluluskan tempahan.' },

        { type: 'subheading', text: 'Tugasan 6: Jalankan Ujian Fungsi' },
        { type: 'p', text: 'Uji: Pendaftaran pengguna, Log masuk, Tempahan baharu, Paparan tempahan, Kelulusan, Penolakan, Notifikasi.' },

        { type: 'subheading', text: 'Tugasan 7: Jalankan Deployment Check' },
        { type: 'ol', items: ['Buka bahagian Deployment.', 'Jalankan Deployment Check.', 'Semak isu yang dikesan.', 'Baiki isu yang diperlukan.', 'Jalankan semakan semula.'] },

        { type: 'subheading', text: 'Tugasan 8: Ujian Penerimaan Pengguna' },
        { type: 'p', text: 'Minta sekurang-kurangnya seorang pengguna mencuba aplikasi. Rekodkan: Masalah yang ditemui, Fungsi yang sukar digunakan, Cadangan penambahbaikan, Keputusan ujian.' },
      ],
    },
    {
      id: '9.18',
      title: '9.18 Latihan Pengukuhan',
      blocks: [
        {
          type: 'quiz_mcq',
          questions: [
            {
              number: 1,
              q: 'Apakah fungsi Authentication?',
              options: [
                { key: 'A', text: 'Mengubah warna aplikasi' },
                { key: 'B', text: 'Mengesahkan identiti pengguna' },
                { key: 'C', text: 'Mengira jumlah rekod' },
                { key: 'D', text: 'Menghasilkan carta' },
              ],
              answer: 'B',
              explanation: 'Authentication ialah proses mengesahkan identiti siapa pengguna yang mengakses aplikasi (cth. log masuk Google).',
            },
            {
              number: 2,
              q: 'Apakah fungsi Authorization?',
              options: [
                { key: 'A', text: 'Menentukan tindakan yang dibenarkan kepada pengguna' },
                { key: 'B', text: 'Menghasilkan ID unik' },
                { key: 'C', text: 'Mengubah jenis data' },
                { key: 'D', text: 'Menghantar e-mel' },
              ],
              answer: 'A',
              explanation: 'Authorization menentukan perkara atau tindakan yang dibenarkan kepada pengguna selepas identitinya disahkan.',
            },
            {
              number: 3,
              q: 'Apakah fungsi Security Filter?',
              options: [
                { key: 'A', text: 'Mengubah paparan menu' },
                { key: 'B', text: 'Mengehadkan rekod yang dimuatkan kepada pengguna' },
                { key: 'C', text: 'Mengubah warna rekod' },
                { key: 'D', text: 'Membina borang' },
              ],
              answer: 'B',
              explanation: 'Security Filter menapis data pada peringkat pemuatan data supaya rekod yang tidak dibenarkan tidak dihantar ke peranti pengguna.',
            },
            {
              number: 4,
              q: 'Apakah perbezaan utama Slice dengan Security Filter?',
              options: [
                { key: 'A', text: 'Kedua-duanya mempunyai fungsi keselamatan yang sama' },
                { key: 'B', text: 'Slice mengawal paparan, Security Filter menapis data pada peringkat pemuatan' },
                { key: 'C', text: 'Slice digunakan untuk menghantar e-mel' },
                { key: 'D', text: 'Security Filter digunakan untuk membina carta' },
              ],
              answer: 'B',
              explanation: 'Slice hanya mengawal paparan dalam aplikasi dan tidak menjamin keselamatan data, manakala Security Filter menapis data sebelum dimuatkan ke peranti pengguna.',
            },
            {
              number: 5,
              q: 'Apakah tujuan Deployment Check?',
              options: [
                { key: 'A', text: 'Menambah pengguna secara automatik' },
                { key: 'B', text: 'Membantu menyemak konfigurasi aplikasi sebelum digunakan' },
                { key: 'C', text: 'Memadamkan data lama' },
                { key: 'D', text: 'Mengubah warna aplikasi' },
              ],
              answer: 'B',
              explanation: 'Deployment Check menyemak konfigurasi keselamatan, struktur, formula dan pengesahan pengguna sebelum aplikasi diterbitkan.',
            },
            {
              number: 6,
              q: 'Apakah maksud UAT?',
              options: [
                { key: 'A', text: 'User Application Tool' },
                { key: 'B', text: 'User Acceptance Testing' },
                { key: 'C', text: 'Universal Access Technology' },
                { key: 'D', text: 'User Automation Testing' },
              ],
              answer: 'B',
              explanation: 'UAT ialah User Acceptance Testing, iaitu ujian penerimaan oleh pengguna sebenar atau wakil organisasi.',
            },
            {
              number: 7,
              q: 'Mengapa aplikasi perlu diselenggara?',
              options: [
                { key: 'A', text: 'Untuk memastikan aplikasi terus berfungsi dan sesuai dengan keperluan pengguna' },
                { key: 'B', text: 'Untuk menghapuskan semua pengguna' },
                { key: 'C', text: 'Untuk mengelakkan aplikasi daripada dibuka' },
                { key: 'D', text: 'Untuk menukar semua data kepada gambar' },
              ],
              answer: 'A',
              explanation: 'Penyelenggaraan berkala memastikan data, formula, automasi, keselamatan dan prestasi aplikasi sentiasa stabil dan relevan.',
            },
          ],
        },
      ],
    },
    {
      id: '9.19',
      title: '9.19 Senarai Semak Sebelum Deployment',
      blocks: [
        {
          type: 'checklist',
          id: 'mod9_deployment_checklist',
          intro: 'Gunakan senarai semak ini sebelum aplikasi diberikan kepada pengguna sebenar.',
          groups: [
            {
              title: 'Keselamatan',
              items: [
                'Require Sign-In telah diaktifkan.',
                'Senarai pengguna telah disemak.',
                'Role pengguna telah ditetapkan.',
                'Security Filter telah diuji.',
                'Action penting mempunyai kawalan akses.',
                'Data sensitif dilindungi.',
              ],
            },
            {
              title: 'Fungsi',
              items: [
                'Borang berfungsi.',
                'Data boleh disimpan.',
                'Data boleh dikemaskini.',
                'Data boleh dipaparkan.',
                'Formula telah diuji.',
                'Slice berfungsi.',
                'Dashboard berfungsi.',
              ],
            },
            {
              title: 'Automation',
              items: [
                'Bot telah diaktifkan.',
                'E-mel diuji.',
                'Notifikasi diuji.',
                'Automation Monitor telah disemak.',
              ],
            },
            {
              title: 'Penggunaan',
              items: [
                'Paparan mudah digunakan.',
                'Navigasi tersusun.',
                'Aplikasi diuji melalui telefon.',
                'Aplikasi diuji melalui komputer.',
                'Pengguna telah diberi panduan.',
              ],
            },
            {
              title: 'Deployment',
              items: [
                'Deployment Check telah dijalankan.',
                'Isu penting telah diselesaikan.',
                'Pelan dan lesen telah disemak.',
                'Sumber data telah disandarkan.',
                'Dokumentasi sistem disediakan.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: '9.20',
      title: '9.20 Ringkasan Modul',
      blocks: [
        { type: 'p', text: 'Dalam modul ini, peserta telah mempelajari:' },
        {
          type: 'ol',
          items: [
            'Konsep keselamatan aplikasi.',
            'Authentication dan Authorization.',
            'Require Sign-In.',
            'Pengurusan pengguna dan Role.',
            'Kawalan akses menggunakan Expressions.',
            'Security Filters.',
            'Perbezaan Slice dengan Security Filter.',
            'Deployment.',
            'Deployment Check.',
            'Functional Testing.',
            'Security Testing.',
            'User Acceptance Testing.',
            'Pengurusan ralat.',
            'Penyelenggaraan aplikasi.',
            'Perkongsian dan lesen AppSheet.',
          ],
        },
      ],
    },
    {
      id: '9.21',
      title: '9.21 Hasil Pembelajaran Modul',
      blocks: [
        { type: 'p', text: 'Peserta dianggap menguasai modul ini apabila berjaya:' },
        {
          type: 'ul',
          items: [
            'Mengaktifkan Require Sign-In.',
            'Menyediakan senarai pengguna.',
            'Menetapkan Role pengguna.',
            'Mengawal paparan berdasarkan Role.',
            'Mengkonfigurasikan Security Filter.',
            'Menguji akses menggunakan akaun berlainan.',
            'Menjalankan Deployment Check.',
            'Menyediakan senarai semak sebelum penggunaan sebenar.',
          ],
        },
      ],
    },
  ],
};
