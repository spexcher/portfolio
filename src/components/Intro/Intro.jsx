import React, { useContext } from "react";

import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Codeforces from "../../img/codeforces.png";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { SiHackerrank } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Gourab Modak</span>
          <span>
            Competitive Programmer | MERN Stack Developer | Mobile development
            through IOS only
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/gourabmodak/" target="_blank">
            {" "}
            <GrLinkedin />
          </a>

          <a href="https://github.com/gauravthedeveloper" target="_blank">
            {" "}
            <FaGithub />
          </a>
          <a
            href="https://codeforces.com/profile/sectumsempra07"
            target="_blank"
          >
            {" "}
            <SiCodeforces />
          </a>
          <a
            href="https://www.codechef.com/users/sectumsempra07"
            target="_blank"
          >
            <SiCodechef />
          </a>
          <a href="https://www.hackerrank.com/sectumsempra07" target="_blank">
            <SiHackerrank />
          </a>
          <a href="https://www.facebook.com/gourabmodak07/" target="_blank">
            {" "}
            <SiFacebook />
          </a>
          <a href="https://www.instagram.com/gauravshines/" target="_blank">
            {" "}
            <RiInstagramFill />
          </a>
          <a href="https://twitter.com/gourabmodak28" target="_blank">
            {" "}
            <BsTwitter />
          </a>
          {/* <img src={Github} className="social-image" alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
          <img src={Codeforces} alt="" />
          <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-54%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "15%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Competitive" text2="Programmer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="MERN Stack" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
