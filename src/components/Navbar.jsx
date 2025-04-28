import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-full h-16 bg-gradient-to-r from-green-400 to-gray-500 text-white shadow flex items-center justify-between px-6">
      
      {/* Sidebar Toggle Button and Title */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="text-3xl focus:outline-none hover:scale-110 transform transition-transform duration-300"
        >
          ☰
        </button>
        <div className="font-bold text-2xl tracking-wide">Dashboard</div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 hover:scale-105 shadow-md text-white px-5 py-2 rounded-md transition-all transform duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
