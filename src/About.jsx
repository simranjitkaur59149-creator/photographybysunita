import React from "react";
import { useEffect } from "react";
import "./about.css";
// import sunita from "./assets/about.PNG";
import sunita from "./assets/sunita.jpeg";
import img1 from "./assets/card1.jpg";
// import img2 from "./assets/card2.jpg";
import img2 from "./assets/card2.png";
import img3 from "./assets/card3.jpg";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate=useNavigate()
  useEffect(() => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <>
      <main className="about">
        {/* <section className="about-banner"></section> */}

        <section className="story-section">
          <div className="overlay"></div>

          <div className="story-container">
            <div className="intro">
              <h1 className="animate slide-up">My Story</h1>
              <p className="animate slide-up delay-1">
                I’m <b>MIRZA</b>, a passionate photographer driven by the
                art of capturing genuine moments and timeless visuals. My
                journey began with a simple curiosity—observing light, emotion,
                and the subtle details that often go unnoticed. Over time, that
                curiosity turned into a deep appreciation for storytelling
                through imagery. I strive to document real, unscripted
                moments—those fleeting instances that hold meaning and
                authenticity. Photography, to me, is more than just taking
                pictures—it’s about preserving memories, evoking emotion, and
                creating something that lasts beyond the moment.
              </p>
            </div>

            <div className="image-wrapper animate slide-right delay-2">
              <img className="img" src={sunita} alt="Sunita Mirza" />
            </div>
          </div>
        </section>
        <section className="promotion">
          <h1>" I dont just take photos , I preserve emotions"</h1>
          <div className="card-container">
            <div className="card animate slide-up delay-1">
              <figure>
                <img className="card-img" src={img1} alt="" />
              </figure>
              <div>
                <h1>Building Trust</h1>
                <p>
                  Every great story begins with connection. I take the time to
                  understand you, your vision, and what matters most—so you feel
                  completely at ease in front of the lens. Real moments come
                  from real trust.
                </p>
                <h5>Connection. Comfort. Confidence.</h5>
              </div>
            </div>
            <div className="card animate slide-up delay-2">
              <figure>
                <img className="card-img" style={{objectFit:"cover"}} src={img2}   alt="" />
              </figure>
              <div>
                <h1>Your Vision</h1>
                <p>
                  Every story is unique, and so is your perspective. I work
                  closely with you to understand your style, your ideas, and the
                  feeling you want to capture. Together, we create something
                  that truly reflects you—natural, personal, and meaningful.
                </p>
                <h5>Creativity. Expression. Identity.</h5>
              </div>
            </div>
            <div className="card  animate slide-up delay-3">
              <figure>
                <img className="card-img" src={img3} alt="" />
              </figure>
              <div>
                <h1>Creating Memories</h1>
                <p>
                  Moments may pass, but memories should last forever. I focus on
                  capturing emotions as they are—raw, honest, and beautifully
                  real. So every image becomes something you can revisit,
                  relive, and cherish for years to come.
                </p>
                <h5>Emotion. Story. Legacy.</h5>
              </div>
            </div>
          </div>
          <h3 className="animate slide-up delay-2">Lets create something meaningful</h3>
          <button className="button animate slide-up delay-3" onClick={()=>navigate("/photography/contact")} >Get in Touch</button>
        </section>
      </main>
    </>
  );
}
