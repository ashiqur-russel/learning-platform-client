import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

import "./Login.css";
const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
          toast.success("Logged in Successfully!");
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>
          <Link to="/register">
            {" "}
            <h2 className="inactive underlineHover">Sign Up </h2>
          </Link>

          <div className="fadeIn first"></div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="fadeIn second"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
            />
            <span className="text-danger">{error}</span>
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <Link className="underlineHover" href="#">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
