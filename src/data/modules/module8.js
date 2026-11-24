export const module8 = {
  id: 8,
  code: 'MODUL 8',
  title: 'Actions dan Automation dalam Google AppSheet',
  shortTitle: 'Actions & Automation',
  subtitle: '8 jenis Actions, Grouped Actions, Bot/Event/Process/Step/Task, automasi e-mel kelulusan & penolakan, Scheduled Automation dan Automation Monitor.',
  pages: 'Muka surat 95 – 112',
  duration: '90 minit',
  level: 'Intermediate',
  sections: [
    {
      id: '8.1',
      title: '8.1 Pengenalan',
      blocks: [
        {
          type: 'p',
          text: 'Dalam pembangunan aplikasi, pengguna bukan sekadar melihat maklumat atau mengisi borang. Mereka juga perlu melakukan tindakan tertentu seperti menghantar permohonan, meluluskan rekod, menolak permohonan dan mengemaskini status.',
        },
        { type: 'p', text: 'Google AppSheet menyediakan dua komponen penting untuk tujuan ini:' },
        {
          type: 'ol',
          items: [
            'Actions – membolehkan pengguna melakukan sesuatu tindakan melalui aplikasi.',
            'Automation – membolehkan sistem melaksanakan proses secara automatik berdasarkan peristiwa atau syarat tertentu.',
          ],
        },
        { type: 'label', text: 'Contoh dalam Sistem Tempahan Bilik (FBMS):' },
        {
          type: 'ul',
          items: [
            'Pengguna menekan butang Hantar Tempahan.',
            'Pegawai menekan butang Lulus.',
            'Sistem mengemaskini status tempahan.',
            'Sistem menghantar e-mel pemberitahuan.',
            'Pentadbir menerima notifikasi apabila terdapat tempahan baharu.',
          ],
        },
        { type: 'p', text: 'Dengan Actions dan Automation, aplikasi boleh berfungsi seperti sebuah sistem pengurusan sebenar.' },
      ],
    },
    {
      id: '8.2',
      title: '8.2 Objektif Pembelajaran',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Memahami konsep Actions dan Automation.',
            'Mengenal pasti jenis-jenis Actions.',
            'Membina butang tindakan dalam aplikasi.',
            'Mengemaskini data menggunakan Actions.',
            'Membina proses kelulusan.',
            'Memahami konsep Event, Process dan Task.',
            'Membina Bot untuk automasi.',
            'Menghantar notifikasi dan e-mel secara automatik.',
            'Menguji proses automasi dalam aplikasi.',
          ],
        },
      ],
    },
    {
      id: '8.3',
      title: '8.3 Memahami Actions',
      blocks: [
        { type: 'p', text: 'Action ialah arahan yang membolehkan pengguna melaksanakan sesuatu fungsi dalam aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Menukar status tempahan.',
            'Membuka borang baharu.',
            'Membuka paparan tertentu.',
            'Membuka pautan laman web.',
            'Menghantar pengguna ke rekod berkaitan.',
            'Menjalankan beberapa tindakan secara berturutan.',
          ],
        },
        { type: 'p', text: 'Actions biasanya dipaparkan dalam bentuk butang atau pilihan tindakan pada rekod.' },
        { type: 'subheading', text: 'Contoh Penggunaan Actions' },
        { type: 'p', text: 'Dalam FBMS, setiap tempahan mempunyai status: Pending, Approved, Rejected.' },
        { type: 'p', text: 'Pegawai pelulus boleh diberikan dua butang: Luluskan Tempahan dan Tolak Tempahan. Apabila pegawai menekan butang Luluskan Tempahan, sistem akan mengemaskini Status kepada Approved.' },
      ],
    },
    {
      id: '8.4',
      title: '8.4 Jenis-Jenis Actions',
      blocks: [
        { type: 'p', text: 'AppSheet menyediakan beberapa jenis tindakan. Antara yang penting ialah:' },

        { type: 'subheading', text: 'A. Data: set the values of some columns in this row' },
        { type: 'p', text: 'Digunakan untuk menetapkan atau mengemaskini nilai Column dalam rekod semasa.' },
        { type: 'ul', items: ['Mengubah Status kepada Approved.', 'Mengubah Status kepada Rejected.', 'Mengisi tarikh kelulusan.'] },
        { type: 'code', title: 'Contoh penggunaan', code: 'Column: Status\nNilai baharu: "Approved"' },

        { type: 'subheading', text: 'B. Data: add a new row to another table using values from this row' },
        { type: 'p', text: 'Digunakan untuk menambah rekod baharu ke Table lain berdasarkan maklumat daripada rekod semasa.' },
        {
          type: 'ul',
          items: [
            'Apabila tempahan diluluskan, sistem menambah rekod dalam Table APPROVALS.',
            'Maklumat BookingID dan ApprovedBy disalin ke rekod baharu.',
          ],
        },

        { type: 'subheading', text: 'C. Data: execute an action on a set of rows' },
        { type: 'p', text: 'Digunakan untuk menjalankan Action pada beberapa rekod yang memenuhi syarat tertentu.' },
        { type: 'ul', items: ['Mengemaskini beberapa rekod tempahan.', 'Menjalankan tindakan terhadap semua rekod berkaitan.'] },

        { type: 'subheading', text: 'D. Grouped: execute a sequence of actions' },
        { type: 'p', text: 'Digunakan untuk menggabungkan beberapa Actions dalam satu tindakan.' },
        { type: 'p', text: 'Contoh — Apabila pegawai menekan butang Sahkan Kelulusan:' },
        {
          type: 'ol',
          items: [
            'Status ditukar kepada Approved.',
            'Tarikh kelulusan direkodkan.',
            'Maklumat pelulus direkodkan.',
          ],
        },
        { type: 'p', text: 'Semua tindakan tersebut boleh dijalankan melalui satu butang.' },

        { type: 'subheading', text: 'E. App: go to another view within this app' },
        { type: 'p', text: 'Digunakan untuk membawa pengguna ke paparan lain dalam aplikasi. Contoh: Membuka Dashboard, Membuka Senarai Tempahan, Membuka borang baharu.' },

        { type: 'subheading', text: 'F. App: open a form to add a new row to this table' },
        { type: 'p', text: 'Digunakan untuk membuka borang bagi menambah rekod baharu. Contoh: Membuka borang tempahan bilik, Membuka borang pendaftaran pengguna.' },

        { type: 'subheading', text: 'G. External: go to a website' },
        { type: 'p', text: 'Digunakan untuk membuka pautan laman web luar. Contoh: Membuka laman web organisasi, Membuka sistem pembayaran, Membuka dokumen panduan.' },

        { type: 'subheading', text: 'H. External: open a file' },
        { type: 'p', text: 'Digunakan untuk membuka fail yang berkaitan jika konfigurasi dan lokasi fail menyokong fungsi tersebut. Contoh: Membuka dokumen PDF, Membuka fail laporan, Membuka dokumen sokongan.' },
        { type: 'p', text: 'Nama dan pilihan Action yang tersedia boleh berubah mengikut versi AppSheet.' },
      ],
    },
    {
      id: '8.5',
      title: '8.5 Cara Membina Action',
      blocks: [
        { type: 'p', text: 'Contoh: Membina butang Luluskan Tempahan.' },
        { type: 'subheading', text: 'Langkah 1: Buka Actions' },
        { type: 'ol', items: ['Buka AppSheet Editor.', 'Pergi ke bahagian Actions.', 'Pilih New Action.'] },

        { type: 'subheading', text: 'Langkah 2: Tetapkan Action' },
        {
          type: 'code',
          code: 'Action Name: Luluskan Tempahan\nFor a record of this table: BOOKINGS\nDo this: Data: set the values of some columns in this row',
        },

        { type: 'subheading', text: 'Langkah 3: Tetapkan Nilai Column' },
        { type: 'code', code: 'Column: Status\nNilai: "Approved"' },

        { type: 'subheading', text: 'Langkah 4: Tetapkan Appearance' },
        {
          type: 'ul',
          items: [
            'Display Name: Luluskan Tempahan.',
            'Icon: Check.',
            'Prominence: Pilih paparan yang sesuai.',
          ],
        },

        { type: 'subheading', text: 'Langkah 5: Tetapkan Condition' },
        { type: 'p', text: 'Dalam bahagian Only if this condition is true, masukkan:' },
        { type: 'code', code: '[Status] = "Pending"' },
        { type: 'p', text: 'Maksudnya, butang hanya tersedia apabila status tempahan masih Pending.' },

        { type: 'subheading', text: 'Langkah 6: Simpan dan Uji' },
        {
          type: 'ol',
          items: [
            'Simpan perubahan.',
            'Buka Preview aplikasi.',
            'Pilih rekod tempahan yang masih Pending.',
            'Tekan butang Luluskan Tempahan.',
            'Semak sama ada Status berubah kepada Approved.',
          ],
        },
        {
          type: 'callout',
          variant: 'important',
          title: 'Peringatan',
          text: 'Condition pada Action mengawal sama ada butang boleh digunakan. Ia bukan pengganti kawalan keselamatan atau kebenaran data. Pastikan hanya pengguna yang dibenarkan boleh mengakses proses kelulusan.',
        },
      ],
    },
    {
      id: '8.6',
      title: '8.6 Membina Action Tolak Tempahan',
      blocks: [
        { type: 'p', text: 'Sekarang kita bina satu lagi Action untuk menolak permohonan.' },
        {
          type: 'ol',
          items: [
            'Langkah 1: Buka Actions dan pilih New Action.',
            'Langkah 2: Tetapkan Action Name: Tolak Tempahan | Table: BOOKINGS | Do this: Data: set the values of some columns in this row.',
            'Langkah 3: Tetapkan Column Status: "Rejected"',
            'Langkah 4: Tetapkan Condition: [Status] = "Pending"',
            'Langkah 5: Tetapkan ikon dan nama paparan — Display Name: Tolak Tempahan, Icon: Cancel.',
            'Langkah 6: Simpan dan uji aplikasi.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Cadangan',
          text: 'Jika proses penolakan memerlukan sebab penolakan, sediakan borang atau proses untuk pegawai memasukkan sebab tersebut sebelum status ditukar kepada Rejected.',
        },
      ],
    },
    {
      id: '8.7',
      title: '8.7 Memahami Automation',
      blocks: [
        { type: 'p', text: 'Automation ialah fungsi yang membolehkan AppSheet melaksanakan sesuatu proses secara automatik.' },
        { type: 'p', text: 'Automation berguna apabila sesuatu tindakan perlu dilakukan tanpa pengguna perlu melaksanakannya secara manual setiap kali.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Menghantar e-mel selepas tempahan dibuat.',
            'Menghantar notifikasi selepas kelulusan.',
            'Mengingatkan pengguna tentang tempahan.',
            'Menghasilkan dokumen secara automatik.',
            'Mengemaskini maklumat berdasarkan sesuatu peristiwa.',
          ],
        },
        { type: 'label', text: 'Automation dalam AppSheet menggunakan konsep utama berikut:' },
        { type: 'ol', items: ['Bot.', 'Event.', 'Process.', 'Step.', 'Task.'] },
      ],
    },
    {
      id: '8.8',
      title: '8.8 Memahami Bot, Event, Process, Step dan Task',
      blocks: [
        { type: 'subheading', text: 'A. Bot' },
        { type: 'p', text: 'Bot ialah komponen utama yang mengawal automasi. Bot menentukan bila automasi perlu bermula, proses yang perlu dilaksanakan dan tindakan yang perlu dilakukan.' },
        { type: 'p', text: 'Contoh: Bot: Notifikasi Tempahan Baharu — Tujuan: Menghantar e-mel kepada pentadbir apabila tempahan baharu direkodkan.' },

        { type: 'subheading', text: 'B. Event' },
        { type: 'p', text: 'Event ialah peristiwa yang mencetuskan Bot. Antara contoh Event:' },
        { type: 'label', text: 'Data Change Event' },
        { type: 'p', text: 'Dicetuskan apabila terdapat perubahan data seperti: ADD (rekod baharu ditambah), UPDATE (rekod dikemaskini), DELETE (rekod dipadam). Contoh: Apabila rekod baharu ditambah ke BOOKINGS, Bot akan bermula.' },
        { type: 'label', text: 'Schedule Event' },
        { type: 'p', text: 'Dicetuskan mengikut jadual masa yang ditetapkan seperti: Setiap hari, Setiap minggu, Pada masa tertentu. Ketersediaan dan pelaksanaan jadual bergantung pada konfigurasi aplikasi, pelan dan had AppSheet.' },

        { type: 'subheading', text: 'C. Process' },
        { type: 'p', text: 'Process ialah aliran kerja yang mengandungi satu atau beberapa langkah automasi. Contoh: Process: Proses Tempahan Baharu — Langkah: (1) Semak maklumat tempahan, (2) Tentukan penerima notifikasi, (3) Hantar e-mel kepada pentadbir.' },

        { type: 'subheading', text: 'D. Step' },
        { type: 'p', text: 'Step ialah satu langkah dalam sesuatu Process. Contoh: Menjalankan tindakan, Menghantar e-mel, Menghasilkan dokumen, Menjalankan proses lain.' },

        { type: 'subheading', text: 'E. Task' },
        { type: 'p', text: 'Task ialah tugasan khusus yang dilakukan dalam sesuatu Step. Contoh: Send an Email, Send a Notification, Create a File, Webhook.' },

        {
          type: 'code',
          title: 'Ringkasan hubungan komponen Automation',
          code: 'BOT\n|\n+-- EVENT\n    |\n    +-- PROCESS\n        |\n        +-- STEP 1\n        |   |\n        |   +-- TASK\n        |\n        +-- STEP 2\n            |\n            +-- TASK',
        },
      ],
    },
    {
      id: '8.9',
      title: '8.9 Membina Bot Pertama: E-mel Tempahan Baharu',
      blocks: [
        { type: 'p', text: 'Dalam latihan ini, kita akan membina Bot yang menghantar e-mel kepada pentadbir apabila pengguna membuat tempahan bilik.' },
        {
          type: 'ol',
          items: [
            'Langkah 1: Buka AppSheet Editor → Pergi ke Automation → Pilih Bots → Klik Create a new Bot.',
            'Langkah 2: Namakan Bot: Bot Tempahan Baharu',
            'Langkah 3: Tetapkan Event → Pilih Data Change Event → Table: BOOKINGS, Change Type: Adds (Bot dicetuskan apabila rekod baharu ditambah ke BOOKINGS).',
            'Langkah 4: Bina Process baharu → Nama: Hantar Notifikasi Tempahan',
            'Langkah 5: Tambah Step yang menggunakan Task untuk menghantar e-mel.',
            'Langkah 6: Tetapkan Task → Pilih Send an Email.',
          ],
        },
        {
          type: 'code',
          title: 'Contoh konfigurasi Task Send an Email',
          code: 'To:\nMasukkan alamat e-mel pentadbir yang sebenar dan telah disahkan.\n\nSubject:\nTempahan Bilik Baharu Diterima\n\nBody:\nSatu tempahan bilik baharu telah diterima.\n\nBooking ID: <<[BookingID]>>\nPemohon: <<[UserEmail]>>\nTarikh Tempahan: <<[BookingDate]>>\nStatus: <<[Status]>>\n\nSila log masuk ke sistem untuk menyemak permohonan.',
        },
        { type: 'p', text: 'Placeholder seperti <<[BookingID]>> digunakan untuk memasukkan nilai daripada rekod semasa ke dalam kandungan e-mel.' },
        { type: 'subheading', text: 'Langkah 7: Simpan Bot' },
        {
          type: 'ol',
          items: [
            'Simpan konfigurasi.',
            'Pastikan Bot diaktifkan.',
            'Uji dengan menambah satu rekod tempahan.',
            'Semak Automation Monitor atau rekod pelaksanaan.',
            'Semak sama ada e-mel diterima.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Penghantaran e-mel bergantung pada konfigurasi aplikasi, tetapan penghantaran, had penggunaan dan pelan AppSheet. Jangan anggap e-mel berjaya dihantar hanya kerana rekod telah disimpan.',
        },
      ],
    },
    {
      id: '8.10',
      title: '8.10 Membina Bot: Notifikasi Kelulusan Tempahan',
      blocks: [
        { type: 'p', text: 'Objektif: Apabila pegawai meluluskan tempahan, sistem akan menghantar e-mel kepada pemohon.' },
        {
          type: 'ol',
          items: [
            'Langkah 1: Bina Bot Baharu — Nama: Bot Notifikasi Kelulusan',
            'Langkah 2: Tetapkan Event — Pilih Data Change Event → Table: BOOKINGS, Change Type: Updates.',
            'Langkah 3: Tetapkan Condition (lihat formula di bawah).',
            'Langkah 4: Bina Process — Nama: Proses Notifikasi Kelulusan',
            'Langkah 5: Tambah Task Send an Email.',
          ],
        },
        {
          type: 'code',
          title: 'Condition (Status berubah kepada Approved)',
          code: 'AND(\n  [_THISROW_BEFORE].[Status] <> "Approved",\n  [_THISROW_AFTER].[Status] = "Approved"\n)',
        },
        {
          type: 'ul',
          items: [
            'Status sebelum perubahan bukan Approved.',
            'Status selepas perubahan ialah Approved.',
            'Bot hanya akan diproses apabila perubahan status memenuhi syarat tersebut.',
          ],
        },
        {
          type: 'code',
          title: 'Tetapan Task Send an Email (Kelulusan)',
          code: 'To: [UserEmail]\nSubject: Permohonan Tempahan Anda Telah Diluluskan\n\nBody:\nSalam sejahtera,\n\nPermohonan tempahan bilik anda telah diluluskan.\n\nBooking ID: <<[BookingID]>>\nTarikh Tempahan: <<[BookingDate]>>\nStatus: <<[Status]>>\n\nSila rujuk sistem untuk maklumat lanjut.\n\nTerima kasih.',
        },
        { type: 'subheading', text: 'Langkah 6: Simpan dan Uji' },
        {
          type: 'ol',
          items: [
            'Simpan Bot.',
            'Buka aplikasi.',
            'Pilih rekod Pending.',
            'Jalankan Action Luluskan Tempahan.',
            'Semak rekod Automation Monitor.',
            'Pastikan e-mel dihantar kepada pemohon.',
          ],
        },
      ],
    },
    {
      id: '8.11',
      title: '8.11 Membina Bot untuk Penolakan Tempahan',
      blocks: [
        { type: 'p', text: 'Proses ini hampir sama dengan notifikasi kelulusan.' },
        {
          type: 'code',
          title: 'Event Condition',
          code: 'AND(\n  [_THISROW_BEFORE].[Status] <> "Rejected",\n  [_THISROW_AFTER].[Status] = "Rejected"\n)',
        },
        {
          type: 'code',
          title: 'Konfigurasi E-mel Penolakan',
          code: 'Penerima: [UserEmail]\nSubject: Permohonan Tempahan Anda Tidak Diluluskan\n\nBody:\nSalam sejahtera,\n\nDukacita dimaklumkan bahawa permohonan tempahan anda tidak diluluskan.\n\nBooking ID: <<[BookingID]>>\nTarikh Tempahan: <<[BookingDate]>>\nStatus: <<[Status]>>\n\nSebab Penolakan: <<[RejectionReason]>>\n\nSila hubungi pihak pentadbir sekiranya memerlukan maklumat lanjut.\n\nTerima kasih.',
        },
        { type: 'p', text: 'Pastikan Column RejectionReason telah disediakan dan diisi sebelum notifikasi dihantar.' },
      ],
    },
    {
      id: '8.12',
      title: '8.12 Membina Scheduled Automation',
      blocks: [
        { type: 'p', text: 'Scheduled Automation membolehkan sistem menjalankan sesuatu proses mengikut jadual.' },
        {
          type: 'ul',
          items: [
            'Menghantar peringatan tempahan pada setiap pagi.',
            'Menghasilkan laporan mingguan.',
            'Menghantar ringkasan tempahan setiap hujung bulan.',
          ],
        },
        { type: 'subheading', text: 'Contoh: Peringatan Tempahan Esok' },
        { type: 'p', text: 'Objektif: Sistem menghantar peringatan kepada pengguna yang mempunyai tempahan pada hari berikutnya.' },
        {
          type: 'code',
          title: 'Contoh syarat rekod',
          code: 'AND(\n  [BookingDate] = TODAY() + 1,\n  [Status] = "Approved"\n)',
        },
        { type: 'ul', items: ['Tarikhnya ialah esok.', 'Statusnya Approved.'] },
        { type: 'label', text: 'Langkah umum:' },
        {
          type: 'ol',
          items: [
            'Buka Automation.',
            'Cipta Bot baharu.',
            'Pilih Scheduled Event.',
            'Tetapkan jadual harian.',
            'Bina Process.',
            'Tambah langkah untuk mendapatkan rekod tempahan yang berkaitan.',
            'Gunakan Task Send an Email.',
            'Tetapkan penerima berdasarkan UserEmail.',
            'Simpan dan uji automasi.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Perhatian',
          text: 'Untuk memproses banyak rekod, reka bentuk Process perlu mengambil kira senarai rekod yang memenuhi syarat. Jangan menganggap Scheduled Bot secara automatik menghantar satu e-mel bagi setiap rekod tanpa konfigurasi langkah pemprosesan yang sesuai.',
        },
      ],
    },
    {
      id: '8.13',
      title: '8.13 Menggunakan Grouped Actions',
      blocks: [
        { type: 'p', text: 'Grouped Action membolehkan beberapa tindakan dilaksanakan melalui satu butang.' },
        { type: 'p', text: 'Contoh — Butang: Sahkan Kelulusan. Tindakan yang digabungkan:' },
        {
          type: 'ol',
          items: [
            'Tukar Status kepada Approved.',
            'Isi ApprovedDate dengan tarikh semasa.',
            'Isi ApprovedBy dengan e-mel pegawai pelulus.',
          ],
        },
        {
          type: 'code',
          title: 'Contoh nilai yang digunakan',
          code: 'Status: "Approved"\nApprovedDate: TODAY()\nApprovedBy: USEREMAIL()',
        },
        { type: 'label', text: 'Langkah umum:' },
        {
          type: 'ol',
          items: [
            'Cipta Action pertama untuk mengemaskini Status.',
            'Cipta Action kedua untuk mengisi ApprovedDate.',
            'Cipta Action ketiga untuk mengisi ApprovedBy.',
            'Cipta Action baharu.',
            'Pilih Grouped: execute a sequence of actions.',
            'Masukkan ketiga-tiga Action mengikut susunan.',
            'Simpan dan uji.',
          ],
        },
        {
          type: 'callout',
          variant: 'important',
          title: 'Penting',
          text: 'Pastikan semua Action menggunakan Table dan rekod yang betul. Jika terdapat keperluan kelulusan rasmi, kawalan akses dan rekod audit juga perlu dibina.',
        },
      ],
    },
    {
      id: '8.14',
      title: '8.14 Automation Monitor',
      blocks: [
        { type: 'p', text: 'Automation Monitor digunakan untuk menyemak pelaksanaan automasi.' },
        { type: 'label', text: 'Melalui Monitor, pembangun boleh menyemak:' },
        {
          type: 'ul',
          items: [
            'Bot yang dijalankan.',
            'Event yang mencetuskan Bot.',
            'Process yang dilaksanakan.',
            'Task yang berjaya.',
            'Task yang gagal.',
            'Mesej ralat.',
          ],
        },
        { type: 'subheading', text: 'Cara Menyemak Ralat' },
        {
          type: 'ol',
          items: [
            'Buka AppSheet Editor.',
            'Pergi ke bahagian Automation.',
            'Buka Monitor atau Execution History.',
            'Pilih pelaksanaan Bot.',
            'Semak setiap Step.',
            'Kenal pasti mesej ralat.',
            'Baiki konfigurasi.',
            'Jalankan ujian semula.',
          ],
        },
        { type: 'subheading', text: 'Punca Automasi Gagal' },
        {
          type: 'ol',
          items: [
            'Alamat e-mel penerima tidak sah.',
            'Nama Column tidak tepat.',
            'Formula mempunyai ralat.',
            'Bot tidak diaktifkan.',
            'Event tidak dicetuskan.',
            'Task tidak dikonfigurasikan dengan betul.',
            'Had penggunaan atau pelan tidak menyokong proses tertentu.',
            'Pengguna atau sumber data tidak mempunyai kebenaran yang diperlukan.',
          ],
        },
      ],
    },
    {
      id: '8.15',
      title: '8.15 Amalan Terbaik Actions dan Automation',
      blocks: [
        { type: 'p', text: 'Untuk memastikan automasi berjalan dengan baik:' },
        {
          type: 'ol',
          items: [
            'Gunakan nama Bot dan Action yang mudah difahami.',
            'Pastikan setiap Event mempunyai tujuan yang jelas.',
            'Gunakan Condition untuk mengelakkan automasi tidak diperlukan.',
            'Elakkan menghantar e-mel berulang kali.',
            'Uji setiap proses menggunakan data contoh.',
            'Semak Automation Monitor.',
            'Rekodkan tindakan penting untuk tujuan audit.',
            'Pastikan akses pengguna dikawal.',
            'Jangan dedahkan maklumat sensitif dalam notifikasi.',
            'Sediakan proses pemulihan jika automasi gagal.',
          ],
        },
      ],
    },
    {
      id: '8.16',
      title: '8.16 Aktiviti Amali: Membina Sistem Kelulusan FBMS',
      blocks: [
        { type: 'p', text: 'Dalam aktiviti ini, peserta akan membina proses kelulusan tempahan secara lengkap.' },
        { type: 'subheading', text: 'Tugasan 1: Bina Action Luluskan' },
        { type: 'ul', items: ['Table: BOOKINGS.', 'Action: Luluskan Tempahan.', 'Tukar Status kepada Approved.', 'Tetapkan syarat Status Pending.'] },

        { type: 'subheading', text: 'Tugasan 2: Bina Action Tolak' },
        { type: 'ul', items: ['Table: BOOKINGS.', 'Action: Tolak Tempahan.', 'Tukar Status kepada Rejected.', 'Tetapkan syarat Status Pending.'] },

        { type: 'subheading', text: 'Tugasan 3: Bina Grouped Action' },
        { type: 'ul', items: ['Tukar Status.', 'Isi tarikh kelulusan.', 'Isi e-mel pegawai pelulus.'] },

        { type: 'subheading', text: 'Tugasan 4: Bina Bot Tempahan Baharu' },
        { type: 'ul', items: ['Event: Rekod baharu ditambah.', 'Process: Notifikasi tempahan.', 'Task: Send an Email.'] },

        { type: 'subheading', text: 'Tugasan 5: Bina Bot Kelulusan' },
        { type: 'ul', items: ['Event: Rekod dikemaskini.', 'Condition: Status berubah kepada Approved.', 'Task: Hantar e-mel kepada pemohon.'] },

        { type: 'subheading', text: 'Tugasan 6: Bina Bot Penolakan' },
        { type: 'ul', items: ['Event: Rekod dikemaskini.', 'Condition: Status berubah kepada Rejected.', 'Task: Hantar e-mel kepada pemohon.'] },

        { type: 'subheading', text: 'Tugasan 7: Ujian Sistem' },
        {
          type: 'table',
          title: 'Uji senario berikut:',
          headers: ['Senario', 'Tindakan Dijangka'],
          rows: [
            ['Pengguna membuat tempahan', 'Status menjadi Pending'],
            ['Pegawai meluluskan tempahan', 'Status menjadi Approved'],
            ['Pegawai menolak tempahan', 'Status menjadi Rejected'],
            ['Tempahan diluluskan', 'E-mel kelulusan dihantar'],
            ['Tempahan ditolak', 'E-mel penolakan dihantar'],
          ],
        },
      ],
    },
    {
      id: '8.17',
      title: '8.17 Latihan Pengukuhan',
      blocks: [
        {
          type: 'quiz_mcq',
          questions: [
            {
              number: 1,
              q: 'Apakah fungsi Actions?',
              options: [
                { key: 'A', text: 'Menguruskan warna aplikasi sahaja' },
                { key: 'B', text: 'Membolehkan pengguna melaksanakan tindakan tertentu' },
                { key: 'C', text: 'Menyimpan fail dalam komputer' },
                { key: 'D', text: 'Membina pangkalan data secara automatik' },
              ],
              answer: 'B',
              explanation: 'Actions membolehkan pengguna melaksanakan operasi seperti menukar status, membuka paparan atau menambah rekod melalui butang tindakan.',
            },
            {
              number: 2,
              q: 'Apakah fungsi Automation?',
              options: [
                { key: 'A', text: 'Melaksanakan proses secara automatik berdasarkan peristiwa atau jadual' },
                { key: 'B', text: 'Mengubah warna butang sahaja' },
                { key: 'C', text: 'Menambah gambar secara manual' },
                { key: 'D', text: 'Menghapuskan semua rekod' },
              ],
              answer: 'A',
              explanation: 'Automation menjalankan aliran kerja secara automatik apabila Data Change Event atau Schedule Event tercetus.',
            },
            {
              number: 3,
              q: 'Apakah yang dimaksudkan dengan Event?',
              options: [
                { key: 'A', text: 'Paparan utama aplikasi' },
                { key: 'B', text: 'Peristiwa yang mencetuskan automasi' },
                { key: 'C', text: 'Jenis Column' },
                { key: 'D', text: 'Nama pengguna' },
              ],
              answer: 'B',
              explanation: 'Event ialah pencetus (trigger) kepada Bot, sama ada perubahan data (ADD/UPDATE/DELETE) atau jadual masa.',
            },
            {
              number: 4,
              q: 'Apakah fungsi Process?',
              options: [
                { key: 'A', text: 'Menyimpan gambar' },
                { key: 'B', text: 'Mengandungi langkah-langkah proses automasi' },
                { key: 'C', text: 'Mengubah jenis data' },
                { key: 'D', text: 'Menguruskan warna' },
              ],
              answer: 'B',
              explanation: 'Process ialah aliran kerja yang merangkumi satu atau beberapa Step dan Task untuk dilaksanakan oleh Bot.',
            },
            {
              number: 5,
              q: 'Apakah kegunaan Task Send an Email?',
              options: [
                { key: 'A', text: 'Menghantar e-mel secara automatik' },
                { key: 'B', text: 'Memadamkan rekod' },
                { key: 'C', text: 'Membina View' },
                { key: 'D', text: 'Mengubah Key' },
              ],
              answer: 'A',
              explanation: 'Task Send an Email menghantar e-mel notifikasi secara automatik dengan sokongan placeholder seperti <<[BookingID]>>.',
            },
            {
              number: 6,
              q: 'Apakah fungsi Grouped Action?',
              options: [
                { key: 'A', text: 'Menggabungkan beberapa Actions dalam satu tindakan' },
                { key: 'B', text: 'Menggabungkan beberapa Google Sheets' },
                { key: 'C', text: 'Memadamkan beberapa Table' },
                { key: 'D', text: 'Mengubah semua Column' },
              ],
              answer: 'A',
              explanation: 'Grouped Action melaksanakan beberapa Actions secara berturutan melalui satu butang sahaja.',
            },
            {
              number: 7,
              q: 'Di manakah pembangun boleh menyemak pelaksanaan dan ralat automasi?',
              options: [
                { key: 'A', text: 'Data' },
                { key: 'B', text: 'Monitor' },
                { key: 'C', text: 'Columns' },
                { key: 'D', text: 'Branding' },
              ],
              answer: 'B',
              explanation: 'Automation Monitor (atau Execution History) memaparkan status Bot, Event, Process, Task yang berjaya/gagal serta mesej ralat.',
            },
          ],
        },
      ],
    },
    {
      id: '8.18',
      title: '8.18 Ringkasan Modul',
      blocks: [
        { type: 'p', text: 'Dalam modul ini, peserta telah mempelajari:' },
        {
          type: 'ol',
          items: [
            'Konsep Actions.',
            'Jenis-jenis Actions.',
            'Cara membina butang tindakan.',
            'Grouped Actions.',
            'Konsep Automation.',
            'Bot, Event, Process, Step dan Task.',
            'Automasi penghantaran e-mel.',
            'Automasi kelulusan dan penolakan.',
            'Scheduled Automation.',
            'Automation Monitor.',
            'Penyelesaian masalah automasi.',
          ],
        },
        {
          type: 'p',
          text: 'Actions dan Automation membolehkan aplikasi melaksanakan proses kerja dengan lebih cekap dan mengurangkan kebergantungan kepada tindakan manual.',
        },
      ],
    },
    {
      id: '8.19',
      title: '8.19 Hasil Pembelajaran Modul & Persediaan ke Modul 9',
      blocks: [
        { type: 'p', text: 'Peserta dianggap menguasai modul ini apabila berjaya:' },
        {
          type: 'ul',
          items: [
            'Membina sekurang-kurangnya dua Actions.',
            'Menghasilkan Grouped Action.',
            'Membina sekurang-kurangnya satu Bot.',
            'Menggunakan Data Change Event.',
            'Menghasilkan Task Send an Email.',
            'Membina proses notifikasi kelulusan.',
            'Menyemak pelaksanaan melalui Automation Monitor.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Persediaan ke Modul 9',
          text: 'Modul terakhir akan membincangkan Security, User Access, Deployment, Testing dan Publishing. Peserta akan belajar bagaimana menyediakan aplikasi supaya boleh digunakan oleh pengguna sebenar dengan lebih selamat dan teratur.',
        },
      ],
    },
  ],
};
