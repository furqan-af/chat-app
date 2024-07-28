import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useAuth } from '../context/AuthContext';
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
const navigate = useNavigate()
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const {setAuthState} = useAuth()

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (validateForm()) {
        try {
          const response = await axios.post("/api/auth/register", formData);
          if (response.status === 201) {
            setAuthState({ isAuthenticated: true, token: response.data.token });
            navigate("/dashboard");
          } else {
            alert("Login failed. Please try again.");
          }
        } catch (error) {
          console.error('An error occurred during login:', error);
          alert("An error occurred. Please try again.");
        }
      }
  };
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp
