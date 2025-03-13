import React from "react";

const Modal = ({ message, type, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-md">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 relative">
        {/* Close Button (X) */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 cursor-pointer text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Message */}
        <p
          className={`text-lg text-center font-medium ${
            type=="success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Modal;
