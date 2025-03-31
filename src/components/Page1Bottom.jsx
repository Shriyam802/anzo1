import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {
  useGSAP(function(){
    gsap.to("#banner1",{
      rotate : 360,
      duration : 2,
      repeat:-1,
      ease: "linear"
    })
  })

  useGSAP(function(){
    gsap.to("#banner2",{
      rotate : 360,
      duration : 2,
      repeat:-1,
      ease: "linear"
    })
  })
  
  return (
    <div className='absolute left-0 py-7 px-3 bottom-0 text-white w-full flex justify-between items-end '> 

    <div className='px-10 m-0'>
      <h1 className='text-4xl font-[anzo] text-bold'>BRAND DESIGN | WEBSITE DESIGN</h1>
      <h3 className='text-2xl font-[anzo] text-gray-400 '>BESPOKE FREELANCE</h3>
    </div>

    <div  className='mr-13 mb-8'>
      

    <img id='banner1' className='mb-5' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />    

    <img id='banner2' className=''  src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />

 </div> 

    </div>



 )
}

export default Page1Bottom