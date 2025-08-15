import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="mt-3">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <a href="http://localhost:3000/signup"
          className="p-2 btn btn-primary fs-5 mb-5 mt-3 no-border"
          style={{ width: "20%", margin: "0 auto", background: "#3cafcf"}}
        >
          Sign up for Free
        </a>
      </div>
    </div>
  );
}

export default Hero;