import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffe/AddCoffee";
import UpdateCoffeeData from "../Pages/Update/UpdateCoffeeData";
import CoffeeDetails from "../Pages/Home/CoffeeDetails";
import AdminRegister from "../Components/AdminRegister";
import AdminPanel from "../Components/AdminPanel";
import Dashboard from "../Components/Dashboard";
import AllProduct from "../Components/AllProduct";
import ProtectedRoute from "../Private/ProtectedRoute";
import AdminLogin from "../Components/AdminLogin";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/all-coffee/:id",
          element: <CoffeeDetails />,
        },
        {
          path: "/admin/register",
          element: <AdminRegister />,
        },
        {
          path:"/admin/login",
          element:<AdminLogin/>
        },
        {
          path: "/admin",
          element: (
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "/admin/add-coffee",
              element: <AddCoffee />,
            },
            {
              path: "/admin",
              element: <Dashboard />,
            },
            {
              path: "/admin/all-coffee",
              element: <AllProduct />,
            },
            {
              path: "/admin/all-coffee/update/:id",
              element: <UpdateCoffeeData />,
              loader: ({ params }) =>
                fetch(`http://localhost:5000/all-coffee/${params.id}`),
            },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
    },
  }
);
