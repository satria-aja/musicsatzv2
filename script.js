const songs = [
  { title: "Welcome to Music.S4tS", src: " singkat.mp3" },
  { title: "Avangard - Lonown", src: " lonown.mp3" },
  { title: "Avenged Sevenfold - Dear God", src: " deargod.mp3" },
  { title: "Alan Walker - Alone", src: " alone.mp3" },
  { title: "Alan Walker - On My Way", src: " onmyway.mp3" },
  { title: "NDX A.K.A - Kimcil Kepolen", src: " Kimcil Kapolen.mp3" },
  { title: "NDX A.K.A - Kelingan Mantan", src: " Kelingan Mantan.mp3" },
  { title: "James Arthur - Thousand Year", src: " Thousand Year.mp3" },
  { title: "NDX A.K.A - Nemen", src: " nemen.mp3" },
  { title: "Alan Walker - Not You", src: " notyuy.mp3" },
  {
    title: "Bernadya - Kata Mereka Ini Berlebihan",
    src: " berlebihan.mp3",
  },
  { title: "Nadin Amizah - Bertaut", src: " bertaut.mp3" },
  { title: "Billie Eilish - BIRDS OF A FEATHER", src: " bird.mp3" },
  { title: "Pamungkas - To The Bone", src: " bone.mp3" },
  { title: "Virgoun - Bukti", src: " bukti.mp3" },
  { title: "My Chemical Romance - Cancer", src: " cancer.mp3" },
  { title: "Cigarettes After Sex - Apocalypse", src: " cas.mp3" },
  { title: "Hozier - Take Me To Church", src: " church.mp3" },
  { title: "Ruth B - Dandelions", src: " dandelions.mp3" },
  { title: "Taylor Swift - Dress", src: " dress.mp3" },
  { title: "Bring Me The Horizon - Drown", src: " drown.mp3" },
  { title: "Last Child - Duka", src: " duka.mp3" },
  { title: "Djo - End Of Beginning", src: " endofbeginning.mp3" },
  { title: "KARNAMEREKA - Gagal Kawin", src: " gagal.mp3" },
  { title: "Avenged Sevenfold - Gunslinger", src: " guns.mp3" },
  { title: "Alan Walker - Hero", src: " hero.mp3" },
  {
    title: "Bullet For My Valentine - Her Voice Resides",
    src: " hervoice.mp3",
  },
  { title: "Travis Scott - HIGHEST IN THE ROOM", src: " highest.mp3" },
  {
    title: "My Chemical Romance - I Don't Love You",
    src: " idonlovyu.mp3",
  },
  { title: "Joji - SLOW DANCING IN THE DARK", src: " joji.mp3" },
  { title: "Lady Gaga - Judas", src: " judas.mp3" },
  { title: "Aftershine - Kalah", src: " kalah.mp3" },
  {
    title: "Afgan - Ku Dengannya Kau Dengan Dia",
    src: " kaudengannya.mp3",
  },
  { title: "Bring Me The Horizon - Kool-Aid", src: " koll.mp3" },
  { title: "BRAZILIAN PHONK - Life in Rio", src: " life.mp3" },
  {
    title: "Avenged Sevenfold - A Little Piece of Heaven",
    src: " litle.mp3",
  },
  { title: "Bring Me The Horizon - LosT", src: " lost.mp3" },
  { title: "Taylor Swift - Love Story", src: " lovestory.mp3" },
  { title: "Mahen - Seamin Tak Seiman", src: " mahen.mp3" },
  { title: "Ghost - Mary On A Cross", src: " mary.mp3" },
  { title: "TXVSTERPLAYA - Masha Ultrafunk", src: " masha.mp3" },
  { title: "The Jansen - Mereguk Anti Depresan Lagi", src: " mereguk.mp3" },
  { title: "Eminem - Mockingbird", src: " mokingbird.mp3" },
  { title: "Ed Sheeran - Perfect", src: " perfect.mp3" },
  { title: "Bastille - Pompeii", src: " pompeii.mp3" },
  { title: "Dewa 19 - Pupus", src: " pupus.mp3" },
  { title: "MAGIC! - Rude", src: " rude.mp3" },
  { title: "sza - Saturn", src: " saturn.mp3" },
  { title: "Avenged Sevenfold - Save Me", src: " saveme.mp3" },
  { title: "Virgoun - Selamat (Selamat Tinggal)", src: " selamat.mp3" },
  { title: "For Revenge - Serana", src: " serana.mp3" },
  { title: "Alan Walker - Sing Me To Sleep", src: " singmetoslep.mp3" },
  { title: "Eternxlkz - Slay", src: " slay.mp3" },
  {
    title: "Sleeping With Sirens - If You Can't Hang",
    src: " sleeping.mp3",
  },
  { title: "Nadin Amizah - Sorai", src: " sorai.mp3" },
  { title: "Ice Nine Kills - Stabbing In The Dark", src: " stabbing.mp3" },
  { title: "Virgoun - Surat Cinta Untuk Starla", src: " suratcinta.mp3" },
  { title: "ilysam - SWEET RALLY", src: " sweet.mp3" },
  { title: "cavetown - talk to me", src: " talktome.mp3" },
  { title: "2Pac - Hit 'Em Up", src: " tupac.mp3" },
  { title: "Katy Perry - Unconditionally", src: " uconditally.mp3" },
  { title: "Avenged Sevenfold - Unholy Confessions", src: " unholy.mp3" },
  { title: "Lamb of God - Walk With me in Hell", src: " walkhell.mp3" },
  { title: "floki - lost soul remix", src: " floki.mp3" },
  { title: "Frank Klepacki - Hell March", src: " hell.mp3" },
  { title: "Fatin - Aku Memilih Setia", src: " setia.mp3" },
  { title: "Lavina - Pilihan Hatiku", src: " pilihanhatiku.mp3" },
  { title: "Cassandra - Cinta Terbaik", src: " cintaterbaik.mp3" },
  { title: "Henry Moodie - drunk text", src: " drunk.mp3" },
  { title: "James Arthur - Rewrite The Stars", src: " rewrite.mp3" },
  { title: "Budi Doremi - Mesin Waktu", src: " mesinwaktu.mp3" },
  { title: "Anggi Marito - Tak Segampang Itu", src: " takgampang.mp3" },
  { title: "Mahalini - Sial", src: " sial.mp3" },
  { title: "Mahalini - Mati-Matian", src: " mati-matian.mp3" },
  { title: "SEVDALIZA - ALIBI", src: " alibi.mp3" },
  { title: "Alphaville  - Forever Young", src: " young.mp3" },
  { title: "KEISYA LEVRONKA - TAK INGIN USAI", src: " usai.mp3" },
  { title: "Geisha - Karena Kamu", src: " karnakmu.mp3" },
  { title: "Nidji - Laskar Pelangi", src: " laskar.mp3" },
  { title: "Idgitaf - Takut Tambah Dewasa", src: " takut.mp3" },
  { title: "Seventeen - Ayah", src: " ayah.mp3" },
  { title: "Bernadya - Satu Bulan ", src: " satubulan.mp3" },
  { title: "nadhif basalamah - penjaga hati", src: " penjagahati.mp3" },
  { title: "Andra and the BackBon - Sempurna", src: " sempurna.mp3" },
  { title: "Mahen - Pura Pura Lupa", src: " puralupa.mp3" },
  { title: "Daun jatuh - Resah jadi luka", src: " resah.mp3" },
  { title: "DJ - kutukan mantan", src: " kutukan.mp3" },
  { title: "Angga Dermawan - Dola", src: " dola.mp3" },
  { title: "Near, Dian Sorowea - Karna Su Sayang", src: " karnasu.mp3" },
  { title: "Radja - Cinderella", src: " cinderella.mp3" },
  { title: "Maroon 5 - Girls Like You", src: " likeyou.mp3" },
  { title: "Maroon 5 - Memories", src: " memories.mp3" },
  { title: "Lewis Capaldi - Someone You Loved", src: " someone.mp3" },
  { title: "Benson Boone - In the Stars", src: " inthestar.mp3" },
  { title: "One direction - Night Changes", src: " night.mp3" },
  { title: "One direction - Right Now", src: " right.mp3" },
  { title: "One direction - Strong", src: " strong.mp3" },
  { title: "One direction - Story of My Life", src: " story.mp3" },
  { title: "Dewa 19 - Kangen", src: " kangen.mp3" },
  { title: "Adele - Easy On Me", src: " easy.mp3" },
  { title: "Fifty Fifty - Cupid", src: " cupid.mp3" },
];

