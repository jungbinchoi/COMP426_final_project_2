export default function DoneModal({ isCorrect, turn, answer }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{answer}</p>
          <p>You found the answer in {turn} guess(es)!</p>
          <button id="reset-button" onClick={() => window.location.reload()}>
            Restart
          </button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You tried...</h1>
          <p className="solution">{answer}</p>
          <p>Maybe next time!</p>
          <button id="reset-button" onClick={() => window.location.reload()}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
