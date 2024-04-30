import { useState } from "react";

export function GameBoard() {
  const [answer, setAnswer] = useState("");
  return <div id="gameBoard"></div>;
}
