import React, { useState, useEffect } from 'react';
import FlashcardList from "./FlashCardList";
import "./app.css";
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  // https://opentdb.com/api_config.php
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(res => {
        console.log(res.data)
      })
  }, [])

  return (
    <>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
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
      "An object",
      "A fish",
      "A mammal",
      "A plant",
    ]
  },
  {
    id: 3,
    question: "what shape is space?",
    answer: "A universe with positive curvature",
    options: [
      "A universe with positive curvature",
      "A flat universe",
      "A universe with negative curvature",
    ]
  }
]

export default App;
