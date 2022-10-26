import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import "./Courses.css";
const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-md-2 border-1">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-md-10 d-flex flex-wrap">
          {courses.map((course) => {
            return (
              <CourseCard key={course._id} course={course}>
                {course.title}
              </CourseCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
