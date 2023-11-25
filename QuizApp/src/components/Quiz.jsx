import React, { Component } from 'react'
import "../styles/quiz.css"

export default class Quiz extends Component {
  render() {
    return (
      <div className='parentdiv'>
        <div className="game-container">

            <div className="question-container">
                <h3>Question</h3>
                <div className="question-number">
                    1 of 15
                </div>
                <p>Which is the only mammal that can jump?</p>
                
            </div>

            <div className="option-container">
                <div className="option-parent">
                    <div className="options">Dog</div>
                    <div className="options">Elephant</div>
                </div>
                <div className="option-parent">
                    <div className="options">Goat</div>
                    <div className="options">Lion</div>
                </div>
            </div>

            <div className="button-container">
                <button className='Previous'>Previous</button>
                <button className='Next'>Next</button>
                <button className='Quit'>Quit</button>
            </div>
        </div>
        
      </div>
    )
  }
}
