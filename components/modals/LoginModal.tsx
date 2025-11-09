// LoginModal.jsx
import React from "react";
import LoginForm from "../Forms/LoginForm";


const LoginModal = ({ onClose }:any) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginModal;
