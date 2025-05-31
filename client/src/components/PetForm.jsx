import React, { useState } from "react";

export default function PetForm({ onAddPet }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    image: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.breed && formData.age) {
      onAddPet(formData);
      setFormData({ name: "", breed: "", age: "", image: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg space-y-4 transition-all duration-500"
    >
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Add a New Pet 🐕</h2>

      <input
        name="name"
        placeholder="Pet Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="breed"
        placeholder="Breed"
        value={formData.breed}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="image"
        placeholder="Image URL (optional)"
        value={formData.image}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-3 rounded-xl shadow transition duration-300"
      >
        Submit Pet
      </button>
    </form>
  );
}
