import React from 'react';
import Flashcard from "./Flashcard";

export default function FlashCardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} answer={flashcard.answer} />
      })}
    </div>
  )
}
