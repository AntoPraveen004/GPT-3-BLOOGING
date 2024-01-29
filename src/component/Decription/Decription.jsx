import React from 'react'
import './Decription.css'
 const Decription = (props) => {
  return (
    <div className='props_container'>
      
      <div className="props_container-align">
       <div className="props_container-tittle">
          <div className="bardesign"></div>
            <h3>{props.tittle}</h3>
          </div>
       </div>


        <div className="propps_container-description">
          <h5>{props.content}</h5>
        </div>
     </div>
  )
}
export default Decription