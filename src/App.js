import React, { useState } from 'react';
import FlashcardList from "./FlashCardList";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)


  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "what is 2 + 2?",
    answer: "4",
    options: [
      "2",
      "3",
      "4",
      "5",
    ]
  },
  {
    id: 2,
    question: "what is a dog?",
    answer: "A mammal",
    options: [
      "an object",
      "a human being",
      "an animal",
      "a plant",
    ]
  },
  {
    id: 3,
    question: "what shape is space?",
    answer: "Universe with positive curvature",
    options: [
      "rectangular",
      "circle",
      "triangle",
    ]
  }
]

export default App;
