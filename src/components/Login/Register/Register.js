import React, { useContext } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const Register = () => {
  const { user, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="login-block">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <form
              className="md-float-material form-material"
              onSubmit={handleSubmit}
            >
              <div className="auth-box card">
                <div className="card-block">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-center heading">
                        Create your Account
                      </h3>
                    </div>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value=""
                      placeholder="Display name"
                      id="first_name"
                    />
                  </div>

                  <div className="form-group form-primary">
                    <input
                      type="text"
                      className="form-control"
                      name="photoURL"
                      value=""
                      placeholder="Image Url"
                      id=""
                    />
                  </div>

                  <div className="form-group form-primary">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value=""
                      placeholder="Email"
                      id="email"
                    />
                  </div>

                  <div className="form-group form-primary">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value=""
                      id="password"
                    />
                  </div>

                  <div className="row  text-center">
                    <div className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                      >
                        <i className="fa fa-lock"></i> Signup Now{" "}
                      </button>
                    </div>
                  </div>

                  <div className="or-container">
                    <div className="line-separator"></div>{" "}
                    <div className="or-label">or</div>
                    <div className="line-separator"></div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Button
                        onClick={handleGoogleSignIn}
                        className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                        href="#"
                      >
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                        Signup Using Google
                      </Button>
                    </div>

                    <div className="col-md-6">
                      <Button
                        onClick={handleGoogleSignIn}
                        className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                        href="#"
                      >
                        <img src="https://img.icons8.com/color/16/000000/github-logo.png" />{" "}
                        Signup Using Github
                      </Button>
                    </div>
                  </div>
                  <br />

                  <p className="text-inverse text-center">
                    Already have an account?{" "}
                    <Link to="/login" data-abc="true">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
