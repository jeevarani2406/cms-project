import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PawPrint } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-orange-200 to-yellow-100 shadow-md p-4 flex justify-between items-center rounded-b-xl border-b-4 border-orange-300">
      <Link to="/" className="flex items-center text-2xl font-bold text-orange-600">
        <PawPrint className="mr-2 text-orange-500" /> Pawfect Home
      </Link>
      <div className="flex gap-4 text-md">
        {user ? (
          <>
            <span className="text-gray-800 font-medium">Hello, {user}</span>
            <button onClick={logout} className="px-4 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-all">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-orange-600 hover:underline">Login</Link>
            <Link to="/signup" className="text-orange-600 hover:underline">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}