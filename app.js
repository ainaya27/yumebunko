const SUB_TIPE_CONFIG = {
    komik: { label: "Komik", cls: "badge-komik" },
    novel: { label: "Novel", cls: "badge-novel" },
    majalah: { label: "Majalah", cls: "badge-majalah" },
    artbook: { label: "Artbook", cls: "badge-book" },
    artbook: { label: "Drama CD", cls: "badge-dramacd" },
    audiobook: { label: "Audiobook", cls: "badge-audio" },
    musik: { label: "Musik/OST", cls: "badge-musik" },
    fisik: { label: "Fisik", cls: "badge-fisik" },
    digital: { label: "Digital", cls: "badge-digital" },
    ulasan: { label: "Ulasan", cls: "badge-ulasan" },
    opini: { label: "Opini", cls: "badge-opini" },
};

const STATUS_CONFIG = {
    tersedia:      { label: "Tersedia",       cls: "status-tersedia"  },
    dipinjam:      { label: "Dipinjam",       cls: "status-dipinjam"  },
    baca_ditempat: { label: "Baca di Tempat", cls: "status-ditempat"  },
    digital:       { label: "Akses Digital",  cls: "status-digital"   },
};

const KATEGORI_LABEL = {
    fisik:   "本 · Buku Fisik",
    digital: "デジタル · Digital",
    artikel: "記事 · Artikel & Ulasan", 
};

const SUB_TIPE_PER_KATEGORI = {
    semua: [],
    fisik: ["komik", "novel", "majalah", "artbook"],
    digital: ["drama-cd", "audiobook", "musik"],
    artikel: ["ulasan", "opini"]
};

let activeTab = "semua";
let activeFilter = "semua";
let searchQuery = "";

function loadData() {
    return dataKoleksi;
}

function getFiltered(data) {
    const q = searchQuery.toLowerCase();
    return data.filter(item => {
        const matchTab = activeTab === "semua" || item.kategori === activeTab;
        const matchFilter = activeFilter === 'semua' || item.sub_tipe === activeFilter;
        const matchSearch = !q || item.judul.toLowerCase().includes(q) || item.pengarang.toLowerCase().includes(q) || (item.deskripsi || "").toLowerCase().includes(q) || item.genre.some(g => g.toLowerCase().includes(q));
        return matchTab && matchFilter && matchSearch;
    });
}

function renderCard(item) {
    const stCfg = STATUS_CONFIG[item.status] || STATUS_CONFIG.digital;
    const stCfg2 = SUB_TIPE_CONFIG[item.sub_tipe] || { label: item.sub_tipe, cls: ""};
    const volText = item.volume ? `${item.volume}` : "";
    const imgSrc = item.cover_url || "assets/news.jpg";

    const pinjamTag = item.bisa_dipinjam ? `<span class="tag-pinjam">✓ Bisa Dipinjam</span>` : "" ;
    const rakInfo = item.rak ? `<p class="katalog-rak">Rak ${item.rak}</p>` : "";
    const deskripsi = item.deskripsi ? `<p class="katalog-desk">${item.deskripsi}</p>` : "";

    return `
        <div class="katalog-card" data-id="${item.id}">
            <div class="katalog-cover">
                <img
                    src="${imgSrc}"
                    alt="${item.judul}${volText}"
                    loading="lazy"
                    onerror="this.src='assets/news.jpg'"
                ></img>
            </div>
            <div class="katalog-body">
                <div class="katalog-badges">
                    <span class="badge ${stCfg2.cls}">${stCfg2.label}</span>
                </div>
                <p class="katalog-judul">${item.judul}${volText}</p>
                <p class="katalog-pengarang">${item.pengarang}</p>
                <p class="katalog-genre">${item.genre.join(", ")}</p>
                ${deskripsi}
                <div class="katalog-footer">
                    <span class="katalog-status ${stCfg.cls}">
                        <span class="status-dot"></span>${stCfg.label}
                    </span>
                    ${pinjamTag}
                </div>
                ${rakInfo}
            </div>
        </div>`;
}

