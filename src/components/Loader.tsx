import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-900 bg-opacity-50 absolute top-0 left-0">
      <svg
        className="animate-spin h-20 w-20 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 19.708a7.962 7.962 0 0114.625 0c1.737-3.573 3.143-6.935 4.625-9.291z"
        />
      </svg>
    </div>
  );
};

export default Loader;
