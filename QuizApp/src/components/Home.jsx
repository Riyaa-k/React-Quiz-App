
import React, { Component } from 'react'
import Quiz from './Quiz';
import "../styles/home.css"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            isQuizstarted:false,
        }
    }

    handlePlay=()=>{
        this.setState({isQuizstarted:true})
    }

  render() {
    return (
      <div className='homepage'>
        <h1>Quiz App</h1>
        {
            this.state.isQuizstarted ?
            (<Quiz />) :
            (<button onClick={this.handlePlay}>Play</button>)
        }
        
      </div>
    )
  }
}
