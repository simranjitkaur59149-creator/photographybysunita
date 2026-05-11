import React, { useEffect } from "react";
import "./portfolio.css";

import img01 from "../assets/portfolio/IMG01.jpg";
import img02 from "../assets/portfolio/img02.webp";
import img03 from "../assets/portfolio/img03.webp";
import img04 from "../assets/portfolio/IMG04.webp";
import img05 from "../assets/portfolio/img05.webp";
import img06 from "../assets/portfolio/IMG06.jpeg";
import img07 from "../assets/portfolio/IMG07.webp";
import img08 from "../assets/portfolio/IMG08.webp";
import img09 from "../assets/portfolio/img09.webp";
import img10 from "../assets/portfolio/IMG10.webp";
import img11 from "../assets/portfolio/IMG11.webp";
import img13 from "../assets/portfolio/img13.webp";
import img14 from "../assets/portfolio/img14.webp";
import img15 from "../assets/portfolio/IMG15.webp";
import img16 from "../assets/portfolio/img16.webp";

import img18 from "../assets/portfolio/IMG18.webp";
import img19 from "../assets/portfolio/img19.webp";
import img20 from "../assets/portfolio/img20.webp";
import img21 from "../assets/portfolio/img21.webp";
import img22 from "../assets/portfolio/img22.webp";


import { Link } from "react-router-dom";
export default function Portfolio() {
  useEffect(() => {
  const elements = document.querySelectorAll(
    ".reveal"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <>
      <div style={{ background: "white" }}>
        <section className="porfolio-banner">
          <div className="banner-layer">
            
            <div className="banner-content">
              <h1>
                Visual <span>Stories.</span>
                <br />
                Real <span>Emotions.</span>
              </h1>

              <p>
                I capture authentic moments and raw emotions that speak beyond
                words.
              </p>
            </div>
          </div>
        </section>
         <div className="section-title">
          <span>PORTFOLIO</span>
          <h2>Selected Works</h2>
        </div>
        <section className="portfolio-container">
          <img src={img01} alt="Traditional female portrait with ethnic jewelry and dramatic lighting" />
          <img src={img02} alt="Minimal studio portrait of young woman in white outfit" />
          <img src={img03} alt="Outdoor fashion portrait of woman standing in wheat field" />
          <img src={img04} alt="Natural indoor portrait of smiling woman in black sleeveless top" />
          <img src={img05} alt="Outdoor portrait of woman posing near blooming pink flowers" />
          <img src={img06} alt="Night fashion portrait of woman wearing sunglasses outdoors" />
          <img src={img07} alt="Portrait of man playing acoustic guitar during live performance" />
          <img src={img08} alt="Candid portrait of smiling woman in black dress at indoor event" />
          <img src={img09} alt="Black and white beauty portrait with dramatic studio lighting" />
          <img src={img10} alt="Indoor portrait of woman in soft golden sunlight" />

          <img src={img11} alt="Outdoor candid portrait of smiling woman near floral background" />
          <img src={img13} alt="Portrait of woman in traditional outfit posing outdoors" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
          <img src={img18} alt="" />
          <img src={img19} alt="" />
          <img src={img20} alt="" />
          <img src={img21} alt="" />
          <img src={img22} alt="" />
        </section>
   <section className="portfolio-contact reveal">
  <span>LET’S WORK TOGETHER</span>

  <h2>Available For Projects & Collaborations</h2>

  <Link to="/photography/contact">
    Get In Touch
  </Link>
</section>
      </div>
    </>
  );
}
