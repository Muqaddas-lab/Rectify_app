import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin, logout } from '../redux/slices/authSlice';

function AuthComponent() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-center border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800">
        {isAuth ? "Welcome Back!" : "Please Login"}
      </h2>

      <p className="text-gray-600">
        Status:{" "}
        <span className={`font-semibold ${isAuth ? 'text-green-600' : 'text-red-500'}`}>
          {isAuth ? "Logged In" : "Logged Out"}
        </span>
      </p>

      <button
        onClick={() => dispatch(isAuth ? logout() : signin())}
        className={`px-4 py-2 rounded-lg text-white font-semibold ${
          isAuth ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        } transition duration-200`}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default AuthComponent;
