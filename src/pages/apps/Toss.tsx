import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import "../../styles/Toss.scss";

const headsImage = new URL("../../assets/head.jpeg", import.meta.url).href;
const tailsImage = new URL("../../assets/tail.jpeg", import.meta.url).href;

const Toss: React.FC = () => {
  const [angle, setAngle] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [headsCount, setHeadsCount] = useState<number>(0);
  const [tailsCount, setTailsCount] = useState<number>(0);
  const [totalFlips, setTotalFlips] = useState<number>(0);

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    setResult(null);
    const newResult = Math.random() > 0.5 ? "Heads" : "Tails";
    const spins = Math.floor(Math.random() * 5) + 5; // 5 to 9 spins
    const newAngle = angle + spins * 360 + (newResult === "Heads" ? 0 : 180);

    setAngle(newAngle);
    setTotalFlips((prev) => prev + 1);

    setTimeout(() => {
      setResult(`You got ${newResult}`);
      setIsFlipping(false);
      if (newResult === "Heads") {
        setHeadsCount((prev) => prev + 1);
      } else {
        setTailsCount((prev) => prev + 1);
      }
    }, 3000);
  };

  useEffect(() => {
    if (angle > 3600) {
      setAngle(angle % 360);
    }
  }, [angle]);

  const getHeadsPercentage = () => {
    return totalFlips === 0 ? 0 : (headsCount / totalFlips) * 100;
  };

  const getTailsPercentage = () => {
    return totalFlips === 0 ? 0 : (tailsCount / totalFlips) * 100;
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Coin Toss Challenge</h1>
        <section className="toss-section">
          <div className="coin" style={{ transform: `rotateY(${angle}deg)` }}>
            <div className="coin-face heads">
              <img src={headsImage} alt="Heads" />
            </div>
            <div className="coin-face tails">
              <img src={tailsImage} alt="Tails" />
            </div>
          </div>
          <p className="coin-text">
            {isFlipping ? "Flipping..." : angle % 360 === 0 ? "Heads" : "Tails"}
          </p>
          {result && <p className="result">{result}</p>}
          <button
            onClick={flipCoin}
            disabled={isFlipping}
            className="flip-button"
          >
            {isFlipping ? "Flipping..." : "Flip Coin"}
          </button>
          <div className="stats">
            <div className="stat-item">
              <h3>Heads</h3>
              <p>{headsCount}</p>
              <div className="progress-bar">
                <div
                  className="progress heads-progress"
                  style={{ width: `${getHeadsPercentage()}%` }}
                ></div>
              </div>
            </div>
            <div className="stat-item">
              <h3>Tails</h3>
              <p>{tailsCount}</p>
              <div className="progress-bar">
                <div
                  className="progress tails-progress"
                  style={{ width: `${getTailsPercentage()}%` }}
                ></div>
              </div>
            </div>
          </div>
          <p className="total-flips">Total Flips: {totalFlips}</p>
        </section>
      </main>
    </div>
  );
};

export default Toss;
