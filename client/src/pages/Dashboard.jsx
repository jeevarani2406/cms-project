import React, { useState } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

export default function Dashboard() {
  const [pets, setPets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);

  const addPet = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]);
    setShowForm(false);
    setShowList(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <header className="bg-white shadow-md rounded-xl p-6 text-center mb-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">🐾 Pet Adoption Dashboard</h1>
        <p className="text-gray-600">Manage your pets for adoption in style!</p>
      </header>

      <div className="flex justify-center gap-6 mb-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow transition-all duration-300"
          onClick={() => {
            setShowForm(true);
            setShowList(false);
          }}
        >
          ➕ Add Pet
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl shadow transition-all duration-300"
          onClick={() => {
            setShowForm(false);
            setShowList(true);
          }}
        >
          🐶 Show Pets
        </button>
      </div>

      <div className="max-w-3xl mx-auto transition-all duration-300">
        {showForm && <PetForm onAddPet={addPet} />}
        {showList && <PetList pets={pets} />}
      </div>
    </div>
  );
}
