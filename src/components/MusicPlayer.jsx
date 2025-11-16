// src/components/MusicPlayer.jsx
import { useState } from "react";

// Data lagu dengan Spotify Embed (iframe)
const songs = [
  {
    id: 1,
    title: "Freaky Friday",
    artist: "Lil Dicky ft. Chris Brown",
    embedUrl:
      "https://open.spotify.com/embed/track/6dbSBQXCctYSVryynHXaZ4?utm_source=generator",
  },
  {
    id: 2,
    title: "Without You",
    artist: "Braaten & Aili",
    embedUrl:
      "https://open.spotify.com/embed/track/2MYFRX1xLPjCfDBwsh8mdM?utm_source=generator",
  },
  {
    id: 3,
    title: "Spring Day",
    artist: "BTS",
    embedUrl:
      "https://open.spotify.com/embed/track/2j1fFjWHCI9KJSwcuYAOyF?utm_source=generator",
  },
];

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0);

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 rounded-3xl shadow-2xl border border-pink-400/30 relative overflow-hidden">
      {/* Konten utama */}
      <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-pink-100 mb-4 text-center">
          Our Special Songs
        </h1>

        {/* Spotify Iframe Player */}
        <div className="flex flex-col items-center mb-6 w-full">
          <iframe
            src={songs[currentSong].embedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-md border border-pink-400"
          ></iframe>

          <h2 className="text-xl font-semibold text-pink-100 mt-4">
            {songs[currentSong].title}
          </h2>
          <p className="text-sm text-pink-300">{songs[currentSong].artist}</p>
        </div>

        {/* Tombol kontrol */}
        <div className="flex items-center justify-center gap-6 mb-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-all"
          >
            ◀
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-all"
          >
            ▶
          </button>
        </div>

        <p className="text-sm text-center text-pink-300 mt-2">
          Player resmi Spotify, jadi langsung bisa diputar aman 🎧
        </p>
      </div>
    </div>
  );
}
