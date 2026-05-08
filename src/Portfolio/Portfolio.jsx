import React, { useEffect } from "react";
import "./portfolio.css";

import img01 from "../assets/portfolio/IMG01.jpg";
import img02 from "../assets/portfolio/img02.jpeg";
import img03 from "../assets/portfolio/img03.PNG";
import img04 from "../assets/portfolio/IMG04.jpeg";
import img05 from "../assets/portfolio/img05.jpeg";
import img06 from "../assets/portfolio/IMG06.jpeg";
import img07 from "../assets/portfolio/IMG07.jpeg";
import img08 from "../assets/portfolio/IMG08.PNG";
import img09 from "../assets/portfolio/img09.PNG";
import img10 from "../assets/portfolio/IMG10.PNG";
import img11 from "../assets/portfolio/IMG11.jpeg";
import img13 from "../assets/portfolio/img13.jpeg";
import img14 from "../assets/portfolio/img14.jpeg";
import img15 from "../assets/portfolio/IMG15.jpeg";
import img16 from "../assets/portfolio/img16.jpeg";

import img18 from "../assets/portfolio/IMG18.PNG";
import img19 from "../assets/portfolio/img19.jpeg";
import img20 from "../assets/portfolio/img20.jpeg";
import img21 from "../assets/portfolio/img21.jpeg";
import img22 from "../assets/portfolio/img22.PNG";


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
