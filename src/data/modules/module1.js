export const module1 = {
  id: 1,
  code: 'MODUL 1',
  title: 'Pengenalan Kepada Google AppSheet',
  shortTitle: 'Pengenalan AppSheet',
  subtitle: 'Memahami konsep No-Code, ekosistem asas, komponen utama dan keperluan permulaan Google AppSheet.',
  pages: 'Muka surat 1 – 4',
  duration: '30 minit',
  level: 'Beginner',
  sections: [
    {
      id: '1.1',
      title: '1.1 OBJEKTIF PEMBELAJARAN',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Memahami konsep pembangunan aplikasi tanpa kod (No-Code).',
            'Menjelaskan fungsi dan kegunaan Google AppSheet.',
            'Mengenal pasti komponen utama dalam ekosistem AppSheet.',
            'Memahami hubungan antara Google Sheets dengan AppSheet.',
            'Mengenal pasti jenis aplikasi yang boleh dibangunkan menggunakan AppSheet.',
          ],
        },
      ],
    },
    {
      id: '1.2',
      title: '1.2 APAKAH GOOGLE APPSHEET?',
      blocks: [
        {
          type: 'p',
          text: 'Google AppSheet merupakan platform pembangunan aplikasi tanpa kod (No-Code Application Development Platform) yang membolehkan pengguna membina aplikasi perniagaan dan pengurusan data tanpa perlu mempunyai kemahiran pengaturcaraan.',
        },
        {
          type: 'p',
          text: 'Melalui platform ini, pengguna boleh membangunkan aplikasi dengan menggunakan kaedah konfigurasi visual.',
        },
        {
          type: 'p',
          text: 'Pengguna hanya perlu menyediakan sumber data, menentukan struktur aplikasi dan menetapkan fungsi yang diperlukan melalui AppSheet Editor.',
        },
        {
          type: 'p',
          text: 'Aplikasi yang dibangunkan boleh digunakan melalui telefon pintar, tablet dan pelayar web komputer.',
        },
      ],
    },
    {
      id: '1.3',
      title: '1.3 APAKAH MAKSUD NO-CODE?',
      blocks: [
        {
          type: 'p',
          text: 'No-Code merujuk kepada pendekatan pembangunan aplikasi yang tidak memerlukan pengguna menulis kod pengaturcaraan secara tradisional.',
        },
        {
          type: 'p',
          text: 'Dalam pembangunan sistem konvensional, pembangun biasanya perlu menggunakan bahasa pengaturcaraan seperti:',
        },
        {
          type: 'ul',
          items: ['Python', 'Java', 'PHP', 'JavaScript', 'C#'],
        },
        {
          type: 'p',
          text: 'Namun, melalui AppSheet, pengguna boleh membangunkan aplikasi menggunakan konfigurasi visual yang disediakan.',
        },
        {
          type: 'p',
          text: 'Walau bagaimanapun, AppSheet turut menyediakan Expression dan formula tersendiri untuk menghasilkan fungsi yang lebih kompleks.',
        },
      ],
    },
    {
      id: '1.4',
      title: '1.4 BAGAIMANAKAH GOOGLE APPSHEET BERFUNGSI?',
      blocks: [
        { type: 'p', text: 'Secara asasnya, AppSheet menggunakan tiga komponen utama:' },
        { type: 'subheading', text: 'A. DATA SOURCE' },
        { type: 'p', text: 'Data Source ialah sumber data yang digunakan oleh aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Google Sheets',
            'Microsoft Excel',
            'Cloud SQL',
            'Pangkalan data lain yang disokong.',
          ],
        },
        { type: 'subheading', text: 'B. APPSHEET EDITOR' },
        { type: 'p', text: 'AppSheet Editor merupakan ruang kerja untuk membangunkan aplikasi.' },
        { type: 'label', text: 'Melalui editor ini, pengguna boleh:' },
        {
          type: 'ul',
          items: [
            'Membina struktur aplikasi.',
            'Menetapkan jadual dan lajur.',
            'Menghasilkan borang.',
            'Menyusun paparan aplikasi.',
            'Menetapkan formula.',
            'Membina automasi.',
          ],
        },
        { type: 'subheading', text: 'C. APPLICATION INTERFACE' },
        { type: 'p', text: 'Application Interface ialah antaramuka aplikasi yang digunakan oleh pengguna akhir.' },
        { type: 'label', text: 'Contohnya:' },
        {
          type: 'ul',
          items: [
            'Borang pendaftaran.',
            'Senarai rekod.',
            'Paparan dashboard.',
            'Laporan.',
            'Paparan butiran rekod.',
          ],
        },
      ],
    },
    {
      id: '1.5',
      title: '1.5 CONTOH PENGGUNAAN GOOGLE APPSHEET',
      blocks: [
        { type: 'p', text: 'Google AppSheet boleh digunakan untuk membangunkan pelbagai jenis aplikasi.' },
        { type: 'label', text: 'Antaranya:' },
        {
          type: 'ol',
          items: [
            'Sistem Pengurusan Inventori.',
            'Sistem Kehadiran Staf.',
            'Sistem Pengurusan Pelajar.',
            'Sistem Tempahan Bilik.',
            'Sistem Pengurusan Aduan.',
            'Sistem Pengurusan Aset.',
            'Sistem Pemantauan Projek.',
            'Sistem Pengurusan Pelanggan.',
            'Sistem Pemeriksaan Keselamatan.',
            'Sistem Pengurusan Tuntutan.',
          ],
        },
      ],
    },
    {
      id: '1.6',
      title: '1.6 KELEBIHAN GOOGLE APPSHEET',
      blocks: [
        { type: 'p', text: 'Antara kelebihan menggunakan AppSheet ialah:' },
        {
          type: 'ol',
          items: [
            'Tidak memerlukan kemahiran pengaturcaraan tradisional.',
            'Mempercepatkan proses pembangunan aplikasi.',
            'Menyokong penggunaan peranti mudah alih dan komputer.',
            'Boleh menggunakan Google Sheets sebagai sumber data.',
            'Menyediakan fungsi borang digital.',
            'Menyediakan fungsi pengurusan data.',
            'Menyokong automasi proses kerja.',
            'Menyediakan paparan dashboard dan laporan.',
            'Membolehkan aplikasi dikongsi dengan pengguna yang dibenarkan.',
          ],
        },
      ],
    },
    {
      id: '1.7',
      title: '1.7 KEPERLUAN ASAS UNTUK MENGGUNAKAN APPSHEET',
      blocks: [
        { type: 'p', text: 'Sebelum memulakan pembangunan aplikasi, pengguna perlu menyediakan:' },
        {
          type: 'ol',
          items: [
            'Akaun Google.',
            'Akses kepada Google Sheets.',
            'Sambungan internet.',
            'Akses kepada Google AppSheet.',
            'Komputer atau telefon pintar.',
          ],
        },
        {
          type: 'links',
          items: [
            { label: 'Laman rasmi Google AppSheet', url: 'https://www.appsheet.com/' },
            { label: 'Pusat bantuan AppSheet', url: 'https://support.google.com/appsheet/' },
          ],
        },
      ],
    },
    {
      id: '1.8',
      title: '1.8 LATIHAN PENGUKUHAN',
      blocks: [
        {
          type: 'quiz_open',
          intro: 'Jawab soalan berikut:',
          questions: [
            {
              q: 'Apakah yang dimaksudkan dengan Google AppSheet?',
              guide: 'Google AppSheet merupakan platform pembangunan aplikasi tanpa kod (No-Code Application Development Platform) yang membolehkan pengguna membina aplikasi perniagaan dan pengurusan data melalui kaedah konfigurasi visual tanpa perlu menulis kod pengaturcaraan tradisional.',
            },
            {
              q: 'Apakah maksud pembangunan aplikasi No-Code?',
              guide: 'No-Code merujuk kepada pendekatan pembangunan aplikasi yang tidak memerlukan pengguna menulis kod pengaturcaraan secara tradisional (seperti Python, Java, PHP, JavaScript atau C#), sebaliknya menggunakan konfigurasi visual, dengan sokongan Expression dan formula tersendiri bagi fungsi yang lebih kompleks.',
            },
            {
              q: 'Nyatakan tiga contoh sumber data yang boleh digunakan dalam pembangunan aplikasi.',
              guide: 'Google Sheets, Microsoft Excel, Cloud SQL (serta pangkalan data lain yang disokong).',
            },
            {
              q: 'Apakah fungsi AppSheet Editor?',
              guide: 'AppSheet Editor ialah ruang kerja untuk membangunkan aplikasi di mana pengguna boleh membina struktur aplikasi, menetapkan jadual dan lajur, menghasilkan borang, menyusun paparan aplikasi, menetapkan formula dan membina automasi.',
            },
            {
              q: 'Nyatakan lima contoh aplikasi yang boleh dibangunkan menggunakan AppSheet.',
              guide: 'Mana-mana lima: Sistem Pengurusan Inventori, Sistem Kehadiran Staf, Sistem Pengurusan Pelajar, Sistem Tempahan Bilik, Sistem Pengurusan Aduan, Sistem Pengurusan Aset, Sistem Pemantauan Projek, Sistem Pengurusan Pelanggan, Sistem Pemeriksaan Keselamatan, Sistem Pengurusan Tuntutan.',
            },
            {
              q: 'Apakah kelebihan menggunakan AppSheet berbanding pembangunan aplikasi secara tradisional?',
              guide: 'Tidak memerlukan kemahiran pengaturcaraan tradisional, mempercepatkan proses pembangunan aplikasi, menyokong peranti mudah alih & komputer, menggunakan Google Sheets sebagai sumber data, menyediakan borang digital, pengurusan data, automasi, dashboard/laporan, dan perkongsian terkawal.',
            },
          ],
        },
      ],
    },
    {
      id: '1.9',
      title: '1.9 AKTIVITI AMALI',
      blocks: [
        { type: 'subheading', text: 'Aktiviti: Mengenali Platform Google AppSheet' },
        { type: 'label', text: 'Arahan:' },
        {
          type: 'ol',
          items: [
            'Buka pelayar web.',
            'Layari https://www.appsheet.com/',
            'Log masuk menggunakan akaun Google.',
            'Kenal pasti paparan utama AppSheet.',
            'Terokai bahagian aplikasi dan AppSheet Editor.',
            'Catatkan fungsi yang terdapat dalam platform tersebut.',
          ],
        },
      ],
    },
    {
      id: '1.10',
      title: '1.10 RUMUSAN MODUL',
      blocks: [
        {
          type: 'p',
          text: 'Google AppSheet merupakan platform pembangunan aplikasi No-Code yang memudahkan pengguna membina aplikasi tanpa perlu menulis kod pengaturcaraan tradisional.',
        },
        {
          type: 'p',
          text: 'Dengan memahami konsep asas AppSheet, peserta akan mempunyai pengetahuan awal untuk meneruskan pembelajaran kepada penyediaan sumber data, pembinaan aplikasi, konfigurasi fungsi dan automasi sistem.',
        },
      ],
    },
  ],
};
