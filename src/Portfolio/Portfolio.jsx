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
          <img src={img01} alt="" />
          <img src={img02} alt="" />
          <img src={img03} alt="" />
          <img src={img04} alt="" />
          <img src={img05} alt="" />
          <img src={img06} alt="" />
          <img src={img07} alt="" />
          <img src={img08} alt="" />
          <img src={img09} alt="" />
          <img src={img10} alt="" />

          <img src={img11} alt="" />
          <img src={img13} alt="" />
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
