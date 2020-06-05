import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from "./FlashCardList";
import "./app.css";
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])
  const [difficulties, setDifficulties] = useState([])

  const categoryEl = useRef()
  const difficultyEl = useRef()

  function handleSubmit(e) {

  }

  // https://opentdb.com/api_config.php
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=12")
      .then(res => {
        console.log(res.data)
        setFlashcards(res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer
          const options = [...questionItem.incorrect_answers, answer]

          return {
            id: `${index}-${Date.now()}`,
            question: questionItem.question,
            answer: questionItem.correct_answer,
            options: options.sort(() => Math.random() - .5),

          }
        }))
      })
  }, [])
  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>
          <select id="difficulty" ref={difficultyEl}>
            {difficulties.map(difficulty => {
              return <option value={difficulty.id} key={difficulty.id}>{difficulty.name}</option>
            })}

          </select>
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

// const SAMPLE_FLASHCARDS = [
//   {
//     id: 1,
//     question: "what is 2 + 2?",
//     answer: "4",
//     options: [
//       "2",
//       "3",
//       "4",
//       "5",
//     ]
//   },
//   {
//     id: 2,
//     question: "what is a dog?",
//     answer: "A mammal",
//     options: [
//       "An object",
//       "A fish",
//       "A mammal",
//       "A plant",
//     ]
//   },
//   {
//     id: 3,
//     question: "what shape is space?",
//     answer: "A universe with positive curvature",
//     options: [
//       "A universe with positive curvature",
//       "A flat universe",
//       "A universe with negative curvature",
//     ]
//   }
// ]

export default App;
