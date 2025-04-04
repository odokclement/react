import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlaystate }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlaystate(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Nurturing Tomorrow's Learders Today</h2>
        <p>
          Embark on a transfomative educational journey with our university's
          comprehensive education programs.Our cutting edge curriculum is
          designed to empower students with the knowledge,skills and experiences
          needed to excel in a dynamic field of education
        </p>
        <p>
          With a focus on innovation, hands-on learning and personolised
          mentorship,our programs prepare aspiring educator to make a meaningful
          impact in classroooms,schools,and communities
        </p>
        <p>
          Whether you are aspiring to become a
          teacher,administrator,counselor,or educational leader, our diverse
          range of programs offfer the perfect pathway to achieve your goal and
          unlock your full potential in shaping the future of education
        </p>
      </div>
    </div>
  );
};

export default About;
