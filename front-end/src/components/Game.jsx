import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import DoneModal from "./DoneModal";
import HintButton from "./HintButton";
import Score from "./Score";

export default function Game({ answer }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(answer);

  const [showDoneModal, setShowDoneModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setShowDoneModal(true);
      }, 1500);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowDoneModal(true);
      }, 1500);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      <button id="reset-button" onClick={() => window.location.reload()}>
        Restart
      </button>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <HintButton />
      <Keypad usedKeys={usedKeys} />
      <Score isCorrect={isCorrect} turn={turn} />
      {showDoneModal && (
        <DoneModal isCorrect={isCorrect} turn={turn} answer={answer} />
      )}
    </div>
  );
}
