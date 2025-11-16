import { useState } from "react";
import PasswordLock from "./components/PasswordLock";
import Countdown from "./components/Countdown";
import BirthdayMessage from "./components/BirthdayMessage";
import MainMenu from "./components/MainMenu";
import "./index.css";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);

  // Default page now is "memories", not home
  const [currentPage, setCurrentPage] = useState("memories");

  const correctPassword = "Dear you";

  const handleUnlock = () => {
    setShowCountdown(true);

    setTimeout(() => {
      setShowCountdown(false);
      setShowBirthday(true);
    }, 3800);
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 flex flex-col items-center justify-center">
        {showCountdown ? (
          <Countdown />
        ) : showBirthday ? (
          <BirthdayMessage
            onComplete={() => {
              setShowBirthday(false);
              setUnlocked(true);
              setCurrentPage("memories"); // redirect setelah countdown
            }}
          />
        ) : (
          <PasswordLock onUnlock={handleUnlock} correctPassword={correctPassword} />
        )}
      </div>
    );
  }

  return <MainMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />;
}
