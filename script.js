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
        cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=200&h=200"
      },
      {
        title: "Leave The City Lets Farm",
        artist: "Leftoverpizza",
        src: "music/Leave_the_city_lets_farm.m4a",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200&h=200"
      },
      {
        title: "Beach Vibes!",
        artist: "Leftoverpizza",
        src: "music/Beach_vibes.m4a",
        cover: "https://images.unsplash.com/photo-1554147090-e1221a04a025?auto=format&fit=crop&q=80&w=200&h=200"
      }
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
      currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
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