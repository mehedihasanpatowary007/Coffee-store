import { useContext } from "react";
import { AdminAuthContext } from "../Context/AdminAuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AdminAuthContext);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className=" text-5xl">Loading.....</h1>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/admin/login"} />;
  }
};

export default ProtectedRoute;
ProtectedRoute.propTypes = {
    children: PropTypes.any
}
