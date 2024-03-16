import React from 'react'
import AboutImg from '../assets/about.png'

function About() {
  const config  = {
    line1 : 'Motivated junior web developer looking for a role as full-stack web developer. I am a comprehensive skill set in both frontend and backend technologies. My passion for creating robust and scalable web applications is fueled by a commitment to staying at the forefront of technological advancements.',
    line2 : 'Front-end skills with React.js, Redux, Axios, tailwindcss, Bootstrap-css,Context-api and many more.',
    line3 : 'Back-end skills with Node.js, Express.js, Mondodb and Mongoose.'
  }
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg}/>
        </div>
        <div className=' md:w-1/2 flex justify-center  text-white'>
          <div className='flex flex-col justify-center'>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About me</h1>
          <p className='pb-5'>{config.line1}</p>
          <p className='pb-5'>{config.line2}</p>
          <p className='pb-5'>{config.line3}</p>
          </div>
        </div>
    </section>
  )
}

export default About