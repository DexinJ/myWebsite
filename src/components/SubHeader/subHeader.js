import React, { useEffect } from "react";
import "./subHeader.css";

function subHeader() {
  const name = <span style={{ color: "white" }}>Tony Jin</span>;
  return (
    <header className="Sub-header">
      <div className="header-text">
        <div className="link-list">
          <a
            style={{ fontWeight: "bold" }}
            title="Home"
            href="/"
            className="list-item"
          >
            {name}
          </a>
          <a
            className="list-item"
            title="Resume"
            href={"/Resume/Tony_Jin_Resume.pdf"}
            target="_blank"
          >
            Resume
          </a>
          <a
            className="list-item"
            title="Linkedin"
            href="https://www.linkedin.com/in/dexin-jin/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="list-item"
            title="Github"
            href="https://github.com/DexinJ"
            target="_blank"
          >
            Github
          </a>
          <a
            className="list-item"
            title="jindexin6@gmail.com"
            href="mailto:jindexin6@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}

export default subHeader;
