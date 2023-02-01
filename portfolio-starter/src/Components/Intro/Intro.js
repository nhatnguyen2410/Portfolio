import React from "react";
import "../Intro/Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import anhthaoly from "../../img/anhthaoly.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am </span>
          <span>Thao Ly</span>
          <span>
            Digital Designer with high level of experience in designing
            and development, producting the Quality work
          </span>
        </div>
        <button className=" button i-button"> Hire me</button>
        <div className="i-icons">
          <a href="https://www.facebook.com/profile.php?id=100013616204085">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/nttl_20/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={anhthaoly} alt="" />
        <img src={glassesimoji} />
        <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
        <div style={{ top: "-4%", left: "34%" }}>
         
          <FloatingDiv image={Crown} txt1="Digital" txt2="Marketing" />
        </div>
        <div style={{ top: "18rem", left: "-8.5rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}>

        </div>
      </div>
    </div>
  );
}

export default Intro;
