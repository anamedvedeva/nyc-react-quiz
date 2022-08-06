import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const [active, setActive] = useState('');

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setActive('');
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setGameState('endScreen');

  }

  return (
    <div className='quiz'>
      <h1>{Questions[currQuestion].question}</h1>
      <div className='options'>
        <button className={`button ${active === "first" ? "activeButton" : ""}`} onClick={() => { setActive("first"); setOptionChosen('1') }}>{Questions[currQuestion].option1}</button>
        <button className={`button ${active === "Second" ? "activeButton" : ""}`} onClick={() => { setActive("Second"); setOptionChosen('2') }}>{Questions[currQuestion].option2}</button>
        <button className={`button ${active === "Third" ? "activeButton" : ""}`} onClick={() => { setActive("Third"); setOptionChosen('3') }}>{Questions[currQuestion].option3}</button>
      </div>

      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} className="next">Get Your Score</button>
      ) : (<button onClick={nextQuestion} className="next">Next Question</button>)
    }
      
    </div>
  )
}

export default Quiz