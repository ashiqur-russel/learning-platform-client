import React, { useContext, useState } from "react";
import "./Register.css";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { BsGoogle, BsGithub } from "react-icons/bs";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, verifyUserEmail, providerLogin } =
    useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //Form Data submit for Registration
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password < 6) {
      setError("Please Enter atleast 6 characetr password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
      })
      .catch((e) => {
        setError(e);
        console.error(e);
        console.log(e.message);
      });
  };

  //Google Sign In Method
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          navigate(from, { replace: true });
          toast.success("Logged in Successfully!");
        }

        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  //function for update user profile

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handleEmailVerification = () => {
    verifyUserEmail()
      .then((res) => {
        toast.warning("Check your email for verification!");
      })
      .catch((err) => toast.warning("Something went wrong", err));
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
              required
            />

            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              required
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
            <p>
              <span className="text-danger">{error}</span>
            </p>
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
