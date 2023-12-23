import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "../styles/result.css"



const Result = () => {
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [totalWrongAnswers, setTotalWrongAnswers] = useState(0);
  const [totalAttemptedQuestions, setTotalAttemptedQuestions] = useState(0);

  useEffect(() => {
    // Retrieve values from localStorage
    const correctAnswers = localStorage.getItem("totalCorrectAnswers");
    const wrongAnswers = localStorage.getItem("totalWrongAnswers");
    const attemptedQuestions = localStorage.getItem("totalAttemptedQuestions");

    // Set the retrieved values in state
    setTotalCorrectAnswers(correctAnswers || 0);
    setTotalWrongAnswers(wrongAnswers || 0);
    setTotalAttemptedQuestions(attemptedQuestions || 0);
  }, []);

return (
      <>
        <div className='result'>
        <h3>Result</h3>
        </div>

        <div className='score'>
            <div style={{textAlign:"center"}}>
                <p>You need more practice</p>
                < h2 style={{ color: "#0000FF" }}>Your Score is 20%</h2>
            </div>
            <div className="description-container">
                <div>
                <p>Total number of questions</p>
                <p>Total number of attempted questions</p>
                <p>Number of correct answers</p>
                <p>Number of wrong answers</p>
                </div>
                <div>
                <p>{totalCorrectAnswers}</p>
                <p>{totalAttemptedQuestions}</p>
                <p>{totalCorrectAnswers}</p>
                <p>{totalWrongAnswers}</p>
                </div>
            </div>
            <div className="result-buttons">
            <NavLink to="/quiz">
            <button className="play-again">Play Again</button>
            </NavLink>
           
           <NavLink to='/'>
           <button className="play-again">Back to Home</button>
           </NavLink>
           
            </div>
        
            
        </div>
        
        
      </>
    )
  }
  export default Result
