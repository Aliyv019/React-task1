import React from 'react'
import "./graduatethoughts.css"
import graduate1 from "../../assets/img/GraduatesImg/graduate1.jpeg"
import graduate2 from "../../assets/img/GraduatesImg/graduate2.jpg"

export default function graduatethoughts() {
  return (
    <section className='graduatethoughts'>
        <div className='graduatethoughts_inner'>
            <div className='card_header'>
                    <p>[</p>
                    <h2>Məzunların fikirləri</h2>
                    <p>]</p>
            </div>
            <div className='thoughts_cards'>
                <div className='thoughts_card'>
                    <img src={graduate1} alt="" />
                    <div className='card_inner'>
                        <h3>İbrahim Əhmədzadə</h3>
                        <h4>2023 Məzun</h4>
                        <h5>High Result Academy-nin Front-end tədrisində iştirak etdim. Təlimçimiz bizə bu sahənin ən dərinliklərini öyrətməklə yanaşı, real iş mühitində qarşımıza çıxacaq olan problemlərə də bizi hazırladı. Tədrisi bitirdikdən sonra elə akademiyada Mentor olaraq çalışmağa başladım. Əlavə olaraq Tech komandasında Freelance layihələrdə də çalışıram. Tech komandasının varlığı məni bu tədrisdə iştirak etməyə çox həvəsləndirmişdi, çünki tədrisi bitirdikdən sonra nə etməli olacağımı bilmirdim. Akademiya rəhbərliyi kariyera məslələrində daim mənə dəstək olurlar. Elə buna görədə burada təhsil aldığım üçün çox şadam.</h5>
                    </div>
                </div>
                <div className='thoughts_card'>
                    <img src={graduate2} alt="" />
                    <div className='card_inner'>
                        <h3>Nurlan Məmmədov</h3>
                        <h4>2022 Məzun</h4>
                        <h5>Proqramlaşdırma sahəsində bir kurs axtarışında olarkən High Result Academy-nin Full-stack proqramlaşdırma tədrisi qarşıma çıxdı. Demo dərsdə iştirak etdikdən sonra təlimçinin dərsi çox gözəl izah etdiyini və bütün tələblərə fərdi şəkildə yanaşdığını gördüm. Academy-nin digər üstünlükləri də məni burada təhsil almağa həvəsləndirdi. Hazırda Academydə 1 ildir ki, Mentor olaraq çalışıram və Tech komandasında Developer olaraq çalışıram.</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
