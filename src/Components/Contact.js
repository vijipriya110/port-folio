import React from 'react'

function Contact() {
  const config = {
    email:'vijipriya110@gmail.com',
    phone:'+91 9876543219',
    link : 'https://drive.google.com/file/d/1gRCdZuQ55qQHhz9mnkL_WDmBr9L_N-8r/view?usp=drive_link'
  }

  return (
    <section id='contact' className='flex flex-col  bg-primary px-5 py-32 text-white'>
      
        <div className='flex flex-col items-center'>
         
          <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[130px] font-bold'>Contact</h1>
          <p className='pb-5'>Looking for a professional web developer to build your next website? Let's talk and contact me today! <a className='bg-secondary px-5 py-2  font-bold hover:border-2 border-white rounded ' href={config.link}>Download</a></p>
          <p><span className='font-bold'>Email :</span>{config.email}</p>
          <p><span className='font-bold'>Phone :</span>{config.phone}</p>
         
        </div>
    </section>
  )
}

export default Contact