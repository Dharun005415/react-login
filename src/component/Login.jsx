import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordView = () => setShowPassword(!showPassword);

  function handleemail(evt) 
  {
    setEmail(evt.target.value)

    
  }

  function handlepassword(evt) 
  {
    setPassword(evt.target.value)
    
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="w-[90%] max-w-sm md:max-w-md p-5 bg-gray-900 flex flex-col items-center gap-4 rounded-xl shadow-lg shadow-slate-500">
        <img src="/logo.png" alt="logo" className="w-12 md:w-14" />
        <h1 className="text-lg md:text-xl font-semibold text-white">Welcome Back</h1>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Don't have an account? <span className="text-white cursor-pointer hover:underline">Sign up</span>
        </p>
        <form action="http://localhost:3000/"method="post">

          <div className="w-full flex flex-col gap-3">
            {/* Email Input */}
            <div className="w-full bg-gray-800 p-2 rounded-xl relative">
              <MdAlternateEmail className="absolute left-3 top-3 text-white text-lg" />
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                value={email}
                onChange={handleemail}
                email="email"
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white placeholder-gray-400 pl-10"
                required
              />
            </div>

            {/* Password Input */}
            <div className="w-full bg-gray-800 p-2 rounded-xl relative">
              <FaFingerprint className="absolute left-3 top-3 text-white text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={handlepassword}
                password="password"
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white placeholder-gray-400 pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordView}
                className="absolute right-3 top-3 text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>

          <button
            className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm md:text-base text-white"
            aria-label="Login"
          >
            Login
          </button>
        </form>

        <div className="relative w-full flex items-center justify-center py-3">
          <div className="w-2/5 h-[2px] bg-gray-800"></div>
          <h3 className="text-xs md:text-sm px-4 text-gray-500">Or</h3>
          <div className="w-2/5 h-[2px] bg-gray-800"></div>
        </div>

        <div className="w-full flex items-center justify-evenly md:justify-between gap-2">
          {/* Apple Login */}
          <button
            type="button"
            aria-label="Login with Apple"
            className="p-2 md:px-6 lg:px-10 bg-slate-700 rounded-xl hover:bg-slate-800 text-white"
          >
            <BsApple className="text-lg md:text-xl" />
          </button>

          {/* Google Login */}
          <button
            type="button"
            aria-label="Login with Google"
            className="p-1 md:px-6 lg:px-10 bg-slate-700 rounded-xl hover:bg-slate-800"
          >
            <img src="/google-icon.png" alt="Google icon" className="w-6 md:w-8" />
          </button>

          {/* Twitter Login */}
          <button
            type="button"
            aria-label="Login with Twitter"
            className="p-2 md:px-6 lg:px-10 bg-slate-700 rounded-xl hover:bg-slate-800 text-white"
          >
            <FaXTwitter className="text-lg md:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;