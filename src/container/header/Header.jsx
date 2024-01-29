import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'
import '../../index.css'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header_container">
      <div className='header-tag'>
        <h1>Lets Build something amazing with the GPT-3 OPEN-AI</h1>
      </div>
      <div className="header-tag-para">
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </div>
      <div className="serach">
        <input type='email' id='hovers'  placeholder='Enter the Email' />
        <button className='buttons'> Get Started</button> 
      </div>
      <div className="people">
        <img src={people} alt="people" />
        <p>1,600 People request access to visit in last 24 hours </p>
      </div>
      </div>
      <div className="gpt_img">
        <img src={ai} alt="AiLogo" />
      </div>
    </div>
  )
}

export default Header