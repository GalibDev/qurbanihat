import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authClient } from "../lib/auth-client";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Login failed");
        return;
      }

      toast.success("Login successful");
       window.location.href = "/";
    } catch (err) {
      console.log("LOGIN ERROR:", err);
      toast.error("Server error");
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
      console.log("GOOGLE LOGIN ERROR:", err);
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-amber-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
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
          New here?{" "}
          <Link to="/register" className="text-green-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;