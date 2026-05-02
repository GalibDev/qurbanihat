import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const savedUser = localStorage.getItem("qurbanihat-user")
    ? JSON.parse(localStorage.getItem("qurbanihat-user"))
    : null;

  const [name, setName] = useState(savedUser?.name || "");
  const [image, setImage] = useState(savedUser?.image || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!savedUser) {
      toast.error("Unauthorized");
      return;
    }

    const updatedUser = {
      ...savedUser,
      name,
      image,
    };

    localStorage.setItem("qurbanihat-user", JSON.stringify(updatedUser));

    toast.success("Profile updated successfully");
    window.location.href = "/my-profile";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-amber-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Update Information
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full border px-4 py-3 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            required
            className="w-full border px-4 py-3 rounded-lg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;