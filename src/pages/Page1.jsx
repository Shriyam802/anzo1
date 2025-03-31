import React, { useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page1 = function Page1() {
 

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal,setYVal] = useState(0)

    const Mousemoving = function (e) {
        setXVal((e.clientX-tiltRef.current.getBoundingClientRect().x-tiltRef.current.getBoundingClientRect().width/2)/30)
        setYVal(-(e.clientY-tiltRef.current.getBoundingClientRect().y-tiltRef.current.getBoundingClientRect().height/2)/10)
        
        // setXVal(e.clientX/100)

        // setYVal(e.clientY/100)
        // tiltRef.current.style.transform = `rotateX(${(yVal)}deg)    rotateY(${(xVal)}deg)`
    }

    useGSAP(function(){
        gsap.to(tiltRef.current , {
            transform : `rotateX(${(yVal)}deg)    rotateY(${(xVal)}deg)`,
            duration : 2,
            ease : 'power3.out'

           })
    },[xVal,yVal])

    return (
        <div onMouseOver={(e) => {
            Mousemoving(e)
        }}

            className="relative h-screen px-4 py-4 bg-white-500 ">
            <div id="page1-in" className=" relative h-full w-full bg-black rounded-[25px] bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_580,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]  shadow-xl shadow-gray-700">

                <img className="px-10 py-10" src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_72,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20WHITE_edited.png" alt="LOGO" />
                {/* <div id='tiltdiv' ref={tiltRef} className='text-white ml-10 pt-20 font-[anzo2] font-bold '>


                    <h1 className="text-[3.5vw] leading-[3vw]" >I AM <span className='text-black'>DARK MODE</span>&#8482;</h1>
                    <h1 className='text-[8vw] leading-[8vw]'>DESIGNER</h1>
                    <h1 className='text-[3.5vw] leading-[4vw]'>TO HIRE</h1>



                </div> */}



                <TiltText  abc={tiltRef} />
                <Page1Bottom />

            </div>


        </div>

    )
}

export default Page1;