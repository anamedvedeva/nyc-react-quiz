import React, { useState, useContext, useEffect } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const [active, setActive] = useState('');
  const [error, setError] = useState(false);

  const nextQuestion = () => {

    console.log(active);

    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    if (active !== '') {
      setCurrQuestion(currQuestion + 1);
      console.log('answer was chosen');
      setError(false);
    } else {
      setCurrQuestion(currQuestion);
      console.log('No answer was chosen');
      console.log(active);
      setError(true);
    }

    setActive('');
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    console.log(active);

    if (active !== '') {
      console.log('answer was chosen');
      setError(false);
      setGameState('endScreen');
    } else {
      console.log('No answer was chosen');
      console.log(active);
      setError(true);
      setGameState('quiz');
    }
  }

  return (
    <div className='quiz'>
      <h1>{Questions[currQuestion].question}</h1>
      <div className='options'>
        <button className={`button ${active === "first" ? "activeButton" : ""}`} onClick={() => { setActive("first"); setOptionChosen('1') }}>{Questions[currQuestion].option1}</button>
        <button className={`button ${active === "Second" ? "activeButton" : ""}`} onClick={() => { setActive("Second"); setOptionChosen('2') }}>{Questions[currQuestion].option2}</button>
        <button className={`button ${active === "Third" ? "activeButton" : ""}`} onClick={() => { setActive("Third"); setOptionChosen('3') }}>{Questions[currQuestion].option3}</button>
      </div>

      {error ? <div className='error-msg'><p>Please select an answer.</p></div> : null}

      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} className="next">Get Your Score</button>
      ) : (<button onClick={nextQuestion} className="next">Next Question</button>)
    }
      
    </div>
  )
}

export default Quiz