import React from 'react'
import {google,atlassian,dropbox,shopify,slack} from './index'
import './Brand.css'
const Brand = () => {
  return (
    <div className='Brands'>
        <div className="google">
            <img src={google} alt="google" />
        </div>
        <div className="attlasian">
            <img src={atlassian} alt="atlassian" />
        </div>
        <div className="shopify">
            <img src={shopify} alt="shopify" />
        </div>
        <div className="slack">
            <img src={slack} alt="slack" />
        </div>
        <div className="dropbox">
            <img src={dropbox} alt="dropbox" />
        </div>
    </div>
  )
}

export default Brand