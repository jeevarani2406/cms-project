import React from "react";

export default function PetList({ pets }) {
  return (
    <div className="space-y-6">
      {pets.map((pet, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row items-center gap-4 transition-transform duration-300 hover:scale-[1.02]"
        >
          {pet.image ? (
            <img
              src={pet.image}
              alt={pet.name}
              className="w-32 h-32 object-cover rounded-lg border"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg">
              No Image
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-800">{pet.name}</h2>
            <p className="text-gray-600">Breed: {pet.breed}</p>
            <p className="text-gray-600">Age: {pet.age}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
