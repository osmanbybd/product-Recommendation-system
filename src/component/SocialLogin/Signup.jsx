import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import signIn from "../../assets/signin.json";
import Lottie from "lottie-react";

import Swal from "sweetalert2";

import { AuthContext } from "../context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
const Signup = () => {
  const { loginUser ,googlLogin, setUser} = use(AuthContext);
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogIn = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    console.log(email, password);

    // jodi database save kora lage tahole ami kobo smssa nai ok

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(location.state || '/')
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


  const handleLogin = () =>{
    googlLogin(provider)
    .then(res =>{
      setUser(res?.user?.photoURL)
      navigate(location.state || '/')
       Swal.fire({
          position: "top-end",
          icon: "success",
          title: "WelCome to back ",
          showConfirmButton: false,
          timer: 1500,
        });
    })
  }





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
                    <button onClick={handleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
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
