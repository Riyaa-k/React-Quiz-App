import React, { Component } from 'react'
import "../styles/result.css"

export default class Result extends Component {
  render() {
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
                <p>15</p>
                <p>9</p>
                <p>3</p>
                <p>6</p>
                </div>
            </div>
            <div className="result-buttons">
            <button className="play-again">Play Again</button>
            <button className="play-again">Back to Home</button>
            </div>
        
            
        </div>
        
        
      </>
    )
  }
}
