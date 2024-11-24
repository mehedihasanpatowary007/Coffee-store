import { useContext } from "react";
import coffeeMug from "../assets/images/more/logo1.png";
import { AdminAuthContext } from "../Context/AdminAuthContext";
import { GoSignOut } from "react-icons/go";
import { signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(AdminAuthContext);
  const handleLogout = () => {
    signOut(auth).then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logout successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }).catch(error => console.log(error))
  };
  return (
    <div className="bg-navbar-bg h-[80px] w-full object-cover bg-center ">
      <div className="w-[90%] mx-auto flex items-end justify-between">
        <Link to={"/"} className="flex items-center gap-3">
          <img width={55} height={70} src={coffeeMug} alt="coffee-img" />
          <h1 className="text-4xl text-white">Espresso Emporium</h1>
        </Link>
        {user && (
          <label
            htmlFor="profileImg"
            className=" relative rounded-full cursor-pointer border-2 border-white object-cover"
          >
            <input
              type="checkbox"
              className="peer hidden"
              name="profileImg"
              id="profileImg"
            />
            <img
              className="size-10 rounded-full"
              src={
                user ? user.photoURL : "https://i.ibb.co.com/gW7Hk54/image.png"
              }
              alt=""
            />
            <div className="absolute top-[125%] -right-9 hidden peer-checked:block bg-gray-400 p-3 space-y-1 min-w-60">
              <h1 className="text-xl font-bold text-nowrap">
                {user?.displayName}
              </h1>
              <p className="text-base ">{user?.email}</p>
              <div className="flex justify-end">
                <button
                  onClick={handleLogout}
                  className="text-xl bg-white p-2 rounded-full"
                >
                  <GoSignOut />
                </button>
              </div>

              <div className="absolute -top-2 right-12 size-4 bg-gray-400 rotate-45"></div>
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default Navbar;
