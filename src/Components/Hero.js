import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineLinkedin , AiOutlineGithub } from "react-icons/ai";
import { CgMail } from "react-icons/cg";


function Hero() {
  const config = {
    subtitle:'Expertise in building professional web applications!',
    social : {
      linkedin:'https://linkedin.com/in/vijipriya-k',
      gmail:'https://gmail.com/vijipriya110/',
      github:'https://github.com/vijipriya110'
       }
  }
  return (
   <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2' flex  flex-col>
    <h1 className=' text-white text-6xl font-hero-font'>hi, <br/> I'm  Vijipriya <span className='text-black'>K</span>
    <p className='text-2xl'>{config.subtitle} </p>
    </h1>
    <div className='flex py-10'> 
        <a target='_blank' href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
        <a target='_blank' href={config.social.gmail} className='pr-5 hover:text-white'><CgMail  size={40}/></a>
        <a target='_blank' href={config.social.github} className='pr-5  hover:text-white'><AiOutlineGithub size={40}/></a>


    </div>
    </div>
    
    <img className=' md:w-1/3' src={HeroImg}/>
   </section>
  )
}

export default Hero