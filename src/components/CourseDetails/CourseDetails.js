import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./CourseDetails.css";

import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();

  const { details, title, image_url, _id } = course;
  return (
    <>
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">
          Enroll today
        </h1>
        <p className="text-center">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="btn btn-warning" onClick={toPdf}>
                Download Pdf
              </button>
            )}
          </Pdf>
        </p>

        <article className="postcard dark yellow" ref={ref}>
          <Image className="postcard__img" src={image_url} alt="Image Title" />
          <div className="postcard__text">
            <h1 className="postcard__title yellow">
              <p href="#">{title}</p>
            </h1>
            <div className="postcard__subtitle small">
              <time dateTime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">{details}</div>
            <ul className="postcard__tagbox">
              <Link to={`/cart/${_id}`}>
                {" "}
                <button
                  className="btn btn-warning w-100"
                  variant="outline-secondary"
                >
                  Get Premium Access{" "}
                </button>
              </Link>{" "}
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};

export default CourseDetails;
