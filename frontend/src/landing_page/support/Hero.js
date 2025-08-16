import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#48c3c1ff"}}>
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{textDecoration: "none"}}><h4>Track Tickets</h4></a>
      </div>
      <div className="row p-5 ">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="p-3 rounded-pill" placeholder="Eg. how do I activate F&O" />
          <br />
          <div className="mt-3">
          <a href="" style={{textDecoration: "none"}}>Track account opening</a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" style={{textDecoration: "none"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" style={{textDecoration: "none"}}>Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" style={{textDecoration: "none"}}>Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol className="mt-3">
            <li className="mb-3">
              <a href="" style={{textDecoration: "none"}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{textDecoration: "none"}} className="mb-5">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;