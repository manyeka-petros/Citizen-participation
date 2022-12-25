import React from 'react'
import HomeCard from './HomeCard'
import Video from './Assert/dance.mp4'
import './Home.css'

const Home = () => {
  return (
    <div className='hero'>
      <video autoPlay  loop muted id='vide'>
        <source src={Video} type='video/mp4'/>

      </video>
      <div className='overpl'></div>
      <div className='cit'>
        <h1>WELCOME TO UNIMA CITIZEN PARTICIPATION</h1>
        <h3>Join us for more activities</h3>
      </div>
    </div>
  )
}

export default Home
