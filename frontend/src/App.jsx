import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import "react-toastify/dist/ReactToastify.css";
import AdminAuthProvider from "./Providers/AdminAuthProvider";

const App = () => {
  return (
    <AdminAuthProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </AdminAuthProvider>
  );
};

export default App;
