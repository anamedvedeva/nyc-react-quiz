import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import '../App.css';

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  }

  return (
    <div className='endscreen'>
      <h1>Congrats, you finished the quiz!</h1>
      <h2>You got {score} out of {Questions.length} right!</h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen