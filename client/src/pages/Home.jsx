import { PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-orange-100 to-yellow-50 px-4">
      <div className="text-center p-10 bg-white rounded-2xl shadow-xl border border-orange-200 max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-4">Welcome to Pawfect Home</h1>
        <p className="text-lg text-gray-700 mb-6">Find your perfect pet companion today! 🐾</p>
        
        <PawPrint className="mx-auto w-12 h-12 text-orange-400 animate-bounce mb-6" />

        <Link to="/signup">
          <button className="relative px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg transition-transform hover:scale-105 hover:bg-orange-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300">
            Get Started
            <span className="absolute inset-0 rounded-full animate-pulse bg-orange-400 opacity-20 z-[-1]"></span>
          </button>
        </Link>
      </div>
    </div>
  );
}
