import React, { use } from "react";
import regisrNow from "../../assets/register.json";
import Lottie from "lottie-react";

import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { signUpNow, updateUser, setUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const name = form.name.value;
    const photo = form.photo.value;
    const { email, password } = Object.fromEntries(formData.entries());

    console.log(email, password);

    signUpNow(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Register successfully ! Thank You",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={regisrNow}
            loop={true}
            style={{ width: "400px" }}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Your Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <div className="divider">OR</div>
             <div className="flex justify-center items-center">
               <GoogleLogin></GoogleLogin>
             </div>


             <p className="text-center py-3">Already have an account ? <Link to='/login' className="text-blue-700">Sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
