import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile-pic.png)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}
    >
        <Navbar />
        <div className='container grid ig:cols-2 h-[calc(100vh-60px)]'></div>
        <div className='hidden ig:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
            <div>
                <p>I'm</p>
                <p>Sania</p>
                <p>Sheikh</p>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
