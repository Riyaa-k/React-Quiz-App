import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/home.css";

const Home = () => {
  return (
    <div className='homepage'>
      <h1>Quiz App</h1>
      <NavLink to="/quiz">
        <button>Play</button>
      </NavLink>
      
    </div>
  )
}

export default Home
