import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className='menu'>
      <h1>Test your knowledge of the city so nice they named it twice by taking this short three question quiz.<br></br><br></br>Good luck!</h1>
      <button onClick={() => setGameState("quiz")}>Let's Start</button></div>
  )
}

export default MainMenu
