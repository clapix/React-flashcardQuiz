import React, { useState, useRef } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  const [correct, setCorrect] = useState(0)

  const frontEl = useRef()
  const backEl = useRef()
  const optEl = useRef()

  function handleChosen(e) {
    console.log(e)
    if (flashcard.option === flashcard.answer) {
      console.log(flashcard.option)
    }
  }

  return (
    <>
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front" ref={frontEl}>
          {flashcard.question}
          <div className="flashcard-options">
            {flashcard.options.map(option => {
              return <div className="flashcard-option" key={option} ref={optEl} onClick={handleChosen}
              >{option} </div>
            })}
          </div>
        </div>

        <div className="back" ref={backEl}>
          <div className="answer-container">
            {flashcard.answer}
            <div
              className={`correct ${correct ? "" : "invisible"}`}
            >
              Correct!
            </div>
          </div>
        </div>
      </div>
    </>

  )
}



