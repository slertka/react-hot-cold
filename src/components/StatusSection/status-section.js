import React from "react";

import GuessList from "../GuessList/guess-list";
import GuessCount from "../GameCount/guess-count";
import AuralStatus from "../AuralStatus/aural-status";

export default function StatusSection(props) {
  const { guesses, auralStatus } = props;
  const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}
