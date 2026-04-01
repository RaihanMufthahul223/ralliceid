document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 1. Hapus efek ring (aktif) dari semua tombol, lalu pasang di tombol yang diklik
      filterBtns.forEach((b) =>
        b.classList.remove(
          "ring",
          "ring-white",
          "ring-offset-2",
          "ring-offset-base-100",
        ),
      );
      btn.classList.add(
        "ring",
        "ring-white",
        "ring-offset-2",
        "ring-offset-base-100",
      );

      // 2. Ambil kategori yang dipilih
      const filterValue = btn.getAttribute("data-filter");

      // 3. Sembunyikan atau tampilkan kartu dengan animasi fade & scale
      productCards.forEach((card) => {
        if (
          filterValue === "semua" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "flex"; // Tetap pertahankan layout flexbox card
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.9)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300); // Waktu nunggu harus sinkron dengan durasi transisi CSS
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // --- DATABASE PLAYLIST LAGU ---
  // Ganti src dengan nama file mp3 kamu yang ada di folder music/
  const playlist = [
    {
      title: "Hiyori Comfy song",
      artist: "Rallice.id",
      src: "music/hiyorisong.m4a",
      cover:
        "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      title: "Leave The City Lets Farm",
      artist: "Leftoverpizza",
      src: "music/Leave_the_city_lets_farm.m4a",
      cover:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      title: "Beach Vibes!",
      artist: "Leftoverpizza",
      src: "music/Beach_vibes.m4a",
      cover:
        "https://images.unsplash.com/photo-1554147090-e1221a04a025?auto=format&fit=crop&q=80&w=200&h=200",
    },
  ];

  let currentTrackIndex = 0;
  let isPlaying = false;

  // Menangkap elemen-elemen HTML
  const audioPlayer = document.getElementById("audio-player");
  const btnPlay = document.getElementById("btn-play");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const iconPlay = document.getElementById("icon-play");
  const iconPause = document.getElementById("icon-pause");
  const playerTitle = document.getElementById("player-title");
  const playerArtist = document.getElementById("player-artist");
  const playerCover = document.getElementById("player-cover");

  // Fungsi untuk memuat data lagu ke tampilan
  function loadTrack(index) {
    const track = playlist[index];
    audioPlayer.src = track.src;
    playerTitle.textContent = track.title;
    playerArtist.textContent = track.artist;
    playerCover.src = track.cover;
  }

  // Fungsi Play / Pause
  function togglePlay() {
    if (isPlaying) {
      audioPlayer.pause();
      iconPlay.classList.remove("hidden");
      iconPause.classList.add("hidden");
    } else {
      audioPlayer.play();
      iconPlay.classList.add("hidden");
      iconPause.classList.remove("hidden");
    }
    isPlaying = !isPlaying;
  }

  // Fungsi Lagu Sebelumnya
  function prevTrack() {
    currentTrackIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audioPlayer.play();
  }

  // Fungsi Lagu Selanjutnya
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audioPlayer.play();
  }

  // 1. Inisialisasi lagu pertama saat web dibuka
  loadTrack(currentTrackIndex);

  // 2. Pasang event listener ke tombol-tombol
  btnPlay.addEventListener("click", togglePlay);
  btnPrev.addEventListener("click", prevTrack);
  btnNext.addEventListener("click", nextTrack);

  // 3. Otomatis ganti ke lagu selanjutnya kalau lagunya sudah habis/selesai
  audioPlayer.addEventListener("ended", nextTrack);
});

