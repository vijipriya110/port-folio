import React from 'react'
import resImg from '../assets/resume.jpg'

function Resume() {
  const config = {
    link : 'https://drive.google.com/file/d/1gRCdZuQ55qQHhz9mnkL_WDmBr9L_N-8r/view?usp=drive_link'
  }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 '>
        <div className='md:w-1/2 py-5 flex flex-justify-center md:justify-end'>
            <img className='w-[300px]' src={resImg} alt='project'/>
        </div>
        <div className=' md:w-1/2 flex justify-center  text-white'>
          <div className='flex flex-col justify-center'>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[130px] font-bold'>Resume</h1>
          <p className='pb-5 px-5'>CV to download <a className='btn' href={config.link} download>Download</a></p>
          
          </div>
        </div>
    </section>
  )
}

export default Resume