import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center" >
        <h1 style={{ fontSize: "2rem" }}>The OneStock Universe</h1>
        <p className="mt-3 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/two.png" style={{ width: "250px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Our asset management venture <br></br> that is creating simple and transparent index <br></br> funds to help you save for your goals. </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\sensibullLogo.svg" style={{ width: "180px", height: "auto" }}/>
          <p className="text-small text-muted mt-4">Options trading platform that lets you <br></br> create strategies, analyze positions, and examine <br></br> data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/goldenpiLogo.png" style={{ width: "200px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Investment research platform <br></br> that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "180px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Systematic trading platform <br></br> that allows you to create and backtest <br></br> strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-3">Thematic investing platform <br></br> that helps you invest in diversified <br></br> baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "130px", height: "auto" }}/>
          <p className="text-small text-muted mt-3">Personalized advice on life <br></br> and health insurance. No spam <br></br> and no mis-selling.</p>
        </div>
        <a
          href="http://localhost:3000/signup"
          className="p-2 btn btn-primary fs-5 mb-5 mt-3 no-border"
          style={{ width: "20%", margin: "0 auto", background: "#1b7d99ff" }}
        >
          Sign up for Free
        </a>
      </div>
    </div>
  );
}

export default Universe;