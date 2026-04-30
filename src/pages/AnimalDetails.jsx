import { useParams } from "react-router-dom";
import animals from "../data/animals.json";
import { useState } from "react";
import toast from "react-hot-toast";

const AnimalDetails = () => {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === parseInt(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Booking successful!");

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  if (!animal) {
    return <h2 className="text-center mt-10">Animal not found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-80 object-contain bg-gray-100 rounded-xl"
        />

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {animal.name}
          </h2>

          <p><b>Type:</b> {animal.type}</p>
          <p><b>Breed:</b> {animal.breed}</p>
          <p><b>Weight:</b> {animal.weight} kg</p>
          <p><b>Age:</b> {animal.age} years</p>
          <p><b>Location:</b> {animal.location}</p>
          <p className="my-3">{animal.description}</p>
          <p className="text-xl font-bold">Price: ৳{animal.price}</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-10 bg-green-50 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Book This Animal</h3>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-3 rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="border p-3 rounded"
            required
          />

          <button className="bg-green-600 text-white py-3 rounded font-semibold">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnimalDetails;