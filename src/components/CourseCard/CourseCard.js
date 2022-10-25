import { Link } from "react-router-dom";
import React from "react";

const CourseCard = ({ course }) => {
  const { title, _id, details, image_url } = course;
  return (
    <div className="col-md-3 col-lg-4 col-sm-12 p-3">
      <div class="card h-100 w-100">
        <img src={image_url} class="card-img-top" alt="title" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{details}</p>
        </div>
        <div className="text-center w-100 pb-3">
          {" "}
          <Link to={`/course/${_id}`}>
            {" "}
            <button
              className="btn btn-warning w-100"
              variant="outline-secondary"
            >
              Enroll Now
            </button>
          </Link>{" "}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default CourseCard;
