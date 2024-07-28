import React from 'react'

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h1>
        <p className="text-gray-700">You are being redirected to a random route...</p>
      </div>
    </div>
  )
}

export default Error