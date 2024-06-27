import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/Images/HMS2.jpeg";
import axios from "axios"
import {  useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    mobileNumber: "",
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
      const res = await axios.post("http://localhost:5000/users/register", formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      if (res.data.success) {
        navigate("/")
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setFormData({
      Name: "",
      email: "",
      password: "",
      mobileNumber: "",
    })
  }
  const validateForm = (data) => {
    let errors = {};
    if (!data.Name.trim()) {
      errors.Name = "Full name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    }
    if (!data.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        ></div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl text-center font-extrabold pt-5">Registration Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="Name" className="block text-md font-medium text-gray-900">
                Name:
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-black py-2 px-3 shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
              />
              {errors.Name && <span className="text-red-500 text-sm">{errors.Name}</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-900">
                Email:
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-black py-2 px-3 shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block text-md font-medium text-gray-900">
                Mobile Number:
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-black py-2 px-3 shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber}</span>}
            </div>
            <div>
              <label htmlFor="password" className="block text-md font-medium text-gray-900">
                Password:
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-black py-2 px-3 shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-8 py-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white"
              >
                Register
              </button>
              <a href="/login" className="text-sm text-black">
                I am already a member <span className="text-sky-500 text-md mx-1 font-bold"><Link to="/signin">Login</Link></span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;