import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { SiHackerrank } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span className="EMAIL">spexcher@gmail.com</span>
                <div className="f-icons">
                    {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
                    <a
                        href="https://www.linkedin.com/in/gourabmodak/"
                        target="_blank"
                    >
                        {" "}
                        <GrLinkedin />
                    </a>

                    <a href="https://github.com/spexcher" target="_blank">
                        {" "}
                        <FaGithub />
                    </a>
                    <a
                        href="https://codeforces.com/profile/spexcher"
                        target="_blank"
                    >
                        {" "}
                        <SiCodeforces />
                    </a>
                    <a
                        href="https://www.codechef.com/users/spexcher"
                        target="_blank"
                    >
                        <SiCodechef />
                    </a>
                    <a
                        href="https://www.hackerrank.com/spexcher"
                        target="_blank"
                    >
                        <SiHackerrank />
                    </a>
                    <a
                        href="https://www.facebook.com/spexcher/"
                        target="_blank"
                    >
                        {" "}
                        <SiFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/spexcher/"
                        target="_blank"
                    >
                        {" "}
                        <RiInstagramFill />
                    </a>
                    <a href="https://twitter.com/gourabmodak28" target="_blank">
                        {" "}
                        <BsTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
