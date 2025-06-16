import React, { use } from "react";
import { Link } from "react-router";
import signIn from "../../assets/signin.json";
import Lottie from "lottie-react";

import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";
import { AuthContext } from "../context/AuthContext";
const Signup = () => {
  const { loginUser } = use(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    console.log(email, password);

    // jodi database save kora lage tahole ami kobo smssa nai oky

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "WelCome to back ",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={signIn}
            style={{ width: "300px" }}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <div className="divider">OR</div>
               <div className="flex justify-center items-center">
                 <GoogleLogin></GoogleLogin>
               </div>
              <p className="text-center  py-4">
                Don't have an account{" "}
                <Link to="/register" className="text-blue-600">
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
