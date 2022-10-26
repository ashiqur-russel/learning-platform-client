import React from "react";
import { Link } from "react-router-dom";
import EPhoto from "../../assets/e-learn.png";
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__overlay"></div>

        <div className="hero__content h-100 container-custom position-relative">
          <div className="d-flex h-100 align-items-center hero__content-width">
            <div className="text-white">
              <h1 className="hero__heading fw-bold mb-4">
                Learn to confidently build web and mobile apps!
              </h1>
              <p className="lead mb-4">
                Master the Coding Skills to Become an Engineer Companies LOVE to
                Hire
              </p>
              <Link
                href="#"
                className="mt-2 btn btn-lg btn-outline-light"
                role="button"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        <a href="#scroll-down" className="hero__scroll-btn">
          Explore <i className="bi bi-arrow-down-short"></i>
        </a>
      </section>

      <Link id="scroll-down"></Link>
      <section className="steps container-custom">
        <div className="row">
          <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter">
            <img
              src={EPhoto}
              alt="Coffe Flavour"
              className="img-fluid pb-4 steps__section-thumbnail"
              width="553"
              height="746"
              loading="lazy"
            />
          </div>

          <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
            <div className="steps__content-width">
              <span>01</span>
              <h1 className="h2 mb-4">Learning Paths</h1>
              <p className="mb-4">
                Whether you're a beginner just starting out or an experienced
                developer looking for courses to enhance your skills and reach
                higher levels of software engineering, these learning paths will
                help you achieve your goal.
              </p>
              <Link
                href="#"
                className="mt-2 btn btn-lg btn-outline-dark"
                role="button"
              >
                Read More <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
