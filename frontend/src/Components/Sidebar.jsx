import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/admin"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/all-coffee"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          All Product
        </Link>
        <Link
          to="/admin/add-coffee"
          className="block px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Add Product
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
