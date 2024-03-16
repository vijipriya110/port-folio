import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {

    const [ toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className='sticky top-0 flex justify-between px-5 py-5 bg-black'>
        <a className="font-bold text-black" href='#'>viji</a>
        <nav className='hidden md:block'>
          <ul className='flex text-white'>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#about'>Skills</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
        {toggleMenu && <nav className='block md:hidden '>
          <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
  )
}

export default Header