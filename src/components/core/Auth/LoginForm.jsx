import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleOnSubmit} className="mt-6 flex flex-col gap-y-4">
        <label className="w-full">
          <p className="mb-1 text-sm leading-5 text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full rounded-md bg-richblack-800 p-3 text-richblack-5 placeholder:text-richblack-400"
          />
        </label>
        <label className="relative w-full">
          <p className="mb-1 text-sm leading-5 text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            className="w-full rounded-md bg-richblack-800 p-3 pr-12 text-richblack-5 placeholder:text-richblack-400"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className="mt-1 text-xs text-blue-100">Forgot Password</p>
          </Link>
        </label>
        <button
          type="submit"
          className="mt-6 rounded-md bg-yellow-50 py-2 px-4 font-medium text-richblack-900"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
