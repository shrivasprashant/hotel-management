import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/Images/HMS2.jpeg"
import axios from "axios"
import {toast } from "react-hot-toast"
import {  useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/users/login", formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      console.log(res);
      if (res.status === 200 && res.data._id) {
        toast.success("login succcess full")
        navigate("/");
      } else {
        toast.error("Registration failed, please try again.");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setFormData({
      email: "",
      password: "",
    })
  }

  const validateForm = (data) => {
    let errors = {};
    if (!data.email.trim()) {
      errors.email = "Email is required";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="bg-sky-50 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="md:w-[65%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12 w-full md:w-1/2">
          <h2 className="text-3xl text-center py-3 font-extrabold">Login</h2>
          <form onSubmit={handleSubmit} className="py-5">
            <div>
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                className="mt-2 block w-full rounded-md py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block">
                Password:
              </label>
              <input
                className="mt-2 block w-full rounded-md py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white">
                Login
              </button>
              <a href="/signup" className="block text-center mt-4 text-sm text-black">
                I am not a member yet <span className="text-blue-500 m-1 text-md font-bold"><Link to="/Signup">Signup</Link></span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;