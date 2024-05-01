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
      <table>
        <tbody>
          <tr>
            <td># of Guesses</td>
            <td>Frequency</td>
          </tr>
          {scores.map((score, i) => (
            <tr key={i} className="score-row">
              <td>{i + 1}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
