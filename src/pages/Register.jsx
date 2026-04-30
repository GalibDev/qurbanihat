import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authClient } from "../lib/auth-client";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (error) {
        toast.error(error.message || "Registration failed");
        return;
      }

      toast.success("Registration successful");
      navigate("/login");
    } catch (err) {
      console.log("REGISTER ERROR:", err);
      toast.error("Server error. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-amber-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            name="image"
            type="text"
            placeholder="Photo URL e.g. /images/my-photo.png"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            name="password"
            type="password"
            placeholder="Password minimum 8 characters"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-4 border py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;