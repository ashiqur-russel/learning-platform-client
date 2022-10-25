import { Link } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";

const CourseCard = ({ course }) => {
  const { title, _id, details, image_url, thumbnail_url, course_id } = course;
  return (
    <div className="col-md-3 col-lg-4 col-sm-12">
      <div class="card">
        <img src={image_url} class="card-img-top" alt="title" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{details}</p>
          <Link to={`/course/${_id}`}>
            {" "}
            <Button variant="outline-secondary">All News in this </Button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
