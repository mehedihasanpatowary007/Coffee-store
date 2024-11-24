
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default AdminPanel;
