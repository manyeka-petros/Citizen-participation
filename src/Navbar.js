import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaFacebook, FaInstagram, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [clic,setClic] = useState('')
  const  handleCli  = ()=> setClic(!clic)
  return (
   <div className='nav'>

    <div className='nav1'>
    <h3>CITIZEN PARTICIPATION</h3>
    </div>
    <div className='nav2-menu'>
        <a href='/'>HOME</a>
        <a href=''>POEMS</a>
        <a href='tradit'>TRA DANCES</a>
        <a href=''>YOUTH-ACTIVITEI</a>
        <a href=''>COMPTI</a>
        <a href=''>ABOUT</a>
    </div>
    <div className='icons' onClick={handleCli}>
      {!clic ?(<FaBars/>) : (<FaTimes/>)}
         
    </div>

    <div className={clic ?'mobile-menu active':'mobile-menu'}>
    <div className='mobile-nav'>
        <a href='/'>HOME</a>
        <a href=''>POEMS</a>
        <a href='tradit'>TRA DANCES</a>
        <a href=''>YOUTH-ACTIVITEI</a>
        <a href=''>COMPTI</a>
        <a href=''>ABOUT</a> 
        <div className='mobile-icons-button'>
         <div className='mobile-button'>
        <button className='btn btn-primary'>Search</button>
        <br/>
        <button className='btn btn-primary'>Account</button>
       </div>
       <div className='socio-icons'>
      <FaFacebook/>
      <FaWhatsapp/>
      <FaTwitter/>
      <FaInstagram/>

    </div>
   </div>
    </div>
    </div>
   
   </div>
  )
}

export default Navbar