let currentSongIndex = 0;
let filteredSongs = [...songs]; // Ensure this starts with all songs

//const artistImage = document.getElementById('artistImage');
const songTitle = document.getElementById("songTitle");
const queueList = document.getElementById("queueList");
const nextSongImage = document.getElementById("nextSongImage");
const nextSongTitle = document.getElementById("nextSongTitle");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const volumeControl = document.getElementById("volumeControl");
const playPauseBtn = document.getElementById("playPauseBtn");
const searchBox = document.getElementById("searchBox");
const audioPlayer = document.getElementById("audioPlayer");

// Check for missing elements
if (
  !audioPlayer ||
  !songTitle ||
  !queueList ||
  !nextSongImage ||
  !nextSongTitle ||
  !prevBtn ||
  !nextBtn ||
  !volumeControl ||
  !searchBox
) {
  console.error("One or more required elements are missing from the HTML.");
}

function loadSong(index) {
  const song = filteredSongs[index];
  if (song) {
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    //artistImage.src = song.artistImage;
    updateQueue();
    updateNextSong(); // Make sure this is called after the song is loaded
    audioPlayer.play();
  }
}

function updateQueue() {
  if (!queueList) return;

  queueList.innerHTML = "";
  filteredSongs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
    });
    queueList.appendChild(li);
  });
}

