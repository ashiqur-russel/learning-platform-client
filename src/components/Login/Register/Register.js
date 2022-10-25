import React, { useContext } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { BsGoogle, BsGithub } from "react-icons/bs";
import { toast } from "react-toastify";

const Register = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");
        toast.success("Logged in with Google");

        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="inactive underlineHover">Sign Up </h2>

          <div className="fadeIn first"></div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="fadeIn second"
              name="name"
              placeholder="Name"
            />
            <input
              type="text"
              className="fadeIn second"
              name="photoURL"
              placeholder="Photo Url"
            />
            <input
              type="email"
              className="fadeIn second"
              name="email"
              placeholder="Email"
            />

            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />

            <div className="text-center">
              <p>
                Already have an account?<Link to="/login">Signin</Link>
              </p>
              <p>or sign up with:</p>

              <button
                type="button"
                className="btn btn-link btn-floating mx-1"
                onClick={handleGoogleSignIn}
              >
                <BsGoogle size="30px"></BsGoogle>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <BsGithub size="30px"></BsGithub>
              </button>
            </div>
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

export default Register;
