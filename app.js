async function ambilData() {
    const linkProduksi = 'https://yumebunko.netlify.app/.netlify/functions/get-komik';

    const isLocal = window.location.hostname.includes("localhost") || 
                   window.location.hostname.includes("127.0.0.1");

    const url = isLocal ? linkProduksi : '/.netlify/functions/get-komik';

    console.log("Mencoba narik data dari:", url);

    try {
        const respon = await fetch(url);
        if (!respon.ok) throw new Error("Respon server gak asik");
        
        const data = await respon.json();
        console.log("Data berhasil masuk:", data);

        const wadah = document.getElementById('daftar_komik');
        wadah.innerHTML = ''; 

        data.forEach(komik => {
            wadah.innerHTML += `
                <div class="card">
                    <img src="${komik.gambar_url}" alt="${komik.judul}" style="width:100%">
                    <p>${komik.penulis}</p>
                    <h3>${komik.judul}</h3>
                    <p>${komik.status}</p>
                </div>
            `;
        });
    } catch (err) {
        console.error("Error-nya di sini nih:", err);
        document.getElementById('daftar_komik').innerHTML = "<p>Gagal muat data, cek Console (F12)</p>";
    }
}
ambilData();