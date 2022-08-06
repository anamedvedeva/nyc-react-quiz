import './App.css';
import React, {useState, useContext, useEffect} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Contexts';
import WebFont from 'webfontloader';


function App() {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);

  useEffect(() => {
  WebFont.load({
    google: {
      families: ['Montserrat']
    }
  });
 }, []);
  return (
    
    <div className="app">
      <h1>NYC Quiz</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {/* States Needed: Main menu of quiz, playing the quiz, quiz results*/}
      {gameState === 'menu' && <MainMenu />}
      {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
        </QuizContext.Provider>
    </div>
  );
}

export default App;
