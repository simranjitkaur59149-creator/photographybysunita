import React from 'react'
import "./portfolio.css"
import img1 from "../assets/portfolio/IMG_8967.jpg"


import img2 from "../assets/portfolio/IMG_4500.PNG"
import img3 from "../assets/portfolio/IMG_0293.PNG"
import img4 from "../assets/portfolio/IMG_0294.PNG"
import img5 from "../assets/portfolio/IMG_0295.PNG"
import img6 from "../assets/portfolio/IMG_0296.PNG"
import img7 from "../assets/portfolio/IMG_6190.PNG"
import Navbar from '../components/Navbar'
export default function Portfolio() {
  return (
  <>
  <div style={{background:"black"}}>
    <Navbar/>
  <section className='portfolio-container'>

    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
    <img src={img5} alt="" />
    <img src={img6} alt="" />
    <img src={img7} alt="" />
   
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
    <img src={img1} alt="" />
  </section>
  </div>
  </>
  )
}
