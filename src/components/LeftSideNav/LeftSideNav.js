import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LeftSideBar.css";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://e-learn-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <div className="left-sidebar">
      <div className="left py-5">
        {categories.map((category) => (
          <ul key={category.id} className=" list-group bg-secondary w-100">
            <li className="list-group-item m-2">
              {" "}
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
