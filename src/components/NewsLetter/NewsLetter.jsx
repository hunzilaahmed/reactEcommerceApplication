import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe To Our Newletter And Stay Updated</p>
        <div>
            <input type="email" placeholder='Enter Your Email Id' />
            <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default NewsLetter