function render () {
    const data = loadData();
    const filtered = getFiltered(data);
    const container = document.getElementById("katalog-grid");
    const metaEl = document.getElementById("hasil-meta");

    metaEl.textContent = `${filtered.length} koleksi ditemukan`;

    if (activeTab === "semua") {
        const cats = ["fisik", "digital", "artikel"];
        let html = "";
        cats.forEach(cat => {
            const items = filtered.filter(d => d.kategori === cat);
            if (!items.length) return;
            html += `
                <div class="section-header">
                    <span class="section-label">${KATEGORI_LABEL[cat]}</span>
                    <span class="section-divider"></span>
                    <span class="section-count">${items.length}</span>
                </div>
                <div class="katalog-grid-inner">
                    ${items.map(renderCard).join("")}
                </div>`
        });
        container.innerHTML = html || emptyState();
    } else {
        container.innerHTML = filtered.length ? `<div class="katalog-grid-inner">${filtered.map(renderCard).join("")}</div>` : emptyState();
    }
}

function emptyState() {
    return `<div class="empty-state">
        <p>🔍</p>
        <p>Tidak ada koleksi yang cocok.</p>
    </div>`;
}

function renderPills() {
    const pillRow = document.getElementById("pill-row");
    const subTipes = SUB_TIPE_PER_KATEGORI[activeTab] || [];
    const list = subTipes.length ? ["semua", ...subTipes] : ["semua"];

    pillRow.style.display = "flex";

    const pills = list.map(st => {
        const cfg = SUB_TIPE_CONFIG[st] || { label: "Semua" };
        const label = st === "semua" ? "Semua" : cfg.label;
        const active = activeFilter === st ? "active" : "";
        return `<button class="pill-btn ${active}" data-filter="${st}">${label}</button>`;
    }).join("");

    pillRow.innerHTML = `<span class="pill-label">Filter:</span>${pills}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tab-row").addEventListener("click", e => {
        const btn = e.target.closest("[data-tab]");

        if (!btn) return;

        activeTab = btn.dataset.tab;
        activeFilter = "semua";
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderPills();
        render();
    });

    document.getElementById("pill-row").addEventListener("click", e => {
        const btn = e.target.closest("[data-filter]");
        if (!btn) return;
        activeFilter = btn.dataset.filter;
        document.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        render();
    });

    document.getElementById("katalog-search").addEventListener("input", e => {
        searchQuery = e.target.value;
        render();
    });

    renderPills();
    render();
})

//  const linkProduksi = 'https://yumebunko.netlify.app/.netlify/functions/get-komik';

//     const isLocal = window.location.hostname.includes("localhost") || 
//                    window.location.hostname.includes("127.0.0.1");

//     const url = isLocal ? linkProduksi : '/.netlify/functions/get-komik';

//     console.log("Mencoba narik data dari:", url);

//     try {
//         const respon = await fetch(url);
//         if (!respon.ok) throw new Error("Respon server gak asik");
        
//         const data = await respon.json();
//         console.log("Data berhasil masuk:", data);

//         const wadah = document.getElementById('daftar_komik');
//         wadah.innerHTML = ''; 

//         data.forEach(komik => {
//             wadah.innerHTML += `
//                 <div class="card">
//                     <img src="${komik.gambar_url}" alt="${komik.judul}" style="width:100%">
//                     <p>${komik.penulis}</p>
//                     <h3>${komik.judul}</h3>
//                     <p>${komik.status}</p>
//                 </div>
//             `;
//         });
//     } catch (err) {
//         console.error("Error-nya di sini nih:", err);
//         document.getElementById('daftar_komik').innerHTML = "<p>Gagal muat data, cek Console (F12)</p>";
//     }
// }
// ambilData();