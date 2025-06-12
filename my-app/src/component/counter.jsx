import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Simple Counter</h1>
        <p className="text-5xl font-extrabold text-indigo-600 mb-6">{count}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-xl shadow-md transition"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-xl shadow-md transition"
          >
            -
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg text-xl shadow-md transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
