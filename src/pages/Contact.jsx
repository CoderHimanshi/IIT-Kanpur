import React from 'react'
import '../pagecss/Contact.css'

const Choice2 = () => {
  return (
    <>
      <div className='Contact Us'>
        <h1>Contact Us</h1>
        <input type="text" name="name" placeholder="Your Name" ></input>
        <input type="email" name="email" placeholder="Your Email"></input>
        <input type="contact" name="contact number" placeholder="Contact Number"></input>
        <input type="message" name="Message" placeholder="Message"></input>
        <div className="button" >Send Query</div>
      </div>
    </>
  )
}

export default Choice2