import React, { useEffect } from "react";
import "./homepage.css";
import work from "../assets/worksec.png";
import work01 from "../assets/work01.jpeg";
import work02 from "../assets/work02.png";
import work03 from "../assets/work03.jpeg";

// import work4 from "../assets/work4.jpeg";
import { Camera, CalendarDays, BriefcaseBusiness, Sparkles } from "lucide-react";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function HomePage() {
  const navigate = useNavigate();

  // 🔥 SCROLL ANIMATION
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  return (
    <>
      <section className="banner">
        <div className="banner-layer">
          <Navbar />
          <div className="banner-content">
            <div>
              <h3 className="animate slide-left">
                Timeless , emotional storytelling through photography
              </h3>
              <h1 className="animate slide-right">
                Capturing Moments Thats Matter
              </h1>
            </div>
            <h2 className="animate slide-up delay-1">By mirza</h2>
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="container">
          <div className="work-txt">
            <h1 className="animate slide-up">Our Work</h1>

            <p className="animate slide-up delay-1">
              Step into our portfolio where every frame is thoughtfully crafted
              to tell a story with clarity and emotion. Each image captures more
              than a moment—it conveys a narrative and a unique perspective.
            </p>

            <figure className="work-img">
              <img className="animate slide-left delay-1" src={work01} alt="" />
              <img  className=" wide animate slide-up delay-2" src={work02} alt="" />
              <img className=" large animate slide-right delay-3" src={work03} alt="" />
            </figure>

            <div className="btn animate slide-up delay-2">
              <button onClick={() => navigate("/photography/portfolio")}>
                View Portfolio
              </button>
              <button onClick={() => navigate("/photography/contact")}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="serve-sec">
          <h4 className="animate slide-up">what I do</h4>
          <h1 className="animate slide-up delay-1">
            PHOTOGRAPHY SERVICES
          </h1>
        </div>

        <div className="services">
          <div className="services-card animate slide-up delay-1">
            <figure><Camera /></figure>
            <h5>Portrait Photography</h5>
            <p>Timeless portraits crafted with emotion.</p>
          </div>

          <div className="services-card animate slide-up delay-2">
            <figure><CalendarDays /></figure>
            <h5>Event Coverage</h5>
            <p>Capturing the essence of every occasion.</p>
          </div>

          <div className="services-card animate slide-up delay-3">
            <figure><BriefcaseBusiness /></figure>
            <h5>Commercial Shoots</h5>
            <p>Visuals that elevate your brand identity.</p>
          </div>

          <div className="services-card animate slide-up delay-4">
            <figure><Sparkles /></figure>
            <h5>Creative Photography</h5>
            <p>Artistic storytelling through creative direction.</p>
          </div>
        </div>
      </section>
    </>
  );
}