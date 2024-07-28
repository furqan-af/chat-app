import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6'>
      <h1 className='text-3xl font-bold mb-4 text-center'>
        Welcome to ChatMaster
      </h1>
      <p className='text-base max-w-md text-center mb-6'>
        The ultimate solution for all your messaging needs. Connect with friends, collaborate with colleagues, or build communities. Experience seamless and secure communication anytime, anywhere.
      </p>

      <div className='text-center mb-6'>
        <h2 className='text-xl font-semibold mb-4'>Features:</h2>
        <ul className='list-disc list-inside'>
          <li className='mb-2'>Real-time messaging with instant notifications.</li>
          <li className='mb-2'>Secure and encrypted communications.</li>
          <li className='mb-2'>Group chats and collaboration tools.</li>
          <li className='mb-2'>Customizable themes and settings.</li>
        </ul>
      </div>

      <div className='flex flex-col sm:flex-row sm:space-x-4'>
        <Link to="/signup" className='w-full sm:w-auto'>
          <button className='w-full sm:w-48 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 sm:mb-0'>
            Register
          </button>
        </Link>
        <Link to="/login" className='w-full sm:w-auto'>
          <button className='w-full sm:w-48 bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400'>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
