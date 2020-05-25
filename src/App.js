import React, { useState } from 'react';
import FlashcardList from "./FlashCardList";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)


  return (
    <h1>hello</h1>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "what is 2 + 2?",
    answer: "4",
    optons: [
      "2",
      "3",
      "4",
      "5",
    ]
  },
  {
    id: 2,
    question: "what is a dog?",
    answer: "an animal",
    optons: [
      "an object",
      "a human being",
      "an animal",
      "a plant",
    ]
  },
  {
    id: 3,
    question: "what's the shape of the sun?",
    answer: "circle",
    optons: [
      "rectangular",
      "circle",
      "triangle",
    ]
  }
]

export default App;
