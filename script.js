// ======================================
// BAGIAN 1: DATA INFORMASI LAYANAN
// ======================================
const dataLayanan = {
    reguler: {
        judul: "📋 Layanan Reguler",
        isi: `
            <p><strong>💰 Harga:</strong> Rp 8.000 / Kg</p>
            <p><strong>⏰ Lama Pengerjaan:</strong> 2 - 3 Hari</p>
            <p><strong>✅ Sudah Termasuk:</strong> Cuci + Kering + Lipat</p>
        `
    },
    express: {
        judul: "⚡ Layanan Express",
        isi: `
            <p><strong>💰 Harga:</strong> Rp 15.000 / Kg</p>
            <p><strong>⏰ Lama Pengerjaan:</strong> Selesai 1 Hari</p>
            <p><strong>✅ Sudah Termasuk:</strong> Cuci + Kering + Setrika + Lipat</p>
        `
    }
};

// ======================================
// BAGIAN 2: FUNGSI MENAMPILKAN KOTAK INFORMASI
// ======================================
function tampilInfo(jenis) {
    const kotak = document.getElementById('kotakInfo');
    const judul = document.getElementById('judulInfo');
    const isi = document.getElementById('isiInfo');

    // Ambil data sesuai tombol yang diklik
    judul.innerHTML = dataLayanan[jenis].judul;
    isi.innerHTML = dataLayanan[jenis].isi;

    // Tampilkan kotak
    kotak.style.display = "block";
}

// ======================================
// BAGIAN 3: FUNGSI MENUTUP KOTAK INFORMASI
// ======================================
function tutupInfo() {
    document.getElementById('kotakInfo').style.display = "none";
}