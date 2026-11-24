export const module5 = {
  id: 5,
  code: 'MODUL 5',
  title: 'Memahami AppSheet Editor dan Komponennya',
  shortTitle: 'AppSheet Editor',
  subtitle: 'Menguasai komponen Data, Tables, Columns (A–M), Slices, 9 jenis Views, Navigation, Format Rules dan kuiz pengukuhan.',
  pages: 'Muka surat 45 – 63',
  duration: '75 minit',
  level: 'Beginner – Intermediate',
  sections: [
    {
      id: '5.1',
      title: '5.1 Pengenalan',
      blocks: [
        {
          type: 'p',
          text: 'Google AppSheet Editor ialah ruang utama untuk membina, mengubah suai dan mengurus aplikasi yang dibangunkan menggunakan AppSheet.',
        },
        { type: 'label', text: 'Melalui Editor, pembangun boleh:' },
        {
          type: 'ul',
          items: [
            'Menguruskan sumber data aplikasi.',
            'Menetapkan struktur jadual dan medan.',
            'Mengawal paparan data.',
            'Membina borang dan paparan maklumat.',
            'Mengawal navigasi aplikasi.',
            'Menetapkan peraturan paparan.',
            'Menguruskan fungsi dan interaksi pengguna.',
          ],
        },
        {
          type: 'p',
          text: 'Dalam modul ini, peserta akan memahami komponen utama AppSheet Editor dan bagaimana setiap komponen digunakan untuk menghasilkan aplikasi yang lebih tersusun dan mudah digunakan.',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Susunan menu dan nama pilihan dalam AppSheet Editor mungkin berubah mengikut kemas kini Google. Fungsi asas yang diterangkan dalam modul ini masih menjadi panduan utama.',
        },
      ],
    },
    {
      id: '5.2',
      title: '5.2 Objektif Pembelajaran',
      blocks: [
        { type: 'p', text: 'Pada akhir modul ini, peserta dapat:' },
        {
          type: 'ol',
          items: [
            'Mengenal pasti komponen utama AppSheet Editor.',
            'Menguruskan jadual dan struktur data.',
            'Mengubah suai tetapan setiap column.',
            'Memahami konsep Slice dan kegunaannya.',
            'Membina dan menguruskan Views.',
            'Menetapkan navigasi aplikasi.',
            'Menghasilkan paparan aplikasi yang lebih mesra pengguna.',
          ],
        },
      ],
    },
    {
      id: '5.3',
      title: '5.3 Mengenali Komponen Utama AppSheet Editor',
      blocks: [
        { type: 'p', text: 'Secara umum, AppSheet Editor mempunyai beberapa bahagian utama.' },

        { type: 'subheading', text: 'A. Data' },
        {
          type: 'p',
          text: 'Bahagian Data digunakan untuk menguruskan sumber data dan struktur maklumat yang digunakan oleh aplikasi.',
        },
        { type: 'label', text: 'Antara fungsi utama:' },
        {
          type: 'ul',
          items: [
            'Tables – menguruskan jadual data.',
            'Columns – menguruskan medan atau kolum.',
            'Slices – menghasilkan paparan data berdasarkan syarat tertentu.',
          ],
        },
        {
          type: 'table',
          title: 'Contoh — Jadual Sistem Tempahan Bilik',
          headers: ['Table', 'Kegunaan'],
          rows: [
            ['USERS', 'Menyimpan maklumat pengguna'],
            ['ROOMS', 'Menyimpan maklumat bilik'],
            ['BOOKINGS', 'Menyimpan rekod tempahan'],
            ['APPROVALS', 'Menyimpan rekod kelulusan'],
          ],
        },

        { type: 'subheading', text: 'B. App' },
        { type: 'p', text: 'Bahagian App digunakan untuk menguruskan paparan dan pengalaman pengguna.' },
        { type: 'label', text: 'Antara komponen yang berkaitan:' },
        {
          type: 'ul',
          items: [
            'Views – paparan maklumat dalam aplikasi.',
            'Format Rules – peraturan untuk mengubah penampilan maklumat berdasarkan keadaan tertentu.',
            'Navigation – susunan paparan yang boleh diakses oleh pengguna.',
            'Branding dan tetapan paparan – mengawal identiti visual aplikasi.',
          ],
        },

        { type: 'subheading', text: 'C. Actions' },
        { type: 'p', text: 'Actions digunakan untuk membolehkan pengguna melaksanakan sesuatu tindakan dalam aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Menghantar permohonan.',
            'Meluluskan tempahan.',
            'Menolak permohonan.',
            'Mengemaskini status.',
            'Membuka paparan tertentu.',
          ],
        },

        { type: 'subheading', text: 'D. Automation' },
        { type: 'p', text: 'Automation digunakan untuk melaksanakan proses secara automatik berdasarkan sesuatu peristiwa.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Menghantar e-mel selepas tempahan dibuat.',
            'Menghantar notifikasi apabila permohonan diluluskan.',
            'Mengemaskini rekod apabila syarat tertentu dipenuhi.',
          ],
        },

        { type: 'subheading', text: 'E. Security' },
        { type: 'p', text: 'Bahagian Security digunakan untuk menguruskan keselamatan aplikasi.' },
        { type: 'label', text: 'Contoh:' },
        {
          type: 'ul',
          items: [
            'Require Sign-In.',
            'Pengesahan pengguna.',
            'Security Filters.',
            'Kawalan akses kepada data.',
          ],
        },
      ],
    },
    {
      id: '5.4',
      title: '5.4 Menguruskan Tables',
      blocks: [
        { type: 'p', text: 'Tables ialah jadual yang menjadi sumber data kepada aplikasi.' },
        { type: 'p', text: 'Setiap Table biasanya dihubungkan kepada satu sumber data seperti Google Sheets.' },
        {
          type: 'table',
          title: 'Contoh: Jadual BOOKINGS',
          headers: ['BookingID', 'UserEmail', 'RoomID', 'BookingDate', 'Status'],
          rows: [
            ['B001', 'ali@gmail.com', 'R001', '20/11/2026', 'Pending'],
            ['B002', 'abu@gmail.com', 'R002', '21/11/2026', 'Approved'],
          ],
        },
        { type: 'label', text: 'Dalam AppSheet, pembangun boleh:' },
        {
          type: 'ol',
          items: [
            'Menambah Table baharu.',
            'Menghubungkan sumber data.',
            'Melihat senarai Table yang digunakan.',
            'Membuang Table daripada aplikasi.',
            'Menyemak struktur Table.',
            'Mengemaskini struktur apabila kolum dalam sumber data berubah.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Perhatian',
          text: 'Membuang Table daripada aplikasi tidak semestinya memadamkan data asal dalam Google Sheets. Semak sumber data sebelum melakukan sebarang perubahan.',
        },
        { type: 'subheading', text: 'Cara menambah Table' },
        {
          type: 'ol',
          items: [
            'Buka AppSheet Editor.',
            'Pergi ke bahagian Data.',
            'Pilih Tables.',
            'Klik pilihan untuk menambah Table.',
            'Pilih sumber data.',
            'Pilih jadual atau worksheet yang diperlukan.',
            'Sahkan penambahan.',
          ],
        },
        { type: 'subheading', text: 'Cara mengemaskini struktur Table' },
        {
          type: 'p',
          text: 'Jika pembangun menambah kolum baharu dalam Google Sheets, AppSheet mungkin perlu membaca semula struktur tersebut.',
        },
        { type: 'label', text: 'Langkah umum:' },
        {
          type: 'ol',
          items: [
            'Buka Data.',
            'Pilih Table yang ingin dikemaskini.',
            'Cari pilihan Regenerate Structure atau pilihan setara.',
            'Jalankan proses tersebut.',
            'Semak semula senarai Column.',
          ],
        },
      ],
    },
    {
      id: '5.5',
      title: '5.5 Menguruskan Columns',
      blocks: [
        { type: 'p', text: 'Columns ialah medan yang menyimpan jenis maklumat tertentu dalam sesuatu Table.' },
        {
          type: 'table',
          title: 'Contoh: Table BOOKINGS',
          headers: ['Column', 'Jenis Data'],
          rows: [
            ['BookingID', 'Text'],
            ['UserEmail', 'Email'],
            ['RoomID', 'Ref'],
            ['BookingDate', 'Date'],
            ['StartTime', 'Time'],
            ['EndTime', 'Time'],
            ['Purpose', 'LongText'],
            ['Status', 'Enum'],
          ],
        },
        { type: 'p', text: 'Setiap Column mempunyai tetapan tersendiri.' },

        { type: 'subheading', text: 'A. Column Name' },
        { type: 'p', text: 'Nama sebenar medan dalam sumber data. Contoh: BookingID, UserEmail, BookingDate.' },
        { type: 'p', text: 'Gunakan nama yang ringkas, konsisten dan mudah difahami.' },

        { type: 'subheading', text: 'B. Type' },
        { type: 'p', text: 'Menentukan jenis data yang boleh disimpan.' },
        {
          type: 'table',
          title: 'Senarai Data Type & Kegunaan',
          headers: ['Type', 'Kegunaan'],
          rows: [
            ['Text', 'Teks biasa'],
            ['LongText', 'Teks yang panjang'],
            ['Name', 'Nama individu'],
            ['Email', 'Alamat e-mel'],
            ['Phone', 'Nombor telefon'],
            ['Number', 'Nombor bulat'],
            ['Decimal', 'Nombor perpuluhan'],
            ['Price', 'Nilai kewangan'],
            ['Date', 'Tarikh'],
            ['DateTime', 'Tarikh dan masa'],
            ['Time', 'Masa'],
            ['Yes/No', 'Pilihan Ya atau Tidak'],
            ['Enum', 'Pilihan satu nilai'],
            ['EnumList', 'Pilihan lebih daripada satu nilai'],
            ['Image', 'Gambar'],
            ['File', 'Fail'],
            ['Signature', 'Tandatangan'],
            ['Location', 'Lokasi'],
            ['Ref', 'Rujukan kepada Table lain'],
          ],
        },
        { type: 'p', text: 'Pemilihan Type yang betul penting supaya AppSheet dapat memaparkan dan memproses data dengan sesuai.' },

        { type: 'subheading', text: 'C. Key' },
        { type: 'p', text: 'Key ialah nilai unik yang digunakan untuk mengenal pasti setiap rekod. Contoh: U001, R001, B001.' },
        { type: 'p', text: 'Setiap rekod perlu mempunyai Key yang unik.' },
        {
          type: 'code',
          title: 'Contoh tetapan untuk BookingID',
          code: 'Type: Text\nKey: ON\nInitial Value: UNIQUEID()',
        },
        { type: 'p', text: 'Formula UNIQUEID() menghasilkan nilai unik untuk digunakan sebagai ID rekod.' },

        { type: 'subheading', text: 'D. Label' },
        { type: 'p', text: 'Label ialah Column yang digunakan sebagai nama paparan bagi sesuatu rekod.' },
        {
          type: 'table',
          title: 'Contohnya, Table ROOMS mempunyai:',
          headers: ['RoomID', 'RoomName'],
          rows: [
            ['R001', 'Bilik Mesyuarat A'],
            ['R002', 'Makmal Komputer 1'],
          ],
        },
        {
          type: 'p',
          text: 'RoomID boleh dijadikan Key, manakala RoomName dijadikan Label. Apabila pengguna memilih bilik, AppSheet boleh memaparkan nama bilik berbanding ID yang sukar difahami.',
        },

        { type: 'subheading', text: 'E. Show?' },
        { type: 'p', text: 'Menentukan sama ada Column dipaparkan kepada pengguna.' },
        {
          type: 'ul',
          items: [
            'BookingID boleh disembunyikan kerana dijana secara automatik.',
            'BookingDate perlu dipaparkan.',
            'Purpose perlu dipaparkan supaya pengguna boleh menyemak tujuan tempahan.',
          ],
        },

        { type: 'subheading', text: 'F. Editable?' },
        { type: 'p', text: 'Menentukan sama ada pengguna boleh mengubah nilai Column.' },
        {
          type: 'ul',
          items: [
            'BookingID: tidak boleh diedit.',
            'Purpose: boleh diedit.',
            'Status: mungkin hanya boleh diubah oleh pengguna yang mempunyai kebenaran tertentu.',
          ],
        },

        { type: 'subheading', text: 'G. Required?' },
        { type: 'p', text: 'Menentukan sama ada sesuatu medan wajib diisi.' },
        {
          type: 'ul',
          items: [
            'Nama pemohon: wajib.',
            'Tarikh tempahan: wajib.',
            'Tujuan tempahan: wajib.',
          ],
        },
        { type: 'p', text: 'Jika medan ditetapkan sebagai Required, pengguna perlu mengisinya sebelum rekod boleh disimpan.' },

        { type: 'subheading', text: 'H. Initial Value' },
        { type: 'p', text: 'Initial Value menetapkan nilai awal apabila rekod baharu dicipta.' },
        { type: 'code', title: 'Contoh Initial Value (ID Unik)', code: 'UNIQUEID()' },
        { type: 'code', title: 'Untuk merekodkan e-mel pengguna yang sedang log masuk', code: 'USEREMAIL()' },
        { type: 'code', title: 'Untuk mendapatkan tarikh semasa', code: 'TODAY()' },

        { type: 'subheading', text: 'I. App Formula' },
        { type: 'p', text: 'App Formula digunakan untuk mengira atau menghasilkan nilai berdasarkan formula AppSheet.' },
        { type: 'code', title: 'Contoh App Formula (Jumlah Harga)', code: '[Quantity] * [UnitPrice]' },
        { type: 'p', text: 'Formula tersebut mengira jumlah harga berdasarkan kuantiti dan harga seunit.' },
        {
          type: 'table',
          title: 'Perbezaan Initial Value dengan App Formula:',
          headers: ['Initial Value', 'App Formula'],
          rows: [
            ['Menetapkan nilai awal semasa rekod dicipta', 'Mengira nilai menggunakan formula'],
            ['Biasanya digunakan untuk nilai permulaan', 'Digunakan untuk nilai yang bergantung pada data lain'],
            ['Nilai boleh diubah jika tetapan membenarkannya', 'Biasanya dikira oleh sistem dan bukan diedit secara manual'],
          ],
        },
        { type: 'label', text: 'Contoh penggunaan:' },
        {
          type: 'ul',
          items: [
            'Initial Value: menetapkan tarikh tempahan kepada tarikh hari ini.',
            'App Formula: mengira jumlah bayaran berdasarkan kuantiti dan harga.',
          ],
        },

        { type: 'subheading', text: 'J. Valid If' },
        { type: 'p', text: 'Valid If digunakan untuk menetapkan syarat bagi nilai yang boleh diterima.' },
        { type: 'code', title: 'Contoh 1 (Kuantiti > 0)', code: '[Quantity] > 0' },
        { type: 'p', text: 'Pengguna hanya boleh memasukkan kuantiti yang lebih besar daripada sifar.' },
        { type: 'code', title: 'Contoh 2 (Senarai Status Sah)', code: 'IN([Status], {"Pending", "Approved", "Rejected"})' },
        { type: 'p', text: 'Nilai Status mestilah salah satu daripada pilihan yang ditetapkan.' },

        { type: 'subheading', text: 'K. Suggested Values' },
        { type: 'p', text: 'Suggested Values memberikan cadangan nilai kepada pengguna semasa mengisi borang.' },
        { type: 'code', title: 'Contoh Suggested Values', code: '{"Mesyuarat", "Latihan", "Perbincangan", "Bengkel"}' },
        { type: 'p', text: 'Pengguna boleh memilih daripada senarai cadangan tersebut.' },

        { type: 'subheading', text: 'L. Editable If' },
        { type: 'p', text: 'Editable If menentukan keadaan yang membenarkan sesuatu Column diedit.' },
        { type: 'code', title: 'Contoh Editable If', code: '[Status] = "Pending"' },
        { type: 'p', text: 'Maksudnya, medan tersebut hanya boleh diedit apabila status tempahan masih Pending.' },

        { type: 'subheading', text: 'M. Required If' },
        { type: 'p', text: 'Required If menentukan keadaan yang menyebabkan sesuatu medan menjadi wajib diisi.' },
        { type: 'code', title: 'Contoh Required If', code: '[Status] = "Rejected"' },
        { type: 'p', text: 'Contohnya, medan Catatan Penolakan boleh diwajibkan apabila permohonan ditolak.' },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Expression di atas ialah contoh asas. Penggunaannya bergantung pada struktur Table dan nama Column sebenar dalam aplikasi.',
        },
      ],
    },
    {
      id: '5.6',
      title: '5.6 Memahami Slices',
      blocks: [
        { type: 'p', text: 'Slice ialah sebahagian daripada data asal yang dipaparkan berdasarkan syarat tertentu.' },
        {
          type: 'p',
          text: 'Bayangkan kita mempunyai 1,000 rekod tempahan. Kita tidak semestinya mahu memaparkan semua rekod kepada setiap pengguna.',
        },
        { type: 'label', text: 'Dengan Slice, kita boleh menghasilkan paparan khusus seperti:' },
        {
          type: 'ul',
          items: [
            'Tempahan saya.',
            'Tempahan yang masih menunggu kelulusan.',
            'Tempahan yang telah diluluskan.',
            'Tempahan untuk bulan semasa.',
          ],
        },
        { type: 'p', text: 'Slice tidak menghasilkan salinan data baharu. Ia menyediakan satu paparan terpilih daripada Table asal.' },

        { type: 'subheading', text: 'A. Contoh Slice: MyBookings' },
        { type: 'p', text: 'Tujuan: Memaparkan tempahan milik pengguna yang sedang log masuk.' },
        { type: 'label', text: 'Langkah:' },
        {
          type: 'ol',
          items: [
            'Pergi ke Data.',
            'Pilih Slices.',
            'Tambah Slice baharu.',
            'Namakan Slice sebagai MyBookings.',
            'Pilih Source Table: BOOKINGS.',
            'Masukkan Row Filter Condition:',
          ],
        },
        { type: 'code', title: 'Row Filter Condition (MyBookings)', code: '[UserEmail] = USEREMAIL()' },
        { type: 'label', text: 'Maksud formula:' },
        {
          type: 'ul',
          items: [
            '[UserEmail] merujuk kepada e-mel pemohon dalam rekod.',
            'USEREMAIL() mendapatkan e-mel pengguna yang sedang log masuk.',
            'AppSheet hanya memaparkan rekod yang sepadan dengan e-mel tersebut.',
          ],
        },

        { type: 'subheading', text: 'B. Contoh Slice: PendingBookings' },
        { type: 'p', text: 'Tujuan: Memaparkan tempahan yang belum diluluskan.' },
        { type: 'code', title: 'Row Filter Condition (PendingBookings)', code: '[Status] = "Pending"' },
        { type: 'p', text: 'Hanya rekod yang mempunyai Status Pending akan dipaparkan melalui Slice tersebut.' },

        { type: 'subheading', text: 'C. Contoh Slice: ApprovedBookings' },
        { type: 'p', text: 'Tujuan: Memaparkan tempahan yang telah diluluskan.' },
        { type: 'code', title: 'Row Filter Condition (ApprovedBookings)', code: '[Status] = "Approved"' },

        { type: 'subheading', text: 'D. Komponen dalam Slice' },
        { type: 'label', text: 'Antara tetapan yang boleh dikawal:' },
        {
          type: 'ol',
          items: [
            'Slice Name – nama Slice.',
            'Source Table – jadual sumber.',
            'Row Filter Condition – syarat pemilihan rekod.',
            'Slice Columns – Column yang mahu disertakan.',
            'Slice Actions – tindakan yang dibenarkan melalui Slice.',
          ],
        },
        {
          type: 'callout',
          variant: 'important',
          title: 'Penting',
          text: 'Slice bukan pengganti Security Filter. Slice mengawal data yang dipaparkan dalam bahagian aplikasi, tetapi bukan mekanisme keselamatan untuk memastikan rekod yang tidak dibenarkan tidak dimuat turun ke peranti pengguna. Gunakan Security Filter dan kawalan keselamatan yang sesuai untuk perlindungan data.',
        },
      ],
    },
    {
      id: '5.7',
      title: '5.7 Memahami Views',
      blocks: [
        { type: 'p', text: 'Views ialah paparan yang digunakan untuk menunjukkan data kepada pengguna.' },
        { type: 'p', text: 'Satu Table boleh mempunyai beberapa Views yang berbeza.' },
        { type: 'label', text: 'Contohnya, Table BOOKINGS boleh mempunyai:' },
        {
          type: 'ul',
          items: [
            'Paparan semua tempahan.',
            'Paparan tempahan saya.',
            'Paparan tempahan menunggu kelulusan.',
            'Paparan kalendar tempahan.',
          ],
        },

        { type: 'subheading', text: 'A. Jenis-jenis Views' },
        { type: 'label', text: '1. Table View' },
        { type: 'p', text: 'Memaparkan data dalam bentuk jadual dan baris. Sesuai untuk: Senarai rekod, Senarai tempahan, Senarai pengguna, Senarai inventori.' },

        { type: 'label', text: '2. Deck View' },
        { type: 'p', text: 'Memaparkan rekod dalam bentuk kad. Sesuai untuk: Senarai bilik, Senarai produk, Senarai pelanggan, Senarai tempahan.' },

        { type: 'label', text: '3. Gallery View' },
        { type: 'p', text: 'Memaparkan rekod dalam bentuk galeri, biasanya dengan imej sebagai elemen utama. Sesuai untuk: Katalog produk, Galeri gambar, Senarai aset yang mempunyai gambar.' },

        { type: 'label', text: '4. Detail View' },
        { type: 'p', text: 'Memaparkan maklumat lengkap bagi satu rekod. Sesuai untuk: Butiran tempahan, Maklumat pengguna, Maklumat bilik.' },

        { type: 'label', text: '5. Form View' },
        { type: 'p', text: 'Digunakan untuk memasukkan rekod baharu atau mengemaskini rekod sedia ada. Sesuai untuk: Borang tempahan, Borang pendaftaran, Borang permohonan.' },

        { type: 'label', text: '6. Chart View' },
        { type: 'p', text: 'Memaparkan data dalam bentuk carta. Sesuai untuk: Statistik tempahan, Jumlah jualan, Analisis prestasi.' },

        { type: 'label', text: '7. Dashboard View' },
        { type: 'p', text: 'Menggabungkan beberapa Views dalam satu paparan. Contohnya, Dashboard Sistem Tempahan Bilik boleh mengandungi: Senarai tempahan terkini, Carta jumlah tempahan, Senarai tempahan menunggu kelulusan.' },

        { type: 'label', text: '8. Calendar View' },
        { type: 'p', text: 'Memaparkan rekod berdasarkan tarikh. Sesuai untuk: Jadual penggunaan bilik, Jadual mesyuarat, Jadual aktiviti.' },

        { type: 'label', text: '9. Map View' },
        { type: 'p', text: 'Memaparkan rekod yang mempunyai maklumat lokasi pada peta. Sesuai untuk: Lokasi pelanggan, Lokasi aset, Lokasi projek.' },
        { type: 'p', text: 'Ketersediaan dan pilihan paparan tertentu boleh bergantung pada struktur data serta konfigurasi aplikasi.' },

        { type: 'subheading', text: 'B. Komponen Tetapan Views' },
        { type: 'p', text: 'Apabila membina View, beberapa tetapan penting perlu difahami.' },
        {
          type: 'ul',
          items: [
            'View Name – Nama paparan yang akan digunakan dalam aplikasi. Contoh: Senarai Tempahan, Tempahan Saya, Senarai Bilik, Kelulusan Tempahan.',
            'For This Data – Menentukan Table atau Slice yang menjadi sumber data View. Contoh: BOOKINGS, ROOMS, MyBookings, PendingBookings.',
            'View Type – Menentukan bentuk paparan seperti Table, Deck, Form, Detail dan sebagainya.',
            'Position – Menentukan kedudukan View dalam navigasi aplikasi: Primary Navigation (paparan utama yang mudah dicapai), Menu Navigation (paparan yang diletakkan dalam menu), Ref (paparan apabila pengguna membuka rekod atau navigasi berkaitan). Pilihan sebenar mungkin berbeza mengikut versi Editor.',
            'Display Name – Nama yang dipaparkan kepada pengguna. Contoh: Nama View: MyBookings → Display Name: Tempahan Saya.',
            'Icon – Ikon yang digunakan untuk mewakili sesuatu View. Contoh: Tempahan (ikon kalendar), Pengguna (ikon pengguna), Bilik (ikon bangunan), Laporan (ikon carta).',
          ],
        },
      ],
    },
    {
      id: '5.8',
      title: '5.8 Menguruskan Navigation',
      blocks: [
        { type: 'p', text: 'Navigation ialah sistem pergerakan pengguna dari satu paparan ke paparan yang lain.' },
        { type: 'p', text: 'Navigasi yang baik memudahkan pengguna mencari fungsi yang diperlukan.' },
        { type: 'label', text: 'Contoh susunan menu bagi Sistem Tempahan Bilik:' },
        {
          type: 'ol',
          items: ['Dashboard', 'Tempahan Saya', 'Senarai Bilik', 'Buat Tempahan', 'Kelulusan', 'Laporan'],
        },
        { type: 'label', text: 'Cadangan susunan mengikut peranan:' },
        { type: 'subheading', text: 'Pengguna biasa' },
        { type: 'ul', items: ['Dashboard.', 'Tempahan Saya.', 'Senarai Bilik.', 'Buat Tempahan.'] },
        { type: 'subheading', text: 'Pegawai pelulus' },
        { type: 'ul', items: ['Dashboard.', 'Tempahan Menunggu Kelulusan.', 'Sejarah Kelulusan.'] },
        { type: 'subheading', text: 'Pentadbir' },
        { type: 'ul', items: ['Dashboard.', 'Pengurusan Pengguna.', 'Pengurusan Bilik.', 'Semua Tempahan.', 'Laporan.'] },
        {
          type: 'callout',
          variant: 'note',
          title: 'Nota',
          text: 'Susunan paparan sahaja tidak mencukupi untuk mengawal akses. Tetapan keselamatan dan kebenaran pengguna perlu dikonfigurasikan secara berasingan.',
        },
      ],
    },
    {
      id: '5.9',
      title: '5.9 Memahami Format Rules',
      blocks: [
        { type: 'p', text: 'Format Rules digunakan untuk mengubah penampilan sesuatu rekod berdasarkan syarat yang ditetapkan.' },
        {
          type: 'table',
          title: 'Contohnya, dalam sistem tempahan bilik:',
          headers: ['Status', 'Paparan'],
          rows: [
            ['Pending', 'Kuning'],
            ['Approved', 'Hijau'],
            ['Rejected', 'Merah'],
          ],
        },
        { type: 'label', text: 'Contoh langkah membina Format Rule:' },
        {
          type: 'ol',
          items: [
            'Buka AppSheet Editor.',
            'Pergi ke bahagian App atau kawasan pengurusan Format Rules mengikut versi Editor.',
            'Tambah Format Rule baharu.',
            'Masukkan nama peraturan.',
            'Pilih Table yang berkaitan.',
            'Tetapkan syarat.',
            'Pilih ikon atau gaya paparan.',
            'Simpan perubahan.',
          ],
        },
        { type: 'code', title: 'Contoh syarat Format Rule', code: '[Status] = "Approved"' },
        {
          type: 'p',
          text: 'Apabila syarat dipenuhi, AppSheet akan menggunakan format yang telah ditetapkan. Format Rules membantu pengguna mengenal pasti status rekod dengan lebih cepat.',
        },
      ],
    },
    {
      id: '5.10',
      title: '5.10 Aktiviti Amali: Menguruskan Editor Sistem Tempahan Bilik',
      blocks: [
        { type: 'p', text: 'Dalam aktiviti ini, peserta akan menggunakan aplikasi FBMS yang dibina dalam Modul 4.' },

        { type: 'subheading', text: 'Tugasan 1: Semak Table' },
        { type: 'p', text: 'Pastikan aplikasi mempunyai Table berikut:' },
        { type: 'ul', items: ['USERS', 'ROOMS', 'BOOKINGS', 'APPROVALS'] },

        { type: 'subheading', text: 'Tugasan 2: Semak Column' },
        { type: 'p', text: 'Buka setiap Table dan semak: Nama Column, Type, Key, Label, Required?, Editable?. Pastikan tetapan setiap Column sesuai dengan fungsi sistem.' },

        { type: 'subheading', text: 'Tugasan 3: Bina Slice MyBookings' },
        {
          type: 'ol',
          items: [
            'Pergi ke Data.',
            'Pilih Slices.',
            'Tambah Slice.',
            'Namakan MyBookings.',
            'Pilih Source Table: BOOKINGS.',
            'Masukkan formula: [UserEmail] = USEREMAIL()',
            'Simpan perubahan.',
          ],
        },

        { type: 'subheading', text: 'Tugasan 4: Bina Slice PendingBookings' },
        {
          type: 'ol',
          items: [
            'Tambah Slice baharu.',
            'Namakan PendingBookings.',
            'Pilih Source Table: BOOKINGS.',
            'Masukkan formula: [Status] = "Pending"',
            'Simpan perubahan.',
          ],
        },

        { type: 'subheading', text: 'Tugasan 5: Bina Views' },
        {
          type: 'table',
          title: 'Bina paparan berikut:',
          headers: ['View Name', 'Data Source', 'View Type'],
          rows: [
            ['Senarai Bilik', 'ROOMS', 'Deck'],
            ['Semua Tempahan', 'BOOKINGS', 'Table'],
            ['Tempahan Saya', 'MyBookings', 'Table'],
            ['Tempahan Baharu', 'BOOKINGS', 'Form'],
            ['Kelulusan', 'PendingBookings', 'Table'],
          ],
        },

        { type: 'subheading', text: 'Tugasan 6: Bina Format Rules' },
        {
          type: 'ul',
          items: [
            'Status Pending: warna kuning.',
            'Status Approved: warna hijau.',
            'Status Rejected: warna merah.',
          ],
        },

        { type: 'subheading', text: 'Tugasan 7: Uji Aplikasi' },
        {
          type: 'ol',
          items: [
            'Buka Preview aplikasi.',
            'Semak setiap View.',
            'Cuba tambah tempahan baharu.',
            'Semak sama ada tempahan muncul dalam senarai yang betul.',
            'Uji Slice Tempahan Saya menggunakan akaun pengguna yang sesuai.',
            'Uji paparan Tempahan Menunggu Kelulusan.',
            'Pastikan paparan mudah difahami.',
          ],
        },
      ],
    },
    {
      id: '5.11',
      title: '5.11 Latihan Pengukuhan',
      blocks: [
        {
          type: 'quiz_mcq',
          questions: [
            {
              number: 1,
              q: 'Apakah fungsi utama Data dalam AppSheet Editor?',
              options: [
                { key: 'A', text: 'Mengubah warna aplikasi sahaja' },
                { key: 'B', text: 'Menguruskan sumber data dan struktur jadual' },
                { key: 'C', text: 'Menghantar e-mel secara automatik' },
                { key: 'D', text: 'Membina logo aplikasi' },
              ],
              answer: 'B',
              explanation: 'Bahagian Data dalam AppSheet Editor digunakan untuk menguruskan Tables, Columns, Slices dan struktur maklumat aplikasi.',
            },
            {
              number: 2,
              q: 'Apakah kegunaan Key dalam sesuatu Table?',
              options: [
                { key: 'A', text: 'Menentukan warna rekod' },
                { key: 'B', text: 'Mengenal pasti rekod secara unik' },
                { key: 'C', text: 'Menentukan susunan menu' },
                { key: 'D', text: 'Menyimpan gambar' },
              ],
              answer: 'B',
              explanation: 'Key ialah nilai unik yang digunakan untuk mengenal pasti setiap rekod secara unik dalam sesuatu jadual.',
            },
            {
              number: 3,
              q: 'Apakah fungsi Slice?',
              options: [
                { key: 'A', text: 'Menghapuskan semua data' },
                { key: 'B', text: 'Menghasilkan sebahagian paparan data berdasarkan syarat' },
                { key: 'C', text: 'Mengubah sumber data kepada PDF' },
                { key: 'D', text: 'Menghantar notifikasi' },
              ],
              answer: 'B',
              explanation: 'Slice menapis dan menyediakan sebahagian paparan terpilih daripada Table asal berdasarkan Row Filter Condition.',
            },
            {
              number: 4,
              q: 'View yang sesuai untuk memaparkan rekod dalam bentuk kalendar ialah:',
              options: [
                { key: 'A', text: 'Table' },
                { key: 'B', text: 'Deck' },
                { key: 'C', text: 'Calendar' },
                { key: 'D', text: 'Gallery' },
              ],
              answer: 'C',
              explanation: 'Calendar View memaparkan rekod mengikut tarikh seperti jadual penggunaan bilik, mesyuarat dan aktiviti.',
            },
            {
              number: 5,
              q: 'Apakah perbezaan utama Initial Value dengan App Formula?',
              options: [
                { key: 'A', text: 'Kedua-duanya mempunyai fungsi yang sama' },
                { key: 'B', text: 'Initial Value menetapkan nilai awal, manakala App Formula mengira nilai menggunakan formula' },
                { key: 'C', text: 'Initial Value hanya untuk gambar' },
                { key: 'D', text: 'App Formula hanya untuk nama pengguna' },
              ],
              answer: 'B',
              explanation: 'Initial Value menetapkan nilai permulaan semasa rekod dicipta (boleh diedit jika dibenarkan), manakala App Formula mengira nilai secara automatik berdasarkan data lain.',
            },
            {
              number: 6,
              q: 'Apakah fungsi Format Rules?',
              options: [
                { key: 'A', text: 'Mengubah penampilan rekod berdasarkan syarat' },
                { key: 'B', text: 'Menghapuskan rekod lama' },
                { key: 'C', text: 'Menambah Table baharu' },
                { key: 'D', text: 'Membina akaun pengguna' },
              ],
              answer: 'A',
              explanation: 'Format Rules mengubah penampilan visual (warna, ikon, gaya teks) sesuatu rekod apabila syarat tertentu dipenuhi.',
            },
          ],
        },
      ],
    },
    {
      id: '5.12',
      title: '5.12 Ringkasan Modul',
      blocks: [
        { type: 'p', text: 'Dalam modul ini, peserta telah mempelajari komponen utama AppSheet Editor, termasuk:' },
        {
          type: 'ol',
          items: [
            'Data – menguruskan sumber data.',
            'Tables – menguruskan jadual.',
            'Columns – menetapkan struktur dan sifat medan.',
            'Slices – menghasilkan paparan data berdasarkan syarat.',
            'Views – menentukan bentuk paparan aplikasi.',
            'Navigation – mengawal susunan paparan.',
            'Format Rules – memberikan penampilan berasaskan syarat.',
          ],
        },
        {
          type: 'p',
          text: 'Kesemua komponen ini penting untuk menghasilkan aplikasi yang tersusun, berfungsi dengan baik dan mudah digunakan.',
        },
      ],
    },
    {
      id: '5.13',
      title: '5.13 Hasil Pembelajaran Modul & Persediaan ke Modul 6',
      blocks: [
        { type: 'p', text: 'Peserta dianggap menguasai modul ini apabila berjaya:' },
        {
          type: 'ul',
          items: [
            'Mengenal pasti komponen utama AppSheet Editor.',
            'Menguruskan Table dan Column.',
            'Memahami Key dan Label.',
            'Membina sekurang-kurangnya dua Slice.',
            'Membina sekurang-kurangnya tiga Views.',
            'Menyusun navigasi aplikasi.',
            'Menghasilkan Format Rules berdasarkan status rekod.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Persediaan ke Modul 6',
          text: 'Modul seterusnya akan memberi tumpuan kepada penggunaan AppSheet Expressions. Peserta akan belajar menggunakan formula seperti IF(), IFS(), AND(), OR(), SELECT(), FILTER(), LOOKUP(), ANY(), COUNT() dan fungsi lain untuk membina logik aplikasi yang lebih pintar.',
        },
      ],
    },
  ],
};
