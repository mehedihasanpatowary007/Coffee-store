import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { useContext, useState } from "react";
import { AdminAuthContext } from "../Context/AdminAuthContext";
import { Link, Navigate } from "react-router-dom";

const AdminLogin = () => {
  const { user, setUser } = useContext(AdminAuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if(user){
    return <Navigate to={"/admin"}/>
  }
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => console.log(error));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" flex items-center justify-center min-h-screen ">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md bg-register-bg bg-cover bg-center bg-[#c2b3b4]">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500">Or</div>
        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 10.42h-9.18v3.16h5.44a5.37 5.37 0 0 1-2.31 3.53v2.9h3.73a9.36 9.36 0 0 0 2.32-9.59z" />
            <path d="M12.54 24a11.45 11.45 0 0 0 8-3.23l-3.73-2.9a7.35 7.35 0 0 1-10.82-4.32h-3.83v2.67A11.41 11.41 0 0 0 12.54 24z" />
            <path d="M4.62 14.46A7.39 7.39 0 0 1 3.63 12v-2.68H-.2a11.41 11.41 0 0 0 0 10.3l3.82-2.67a7.36 7.36 0 0 1 2.31-3.53z" />
            <path d="M12.54 4.92a7.08 7.08 0 0 1 4.52 1.65l3.4-3.4A11.47 11.47 0 0 0 0 12v2.68l3.82-2.67a7.37 7.37 0 0 1 10.72-4.33z" />
          </svg>
          Continue with Google
        </button>
        <p className="mt-5 text-xl">
          If you don&apos;t have account{" "}
          <Link className="text-blue-800 underline" to={"/admin/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
