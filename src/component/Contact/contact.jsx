import React from 'react'
import './contact.css'

export default function contact() {
  return (
    <section className='contact_us'>
        <div className='contact_inner'>
            <div className='contact_text'>
                <h2>Sualın var? <br />Gəl görüşək</h2>
                <p>Başlamaq üçün heç vaxt gec deyil. Bizimlə görüş təyin et və tədris proqramı ilə yaxından tanış ol</p>
            </div>
            <form className='contact_form'>
                <div className='contact_input'>
                    <input type="text" placeholder='Ad' required />
                    <input type="text" placeholder='Soyad' required />
                    <input type="text" placeholder='Nömrə' required />
                </div>
                <select>
                    <option value="front_end">Front-end proqramlaşdırma</option>
                    <option value="full_stack">Full-stack proqramlaşdırma</option>
                    <option value="interior_design">İnteryer dizayn</option>
                    <option value="general_english">General English</option>
                    <option value="ielts">IELTS</option>
                </select>
                <button>Müraciət et</button>
            </form>
        </div>
    </section>
  )
}
