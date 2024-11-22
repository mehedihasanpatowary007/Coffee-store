import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  );
};

export default App;
