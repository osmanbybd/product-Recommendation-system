import React, { use } from "react";
import { Link, NavLink } from "react-router";
import useLogo from "../../assets/user.png";

import { FiLogIn, FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const links = (
  <>
    <li className="ded">
      <NavLink to='/'>Home</NavLink>
    </li>
    <li className="ded">
      <NavLink to='/allQueries'>All Queries</NavLink>
    </li>

   
    <li className="ded">
      <NavLink to='/myQueries'>My Queries</NavLink>
    </li>
    <li className="ded">
      <NavLink to='/myRecommendation'>My Recommendations</NavLink>
    </li>
     <li className="ded">
      <NavLink to='/recommendations'>Recommendations For Me</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, userLogOut } = use(AuthContext);

  const handleLogout = () => {
    userLogOut()
      .then(() => {
        console.log("user log out");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar   container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className=" text-3xl font-bold text-teal-600 dark:text-teal-300">📦 ProductReco</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <img
          src={user ? user.photoURL : useLogo}
          className="rounded-full w-14 h-14"
          alt=""
        />

        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-[#EB5A3C]  border-none"
          >
            <FiLogOut />
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn text-[#73EC8B]">
            <FiLogIn /> Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
