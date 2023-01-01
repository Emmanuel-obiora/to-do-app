import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs' 

const Footer = () => {

  setInterval(() => {
    var preDate = new Date();
    var yearNow = preDate.getFullYear();

    document.getElementById('year').innerHTML = yearNow;
  },10);

  return (
    <footer>
      <a href="#header" className='footer_logo'>Miro</a>

      <div className="footer_socials">
        <a rel="noreferrer" href="https://m.facebook.com/emmanuel-obiora" target="_blank" ><FaFacebookF /></a>
        <a rel="noreferrer" href="https://instagram.com/geniusobi" target="_blank"><RiInstagramFill /></a>
        <a rel="noreferrer" href="https://twitter.com/Miroclesdgenius" target="_blank"><BsTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small> &copy; Panther <span id='year'>Current year</span> All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
