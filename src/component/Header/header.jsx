import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram,faLinkedinIn,faFacebookF,faYoutube,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './header.css'


function header() {
  return (
    <div className='header_inner'>
    <p>Nərimanov rayonu, Əliyar Əliyev 61 (Baku Modern School ilə üzbəüz)</p>
      <div className='header_icons'>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://whatsapp.com"><FontAwesomeIcon icon={faWhatsapp} /></a>
      </div>
    </div>
  )
}

export default header