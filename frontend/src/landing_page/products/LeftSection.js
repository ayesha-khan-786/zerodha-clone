import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted mt-4">{productDesription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo</a>
             &nbsp; <i class="fa fa-long-arrow-right  text-primary" aria-hidden="true"></i>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none"}}>
              Learn More
            </a>
             &nbsp; <i class="fa fa-long-arrow-right  text-primary" aria-hidden="true"></i>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;