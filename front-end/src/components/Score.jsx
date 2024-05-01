import { useEffect, useState } from "react";

export default function Score({ isCorrect, turn }) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:3000/score");
      let resJSON = await res.json();
      setScores(resJSON.guesses);
    };

    getData();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      if (isCorrect) {
        let res = await fetch("http://localhost:3000/score", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ guess: turn }),
        });

        let resJSON = await res.json();
        setScores(resJSON.guesses);
      }
    };

    if (isCorrect) {
      updateData();
    }
  }, [isCorrect]);

  return (
    <div id="scoreboard">
      {scores.map((score, i) => (
        <div key={i} className="score-row">
          <p>{i + 1}</p>
          <p>{score}</p>
        </div>
      ))}
    </div>
  );
}
