import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Category = () => {
  const categoryCourse = useLoaderData();

  return (
    <div className="container">
      <div className="row p-4">
        <div className="col-md-2 border-1">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-md-10 d-flex flex-wrap">
          {categoryCourse.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
