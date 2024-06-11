import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="container-fluid hero d-flex flex-column justify-content-center mx-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3 align-items-start p-3">
            <h1 className="fw-bold hero-heading text-uppercase">
              Awiwiz Adventures
            </h1>
            <hr
              className="w-50 border-5 mb-6 py-2"
              style={{ borderColor: "#ff0000" }}
            />
            <p className="hero-text">
              Awiwiz Adventures was founded in 2023, focused on adventure and
              survival. We offer various services ensuring you get the best
              adventure in the country.
            </p>
          </div>

          <div className="col-md-6 col-sm-12 align-items-end">
            <div
              className="bg-white p-3 border-top-5 rounded text-start mb-3"
              style={{ borderTop: " solid #ff0000" }}
            >
              <h3 className="hero-title">Contact Us Today</h3>
              <p className="hero-sub-text">
                Email:{" "}
                <Link href="mailto:awiwizadventures@gmail.com">
                  awiwizadventures@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
