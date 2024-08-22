import React from 'react'
import './slider.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function slider() {
  return (
    <div className='Slider'>
            <div className='Sliderinner'>
            <button><FontAwesomeIcon icon={faChevronLeft}/></button>
            <button><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
    </div>
  )
}
