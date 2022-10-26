import React from "react";
import { Link } from "react-router-dom";

import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="container py-2">
        <div className="row">
          <div className="col-md-12">
            <div className="card-content">
              <div className="card-img">
                <span>
                  <h4>Latest</h4>
                </span>
              </div>
              <div className="card-desc">
                <h3>what is `cors`?</h3>
                <p>
                  CORS is the mechanism that provides the ability to alter the
                  behavior of this policy, enabling you to do things like
                  hosting static content at www.example.com and the backend API
                  at api.example.com. This kind of request would be called a
                  Cross-Origin request, as a resource from one subdomain is
                  requesting a resource from another subdomain. This is all
                  controlled through preflight requests that exchange a set of
                  HTTP request headers and corresponding response headers
                  collectively referred to as "CORS Headers", each of these
                  headers modifies a different element of the Same-Origin policy
                  to loosen the limitations it imposes.
                </p>
                <Link className="btn-card">Read</Link>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card-content">
              <div className="card-img">
                <span>
                  <h4>New</h4>
                </span>
              </div>
              <div className="card-desc">
                <h3>
                  Why are you using `firebase`? What other options do you have
                  to implement authentication?
                </h3>
                <p>
                  Firebase Authentication provides backend services, easy-to-use
                  SDKs, and ready-made UI libraries to authenticate users to
                  your app. It supports authentication using passwords, phone
                  numbers, popular federated identity providers like Google,
                  Facebook and Twitter, and more.
                </p>
                <Link className="btn-card">Read</Link>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card-content">
              <div className="card-img">
                <span>
                  <h4>New</h4>
                </span>
              </div>
              <div className="card-desc">
                <h3>How does the private route work?</h3>
                <p>
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                </p>
                <Link className="btn-card">Read</Link>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card-content">
              <div className="card-img">
                <span>
                  <h4>New</h4>
                </span>
              </div>
              <div className="card-desc">
                <h3>What is Node? How does Node work?</h3>
                <p>
                  Node.js is an open-source backend javascript runtime
                  environment. It is a used as backend service where javascript
                  works on the server-side of the application. This way
                  javascript is used on both frontend and backend. Node.js runs
                  on chrome v8 engine which converts javascript code into
                  machine code, it is highly scalable, lightweight, fast, and
                  data-intensive.
                  <br />
                  Node.js accepts the request from the clients and sends the
                  response, while working with the request node.js handles them
                  with a single thread. To operate I/O operations or requests
                  node.js use the concept of threads. Thread is a sequence of
                  instructions that the server needs to perform. It runs
                  parallel on the server to provide the information to multiple
                  clients. Node.js is an event loop single-threaded language. It
                  can handle concurrent requests with a single thread without
                  blocking it for one request. Node.js basically works on two
                  concept Asynchronous Non-blocking I/O
                </p>
                <Link className="btn-card">Read</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
