// pages/DashboardHome.jsx
import { useContext, useEffect, useState } from "react";
import { FiFileText, FiThumbsUp, FiUsers } from "react-icons/fi";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    queries: 0,
    recommendations: 0,
    received: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("access-token");
        const res = await axios.get("http://localhost:5000/dashboard-stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStats(res.data);
      } catch (error) {
        console.error("Dashboard stats fetch error", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-3xl font-bold text-gray-700 ">
        Welcome back, {user?.displayName || "User"} 👋
      </h2>
      <p className="text-black ">
        Here's a quick overview of your activity.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="p-5 glass-table shadow rounded-xl flex items-center gap-4">
          <FiFileText className="text-3xl text-teal-500" />
          <div>
            <p className="text-xl font-semibold">{stats.queries}</p>
            <p className="text-sm text-gray-500">Total Queries</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-5 glass-table shadow rounded-xl flex items-center gap-4">
          <FiThumbsUp className="text-3xl text-teal-500" />
          <div>
            <p className="text-xl font-semibold">{stats.recommendations}</p>
            <p className="text-sm text-gray-500">Given Recommendations</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-5 glass-table shadow rounded-xl flex items-center gap-4">
          <FiUsers className="text-3xl text-teal-500" />
          <div>
            <p className="text-xl font-semibold">{stats.received}</p>
            <p className="text-sm text-gray-500">Recommendations For You</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
