import React from "react";
import "./Faqs.css";
const Faqs = () => {
  return (
    <>
      <div className="container h-full w-100">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div className="col-md-6 offset-md-3">
            <div className="faq" id="accordion">
              <div className="card">
                <div className="card-header" id="faqHeading-1">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-1"
                      data-aria-expanded="true"
                      data-aria-controls="faqCollapse-1"
                    >
                      <span className="badge">1</span>How long does each course
                      take?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-1"
                  className="collapse"
                  aria-labelledby="faqHeading-1"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Some online courses are just a few hours long, while
                      others last a few months. Depending on the type of online
                      course you are taking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-2">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-2"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-2"
                    >
                      <span className="badge">2</span> Why should I use online
                      learning?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-2"
                  className="collapse"
                  aria-labelledby="faqHeading-2"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      From one place you can learn many courses easily.Also you
                      can watch as much as possible .
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-3">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-3"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-3"
                    >
                      <span className="badge">3</span>How much do courses cost?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-3"
                  className="collapse"
                  aria-labelledby="faqHeading-3"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Well, it depends on quality of course and duration.
                      Basically, $20/Months is our basic plan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-4">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-4"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-4"
                    >
                      <span className="badge">4</span> Does online learning
                      really work?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-4"
                  className="collapse"
                  aria-labelledby="faqHeading-4"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Some students do as well in online courses as in in-person
                      courses, some may actually do better, but, on average,
                      students do worse in the online setting, and this is
                      particularly true for students with weaker academic
                      backgrounds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-5">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-5"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-5"
                    >
                      <span className="badge">5</span> Will you provide
                      certificate?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-5"
                  className="collapse"
                  aria-labelledby="faqHeading-5"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Yes, After Successful completing of the course we will
                      award you signed certificate of completion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-6">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-6"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-6"
                    >
                      <span className="badge">6</span> What things I need after
                      enrolling course?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-6"
                  className="collapse"
                  aria-labelledby="faqHeading-6"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>All ou need a laptop and Internet connection.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-7">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-7"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-7"
                    >
                      <span className="badge">7</span> Are online students
                      eligible for financial aid?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-7"
                  className="collapse"
                  aria-labelledby="faqHeading-7"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      No, Currently we are not accepting any Finanicial Aid
                      application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
