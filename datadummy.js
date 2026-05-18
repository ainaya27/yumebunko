// =====================================================
// DATA DUMMY YUMEBUNKO
// Nanti kalau sudah pakai MongoDB, file ini bisa
// dihapus dan diganti dengan fetch() ke API endpoint.
// =====================================================
//
// Struktur dokumen (sama persis dengan yang di MongoDB nanti):
// {
//   id           : string  — nanti diganti _id dari MongoDB
//   judul        : string
//   volume       : string  — kosong ("") kalau tidak ada volume
//   pengarang    : string  — untuk artikel: nama penulis anggota
//   cover_url    : string  — path ke gambar cover / thumbnail
//   kategori     : string  — "fisik" | "digital" | "fanzine" | "artikel"
//   sub_tipe     : string  — lihat daftar per kategori di bawah:
//                            fisik   : "komik" | "novel" | "majalah" | "artbook"
//                            digital : "ebook" | "audiobook" | "musik"
//                            fanzine : "fisik" | "digital"
//                            artikel : "ulasan" | "opini"
//   genre        : array   — bisa lebih dari satu
//   status       : string  — "tersedia" | "dipinjam" | "baca_ditempat" | "digital"
//   bisa_dipinjam: boolean — true = boleh dibawa pulang, false = baca di tempat / akses online
//   rak          : string  — lokasi rak fisik, kosong ("") kalau digital
//   deskripsi    : string  — singkat, opsional
// }

