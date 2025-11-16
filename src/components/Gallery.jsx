import { useState } from "react";

// Import all photos per year (contoh struktur, sesuaikan dengan file kamu)
// 2021
import y2021_1 from "../assets/images/memories/2021/1.jpg";
// Tambahkan semua foto tahun 2021...

// 2022
import y2022_1 from "../assets/images/memories/2022/1.jpg";
// Tambahkan semua foto tahun 2022...

// 2023
import y2023_1 from "../assets/images/memories/2023/1.jpg";

// 2024
import y2024_1 from "../assets/images/memories/2024/1.jpg";

// 2025
import y2025_1 from "../assets/images/memories/2025/1.jpg";

// Struktur data kini berdasarkan tahun, bukan bulan
const yearPhotos = {
  "2021": [y2021_1],
  "2022": [y2022_1],
  "2023": [y2023_1],
  "2024": [y2024_1],
  "2025": [y2025_1],
};

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const years = Object.keys(yearPhotos).map((year) => ({
    name: year,
    photos: yearPhotos[year].length,
  }));

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-pink-200 mb-6 text-center">
        Our Memories by Year
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {years.map((year) => (
          <div
            key={year.name}
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-200"
            onClick={() => setSelectedYear(year.name)}
          >
            <div className="aspect-square bg-gradient-to-br from-pink-700 to-purple-700 flex flex-col items-center justify-center p-2">
              <span className="text-lg font-semibold text-pink-100 text-center">
                {year.name}
              </span>
              <span className="mt-1 bg-pink-800 text-pink-200 text-xs px-2 py-1 rounded-full">
                {year.photos} {year.photos === 1 ? "photo" : "photos"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for specific year photos */}
      {selectedYear && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-pink-800 bg-black bg-opacity-80">
            <h2 className="text-xl md:text-2xl font-bold text-pink-200">
              {selectedYear} Memories
            </h2>
            <button
              className="text-pink-300 hover:text-white text-2xl"
              onClick={() => setSelectedYear(null)}
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {yearPhotos[selectedYear].map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedPhoto(index)}
                >
                  <img
                    src={photo}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>

          <img
            src={yearPhotos[selectedYear][selectedPhoto]}
            alt={`Memory from ${selectedYear}`}
            className="w-full h-full object-contain"
          />

          <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 px-4 py-2 rounded text-sm z-50">
            {selectedYear} - Photo {selectedPhoto + 1}
          </div>
        </div>
      )}
    </div>
  );
}
