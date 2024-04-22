import React from 'react'
import proImg1 from '../assets/ecommerce-websites.jpg'
import proImg2 from '../assets/food-ecommerce.jpg'
import proImg3 from '../assets/website-blog.jpg'

function Project() {
  const projects = [
    {
      projectImage: proImg1,
      description: 'These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.',
      link:'https://e-com-front-end.netlify.app/'
    },
    {
      projectImage: proImg2,
      description: 'As the lead developer for my inaugural full-stack project, My skills in both front-end and back-end technologies, I successfully implemented CRUD (Create, Read, Update, Delete) operations to user experience.',
      link:'https://bikerentalportal.netlify.app/'
    },
    {
      projectImage: proImg3,
      description: 'A form validation website that showcases my journey into the world of web development. Utilizing HTML, CSS, JavaScript and React, The result is a dynamic and responsive website',
      link:'https://webcode-first.netlify.app/'
    }
  ]
  return (
    <section id='project' className='flex flex-col py-20 px-5 justify-center bg-primary text-white'>
        <div className='w-full'>
           <div className='flex flex-col px-10 py-5'>
           <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>
            Projects
           </h1>
           <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
           </div>
        </div>
        <div className='w-full'>
           <div className='flex flex-col md:flex-row px-10 gap-5' >
           {projects.map((project)=>( 
           <div className='relative'>
           <img className='h-[200px] w-[500px]' src={project.projectImage}/>
           <div className='pro-des'>
            <p className='text-center px-5 py-5'>{project.description}</p>
            <div className='flex justify-center'>
            <a  className='btn' target='_blank' href={project.link}>view projects</a>
           </div>
           </div>
           
           </div>

))}
           
          

           </div>
        </div>

    </section>
  )
}

export default Project