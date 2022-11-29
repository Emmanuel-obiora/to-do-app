import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {HiBookmark} from 'react-icons/hi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
import {useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header'? 'active':''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><HiBookmark /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services'? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Navbar