// 1. Data "Database" Produk Fragrance (Array of Objects)
const fragranceData = [
  {
    nama: "Blue Agave Aromatic",
    desc: "Aroma Fougere Aromatic dengan blue agave dan geranium oil dalam balutan kayu dan musk yang menenangkan.",
    harga: "Rp 349.000",
    img: "img/fragrance/1.jpeg",
  },
  {
    nama: "Chic Violet Elegance",
    desc: "Selebrasi elegan perpaduan aroma violet accord yang memikat dan semburat segar rosemary oil.",
    harga: "Rp 450.000",
    img: "img/fragrance/2.jpeg",
  },
  {
    nama: "Miss Giordani Floral EDP",
    desc: "Perpaduan mewah jasmine, tuberose, peony, dan ylang ylang yang anggun dan energik. (BPOM: NA18250604425)",
    harga: "Rp 550.000",
    img: "img/fragrance/3.jpeg",
  },
  {
    nama: "Solar Floral Ambery",
    desc: "Kehangatan vanila dan Sunlit Accord yang berpadu dengan kesegaran bergamot serta blackcurrant.",
    harga: "Rp 499.000",
    img: "img/fragrance/4.jpeg",
  },
  {
    nama: "Fruity Ambery Gourmand",
    desc: "Kombinasi segar orange dan strawberry dengan wangi creamy coconut milk serta almond milk.",
    harga: "Rp 299.000",
    img: "img/fragrance/5.jpeg",
  },
  {
    nama: "Amber Elixir Warm Temptation",
    desc: "Semburat mandarin, almond cream, dan ambery woods. Praktis untuk touch-up! (BPOM: NA18250604877)",
    harga: "Rp 350.000",
    img: "img/fragrance/6.jpeg",
  },
  {
    nama: "Possess Mythical Seduction",
    desc: "Sensasi eksotis dark plum, mawar lembut, dan clean musk dengan sentuhan hangat vanilla di kulit.",
    harga: "Rp 599.000",
    img: "img/fragrance/7.jpeg",
  },
  {
    nama: "Giordani Gold Everlasting Glow",
    desc: "Sensasi musim panas dari dark berry, buket bunga putih cerah, dan hangatnya golden patchouli.",
    harga: "Rp 599.000",
    img: "img/fragrance/8.jpeg",
  },
  {
    nama: "Mint & Raspberry Organic Mist",
    desc: "Kesegaran mint dan raspberry dengan 100% alkohol berbahan dasar alami. (BPOM: NA18230605654)",
    harga: "Rp 199.000",
    img: "img/fragrance/9.jpeg",
  },
];
// 2. Tangkap elemen wadah di HTML
const katalogContainer = document.getElementById("katalog-container");

// 3. Looping data dan gabungkan HTML-nya
let htmlTambahan = "";

fragranceData.forEach((item) => {
  // Perhatikan penggunaan backtick (`) agar kita bisa enter dan pakai variabel ${...}
  htmlTambahan += `
    <div class="product-card card bg-base-200 shadow-xl hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-neutral/50 group" data-category="lifestyle">
      <figure class="relative overflow-hidden">
        <div class="absolute top-2 right-2 badge badge-ghost z-20 shadow-lg">Lifestyle</div>
        <img src="${item.img}" alt="${item.nama}" class="group-hover:scale-110 transition-transform duration-500 w-full h-48 object-cover" />
      </figure>
      <div class="card-body p-6">
        <h2 class="card-title text-white text-lg">${item.nama}</h2>
        <p class="text-sm opacity-80">${item.desc}</p>
        <div class="card-actions justify-between items-center mt-4">
          <span class="text-xl font-bold text-white">${item.harga}</span>
          <button class="btn btn-neutral btn-sm rounded-full btn-beli">Beli</button>
        </div>
      </div>
    </div>
  `;
});

// 4. Suntikkan HTML tambahan tadi ke dalam wadah (tanpa menghapus isi yang sudah ada)
katalogContainer.insertAdjacentHTML("beforeend", htmlTambahan);

// --- FITUR DIRECT ORDER KE WHATSAPP ---
document.addEventListener("click", function (e) {
  // 1. Cek apakah elemen yang diklik memiliki class 'btn-beli'
  const tombolBeli = e.target.closest(".btn-beli");

  if (tombolBeli) {
    // 2. Cari elemen 'card' pembungkus terdekat dari tombol yang diklik
    const card = tombolBeli.closest(".product-card");

    if (card) {
      // 3. Ambil data teks dari dalam card tersebut
      // Kita mengambil Judul, Deskripsi, dan Harga berdasarkan class yang ada di HTML-mu
      const namaProduk = card.querySelector(".card-title").innerText;
      const deskripsi = card.querySelector("p.opacity-80").innerText;
      const harga = card.querySelector(".font-bold.text-white").innerText;

      // 4. Nomor WA Admin Rallice.id
      const nomorWA = "6288973127414";

      // 5. Susun format pesan rapi untuk dikirim ke WA
      const pesan = `Halo admin Rallice.id, saya tertarik untuk memesan produk berikut:\n\n*Nama Produk:* ${namaProduk}\n*Harga:* ${harga}\n*Deskripsi:* ${deskripsi}\n\nApakah produk ini masih bisa diorder?`;

      // 6. Ubah teks menjadi format URL (mengubah spasi dan enter agar terbaca oleh link)
      const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

      // 7. Buka WhatsApp di tab baru
      window.open(linkWA, "_blank");
    }
  }
});
