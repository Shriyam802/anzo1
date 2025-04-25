import React from 'react';

import videoSrc from '../assets/shr.mp4';

function Page4() {
  return (
    <div className='h-screen p-3 mt-5 bg-white overflow-hidden '>
    <div className='h-full w-full text-white  bg-black relative '>
           <video className=' ' autoPlay muted loop >
              <source src={videoSrc} type="video/mp4" />
           </video>
        <div className=' absolute inset-4  border-13 border-white rounded-[35px] '>
             <h1 className='text-center text-[18vw] text-white-900 opacity-75  font-[anzo]'>THE</h1>
                    <h1 className='text-center text-[20vw] text-white font-[anzo] opacity-75 leading-2'>FOCUS</h1>

        </div>
      
        </div>
    </div>
        
        
         

    

  )
}

export default Page4;
