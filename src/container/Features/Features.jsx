import React from 'react'
import './Features.css'
import { Decription } from '../../component'
const Features = () => {
  return (
  <div className="Feature_container">
    <div className="Feature_container-heading">
      <div className="Feature_container_heading-tittle">
        <h1>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
      </div>
      <div className="Feature_Container_heading-subheading">
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
    <div className="feature_container-content">
      <Decription tittle={"Improving end distrusts instantly "} content={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."}/>
      <Decription tittle={'Become the tended active'} content={"Become the tended active"}/>
       <Decription tittle={"Message or am nothing  "} content={"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.  "}/>
      <Decription tittle={" Really boy law county "} content={"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."}/>
    </div>
   </div>
  )
}
export default Features