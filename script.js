function hitung() {
    let harga = parseFloat(document.getElementById("harga").value);
    let dp = parseFloat(document.getElementById("dp").value);
    let tenor = parseFloat(document.getElementById("tenor").value);

    if (isNaN(harga) || isNaN(dp) || isNaN(tenor)) {
        alert("Semua data wajib diisi!");
        return;
    }

    let bunga = harga * 0.20;
    let dpNominal = harga * (dp / 100);
    let total = (harga + bunga) - dpNominal;
    let bulan = tenor * 12;
    let angsuran = total / bulan;

    document.getElementById("hasil").innerHTML = `
        <h3>Hasil Perhitungan</h3>
        <p>Harga Rumah: Rp ${harga.toLocaleString()}</p>
        <p>DP (${dp}%): Rp ${dpNominal.toLocaleString()}</p>
        <p>Tenor: ${tenor} Tahun (${bulan} Bulan)</p>
        <p>Bunga (20%): Rp ${bunga.toLocaleString()}</p>
        <hr>
        <h3>Angsuran per Bulan: Rp ${angsuran.toLocaleString()}</h3>
    `;
}

let indexKatalog = 0;
const katalog = document.querySelectorAll(".kartu");

function autoKatalog() {
    katalog.forEach(k => k.classList.remove("active"));
    indexKatalog++;
    if (indexKatalog >= katalog.length) indexKatalog = 0;
    katalog[indexKatalog].classList.add("active");
}

function pilihRumah(harga) {
    document.getElementById("harga").value = harga;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

setInterval(autoKatalog, 3500);

function pilihRumah(harga) {
    document.getElementById("harga").value = harga;
    window.location.href = "#beranda";
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slider-rumah .slide");

function autoSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    slides[slideIndex].classList.add("active");
}

setInterval(autoSlide, 3000);