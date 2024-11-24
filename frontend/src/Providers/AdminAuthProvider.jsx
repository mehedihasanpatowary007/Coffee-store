import { useEffect, useState } from "react";
import { AdminAuthContext } from "../Context/AdminAuthContext";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
const AdminAuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  } , []);
  const value = {
    user,
    setUser,
    products,
    setProducts,
    loading,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
AdminAuthProvider.propTypes = {
  children: PropTypes.any,
};
