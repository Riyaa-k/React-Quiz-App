import React, { Component, useState } from 'react'
import "../styles/quiz.css"
import data from '../Resources/Resources';
import { Navigate, useNavigate } from 'react-router-dom';

const Quiz=()=> {
  const navigate=useNavigate();
  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
  const [correctAnswer,setCorrectAnswer]=useState(0);
  const [wrongAnswer,setWrongAnswer]=useState(0);
  const [attemptedQuestion,setAttemptedQuestion]=useState(0);

  const handlePreviousClick=()=>{
    setCurrentQuestionIndex((prevState)=> prevState -1)

  }

  const handleNextClick=()=>{
    setCurrentQuestionIndex((prevState)=> prevState +1)

  }

  const handleQuit=()=>{
    alert("You have quit the quiz!");
    navigate("/result");
  }

  const handleFinish=()=>{
    localStorage.setItem("totalCorrectAnswers",correctAnswer);
    localStorage.setItem("totalWrongAnswers",wrongAnswer);
    localStorage.setItem("totalAttemptedQuestions",attemptedQuestion);
    navigate("/result");
  }


  const handleOptionClick=(selectedOption)=>{
      const correctAnswer=data[currentQuestionIndex].answer;
      if(selectedOption=== correctAnswer){
        setCorrectAnswer((prevCorrectAnswers)=>prevCorrectAnswers+1);
        setAttemptedQuestion((prevAttemptedQuestion)=>prevAttemptedQuestion+1);
        setCurrentQuestionIndex((prev)=>prev+1);
        alert("Correct Answer");
      }else{
        // setCurrentQuestionIndex((prev)=>prev+1);
        setWrongAnswer((prevWrongAnswer)=>prevWrongAnswer+1);
        setAttemptedQuestion((prevAttemptedQuestion)=>prevAttemptedQuestion+1);
        setCurrentQuestionIndex((prev)=>prev+1);
        alert("Wrong answer");
      }

  }

 
  

    return (
      <div className='parentdiv'>
        <div className="game-container">

            <div className="question-container">
                <h3>Question</h3>
                <div className="question-number">
                    {currentQuestionIndex + 1} of {data.length}
                </div>
                <p>{data[currentQuestionIndex].question}</p>
                
            </div>

            <div className="option-container">
                <div className="option-parent">
                    <div className="options" onClick={()=>handleOptionClick(data[currentQuestionIndex].optionA)}>
                      {data[currentQuestionIndex].optionA}</div>

                    <div className="options"  onClick={()=>handleOptionClick(data[currentQuestionIndex].optionB)}>
                      {data[currentQuestionIndex].optionB}</div>

                </div>

                <div className="option-parent">
                    <div className="options"  onClick={()=>handleOptionClick(data[currentQuestionIndex].optionC)}>
                      {data[currentQuestionIndex].optionC}</div>

                    <div className="options"  onClick={()=>handleOptionClick(data[currentQuestionIndex].optionD)}>
                      {data[currentQuestionIndex].optionD}</div>

                </div>
            </div>

            <div className="button-container">
              
                <button className='Previous' onClick={handlePreviousClick} disabled={currentQuestionIndex ===0}>Previous</button>

                <button className='Next' onClick={handleNextClick} disabled={currentQuestionIndex === data.length-1}>Next</button>

                <button className='Quit' onClick={handleQuit}>Quit</button>

                <button className='finish' onClick={handleFinish}>Finish</button>
            </div>
        </div>
        
      </div>
    )
  }

export default Quiz;