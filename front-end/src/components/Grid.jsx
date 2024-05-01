import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((guess, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} guess={guess} />;
        }
        return <Row key={i} guess={guess} />;
      })}
    </div>
  );
}
