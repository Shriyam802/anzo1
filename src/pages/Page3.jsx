import React from 'react'

function Page3() {
  return (
    <div className='h-screen p-3 '>


        <div className='h-full w-full text-white bg-black rounded-[30px] overflow-hidden relative'>
        <h1 className='text-[35vw] uppercase font-[anzo]  absolute  left-10  -bottom-20'>about</h1>
    
         <video className='h-full w-full object-cover '  muted loop autoPlay='true'  src='src/assets/file.mp4' ></video>

     </div>


        
    
    </div>
  )
}

export default Page3