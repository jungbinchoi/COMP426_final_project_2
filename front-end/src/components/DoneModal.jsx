export default function DoneModal({ isCorrect, turn, answer }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{answer}</p>
          <p>You found the answer in {turn} guesses!</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You tried...</h1>
          <p className="solution">{answer}</p>
          <p>Maybe next time!</p>
        </div>
      )}
    </div>
  );
}
