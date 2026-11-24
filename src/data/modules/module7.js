export const module7 = {
  id: 7,
  code: 'MODUL 7',
  title: 'Reka Bentuk Antara Muka (UI) dan Pengalaman Pengguna (UX)',
  shortTitle: 'UI / UX & Dashboard',
  subtitle: 'Prinsip reka bentuk aplikasi, pemilihan View, pembinaan Dashboard, Chart statistik, borang mesra pengguna, ikon & warna, Navigation, Branding & Theme dan ujian UI/UX.',
  pages: 'Muka surat 81 – 94',
  duration: '60 minit',
  level: 'Intermediate',
  sections: [
    {
      id: '7.1',
      title: '7.1 Pengenalan',
      blocks: [
        {
          type: 'p',
          text: 'User Interface (UI) dan User Experience (UX) merupakan dua aspek penting dalam pembangunan aplikasi.',
        },
        {
          type: 'p',
          text: 'Aplikasi yang mempunyai fungsi lengkap tetapi sukar digunakan boleh menyebabkan pengguna kurang berminat untuk menggunakannya.',
        },
        {
          type: 'p',
          text: 'Oleh itu, pembangun perlu memastikan aplikasi bukan sahaja berfungsi dengan baik, tetapi juga mempunyai paparan yang kemas, mudah difahami dan mesra pengguna.',
        },

        { type: 'subheading', text: 'Apakah UI?' },
        { type: 'p', text: 'UI atau User Interface ialah reka bentuk visual yang dilihat dan digunakan oleh pengguna.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: ['Butang.', 'Menu.', 'Ikon.', 'Warna.', 'Borang.', 'Senarai rekod.', 'Dashboard.', 'Carta dan grafik.'],
        },

        { type: 'subheading', text: 'Apakah UX?' },
        { type: 'p', text: 'UX atau User Experience ialah pengalaman pengguna ketika menggunakan aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Mudah mencari menu.',
            'Mudah mengisi borang.',
            'Tidak perlu melalui terlalu banyak langkah.',
            'Maklumat mudah difahami.',
            'Tindakan sistem mudah dijangka.',
            'Pengguna menerima maklum balas selepas melakukan sesuatu tindakan.',
          ],
        },

        {
          type: 'table',
          title: 'Perbezaan UI dan UX',
          headers: ['UI', 'UX'],
          rows: [
            ['Fokus kepada penampilan', 'Fokus kepada pengalaman penggunaan'],
            ['Warna dan ikon', 'Mudah digunakan'],
            ['Susunan butang', 'Aliran proses'],
            ['Reka bentuk borang', 'Kemudahan mengisi borang'],
            ['Paparan Dashboard', 'Kemudahan memahami maklumat'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Contoh mudah',
          text: 'Sebuah aplikasi mempunyai butang berwarna menarik dan ikon yang cantik. Ini berkaitan dengan UI. Tetapi jika pengguna perlu membuka lima menu untuk membuat satu tempahan, pengalaman penggunaan aplikasi tersebut kurang baik. Ini berkaitan dengan UX.',
        },
      ],
    },
    {
      id: '7.2',
      title: '7.2 Objektif Pembelajaran',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Memahami konsep UI dan UX.',
            'Menentukan jenis View yang sesuai.',
            'Membina Dashboard.',
            'Menghasilkan paparan statistik.',
            'Menyusun navigasi aplikasi.',
            'Menggunakan ikon dan warna dengan sesuai.',
            'Menghasilkan borang yang mesra pengguna.',
            'Membina aplikasi yang lebih profesional.',
          ],
        },
      ],
    },
    {
      id: '7.3',
      title: '7.3 Prinsip Reka Bentuk Aplikasi yang Baik',
      blocks: [
        { type: 'p', text: 'Terdapat beberapa prinsip yang perlu diberikan perhatian.' },

        { type: 'subheading', text: 'A. Simple' },
        { type: 'p', text: 'Reka bentuk perlu ringkas dan tidak terlalu banyak elemen yang tidak diperlukan.' },
        { type: 'ul', items: ['Gunakan menu yang jelas.', 'Elakkan terlalu banyak warna.', 'Paparkan maklumat penting sahaja.'] },

        { type: 'subheading', text: 'B. Consistent' },
        { type: 'p', text: 'Gunakan reka bentuk yang konsisten pada keseluruhan aplikasi.' },
        {
          type: 'ul',
          items: [
            'Nama menu menggunakan gaya yang sama.',
            'Ikon mempunyai maksud yang jelas.',
            'Penggunaan warna tidak berubah-ubah tanpa sebab.',
          ],
        },

        { type: 'subheading', text: 'C. Easy to Navigate' },
        { type: 'p', text: 'Pengguna perlu mudah bergerak antara satu paparan dengan paparan lain.' },
        {
          type: 'ul',
          items: [
            'Menu utama mudah dikenal pasti.',
            'Fungsi penting diletakkan pada kedudukan yang mudah dicapai.',
            'Paparan tidak terlalu berselerak.',
          ],
        },

        { type: 'subheading', text: 'D. User Friendly' },
        { type: 'p', text: 'Aplikasi perlu mudah digunakan oleh pengguna yang mempunyai tahap kemahiran teknologi berbeza.' },
        {
          type: 'ul',
          items: [
            'Label medan yang jelas.',
            'Arahan pengisian yang ringkas.',
            'Mesej ralat yang mudah difahami.',
          ],
        },

        { type: 'subheading', text: 'E. Responsive' },
        { type: 'p', text: 'Aplikasi perlu boleh digunakan melalui peranti yang berbeza seperti: Telefon pintar, Tablet, Komputer.' },
        { type: 'p', text: 'Sentiasa uji aplikasi pada saiz paparan yang berbeza.' },
      ],
    },
    {
      id: '7.4',
      title: '7.4 Memilih View yang Sesuai',
      blocks: [
        { type: 'p', text: 'Pemilihan View mempengaruhi cara pengguna melihat dan berinteraksi dengan data.' },
        {
          type: 'table',
          title: 'Jadual Pemilihan View',
          headers: ['View', 'Kegunaan', 'Contoh'],
          rows: [
            ['Table', 'Senarai rekod', 'Semua tempahan'],
            ['Deck', 'Paparan berbentuk kad', 'Senarai bilik'],
            ['Gallery', 'Paparan berasaskan imej', 'Galeri produk'],
            ['Detail', 'Maklumat lengkap', 'Butiran tempahan'],
            ['Form', 'Memasukkan data', 'Borang tempahan'],
            ['Chart', 'Statistik dan analisis', 'Jumlah tempahan'],
            ['Dashboard', 'Gabungan beberapa View', 'Dashboard pentadbir'],
            ['Calendar', 'Paparan mengikut tarikh', 'Jadual tempahan'],
            ['Map', 'Paparan lokasi', 'Lokasi aset'],
          ],
        },
        { type: 'subheading', text: 'Panduan Pemilihan View' },
        {
          type: 'ul',
          items: [
            'Gunakan Table apabila pengguna perlu melihat banyak rekod dalam bentuk senarai.',
            'Gunakan Deck apabila pengguna perlu melihat rekod dalam bentuk kad.',
            'Gunakan Gallery apabila gambar menjadi maklumat utama.',
            'Gunakan Form apabila pengguna perlu memasukkan maklumat.',
            'Gunakan Chart apabila pengguna perlu memahami statistik.',
            'Gunakan Dashboard apabila beberapa maklumat perlu dipaparkan dalam satu skrin.',
          ],
        },
      ],
    },
    {
      id: '7.5',
      title: '7.5 Membina Dashboard',
      blocks: [
        { type: 'p', text: 'Dashboard ialah paparan yang menggabungkan beberapa View dalam satu ruang.' },
        {
          type: 'p',
          text: 'Dashboard sangat berguna untuk aplikasi pengurusan kerana pengguna boleh melihat pelbagai maklumat penting tanpa perlu membuka banyak menu.',
        },
        { type: 'subheading', text: 'Contoh Dashboard Sistem Tempahan Bilik' },
        { type: 'p', text: 'Dashboard FBMS boleh mengandungi:' },
        {
          type: 'ol',
          items: [
            'Jumlah keseluruhan tempahan.',
            'Tempahan Pending.',
            'Tempahan Approved.',
            'Tempahan Rejected.',
            'Senarai tempahan terkini.',
            'Carta statistik tempahan.',
          ],
        },

        { type: 'subheading', text: 'Langkah 1: Sediakan Data Statistik' },
        { type: 'p', text: 'Pastikan Table BOOKINGS mempunyai maklumat yang diperlukan seperti: BookingID, UserEmail, RoomID, BookingDate, Status.' },

        { type: 'subheading', text: 'Langkah 2: Bina Slice atau View yang Diperlukan' },
        { type: 'p', text: 'Contoh paparan: AllBookings, PendingBookings, ApprovedBookings, RejectedBookings.' },
        {
          type: 'code',
          title: 'Syarat bagi setiap Slice',
          code: '// PendingBookings:\n[Status] = "Pending"\n\n// ApprovedBookings:\n[Status] = "Approved"\n\n// RejectedBookings:\n[Status] = "Rejected"',
        },

        { type: 'subheading', text: 'Langkah 3: Bina View Statistik' },
        {
          type: 'table',
          title: 'Contoh View Statistik',
          headers: ['Nama View', 'Sumber Data', 'Jenis'],
          rows: [
            ['Senarai Tempahan', 'BOOKINGS', 'Table'],
            ['Tempahan Pending', 'PendingBookings', 'Table'],
            ['Tempahan Approved', 'ApprovedBookings', 'Table'],
            ['Statistik Tempahan', 'BOOKINGS', 'Chart'],
          ],
        },

        { type: 'subheading', text: 'Langkah 4: Bina Dashboard' },
        {
          type: 'ol',
          items: [
            'Buka AppSheet Editor.',
            'Pergi ke bahagian App dan Views.',
            'Tambah View baharu.',
            'Berikan nama Dashboard.',
            'Pilih jenis View Dashboard.',
            'Pilih View yang ingin digabungkan.',
            'Susun paparan mengikut keutamaan.',
            'Simpan perubahan.',
          ],
        },
        { type: 'p', text: 'Nama dan lokasi tetapan mungkin berbeza mengikut versi AppSheet Editor.' },

        { type: 'subheading', text: 'Langkah 5: Uji Dashboard' },
        { type: 'label', text: 'Semak perkara berikut:' },
        {
          type: 'ul',
          items: [
            'Semua komponen dipaparkan.',
            'Tajuk setiap paparan jelas.',
            'Carta mudah difahami.',
            'Pengguna tidak perlu menatal terlalu banyak.',
            'Dashboard boleh digunakan melalui telefon dan komputer.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Dashboard menggabungkan paparan sedia ada. Ia bukan semestinya menghasilkan satu rekod statistik secara automatik. Data dan formula bagi setiap komponen perlu disediakan terlebih dahulu.',
        },
      ],
    },
    {
      id: '7.6',
      title: '7.6 Membina Chart atau Carta Statistik',
      blocks: [
        { type: 'p', text: 'Chart digunakan untuk memaparkan data dalam bentuk grafik. Carta membantu pengguna memahami corak dan prestasi sesuatu sistem.' },

        { type: 'subheading', text: 'Jenis Carta' },
        { type: 'label', text: 'A. Column Chart' },
        { type: 'p', text: 'Sesuai untuk membandingkan nilai antara kategori. Contoh: Jumlah tempahan mengikut bilik, Jumlah jualan mengikut bulan.' },

        { type: 'label', text: 'B. Bar Chart' },
        { type: 'p', text: 'Sesuai untuk membandingkan beberapa kategori secara mendatar. Contoh: Jumlah tempahan mengikut jabatan.' },

        { type: 'label', text: 'C. Pie Chart' },
        { type: 'p', text: 'Sesuai untuk menunjukkan peratusan atau bahagian daripada keseluruhan. Contoh: Peratus tempahan Pending, Peratus tempahan Approved, Peratus tempahan Rejected.' },

        { type: 'label', text: 'D. Line Chart' },
        { type: 'p', text: 'Sesuai untuk melihat perubahan data mengikut masa. Contoh: Trend tempahan bulanan, Perubahan jualan sepanjang tahun.' },

        {
          type: 'table',
          title: 'Contoh Data Statistik',
          headers: ['Status', 'Bilangan'],
          rows: [
            ['Pending', '10'],
            ['Approved', '35'],
            ['Rejected', '5'],
          ],
        },
        { type: 'p', text: 'Carta boleh digunakan untuk menunjukkan perbandingan jumlah tempahan mengikut status.' },

        { type: 'subheading', text: 'Langkah Membina Chart' },
        {
          type: 'ol',
          items: [
            'Buka AppSheet Editor.',
            'Pergi ke App dan Views.',
            'Tambah View baharu.',
            'Namakan View sebagai Statistik Tempahan.',
            'Pilih Table atau Slice yang mengandungi data.',
            'Pilih jenis View Chart.',
            'Tetapkan Column kategori dan nilai mengikut pilihan yang tersedia.',
            'Simpan dan uji paparan.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Perhatian',
          text: 'Susunan dan jenis carta yang boleh dihasilkan bergantung pada struktur data serta pilihan Chart yang disediakan oleh AppSheet.',
        },
      ],
    },
    {
      id: '7.7',
      title: '7.7 Menghasilkan Borang yang Mesra Pengguna',
      blocks: [
        { type: 'p', text: 'Borang ialah salah satu komponen paling penting dalam kebanyakan aplikasi. Borang yang terlalu panjang atau tidak tersusun boleh menyukarkan pengguna.' },

        { type: 'subheading', text: 'A. Gunakan Nama Medan yang Jelas' },
        { type: 'ul', items: ['Kurang sesuai: Col1, Data2, Field3.', 'Lebih sesuai: Nama Pemohon, Tarikh Tempahan, Tujuan Penggunaan, Pilihan Bilik.'] },

        { type: 'subheading', text: 'B. Gunakan Description' },
        { type: 'p', text: 'Description boleh digunakan untuk memberikan arahan tambahan kepada pengguna.' },
        { type: 'code', title: 'Contoh: Column Purpose → Description', code: '"Sila nyatakan tujuan penggunaan bilik dengan jelas."' },

        { type: 'subheading', text: 'C. Tetapkan Required Fields' },
        { type: 'p', text: 'Tandakan medan penting sebagai wajib diisi. Contoh: Nama Pemohon, Tarikh Tempahan, Bilik, Tujuan Tempahan.' },

        { type: 'subheading', text: 'D. Susun Medan Mengikut Aliran' },
        { type: 'label', text: 'Contoh susunan borang tempahan:' },
        {
          type: 'ol',
          items: [
            'Maklumat Pemohon.',
            'Maklumat Tempahan.',
            'Tarikh dan Masa.',
            'Tujuan Tempahan.',
            'Pengesahan Maklumat.',
          ],
        },

        { type: 'subheading', text: 'E. Gunakan Input Type yang Sesuai' },
        {
          type: 'ul',
          items: [
            'Tarikh: Date.',
            'Masa: Time.',
            'E-mel: Email.',
            'Telefon: Phone.',
            'Tujuan: LongText.',
            'Status: Enum.',
          ],
        },
      ],
    },
    {
      id: '7.8',
      title: '7.8 Menggunakan Ikon dan Warna',
      blocks: [
        { type: 'p', text: 'Ikon dan warna membantu pengguna memahami fungsi dan status sesuatu maklumat.' },
        {
          type: 'table',
          title: 'Cadangan Penggunaan Ikon',
          headers: ['Fungsi', 'Cadangan Ikon'],
          rows: [
            ['Dashboard', 'Home'],
            ['Tempahan', 'Calendar'],
            ['Pengguna', 'Person'],
            ['Bilik', 'Building'],
            ['Laporan', 'Chart'],
            ['Tetapan', 'Settings'],
            ['Kelulusan', 'Check'],
            ['Penolakan', 'Cancel'],
          ],
        },
        { type: 'p', text: 'Pilih ikon yang mudah difahami dan konsisten.' },
        {
          type: 'table',
          title: 'Cadangan Penggunaan Warna',
          headers: ['Warna', 'Penggunaan'],
          rows: [
            ['Biru', 'Fungsi utama atau maklumat umum'],
            ['Hijau', 'Berjaya atau diluluskan'],
            ['Kuning', 'Menunggu tindakan'],
            ['Merah', 'Ditolak atau memerlukan perhatian'],
            ['Kelabu', 'Maklumat sekunder'],
          ],
        },
        { type: 'p', text: 'Warna perlu digunakan secara konsisten. Jangan gunakan terlalu banyak warna dalam satu paparan.' },
      ],
    },
    {
      id: '7.9',
      title: '7.9 Membina Navigation yang Profesional',
      blocks: [
        { type: 'p', text: 'Navigasi menentukan bagaimana pengguna mengakses fungsi aplikasi. Contoh navigasi FBMS:' },
        { type: 'subheading', text: 'Pengguna biasa' },
        { type: 'ol', items: ['Dashboard.', 'Senarai Bilik.', 'Tempahan Saya.', 'Buat Tempahan.'] },
        { type: 'subheading', text: 'Pegawai pelulus' },
        { type: 'ol', items: ['Dashboard.', 'Tempahan Menunggu Kelulusan.', 'Sejarah Kelulusan.'] },
        { type: 'subheading', text: 'Pentadbir' },
        { type: 'ol', items: ['Dashboard.', 'Pengurusan Pengguna.', 'Pengurusan Bilik.', 'Semua Tempahan.', 'Laporan.'] },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Susunan ini ialah cadangan reka bentuk. Untuk memastikan pengguna hanya boleh mengakses fungsi yang dibenarkan, gunakan kawalan keselamatan dan kebenaran yang sesuai.',
        },
      ],
    },
    {
      id: '7.10',
      title: '7.10 Menggunakan Branding dan Theme',
      blocks: [
        { type: 'p', text: 'Branding membantu menjadikan aplikasi mempunyai identiti tersendiri.' },
        { type: 'label', text: 'Antara perkara yang boleh disesuaikan:' },
        { type: 'ul', items: ['Nama aplikasi.', 'Logo.', 'Warna utama.', 'Warna latar.', 'Ikon.', 'Gaya paparan.'] },
        { type: 'subheading', text: 'Contoh Identiti Visual FBMS' },
        { type: 'p', text: 'Nama aplikasi: Facility Booking Management System' },
        { type: 'label', text: 'Cadangan warna:' },
        {
          type: 'ul',
          items: [
            'Biru gelap sebagai warna utama.',
            'Putih sebagai latar.',
            'Biru muda sebagai warna sokongan.',
            'Hijau untuk status Approved.',
            'Kuning untuk Pending.',
            'Merah untuk Rejected.',
          ],
        },
        { type: 'label', text: 'Cadangan:' },
        {
          type: 'ol',
          items: [
            'Gunakan logo organisasi jika dibenarkan.',
            'Gunakan warna yang konsisten.',
            'Pastikan tulisan mudah dibaca.',
            'Elakkan latar yang terlalu sarat.',
            'Pastikan paparan sesuai untuk telefon.',
          ],
        },
      ],
    },
    {
      id: '7.11',
      title: '7.11 Menguji UI dan UX',
      blocks: [
        { type: 'p', text: 'Selepas membina paparan, pembangun perlu menjalankan ujian penggunaan. Antara perkara yang perlu diperiksa:' },
        { type: 'subheading', text: 'Ujian Paparan' },
        {
          type: 'ul',
          items: [
            'Adakah menu mudah difahami?',
            'Adakah ikon sesuai?',
            'Adakah teks mudah dibaca?',
            'Adakah maklumat penting mudah ditemui?',
          ],
        },
        { type: 'subheading', text: 'Ujian Borang' },
        {
          type: 'ul',
          items: [
            'Adakah susunan medan logik?',
            'Adakah arahan mudah difahami?',
            'Adakah medan wajib ditandakan?',
            'Adakah mesej ralat jelas?',
          ],
        },
        { type: 'subheading', text: 'Ujian Navigasi' },
        {
          type: 'ul',
          items: [
            'Adakah pengguna boleh kembali ke paparan utama?',
            'Adakah fungsi penting mudah dicapai?',
            'Adakah terdapat menu yang tidak diperlukan?',
          ],
        },
        { type: 'subheading', text: 'Ujian Peranti' },
        {
          type: 'ul',
          items: [
            'Uji menggunakan komputer.',
            'Uji menggunakan telefon pintar.',
            'Uji menggunakan tablet jika tersedia.',
          ],
        },
      ],
    },
    {
      id: '7.12',
      title: '7.12 Aktiviti Amali: Membina Dashboard FBMS',
      blocks: [
        { type: 'p', text: 'Peserta perlu membina satu Dashboard yang boleh digunakan oleh pentadbir sistem.' },

        { type: 'subheading', text: 'Tugasan 1: Sediakan Paparan' },
        { type: 'p', text: 'Pastikan peserta mempunyai: Semua Tempahan, Tempahan Pending, Tempahan Approved, Tempahan Rejected, Statistik Tempahan.' },

        { type: 'subheading', text: 'Tugasan 2: Bina Dashboard' },
        { type: 'p', text: 'Gabungkan paparan yang telah disediakan dalam satu Dashboard.' },

        { type: 'subheading', text: 'Tugasan 3: Susun Paparan' },
        {
          type: 'ol',
          items: [
            'Statistik keseluruhan.',
            'Carta status tempahan.',
            'Senarai tempahan terkini.',
            'Senarai tempahan Pending.',
          ],
        },

        { type: 'subheading', text: 'Tugasan 4: Kemas Kini Reka Bentuk' },
        {
          type: 'ul',
          items: [
            'Tetapkan nama View yang sesuai.',
            'Pilih ikon yang berkaitan.',
            'Gunakan warna yang konsisten.',
            'Susun menu utama.',
            'Semak paparan telefon.',
          ],
        },

        { type: 'subheading', text: 'Tugasan 5: Ujian Pengguna' },
        { type: 'p', text: 'Minta rakan peserta menggunakan aplikasi dan menjawab soalan berikut:' },
        {
          type: 'ol',
          items: [
            'Adakah mudah mencari fungsi tempahan?',
            'Adakah Dashboard mudah difahami?',
            'Adakah borang mudah diisi?',
            'Adakah maklumat dipaparkan dengan jelas?',
            'Apakah penambahbaikan yang diperlukan?',
          ],
        },
      ],
    },
    {
      id: '7.13',
      title: '7.13 Latihan Pengukuhan',
      blocks: [
        {
          type: 'quiz_mcq',
          questions: [
            {
              number: 1,
              q: 'Apakah maksud UI?',
              options: [
                { key: 'A', text: 'User Information' },
                { key: 'B', text: 'User Interface' },
                { key: 'C', text: 'Universal Internet' },
                { key: 'D', text: 'User Integration' },
              ],
              answer: 'B',
              explanation: 'UI bermaksud User Interface, iaitu reka bentuk visual yang dilihat dan digunakan oleh pengguna.',
            },
            {
              number: 2,
              q: 'Apakah maksud UX?',
              options: [
                { key: 'A', text: 'User Experience' },
                { key: 'B', text: 'User Extension' },
                { key: 'C', text: 'Universal Exchange' },
                { key: 'D', text: 'User Execution' },
              ],
              answer: 'A',
              explanation: 'UX bermaksud User Experience, iaitu keseluruhan pengalaman pengguna ketika menggunakan aplikasi.',
            },
            {
              number: 3,
              q: 'Apakah kegunaan Dashboard?',
              options: [
                { key: 'A', text: 'Memadamkan data' },
                { key: 'B', text: 'Menggabungkan beberapa paparan dalam satu ruang' },
                { key: 'C', text: 'Mengubah sumber data' },
                { key: 'D', text: 'Menghapuskan pengguna' },
              ],
              answer: 'B',
              explanation: 'Dashboard menggabungkan beberapa View (seperti jadual dan carta) ke dalam satu skrin untuk pemantauan pantas.',
            },
            {
              number: 4,
              q: 'View manakah sesuai untuk memaparkan statistik?',
              options: [
                { key: 'A', text: 'Form' },
                { key: 'B', text: 'Detail' },
                { key: 'C', text: 'Chart' },
                { key: 'D', text: 'Ref' },
              ],
              answer: 'C',
              explanation: 'Chart View digunakan untuk memaparkan statistik dan analisis data dalam bentuk grafik seperti Column, Bar, Pie atau Line Chart.',
            },
            {
              number: 5,
              q: 'Apakah tujuan Format Rules?',
              options: [
                { key: 'A', text: 'Mengubah penampilan rekod berdasarkan syarat' },
                { key: 'B', text: 'Menghapuskan Table' },
                { key: 'C', text: 'Menambah pengguna' },
                { key: 'D', text: 'Membina pangkalan data' },
              ],
              answer: 'A',
              explanation: 'Format Rules menyerlahkan rekod menggunakan warna atau ikon apabila memenuhi syarat tertentu (cth. status Approved berwarna hijau).',
            },
            {
              number: 6,
              q: 'Apakah ciri UX yang baik?',
              options: [
                { key: 'A', text: 'Menu terlalu banyak' },
                { key: 'B', text: 'Pengguna perlu melalui banyak langkah' },
                { key: 'C', text: 'Fungsi mudah dicari dan digunakan' },
                { key: 'D', text: 'Semua maklumat dipaparkan dalam satu borang panjang' },
              ],
              answer: 'C',
              explanation: 'UX yang baik memastikan menu mudah ditemui, borang ringkas tersusun dan fungsi mudah digunakan.',
            },
          ],
        },
      ],
    },
    {
      id: '7.14',
      title: '7.14 Ringkasan Modul',
      blocks: [
        { type: 'p', text: 'Dalam modul ini, peserta telah mempelajari:' },
        {
          type: 'ol',
          items: [
            'Konsep UI dan UX.',
            'Prinsip reka bentuk aplikasi.',
            'Pemilihan View yang sesuai.',
            'Pembinaan Dashboard.',
            'Pembinaan Chart.',
            'Reka bentuk borang.',
            'Penggunaan ikon dan warna.',
            'Penyusunan navigasi.',
            'Branding dan Theme.',
            'Ujian penggunaan aplikasi.',
          ],
        },
        {
          type: 'p',
          text: 'Reka bentuk UI dan UX yang baik dapat meningkatkan keselesaan pengguna dan menjadikan aplikasi lebih profesional.',
        },
      ],
    },
    {
      id: '7.15',
      title: '7.15 Hasil Pembelajaran Modul',
      blocks: [
        { type: 'p', text: 'Peserta dianggap menguasai modul ini apabila berjaya:' },
        {
          type: 'ul',
          items: [
            'Membina sekurang-kurangnya satu Dashboard.',
            'Menggabungkan beberapa Views.',
            'Membina sekurang-kurangnya satu Chart.',
            'Menghasilkan borang yang tersusun.',
            'Menetapkan ikon dan warna yang sesuai.',
            'Menyusun navigasi aplikasi.',
            'Menguji aplikasi melalui komputer dan telefon.',
          ],
        },
      ],
    },
  ],
};
