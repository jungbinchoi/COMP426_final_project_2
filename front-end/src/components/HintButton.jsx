import { useState } from "react";

export default function HintButton() {
  const [showHint, setShowHint] = useState(false);
  const [hint, setHint] = useState("");

  const handleHint = async () => {
    let hintRes = await fetch("http://localhost:3000/hint");
    let hintJSON = await hintRes.json();
    console.log(hintJSON.hint);
    setHint(hintJSON.hint);
    setShowHint(true);
  };

  return (
    <div>
      {showHint ? (
        <div>{hint}</div>
      ) : (
        <button onClick={handleHint}>Hint!</button>
      )}
    </div>
  );
}
