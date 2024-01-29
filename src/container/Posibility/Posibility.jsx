import React from 'react'
import './Posibility.css'
import posibility from '../../assets/possibility.png'
 const Posibility = () => {
  return (
    <div className='posibility_container'>
        <div className="posibility_image_container">
          <img src={posibility} alt="posibility" />
        </div>
        <div className="posiblity_description_container">
            <div className="earlyaccess">
              <p>Request Early Access to Get Started</p>
            </div>
            <div className="posibility">
                <h2>The possibilities are beyond your imagination</h2>
            </div>
            <div className="posibility_description">
                <p>Yet bed any for travelling assistance indulgence unpleasing.
                   Not thoughts all exercise blessing. 
                   Indulgence way everything joy alteration boisterous the attachment.
                    Party we years to order allow asked of.
                  </p>
            </div>
            <div className="learlyaccess">
                <p>Request Early Access to Get Started</p>
            </div>
        </div>
    </div>
  )
}

export default  Posibility