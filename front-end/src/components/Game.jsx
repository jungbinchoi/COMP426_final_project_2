import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import DoneModal from "./DoneModal";

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
      <div>Current Solution: {answer}</div>
      <div>Current Guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showDoneModal && (
        <DoneModal isCorrect={isCorrect} turn={turn} answer={answer} />
      )}
    </div>
  );
}
