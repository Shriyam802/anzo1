import React from 'react'

const TiltText = (props) => {
  return (
  
<div id='tiltdiv' ref={props.abc} className='text-white ml-10 pt-20 font-[anzo2] font-bold '>
    <h1 className="text-[3.5vw] leading-[3vw]" >I AM <span className='text-black'>DARK MODE</span>&#8482;</h1>
    <h1 className='text-[8vw] leading-[8vw]'>DESIGNER</h1>
    <h1 className='text-[3.5vw] leading-[4vw]'>TO HIRE</h1>
</div>
  )
}

export default TiltText