const dataKoleksi = [

    // ══════════════════════════════════════════════════════
    // A. BUKU FISIK
    // ══════════════════════════════════════════════════════

    // ── Komik / Manga (bisa dipinjam) ─────────────────────
    {
        id: "f-k001",
        judul: "Detective Conan",
        volume: "Vol. 01",
        pengarang: "Gosho Aoyama",
        cover_url: "assets/covers/conan-01.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Misteri", "Action"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "A-01",
        deskripsi: ""
    },
    {
        id: "f-k002",
        judul: "Detective Conan",
        volume: "Vol. 02",
        pengarang: "Gosho Aoyama",
        cover_url: "assets/covers/conan-02.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Misteri", "Action"],
        status: "dipinjam",
        bisa_dipinjam: true,
        rak: "A-01",
        deskripsi: ""
    },
    {
        id: "f-k003",
        judul: "Detective Conan",
        volume: "Vol. 03",
        pengarang: "Gosho Aoyama",
        cover_url: "assets/covers/conan-03.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Misteri", "Action"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "A-01",
        deskripsi: ""
    },
    {
        id: "f-k004",
        judul: "Attack on Titan",
        volume: "Bind-Up 01",
        pengarang: "Hajime Isayama",
        cover_url: "assets/covers/aot-01.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Action", "Dark Fantasy"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "A-02",
        deskripsi: ""
    },
    {
        id: "f-k005",
        judul: "Demon Slayer",
        volume: "Vol. 01",
        pengarang: "Koyoharu Gotouge",
        cover_url: "assets/covers/ds-01.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Action", "Supernatural"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "A-03",
        deskripsi: ""
    },
    {
        id: "f-k006",
        judul: "Demon Slayer",
        volume: "Vol. 02",
        pengarang: "Koyoharu Gotouge",
        cover_url: "assets/covers/ds-02.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Action", "Supernatural"],
        status: "dipinjam",
        bisa_dipinjam: true,
        rak: "A-03",
        deskripsi: ""
    },
    {
        id: "f-k007",
        judul: "Jujutsu Kaisen",
        volume: "Vol. 01",
        pengarang: "Gege Akutami",
        cover_url: "assets/covers/jjk-01.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Action", "Supernatural"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "A-04",
        deskripsi: ""
    },
    {
        id: "f-k008",
        judul: "Haikyuu!!",
        volume: "Vol. 01",
        pengarang: "Haruichi Furudate",
        cover_url: "assets/covers/hq-01.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Olahraga", "Slice of Life"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "A-05",
        deskripsi: ""
    },
    {
        id: "f-k009",
        judul: "Bonobono",
        volume: "Vol. 03",
        pengarang: "Mikio Igarashi",
        cover_url: "assets/covers/bonobono-03.jpg",
        kategori: "fisik",
        sub_tipe: "komik",
        genre: ["Slice of Life", "Comedy"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "A-06",
        deskripsi: ""
    },

    // ── Novel & Light Novel (bisa dipinjam) ───────────────
    {
        id: "f-n001",
        judul: "Sword Art Online",
        volume: "Vol. 01",
        pengarang: "Reki Kawahara",
        cover_url: "assets/covers/sao-01.jpg",
        kategori: "fisik",
        sub_tipe: "novel",
        genre: ["Isekai", "Action"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "B-01",
        deskripsi: ""
    },
    {
        id: "f-n002",
        judul: "Sword Art Online",
        volume: "Vol. 02",
        pengarang: "Reki Kawahara",
        cover_url: "assets/covers/sao-02.jpg",
        kategori: "fisik",
        sub_tipe: "novel",
        genre: ["Isekai", "Action"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "B-01",
        deskripsi: ""
    },
    {
        id: "f-n003",
        judul: "No Game No Life",
        volume: "Vol. 01",
        pengarang: "Yuu Kamiya",
        cover_url: "assets/covers/ngnl-01.jpg",
        kategori: "fisik",
        sub_tipe: "novel",
        genre: ["Isekai", "Comedy"],
        status: "dipinjam",
        bisa_dipinjam: true,
        rak: "B-02",
        deskripsi: ""
    },
    {
        id: "f-n004",
        judul: "Mushishi",
        volume: "Vol. 01",
        pengarang: "Yuki Urushibara",
        cover_url: "assets/covers/mushishi-01.jpg",
        kategori: "fisik",
        sub_tipe: "novel",
        genre: ["Fantasi", "Slice of Life"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "B-03",
        deskripsi: ""
    },

    // ── Majalah (baca di tempat) ──────────────────────────
    {
        id: "f-m001",
        judul: "Shounen Jump",
        volume: "Edisi Mei 2025",
        pengarang: "Shueisha",
        cover_url: "assets/covers/jump-mei25.jpg",
        kategori: "fisik",
        sub_tipe: "majalah",
        genre: ["Action", "Comedy", "Multi-seri"],
        status: "baca_ditempat",
        bisa_dipinjam: false,
        rak: "C-01",
        deskripsi: "Majalah manga mingguan Jepang paling populer."
    },
    {
        id: "f-m002",
        judul: "Nakayoshi",
        volume: "Edisi April 2025",
        pengarang: "Kodansha",
        cover_url: "assets/covers/nakayoshi-apr25.jpg",
        kategori: "fisik",
        sub_tipe: "majalah",
        genre: ["Romance", "Shoujo", "Multi-seri"],
        status: "baca_ditempat",
        bisa_dipinjam: false,
        rak: "C-01",
        deskripsi: "Majalah manga shoujo legendaris dari Kodansha."
    },

    // ── Artbook / Visual Book (baca di tempat) ────────────
    {
        id: "f-a001",
        judul: "The Art of Spirited Away",
        volume: "",
        pengarang: "Studio Ghibli",
        cover_url: "assets/covers/artbook-spirited.jpg",
        kategori: "fisik",
        sub_tipe: "artbook",
        genre: ["Artbook", "Fantasy"],
        status: "baca_ditempat",
        bisa_dipinjam: false,
        rak: "C-02",
        deskripsi: "Koleksi ilustrasi dan concept art film Sen to Chihiro."
    },
    {
        id: "f-a002",
        judul: "One Piece Color Walk",
        volume: "Vol. 01",
        pengarang: "Eiichiro Oda",
        cover_url: "assets/covers/colorwalk-01.jpg",
        kategori: "fisik",
        sub_tipe: "artbook",
        genre: ["Artbook", "Action"],
        status: "baca_ditempat",
        bisa_dipinjam: false,
        rak: "C-02",
        deskripsi: "Kumpulan ilustrasi berwarna karya Eiichiro Oda."
    },

    // ══════════════════════════════════════════════════════
    // B. DIGITAL
    // ══════════════════════════════════════════════════════

    // ── E-Book ────────────────────────────────────────────
    {
        id: "d-e001",
        judul: "Overlord",
        volume: "Vol. 10",
        pengarang: "Kugane Maruyama",
        cover_url: "assets/covers/overlord-10.jpg",
        kategori: "digital",
        sub_tipe: "ebook",
        genre: ["Isekai", "Dark Fantasy"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: ""
    },
    {
        id: "d-e002",
        judul: "Re:Zero",
        volume: "Vol. 01",
        pengarang: "Tappei Nagatsuki",
        cover_url: "assets/covers/rezero-01.jpg",
        kategori: "digital",
        sub_tipe: "ebook",
        genre: ["Isekai", "Drama"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: ""
    },
    {
        id: "d-e003",
        judul: "My Hero Academia",
        volume: "Vol. 01",
        pengarang: "Kōhei Horikoshi",
        cover_url: "assets/covers/mha-01.jpg",
        kategori: "digital",
        sub_tipe: "ebook",
        genre: ["Action", "Superhero"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: ""
    },

    // ── Audiobook ─────────────────────────────────────────
    {
        id: "d-ab001",
        judul: "Sword Art Online — Narasi Audio",
        volume: "Vol. 01",
        pengarang: "Reki Kawahara",
        cover_url: "assets/covers/sao-audio-01.jpg",
        kategori: "digital",
        sub_tipe: "audiobook",
        genre: ["Isekai", "Action"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Versi narasi audio dari light novel SAO Vol. 01."
    },
    {
        id: "d-ab002",
        judul: "Japanese for Beginners",
        volume: "",
        pengarang: "Nihongo Lab",
        cover_url: "assets/covers/nihongo.jpg",
        kategori: "digital",
        sub_tipe: "audiobook",
        genre: ["Bahasa", "Edukasi"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Panduan belajar bahasa Jepang dalam format audio."
    },

    // ── Musik / OST ───────────────────────────────────────
    {
        id: "d-ms001",
        judul: "Demon Slayer OST",
        volume: "Vol. 1",
        pengarang: "Yuki Kajiura & Go Shiina",
        cover_url: "assets/covers/ds-ost.jpg",
        kategori: "digital",
        sub_tipe: "musik",
        genre: ["Soundtrack", "Orchestral"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Soundtrack resmi anime Kimetsu no Yaiba season 1."
    },
    {
        id: "d-ms002",
        judul: "Ghibli Piano Collection",
        volume: "",
        pengarang: "Joe Hisaishi arr.",
        cover_url: "assets/covers/ghibli-piano.jpg",
        kategori: "digital",
        sub_tipe: "musik",
        genre: ["Soundtrack", "Piano"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Aransemen piano karya-karya Joe Hisaishi untuk film Ghibli."
    },

    // ══════════════════════════════════════════════════════
    // C. FAN-ZINE & DOUJINSHI
    // ══════════════════════════════════════════════════════
    {
        id: "fz001",
        judul: "Jujutsu Kaisen Fan-Zine",
        volume: "Vol. 01",
        pengarang: "Komunitas Yumebunko",
        cover_url: "assets/covers/fanzine-jjk.jpg",
        kategori: "fanzine",
        sub_tipe: "fisik",
        genre: ["Fan-Made", "Action"],
        status: "tersedia",
        bisa_dipinjam: true,
        rak: "D-01",
        deskripsi: "Fan-zine karya anggota komunitas, tema Jujutsu Kaisen."
    },
    {
        id: "fz002",
        judul: "Ghibli Tribute Zine",
        volume: "",
        pengarang: "Komunitas Yumebunko",
        cover_url: "assets/covers/fanzine-ghibli.jpg",
        kategori: "fanzine",
        sub_tipe: "digital",
        genre: ["Fan-Made", "Fantasy"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Zine digital berisi ilustrasi dan cerpen bertema Studio Ghibli."
    },
    {
        id: "fz003",
        judul: "Attack on Titan Doujinshi",
        volume: "Vol. 01",
        pengarang: "Komunitas Yumebunko",
        cover_url: "assets/covers/doujin-aot.jpg",
        kategori: "fanzine",
        sub_tipe: "fisik",
        genre: ["Fan-Made", "Dark Fantasy"],
        status: "baca_ditempat",
        bisa_dipinjam: false,
        rak: "D-01",
        deskripsi: "Doujinshi fisik karya anggota. Koleksi terbatas."
    },

    // ══════════════════════════════════════════════════════
    // D. ARTIKEL & ULASAN
    // ══════════════════════════════════════════════════════
    {
        id: "ar001",
        judul: "Kenapa One Piece Masih Relevan Setelah 25 Tahun?",
        volume: "",
        pengarang: "Rina S.",
        cover_url: "assets/covers/artikel-onepiece.jpg",
        kategori: "artikel",
        sub_tipe: "opini",
        genre: ["Manga", "Opini"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Analisis mengapa One Piece tetap dicintai generasi baru pembaca manga."
    },
    {
        id: "ar002",
        judul: "Review: Dungeon Meshi — Makanan Fantasi yang Serius",
        volume: "",
        pengarang: "Bagas W.",
        cover_url: "assets/covers/artikel-dunmeshi.jpg",
        kategori: "artikel",
        sub_tipe: "ulasan",
        genre: ["Anime", "Review"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Review mendalam anime Dungeon Meshi dan keunikan world-building-nya."
    },
    {
        id: "ar003",
        judul: "Mengenal Genre Isekai: Dari Awal Hingga Sekarang",
        volume: "",
        pengarang: "Dewi A.",
        cover_url: "assets/covers/artikel-isekai.jpg",
        kategori: "artikel",
        sub_tipe: "opini",
        genre: ["Light Novel", "Anime", "Edukasi"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Perjalanan genre isekai dari novel web Jepang hingga fenomena global."
    },
    {
        id: "ar004",
        judul: "Top 5 Game JRPG yang Wajib Dicoba Tahun Ini",
        volume: "",
        pengarang: "Fariz M.",
        cover_url: "assets/covers/artikel-jrpg.jpg",
        kategori: "artikel",
        sub_tipe: "ulasan",
        genre: ["Game", "JRPG"],
        status: "digital",
        bisa_dipinjam: false,
        rak: "",
        deskripsi: "Rekomendasi JRPG terbaik dari anggota komunitas Yumebunko."
    },
];