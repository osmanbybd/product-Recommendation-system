import React, { use } from "react";
import { Link, NavLink } from "react-router";
import useLogo from "../../assets/user.png";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, userLogOut } = use(AuthContext);

  const handleLogout = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg text-lg font-semibold px-2 py-1">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allQueries"
          className="rounded-lg px-2 py-1 text-lg font-semibold"
        >
          All Queries
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="rounded-lg px-2 py-1 text-lg font-semibold"
        >
          About
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className="rounded-lg px-2 py-1 text-lg font-semibold"
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg[#687FE5] shadow-md sticky top-0 z-50 px-4 container mx-auto">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#687FE5]  rounded-box w-52"
          >
            {navLinks}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-[#EB5A3C] text-white border-none hover:bg-red-500"
              >
                <FiLogOut />
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="btn text-white bg-[#73EC8B] hover:bg-green-500 border-none"
              >
                <FiLogIn /> Log In
              </Link>
            )}
          </ul>
        </div>
        {/* Logo */}
        <Link to="/" className="text-xl lg:text-3xl font-bold text-indigo-900 ">
          📦 ProductReco
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2 hidden lg:flex">
        <div className="w-10 h-10 ">
          <img
            src={user ? user.photoURL : useLogo}
            className="rounded-full w-full h-full object-cover border-2 border-[#687FE5]"
            alt="User"
          />
        </div>

        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-[#EB5A3C] text-white border-none hover:bg-red-500"
          >
            <FiLogOut />
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn text-white bg-[#73EC8B] hover:bg-green-500 border-none"
          >
            <FiLogIn /> Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
