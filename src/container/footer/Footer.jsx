import React from 'react'
import './footer.css'
import gptlogo from '../../assets/logo.svg'
const footer = () => {
  return (
    <div className='footer_container'>
            <div className="step_future">
                    <h1>Do you want to step in to the future before others</h1>
                  <div className="step_future-button">
                  <button>Request Early Access</button>
                  </div>
            </div>
    <hr />
            <div className="finalcontent">
                <div className="gpt_imagediv">
                    <img src={gptlogo} alt="gptlogo" />
                    <p>Creater Antonypraveen.E btech IT, All Rights Reserved</p>
                </div>

                <div className="listtags">
                    <div className="links">
                        <ul>
                            <li><h2>Links</h2></li>
                            <li>Overons</li>
                            <li>Social Media</li>
                            <li>Contact</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="Company links">
                        <ul>
                            <li><h2>Company</h2></li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>

                        </ul>
                    </div>

                    <div className="Get_in_touch  links" >
                        <ul>
                            <li><h2>Get in touch</h2></li>
                            <li>Antonypraveen.E
                                btech IT
                            </li>
                            <li>9080819206</li>
                            <li>antonypraveen004@gmail.com</li>
    
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© 2024 GPT-3. All rights reserved.</p>
            </div>
    </div>
  )
}

export default footer