import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import "../Counterup/counterup.css"

export default function Counterup(){
  const [counterOn , setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
               <div className='counterPage'>
                    <h1>
                    {counterOn && <CountUp start={0} end={90} duration={4} delay={0}/>}
                    </h1>
                    <p className='fontLetter1'>PROJECTS</p>
                    <h1>
                    {counterOn && <CountUp start={0} end={10} duration={1} delay={0}/>}
                    </h1>
                    <p className='fontLetter2'>PEOPLE</p>
                    <h1>
                    {counterOn && <CountUp start={0} end={12} duration={2} delay={0}/>}
                    </h1>
                    <p className='fontLetter3'>YEARS</p>
                    <h1>
                    {counterOn && <CountUp start={0} end={14} duration={3} delay={0}/>}
                    </h1>
                    <p className='fontLetter4'>AREAS</p>
               </div>
    </ScrollTrigger>
    
  )
}
