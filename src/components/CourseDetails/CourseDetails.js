import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./CourseDetails.css";
const CourseDetails = () => {
  const course = useLoaderData();

  const { details, title, image_url } = course;
  console.log(course);
  return (
    <section className="light">
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">
          Enroll today
        </h1>

        <article className="postcard dark yellow">
          <Image className="postcard__img" src={image_url} alt="Image Title" />
          <div className="postcard__text">
            <h1 className="postcard__title yellow">
              <h2 href="#">{title}</h2>
            </h1>
            <div className="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">{details}</div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <i className="fas fa-tag mr-2"></i>Podcast
              </li>
              <li className="tag__item">
                <i className="fas fa-clock mr-2"></i>55 mins.
              </li>
              <li className="tag__item play yellow">
                <Link href="#">
                  <i className="fas fa-play mr-2"></i>Play Episode
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CourseDetails;
