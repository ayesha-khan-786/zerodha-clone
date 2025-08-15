
import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted mt-4">{productDesription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>Learn More</a>
            &nbsp; <i class="fa fa-long-arrow-right  text-primary" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
