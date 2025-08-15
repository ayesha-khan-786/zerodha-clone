import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="text-center text-muted">People</h1>
      </div>
      <div className="row p-5 text-muted" style={{ fontSize: "1.2em" }}>
        <div className="col-6 p-5 text-center">
          <img
            src="media\images\aklogo.jpg"
            className="rounded-circle"
            style={{ width: "60%" }}
          />
          <h4 className="mt-5">Ayesha Khan</h4>
          <h6>Creator, Student Developer</h6>
        </div>
        <div className="col-6 p-5 about-ayesha">
          <p>
            Ayesha is a passionate web developer currently learning and building
            full-stack applications. She created this Zerodha clone project as
            OneStock as part of her journey in mastering the MERN stack and
            understanding how large-scale platforms are built.
          </p>
          <p>
           She started this project to challenge herself and bring her learning into real-world practice.
           With a strong interest in technology and finance, she aims to build projects that not only solve problems but also help her grow as a developer.
          </p>
          <p>She believes consistency and curosity are the keys to improvement, and coding is her way of shaping ideas into reality.</p>
          <p>
            Connect on{" "}
            <a
              href="https://github.com/ayesha-khan-786"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              GitHub
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/ayeshakhan61996/"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
