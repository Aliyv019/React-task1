import React from 'react'
import './ouradvantages.css'
import image1 from '../../assets/img/OurAdvantagesimg/advantage1.jpg'
import image2 from '../../assets/img/OurAdvantagesimg/advantage2.jpg'
import image3 from '../../assets/img/OurAdvantagesimg/advantage3.jpg'
import image4 from '../../assets/img/OurAdvantagesimg/advantage4.jpg'
import image5 from '../../assets/img/OurAdvantagesimg/advantage5.jpg'


export default function ouradvantages() {
  return (
    <div className='advantagesection'>
        <div className='advantageinner'>
            <div className='card_header'>
                <p>[</p>
                <h2>Bizim Üstünlüklərimiz</h2>
                <p>]</p>
            </div>
            <div className='advantagecards'>
                <div className='advantagecard'>
                    <img src={image1} alt="" />
                    <div className='advantagecardtext'>
                    <h3>Modul əsaslı tədris</h3>
                    <span>Modul əsaslı tədris metodikası sayəsində tələbələr tədrisdən maksimum şəkildə faydalanmaqdadır. Hər modulun sonunda tələbələr final layihə təqdim edir və bu sayədə hansı modulu nə səviyyədə qavradıqlarını öyrənməklə yanaşı, təqdim elədikləri layihələr sayəsində tələbələrin portfolioları da formalaşır.</span>
                    </div>
                </div>
                <div className='advantagecard'>
                    <img src={image2} alt="" />
                    <div className='advantagecardtext'>
                    <h3>Mentor dəstəyi</h3>
                    <span>Tələbələrin həm tədris müddətində həm də tədrisdən sonra ən yaxın köməkçiləri mentorlarımızdır. Onlar tələbələrin bütün suallarına və problemlərinə cavab verərək qısa zamanda tədrisi qavramalarına kömək olurlar.</span>
                    </div>
                </div>
                <div className='advantagecard'>
                    <img src={image4} alt="" />
                    <div className='advantagecardtext'>
                    <h3>Video qeydiyyat</h3>
                    <span>Dərslərimiz video qeydiyyata alınaraq tələbələr ilə paylaşılır. Həmin paylaşılan dərslər həm tədris müddətində həm də tədrisdən sonra belə tələbələrdə qalır. Onlar istədikləri zaman həmin videolara baxmaqla öz biliklərini yeniləyə bilər, dərsdə tam anlamadığı mövzuların üzərindən keçə bilərlər.</span>
                    </div>
                </div>
                <div className='advantagecard'>
                    <img src={image3} alt="" />
                    <div className='advantagecardtext'>
                    <h3>Zəmanətli təhsil</h3>
                    <span>Akademiyamız tədris müddətində tədrisi tam qavramayan tələbələr üçün yenidən ödənişsiz olaraq tədrisdə iştirak etmə imkanı yaradır. Bu isə özlüyündə bizim tədrisimizə verdiyimiz zəmanətin bir göstəricisidir.</span>
                    </div>
                </div>
                <div className='advantagecard'>
                    <img src={image5} alt="" />
                    <div className='advantagecardtext'>
                    <h3>Təcrübə proqramı</h3>
                    <span>Məzun tələblərimizin ilk iş yeri elə bizim yanımızda olacaqdır. Tədris rəhbərimizin rəhbərlik etdiyi Tech komandası freelance layihələr üzərində tələblərlə birgə çalışırlar. Həmin tələbələr həm layihədə işlədiyi müddətdə ödəniş alır həm də komanda şəklində işləməyi öyrənmiş olurlar.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
