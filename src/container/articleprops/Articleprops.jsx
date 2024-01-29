import React from 'react'
import './articleprops.css'
const Articleprops = (props) => {
  return (
    <div className='articleprops_container'>
        <div className="container_image">
              <img src={props.imglocation} alt="none" />
            </div>

           <div className="contents">
                <div className="wrap">

                     <div className="date">
                         <p>{props.date}</p>
                    </div>

                  <div className="content">
                       <p>{props.content}</p>
                     </div>

                  </div>

          <div className="caption">
          <p>{props.caption}</p>
           </div>
          </div>
    </div>
  )
}

export default Articleprops