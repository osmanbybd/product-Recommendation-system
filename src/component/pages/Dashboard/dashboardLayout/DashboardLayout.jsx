import { Link, NavLink, Outlet } from "react-router";
import {
  FiFileText,
  FiThumbsUp,
  FiUsers,
  FiPlusCircle,
} from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Topbar for mobile */}
      <div className="bg-[#687FE5] text-white p-4 lg:hidden flex justify-between items-center shadow-md">
        <Link to="/" className="text-xl font-bold">📊 Dashboard</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          <FiMenu />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`lg:w-64 w-full lg:block ${
          isOpen ? "block" : "hidden"
        } bg-[#687FE5] text-white p-5 space-y-4 shadow-lg transition-all duration-300 z-10`}
      >
        <nav className="flex flex-col gap-3">
          <Link to='/'>Home</Link>
          <NavLink
            to="/dashboard/myQueries"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-1 rounded-md transition ${
                isActive ? "bg-white/20 text-yellow-300" : "hover:bg-white/10"
              }`
            }
          >
            <FiFileText /> My Queries
          </NavLink>

          <NavLink
            to="/dashboard/myRecommendation"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-1 rounded-md transition ${
                isActive ? "bg-white/20 text-yellow-300" : "hover:bg-white/10"
              }`
            }
          >
            <FiThumbsUp /> My Recommendations
          </NavLink>

          <NavLink
            to="/dashboard/recommendations"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-1 rounded-md transition ${
                isActive ? "bg-white/20 text-yellow-300" : "hover:bg-white/10"
              }`
            }
          >
            <FiUsers /> Recommendations For Me
          </NavLink>

          <NavLink
            to="/dashboard/addQuery"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-1 rounded-md transition ${
                isActive ? "bg-white/20 text-yellow-300" : "hover:bg-white/10"
              }`
            }
          >
            <FiPlusCircle /> Add Query
          </NavLink>

          <NavLink
            to="/dashboard/allQueries"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-1 rounded-md transition ${
                isActive ? "bg-white/20 text-yellow-300" : "hover:bg-white/10"
              }`
            }
          >
            <AiFillFolderOpen /> All Queries
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 bg-[#FEEBF6] min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
