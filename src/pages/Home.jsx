import React from 'react'
import img2 from "../image/content.png"
import img3 from "../image/logo1.png"
import '../pagecss/Home.css'

const Home = () => {
  return (
    <>
      <header>
        <div className='mainheader'>
          <div class="logo">
            <img src={img3} alt="img" />
          </div>
          <div className='help'>
            <button className="btn">Helpline</button>
          </div>
        </div>
        
        <main>
          <section class="left-sec">
            <h2> We Are Here For Your Care</h2>
            <h1>  We The Best Doctors</h1>
            <p>We are here for your care 24/7. Any help just call us.</p>
            <h3>  IT Support</h3>
          </section>

          <section class="right-sec">
            <figure>
              <img src={img2} alt="error" />
            </figure>
          </section>
        </main>
      </header>
    </>
  )
}

export default Home