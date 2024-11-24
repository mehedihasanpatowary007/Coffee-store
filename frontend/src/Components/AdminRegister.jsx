import { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { AdminAuthContext } from "../Context/AdminAuthContext";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";
const AdminRegister = () => {
  const { user, setUser } = useContext(AdminAuthContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  const googleProvider = new GoogleAuthProvider();

  if(user){
    return <Navigate to={"/admin"} />
  }
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => console.log(error));
  };
  
  const handleRegister = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         updateProfile(auth.currentUser, {
           displayName: name,
           photoURL: image ? image : "https://i.ibb.co.com/gW7Hk54/image.png",
         })
           .then(() => {
             //profile update
             setUser(userCredential.user);
             Swal.fire({
               position: "top-center",
               icon: "success",
               title: "Registration successfully",
               showConfirmButton: false,
               timer: 2000,
             });
             navigate("/")
           })
           .catch((error) => console.log(error));
      })
      .then((error) => console.log(error));

  };
  return (
    <>
      <div className=" flex items-center justify-center min-h-screen my-5 ">
        <div className="p-8 rounded-lg shadow-md w-full max-w-md bg-register-bg bg-cover bg-center bg-[#c2b3b4]">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Your Password"
                required
              />
            </div>
            <div className="flex items-end gap-4 justify-between">
              <div>
                <label className="block text-gray-700" htmlFor="image">
                  Image
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Upload your profile picture"
                  required
                />
              </div>
              <div className="bg-white border border-gray-400 shadow-lg shadow-gray-500 p-0.5">
                <img
                  className="size-14"
                  src={image ? image : "https://i.ibb.co.com/gW7Hk54/image.png"}
                  alt="admin-image"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center text-gray-500">Or</div>
          <button
            onClick={handleGoogleLogin}
            className="mt-4 w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.54 10.42h-9.18v3.16h5.44a5.37 5.37 0 0 1-2.31 3.53v2.9h3.73a9.36 9.36 0 0 0 2.32-9.59z" />
              <path d="M12.54 24a11.45 11.45 0 0 0 8-3.23l-3.73-2.9a7.35 7.35 0 0 1-10.82-4.32h-3.83v2.67A11.41 11.41 0 0 0 12.54 24z" />
              <path d="M4.62 14.46A7.39 7.39 0 0 1 3.63 12v-2.68H-.2a11.41 11.41 0 0 0 0 10.3l3.82-2.67a7.36 7.36 0 0 1 2.31-3.53z" />
              <path d="M12.54 4.92a7.08 7.08 0 0 1 4.52 1.65l3.4-3.4A11.47 11.47 0 0 0 0 12v2.68l3.82-2.67a7.37 7.37 0 0 1 10.72-4.33z" />
            </svg>
            Continue with Google
          </button>
          <p className="mt-5 text-xl text-center">
            Already have an account{" "}
            <Link className="text-blue-800 underline font-bold" to={"/admin/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
