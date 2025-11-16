import { useState } from 'react';
import Gallery from './Gallery';
import LovePuzzle from './LovePuzzle';
import LoveNotes from './LoveNotes';
import MusicPlayer from './MusicPlayer';
import { FaImages, FaPuzzlePiece, FaHeart, FaMusic } from 'react-icons/fa';
import bg from '../assets/bg-space.jpg';
import ustogether from '../assets/images/couple2.jpg';

export default function MainMenu({ currentPage, setCurrentPage }) {
  const [hoverEffect, setHoverEffect] = useState(null);
  const [showHearts, setShowHearts] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setShowHearts(prev => [...prev, { id: Date.now(), x, y }]);

    setTimeout(() => {
      setShowHearts(prev => prev.slice(1));
    }, 1000);
  };

  const menuItems = [
    { id: 'memories', icon: <FaImages />, label: 'Our Memories' },
    { id: 'puzzle', icon: <FaPuzzlePiece />, label: 'Love Puzzle' },
    { id: 'notes', icon: <FaHeart />, label: 'Love Notes' },
    { id: 'music', icon: <FaMusic />, label: 'Our Song' }
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 bg-fixed relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      onClick={handleClick}
    >
      {showHearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-500 text-2xl pointer-events-none animate-floatHeart"
          style={{
            left: heart.x - 15,
            top: heart.y - 15,
            animation: `floatHeart 1s ease-out forwards`
          }}
        >
          ❤️
        </div>
      ))}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 mb-8 md:mb-0 md:mr-8">
            <div className="bg-pink-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-400 border-opacity-30">
              <h2 className="text-2xl font-bold text-pink-200 mb-6 text-center">Our Love Journey</h2>
              <nav>
                <ul className="space-y-3">
                  {menuItems.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => setCurrentPage(item.id)}
                        onMouseEnter={() => setHoverEffect(item.id)}
                        onMouseLeave={() => setHoverEffect(null)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                          currentPage === item.id
                            ? 'bg-pink-700 text-white shadow-md'
                            : 'text-pink-200 hover:bg-pink-800 hover:bg-opacity-50'
                        }`}
                      >
                        <span className="text-xl mr-3">{item.icon}</span>
                        <span>{item.label}</span>
                        {hoverEffect === item.id && (
                          <span className="ml-auto text-pink-300 animate-pulse">❤️</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-pink-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-400 border-opacity-30 min-h-[80vh]">
              
              {/* Render Halaman */}
              {currentPage === 'memories' && <Gallery />}
              {currentPage === 'puzzle' && <LovePuzzle />}
              {currentPage === 'notes' && <LoveNotes />}
              {currentPage === 'music' && <MusicPlayer />}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
