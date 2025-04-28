import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardContent from "../components/DashboardContent"; // yaha import karna hai


const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {isSidebarOpen && <Sidebar />}

      <div className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
          <DashboardContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
