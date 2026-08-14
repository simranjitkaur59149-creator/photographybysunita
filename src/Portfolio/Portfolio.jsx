import React, { useEffect } from "react";
import "./portfolio.css";

import { Link } from "react-router-dom";

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
import img38 from "../assets/portfolio/IMG38.webp";
import img39 from "../assets/portfolio/IMG39.webp";
import img40 from "../assets/portfolio/IMG40.webp";
import img41 from "../assets/portfolio/IMG41.webp";
import img42 from "../assets/portfolio/IMG42.webp";
import img43 from "../assets/portfolio/IMG43.webp";
import img44 from "../assets/portfolio/IMG44.webp";
import img45 from "../assets/portfolio/IMG45.webp";
import img46 from "../assets/portfolio/IMG46.webp";
import img47 from "../assets/portfolio/IMG47.webp";
import img48 from "../assets/portfolio/IMG48.webp";
import img49 from "../assets/portfolio/IMG49.webp";
import img50 from "../assets/portfolio/IMG50.webp";
import img51 from "../assets/portfolio/IMG51.webp";
import img52 from "../assets/portfolio/IMG52.webp";

const PORTFOLIO_IMAGES = [
  {
    src: img01,
    alt: "Traditional female portrait with ethnic jewelry and dramatic lighting",
  },
  { src: img02, alt: "Minimal studio portrait of young woman in white outfit" },
  {
    src: img03,
    alt: "Outdoor fashion portrait of woman standing in wheat field",
  },
  {
    src: img04,
    alt: "Natural indoor portrait of smiling woman in black sleeveless top",
  },
  { src: img29, alt: "Studio portrait model work" },
  {
    src: img05,
    alt: "Outdoor portrait of woman posing near blooming pink flowers",
  },
  {
    src: img06,
    alt: "Night fashion portrait of woman wearing sunglasses outdoors",
  },
  {
    src: img07,
    alt: "Portrait of man playing acoustic guitar during live performance",
  },
  {
    src: img08,
    alt: "Candid portrait of smiling woman in black dress at indoor event",
  },
 
  { src: img10, alt: "Indoor portrait of woman in soft golden sunlight" },
  {
    src: img11,
    alt: "Outdoor candid portrait of smiling woman near floral background",
  },
  { src: img12, alt: "Fashion portrait series" },
  {
    src: img13,
    alt: "Portrait of woman in traditional outfit posing outdoors",
  },
  {
    src: img14,
    alt: "Outdoor female portrait photography in Punjab by Photography by Mirza",
  },
  {
    src: img15,
    alt: "Fashion model photoshoot in Punjab with natural lighting",
  },
  
  { src: img17, alt: "Candid event portrait" },
  
  { src: img19, alt: "Family candid photography session in Punjab" },
  { src: img20, alt: "Indoor bridal lehenga photoshoot on staircase" },
  { src: img21, alt: "Bridal veil portrait photography" },
  {
    src: img22,
    alt: "Creative child portrait photography with blue studio lighting",
  },
  { src: img23, alt: "Portfolio creative photo work" },
  { src: img24, alt: "Portfolio photo collection" },
  { src: img25, alt: "Portfolio editorial shot" },
  { src: img26, alt: "Portfolio artistic capture" },
  { src: img27, alt: "Portfolio fashion concept" },
  { src: img28, alt: "Portfolio outdoor shoot" },
  { src: img30, alt: "Portfolio lifestyle snapshot" },
  { src: img31, alt: "Portfolio dynamic portrait" },
  { src: img32, alt: "Portfolio creative portrait" },
  { src: img33, alt: "Portfolio event highlight" },
  { src: img34, alt: "Portfolio aesthetic showcase" },
  { src: img35, alt: "Portfolio traditional concept" },
  { src: img36, alt: "Portfolio visual storytelling" },
  { src: img37, alt: "Portfolio collection highlight" },
  {
    src: img38,
    alt: "Young woman in white summer dress standing in open green field near dining table",
  },
  {
    src: img47,
    alt: "Monsoon portrait of young woman in teal ethnic suit behind raindrop glass",
  },
  {
    src: img39,
    alt: "Outdoor portrait of woman in white maxi dress leaning against tree trunk",
  },
  {
    src: img41,
    alt: "Live performance portrait of Punjabi singer in pink turban under blue stage spotlight",
  },
  {
    src: img42,
    alt: "Stage lighting close-up portrait of male singer performing with microphone",
  },
{
    src: img16,
    alt: "Punjabi singer stage performance photography by Photography by Mirza",
  },
  {
    src: img43,
    alt: "Stylish man wearing sunglasses and printed pink floral shirt posing outdoors",
  },
  {
    src: img48,
    alt: "Creative double exposure portrait of woman standing near wooden doorway",
  },
  {
    src: img44,
    alt: "Medium shot of stylish man in printed shirt and sunglasses",
  },
  {
    src: img45,
    alt: "Candid portrait of smiling couple in matching white outfits outdoors",
  },
  {
    src: img46,
    alt: "Close-up family moment with parents looking lovingly at toddler",
  },
  {
    src: img40,
    alt: "Woman in traditional white saree with golden border posing outdoors",
  },

  {
    src: img49,
    alt: "Black and white dramatic shot of man with Indian tricolor flag draped over shoulders",
  },
  {
    src: img50,
    alt: "Red-toned protest portrait of young girl holding Save My Future sign",
  }, {
    src: img09,
    alt: "Black and white beauty portrait with dramatic studio lighting",
  },
  {
    src: img51,
    alt: "Woman posing in rust-orange embroidered Punjabi suit holding gold potli bag",
  },
  {
    src: img52,
    alt: "Indoor portrait of smiling woman in light blue embellished ethnic outfit",
  },{
    src: img18,
    alt: "Punjabi bridal makeup and jewelry portrait captured by wedding photographer in Punjab",
  },
];

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
          {PORTFOLIO_IMAGES.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt || `Portfolio image ${index + 1}`}
              className="reveal"
              loading={index < 2 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />
          ))}
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
