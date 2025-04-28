import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 h-screen bg-gray-800 text-white p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-50`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Dynamic</h2>
        <button className="text-2xl" onClick={toggleSidebar}>×</button>
      </div>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Dashboard</Link>
        <Link to="/widgets" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Widgets</Link>
        <Link to="/settings" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
