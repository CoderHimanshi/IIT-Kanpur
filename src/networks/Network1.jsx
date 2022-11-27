import React, { useState } from 'react'
import '../networks/Network1.css'

const Network1 = () => {

    const [num, setNum] = useState(0);
    const increment = () => {
        setNum(num + 1);
    }
    const reset = () => {
        setNum(0);
    }

    return (
        <>
            <div className='service'>
                <div className='head'>
                    <h1>Real Time Tracking Details</h1>
                </div>

                <div className='levels'>
                    <div className='heart'>
                        <iframe width="500" height="300" title='heart' src="https://thingspeak.com/channels/1813409/charts/2?bgcolor=%23d6f7f9&color=%23000000&days=1&dynamic=true&results=60&title=HEART+RATE&type=step&yaxismax=150&yaxismin=0"></iframe>
                    </div>
                    <div className='oxygen'>
                        <iframe width="500" height="300" title='oxygen' src="https://thingspeak.com/channels/1813409/charts/3?bgcolor=%23d6f7f9&color=%23000000&days=1&dynamic=true&results=30&title=SPO2&type=line&yaxismax=150&yaxismin=0"></iframe>
                    </div>
                </div>
                <div className="urine">
                    <iframe width="500" height="300" title='urine' src="https://thingspeak.com/channels/1813409/charts/4?bgcolor=%23d6f7f9&color=%23000000&days=1&dynamic=true&results=20&title=Urine+Weight&type=line&yaxismax=500&yaxismin=0"></iframe>
                    <div className='urbagstatus' >
                        <h2>Bag Status</h2>
                        <h1>{num}</h1>
                        <button className="btn" onClick={increment} >ADD</button>
                        <button className="btn2" onClick={reset} >RESET</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Network1