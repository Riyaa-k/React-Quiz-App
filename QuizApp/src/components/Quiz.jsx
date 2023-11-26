import React, { Component } from 'react'
import "../styles/quiz.css"
import data from '../Resources/Resources'

export default class Quiz extends Component {
  constructor(props){
    super(props)
    this.state={
      currentQuestionIndex:0,
    }
  }

  handlePrevious=()=>{
    this.setState((prevState)=>({
      currentQuestionIndex:prevState.currentQuestionIndex-1,
    }))
  }

  handleNext=()=>{
    this.setState((prevState)=>({
      currentQuestionIndex:prevState.currentQuestionIndex+1,
    }))
  }

  handleQuit=()=>{
    confirm("Are you sure you want to quit ?");
    window.location = "/";
  }

  render() {
    const {currentQuestionIndex}=this.state;
    const currentQuestion=data[currentQuestionIndex];

    return (
      <div className='parentdiv'>
        <div className="game-container">

            <div className="question-container">
                <h3>Question</h3>
                <div className="question-number">
                    {currentQuestionIndex + 1} of {data.length}
                </div>
                <p>{currentQuestion.question}</p>
                
            </div>

            <div className="option-container">
                <div className="option-parent">
                    <div className="options">{currentQuestion.optionA}</div>
                    <div className="options">{currentQuestion.optionB}</div>
                </div>
                <div className="option-parent">
                    <div className="options">{currentQuestion.optionC}</div>
                    <div className="options">{currentQuestion.optionD}</div>
                </div>
            </div>

            <div className="button-container">
                <button className='Previous' onClick={this.handlePrevious} disabled={currentQuestionIndex ===0}>Previous</button>
                <button className='Next' onClick={this.handleNext } disabled={currentQuestionIndex === data.length-1}>Next</button>
                <button className='Quit' onClick={this.handleQuit}>Quit</button>
            </div>
        </div>
        
      </div>
    )
  }
}
