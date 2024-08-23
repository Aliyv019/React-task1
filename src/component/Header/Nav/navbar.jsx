import React from 'react'
import { Link } from 'react-router-dom';
import Hralogo from '../../../assets/img//logo/hra_main_logo.png'
import './navbar.css'

export default function navbar() {
  return (
    <div className='nav_inner'>
        <Link><img src={Hralogo} alt="" /></Link>
        <ul>
            <li><Link>Akademiya</Link></li>
            <li><Link>Tədris proqramları</Link></li>
            <li><Link>Əlaqə</Link></li>
            <li className='contact'><Link>Müraciət et</Link></li>
        </ul>
    </div>
  )
}
