import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="container">
      <div className="row p-4">
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
