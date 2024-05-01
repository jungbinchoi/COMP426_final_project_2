import { useEffect, useState } from "react";
import Game from "./components/Game";

function App() {
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/word")
      .then((result) => result.json())
      .then((json) => {
        setAnswer(json.word);
      });
  }, [setAnswer]);

  return (
    <>
      <div id="main">
        <h1>Wordle</h1>
        {answer && <Game answer={answer} />}
      </div>
    </>
  );
}

export default App;
