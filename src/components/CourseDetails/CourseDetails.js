import React from "react";
import { Link } from "react-router-dom";
const CourseDetails = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="img-rounded">
            <img
              src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/cWlkfXnMQKepNeIaRItV"
              alt="Cwlkfxnmqkepneiaritv"
            />
          </div>
        </div>
        <div class="col-md-7">
          <h1 class="course-title">The Ultimate Redux Course</h1>
          <h2 class="course-subtitle">
            Go from beginner to expert in 6 hours. Everything you need to build
            modern apps with Redux.
          </h2>

          <Link
            id="enroll-button"
            class="btn btn-hg btn-primary btn-enroll payment-scroller"
          >
            <i class="fa fa-shopping-cart"></i>&nbsp;&nbsp; Enroll in Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
