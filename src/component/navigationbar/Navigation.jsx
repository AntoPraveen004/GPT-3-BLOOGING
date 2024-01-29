import React from 'react'
import { useState } from 'react'
import './navigation.css'
import { FaAlignRight } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.svg'
const Navigation = () => {
  const[Toggle,setToggle]=useState(false);
  const Links=()=>(
        <>
          <p><a href='#whatgpt3'>Home </a></p>
          <p><a href='#what is gpt'>what is gpt-3 </a></p>
          <p><a href='#Open AI'>Open AI </a></p>
          <p><a href='#case Studies'>case Studies </a></p>
          <p><a href='#library'>libary</a></p>
          </>
  )
  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="logo">
          <img src={logo} alt='error'/>
        </div>
        <div className="navbar-links-anchor">
          <Links />
        </div>
      </div>
      <div className='signIn'> 
        <div className="signInbutton">
        <p>Sign in</p>
        <button className='buttons' type='button'> Sign up</button>
        </div>
        <div className='handburger'>
          {Toggle ?
          <FaTimes color="#fff" size={27} onClick={()=>setToggle(false)}/>
          :< FaAlignRight color="#fff" size={27} onClick={()=>setToggle(true)}/>
         }
          {Toggle && (
          <div className='mobile_navbar scale-up-center'>
            <div className="mobile_navbar-links">
            <Links/>
              <div className="mobile_navbar-links-signin">
            <p>Sign in</p>
          <button className='buttons' type='button'> Sign up</button>
            </div>
          </div>
        </div>
        )}
      </div>
      </div>
    </div>
  )
}
export default Navigation