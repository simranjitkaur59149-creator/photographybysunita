import React from "react";
import "./homepage.css";
import work from "../assets/worksec.png";
import work5 from "../assets/work5.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work6.jpeg";
import work4 from "../assets/work4.jpeg";
import { Camera } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { Sparkles } from 'lucide-react';


import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="banner"
        //   style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-layer">
          <Navbar />
          <div className="banner-content">
          <div>
            <h3>Timeless , emotional storytelling through photography</h3>
            <h1>Capturing Moments Thats Matter</h1>
          </div>
          <h2>By Sunita</h2>
          {/* <div className="btn">
            <button onClick={() => navigate("/photography/portfolio")}>
              View Portfolio
            </button>
            <button onClick={() => navigate("/photography/contact")}>
              Book Now
            </button>
          </div> */}
        </div></div>
      </section>
      <section className="work-section">
        <div className="container">
          {/* <div>
            <img  src={work1} alt="" />
          </div> */}
          <div className="work-txt">
            <h1>Our Work</h1>
            <p>
              Step into our portfolio at [Your Photography Business Name], where
              every frame is thoughtfully crafted to tell a story with clarity
              and emotion. Specializing in commercial and creative photography,
              our work blends artistic vision with precision and attention to
              detail. Each image captures more than a moment—it conveys a
              narrative, a mood, and a unique perspective. Discover photography
              that transforms ideas into powerful visual experiences.
            </p>
            <figure className="work-img">
              <img width={350} height={300} src={work5} alt="" />
              <img width={350} height={300} src={work3} alt="" />
              <img width={350} height={300} src={work4} alt="" />
            </figure>
          </div>
        </div>
      </section>
      <section>
        <div className="serve-sec">
          {" "}
          <h4>what we do</h4>
          <h1>PHOTOGRAPHY SERVICES</h1>
        </div>
        <div className="services">
          <div className="services-card">
            <figure><Camera /></figure>
            <h5>Portrait Photography</h5>
            <p>
              Timeless portraits crafted with natural light, emotion, and
              refined composition.
            </p>
          </div>
          <div className="services-card">
            <figure><CalendarDays/></figure>
            <h5>Event Coverage</h5>
            <p>
             Seamless documentation of moments, preserving the energy and essence of every occasion.
            </p>
          </div>
          <div className="services-card">
            <figure><BriefcaseBusiness/></figure>
            <h5>  Commercial Shoots</h5>
          
            <p>
              Strategic visuals tailored to enhance brand presence and communicate with impact.
            </p>
          </div>
          <div className="services-card">
            <figure><Sparkles/></figure>
            <h5>Creative Photography</h5>
            <p>
             Innovative concepts brought to life through artistic direction and visual storytelling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
