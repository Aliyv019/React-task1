import React from 'react'
import './educationprog.css'

export default function educationprog() {
  return (
    <div className='tehsilsection'>
        <div className='tehsilinner'>
            <div className='card_header'>
                <p>[</p>
                <h2>Təhsil Proqramları</h2>
                <p>]</p>
            </div>
            <div className='tehsilcards'>
                <div className='tehsilcard'>
                    <h3>Front-end Proqramlaşdırma</h3>
                    <span>HTML, CSS, Javascript və React.js ilə Front-end sahəsində axtarılan proqramçı ol.</span>
                    <button>Ətraflı</button>
                </div>
                <div className='tehsilcard'>
                    <h3>Full-stack Proqramlaşdırma</h3>
                    <span>HTML, CSS, JS ilə Front-end biliklərini öyrəndikdən sonra C# və ASP.NET Core ilə Full-stack proqramçı olacaqsan.</span>
                    <button>Ətraflı</button>
                </div>
                <div className='tehsilcard'>
                    <h3>İnteryer Dizayn</h3>
                    <span>Autocad, 3DMAX , Photoshop və Corona ilə bu peşəyə yiyələnmək bizimlə çox daha asandır.</span>
                    <button>Ətraflı</button>
                </div>
                <div className='tehsilcard'>
                    <h3>General English</h3>
                    <span>High Result Academy şirkəti olaraq biz sizə A1-B2 proqramını əhatə edən Beginner, Elementary, Pre-intermediate, Intermediate və Upper-intermediate səviyyələri üzrə Ümumi İngilis dili dərsləri təklif edirik.</span>
                    <button>Ətraflı</button>
                </div>
                <div className='tehsilcard'>
                    <h3>IELTS</h3>
                    <span>IELTS proqramımız peşəkar müəllimlərimiz tərəfindən imtahan proqramına uyğun 4 mövzu – oxuma, yazma, dinləmə və danışıq – üzrə keçirilir.</span>
                    <button>Ətraflı</button>
                </div>
            </div>
        </div>
    </div>
  )
}
