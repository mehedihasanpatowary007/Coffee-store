import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffe/AddCoffee";
import UpdateCoffeeData from "../Pages/Update/UpdateCoffeeData";
import CoffeeDetails from "../Pages/Home/CoffeeDetails";

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
          path: "/add-coffee",
          element: <AddCoffee />,
        },
        {
          path: "/all-coffee/:id",
          element: <CoffeeDetails />,
        },
        {
          path: "/all-coffee/update/:id",
          element: <UpdateCoffeeData />,
          loader: ({params}) => fetch(`http://localhost:5000/all-coffee/${params.id}`),
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
