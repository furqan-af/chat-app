
import React from 'react';
import { useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {

    const { setAuthState } = useAuth()
    const navigate = useNavigate()
    const logout = () => {
        axios.post("/api/auth/logout")
        setAuthState({ isAuthenticated: false, token: null });
        navigate("/login")
    }
    return (
        <div className='bg-gray-900 mt-20 text-white'>
            <h2>I Am dashboard</h2>

            <button onClick={logout} type="button" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>

        </div>
    );
};

export default Dashboard;
