import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authClient } from "../lib/auth-client";

const UpdateProfile = () => {
  const { data: session } = authClient.useSession();
  const navigate = useNavigate();

  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }

    toast.success("Profile updated successfully");
    navigate("/my-profile");
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full space-y-4"
      >
        <h2 className="text-3xl font-bold text-green-700 text-center">
          Update Information
        </h2>

        <input
          type="text"
          placeholder="New Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <input
          type="url"
          placeholder="New Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <button
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;