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
import img12 from "../assets/portfolio/IMG29.webp";
import img13 from "../assets/portfolio/img13.webp";
import img14 from "../assets/portfolio/img14.webp";
import img15 from "../assets/portfolio/IMG15.webp";
import img16 from "../assets/portfolio/img16.webp";
import img17 from "../assets/portfolio/IMG17.webp";
import img18 from "../assets/portfolio/IMG18.webp";
import img19 from "../assets/portfolio/img19.webp";
import img20 from "../assets/portfolio/img20.webp";
import img21 from "../assets/portfolio/img21.webp";
import img22 from "../assets/portfolio/img22.webp";
import img23 from "../assets/portfolio/IMG23.webp";
import img24 from "../assets/portfolio/IMG24.webp";
import img25 from "../assets/portfolio/IMG25.webp";
import img26 from "../assets/portfolio/IMG26.webp";
import img27 from "../assets/portfolio/IMG27.webp";
import img28 from "../assets/portfolio/IMG28.webp";
import img29 from "../assets/portfolio/IMG12.webp";
import img30 from "../assets/portfolio/IMG30.webp";
import img31 from "../assets/portfolio/IMG31.webp";
import img32 from "../assets/portfolio/IMG32.webp";
import img33 from "../assets/portfolio/IMG33.webp";
import img34 from "../assets/portfolio/IMG34.webp";
import img35 from "../assets/portfolio/IMG35.webp";
import img36 from "../assets/portfolio/IMG36.webp";
import img37 from "../assets/portfolio/IMG37.webp";

import { Link } from "react-router-dom";
export default function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

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
      },
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
  <img
    src={img01}
    alt="Traditional female portrait with ethnic jewelry and dramatic lighting"
    loading="eager"
    fetchPriority="high"
  />

  <img
    src={img02}
    alt="Minimal studio portrait of young woman in white outfit"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img03}
    alt="Outdoor fashion portrait of woman standing in wheat field"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img04}
    alt="Natural indoor portrait of smiling woman in black sleeveless top"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img29}
    alt=""
    loading="lazy"
    decoding="async"
  />

  <img
    src={img05}
    alt="Outdoor portrait of woman posing near blooming pink flowers"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img06}
    alt="Night fashion portrait of woman wearing sunglasses outdoors"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img07}
    alt="Portrait of man playing acoustic guitar during live performance"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img08}
    alt="Candid portrait of smiling woman in black dress at indoor event"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img09}
    alt="Black and white beauty portrait with dramatic studio lighting"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img10}
    alt="Indoor portrait of woman in soft golden sunlight"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img11}
    alt="Outdoor candid portrait of smiling woman near floral background"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img12}
    alt=""
    loading="lazy"
    decoding="async"
  />

  <img
    src={img13}
    alt="Portrait of woman in traditional outfit posing outdoors"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img14}
    alt="Outdoor female portrait photography in Punjab by Photography by Mirza"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img15}
    alt="Fashion model photoshoot in Punjab with natural lighting"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img16}
    alt="Punjabi singer stage performance photography by Photography by Mirza"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img17}
    alt=""
    loading="lazy"
    decoding="async"
  />

  <img
    src={img18}
    alt="Punjabi bridal makeup and jewelry portrait captured by wedding photographer in Punjab"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img19}
    alt="Family candid photography session in Punja"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img20}
    alt="Indoor bridal lehenga photoshoot on staircase"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img21}
    alt="bridal veil portrait photography"
    loading="lazy"
    decoding="async"
  />

  <img
    src={img22}
    alt="Creative child portrait photography with blue studio lighting"
    loading="lazy"
    decoding="async"
  />

  <img src={img23} alt="" loading="lazy" decoding="async" />
  <img src={img24} alt="" loading="lazy" decoding="async" />
  <img src={img25} alt="" loading="lazy" decoding="async" />
  <img src={img26} alt="" loading="lazy" decoding="async" />
  <img src={img27} alt="" loading="lazy" decoding="async" />
  <img src={img28} alt="" loading="lazy" decoding="async" />
  <img src={img30} alt="" loading="lazy" decoding="async" />
  <img src={img31} alt="" loading="lazy" decoding="async" />
  <img src={img32} alt="" loading="lazy" decoding="async" />
  <img src={img33} alt="" loading="lazy" decoding="async" />
  <img src={img34} alt="" loading="lazy" decoding="async" />
  <img src={img35} alt="" loading="lazy" decoding="async" />
  <img src={img36} alt="" loading="lazy" decoding="async" />
  <img src={img37} alt="" loading="lazy" decoding="async" />
</section>
        <section className="portfolio-contact reveal">
          <span>LET’S WORK TOGETHER</span>

          <h2>Available For Projects & Collaborations</h2>

          <Link to="/photography/contact">Get In Touch</Link>
        </section>
      </div>
    </>
  );
}