function updateNextSong() {
  const nextIndex = (currentSongIndex + 1) % filteredSongs.length;
  if (nextSongImage && nextSongTitle) {
    nextSongImage.src = filteredSongs[nextIndex];
    nextSongTitle.textContent = filteredSongs[nextIndex].title;
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % filteredSongs.length;
  loadSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex =
    (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;
  loadSong(currentSongIndex);
}

audioPlayer.addEventListener("ended", nextSong);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
volumeControl.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value;
});

function updateVolumeBackground() {
  const value =
    ((volumeControl.value - volumeControl.min) /
      (volumeControl.max - volumeControl.min)) *
    100;
  volumeControl.style.background = `linear-gradient(to right, #007bff ${value}%, #ddd ${value}%)`;
}

volumeControl.addEventListener("input", updateVolumeBackground);

// Initialize the background on load
updateVolumeBackground();

// Initial load
loadSong(currentSongIndex);

// Search functionality
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  console.log(`Searching for: ${query}`); // Debugging line
  filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(query)
  );
  console.log(`Filtered Songs:`, filteredSongs); // Debugging line
  currentSongIndex = 0; // Reset the current song index to 0 when searching
  loadSong(currentSongIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  const queueList = document.getElementById("queueList");

  queueList.addEventListener("click", function (event) {
    if (event.target && event.target.nodeName === "LI") {
      // Scroll ke atas halaman
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Membuat scroll smooth
      });

      // Lakukan sesuatu ketika item queue diklik (misal: ganti lagu)
      // Anda bisa mendapatkan index item yang diklik dengan:
      // const index = Array.from(queueList.children).indexOf(event.target);
      // Dan lanjutkan dengan logika pemutaran lagu di sini...
    }
  });
});

const player = new Plyr("#audioPlayer");
document.addEventListener("DOMContentLoaded", function () {
  var myModal = new bootstrap.Modal(document.getElementById("welcomeModal"));
  myModal.show();
});
