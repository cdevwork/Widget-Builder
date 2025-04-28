import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">Dynamic</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
          Kanban Board
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
