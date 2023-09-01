import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Profile() {
  const name = <span style={{ color: "#fff" }}>Tony Jin</span>;
  return (
    <div className="container header__center">
      <div className="bmarg htmarg">
        <img
          src={"/images/head.jpg"}
          style={{ borderRadius: "50%", display: "block" }}
          className="photo"
          alt="photo"
        />
      </div>
      <div className="bmarg">
        <p style={{ color: "#8F8F8F" }}>
          Hello, I am {name}
          <br />I am a software engineer specializing in
          <span style={{ color: "#fff" }}>
            {" "}
            Python, C++, Java, and React.js
          </span>
        </p>
      </div>
      <div className="bmarg">
        <p>
          <a
            title="Resume"
            href={"/Resume/Tony_Jin_Resume.pdf"}
            className="link_b botton"
            target="_blank"
          >
            View Resume
          </a>
        </p>
      </div>
      <div className="icodiv">
        <a
          className="ico"
          title="Linkedin"
          href="https://www.linkedin.com/in/dexin-jin/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
        <a
          className="ico"
          title="Github"
          href="https://github.com/DexinJ"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a className="ico" title="Email" href="mailto:jindexin6@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
