async function ambilData() {
    const respon = await fetch('/.netlify/functions/get-komik');
    const data = await respon.json();

    const wadah = document.getElementById('daftar_komik');

    data.forEach(komik => {
        const card = `
            <div class="card">
                <img src="${komik.gambar_url}" alt="${komik.judul}" style="width:100%">
                <p>${komik.penulis}</p>
                <h3>${komik.judul}</h3>
                <p>${komik.status}</p>
            </div>
            `;
            wadah.innerHTML += card;
    });
}

ambilData();