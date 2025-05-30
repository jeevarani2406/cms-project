import React from "react";
import { useAuth } from "../context/AuthContext";
import { PawPrint } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-10 text-center bg-white rounded-xl shadow-xl max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">🐶 Dashboard</h2>
      <p className="text-lg text-gray-800">Hello, <span className="font-semibold text-orange-700">{user}</span>! Here's your pet adoption dashboard.</p>
      <div className="mt-6">
        <PawPrint className="mx-auto w-10 h-10 text-orange-300" />
      </div>
    </div>
  );
}