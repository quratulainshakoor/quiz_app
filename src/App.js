import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },

    {
      text: " Which one is the smallest ocean in the World?",
      options: [
        { id: 0, text: "Indian", isCorrect: false },
        { id: 1, text: "Arctic", isCorrect: true },
        { id: 2, text: "Atlantic", isCorrect: false },
        { id: 3, text: "Pacific", isCorrect: false },
      ],
    },

    {
      text: " Which country gifted the ‘Statue of Liberty’ to USA in 1886?",
      options: [
        { id: 0, text: "Dubai", isCorrect: false },
        { id: 2, text: "England", isCorrect: false },
        { id: 3, text: "Singapore", isCorrect: false },
        { id: 1, text: "France", isCorrect: true },
      ],
    },

    {
      text: " Total number of oceans in the World is",
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "11", isCorrect: false },
        { id: 1, text: "5", isCorrect: true },
      ],
    },

    
    {
      text: " The world’s longest straight road without any corners is located in",
      options: [
        { id: 0, text: "USA", isCorrect: false },
        { id: 1, text: " Saudi Arabia", isCorrect: true },
        { id: 2, text: "Australia", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
      ],
    },


    {
      text: " In which year Hong Kong became a part of China after British Rule?",
      options: [
        { id: 0, text: "1982", isCorrect: false },
        { id: 1, text: " 1997", isCorrect: true },
        { id: 2, text: "1995", isCorrect: false },
        { id: 3, text: "1989", isCorrect: false },
      ],
    },
  ];

  

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1 className="header">React js Quiz App</h1>

      <h2 className="header">Score: {score}</h2>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
  
  // <div className="App">
  //   <h1>React js Quiz App</h1>
  //   <h2>Current Score : {score}</h2>

  //   {
  //     showFinalResult ?
  //     <div className="final_results">
  //     <h1>Final Results</h1>
  //     <h2>1 out of 5 correct - (20%)</h2>
  //     <button>Restart game</button>
  //   </div> 
  //     :

      
  //   <div className="question-card">
  //     <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
  //   <h3 className="question-text">{questions[currentQuestion].text}</h3>

  //   <ul>
  //   {questions[currentQuestion].options.map((option) => {
  //           return (
  //             <li
  //               key={option.id}
  //               onClick={() => optionClicked(option.isCorrect)}
  //             >
  //               {option.text}
  //             </li>
  //           );
  //         })}
  //   </ul>
  // </div>
  //   }


    
  // </div>