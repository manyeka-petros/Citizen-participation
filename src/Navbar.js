import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
   <div className='nav'>

    <div className='nav1'>
    <h3>CITIZEN PARTICIPATION</h3>
    </div>
    <div className='nav2'>
        <a href=''>HOME</a>
        <a href=''>NDAKATULO</a>
        <a href='tradit'>TRADITONAL DANCE</a>
        <a href=''>YOUTH ACTIVITEI</a>
        <a href=''>YOUTH COMPTI</a>
        <a href=''>ABOUT</a>
    </div>
   </div>
  )
}

export default Navbar
