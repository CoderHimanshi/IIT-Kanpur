import React from 'react'
import img4 from "../image/about.png"
import '../pagecss/About.css'
const Choice1 = () => {
  return (
    <>
    <div className="aboutus">
      <div className='about'>
        <h1>ABOUT MEDTECH HEALTHCARE</h1>
        <p>MEDTECH HEALTHCARE HAVE ALWAYS STRIVED FOR EXCELLENCE IN THE MEDICAL INDUSTRY. WE BUILD EXELLENT AND EFFICIENT TECHNOLOGIES FOR THE BETTER OF THE HEALTH INFRACTURE AND MEDICAL INDUSTY AS A WHOLE.</p>
        <p>HERE WE HAVE A DEVICE WHICH WILL REDUCE THE DEPENDENCY ON THE WIRING PRESENT IN THE ICU AND REPLACE IT WITH NEW GEN IOT DEVICES.</p>
        <p> THIS IS A DASHBOARD WHERE A DOCTOR CAN MONITOR THE HEALTH STATUS OF THE PATIENT AND BEGIN HIS DIAGNOSING ACCORDINGLY.</p>
        <p> WE HAVE ACCUMULATED DIFFRENT ASPECTS OF THE PATIENT'S HEALTH AND CHOOSEN THE HEALTH DEVICES ACCORDINGLY.</p>

        <section class="first">
          <figure>
            <img src={img4} alt="error" />
          </figure>
        </section>
      </div>
      </div>
    </>
  )
}

export default Choice1