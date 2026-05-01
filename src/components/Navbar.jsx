import { Link, NavLink } from "react-router-dom";
import { authClient } from "../lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-amber-300 font-bold"
      : "text-white/90 hover:text-amber-300 font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-[#123524]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🐄</span>
          <span className="text-2xl font-extrabold text-white">
            Qurbani<span className="text-amber-300">Hat</span>
          </span>
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-5">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/animals" className={linkClass}>
            All Animals
          </NavLink>

          {!isPending && session?.user ? (
            <>
              <NavLink to="/my-profile" className={linkClass}>
                My Profile
              </NavLink>

              <img
                src={session.user.image || "/images/goat1.png"}
                alt="user"
                className="w-10 h-10 rounded-full object-cover border-2 border-amber-300"
              />

              <button
                onClick={handleLogout}
                className="bg-amber-400 hover:bg-amber-500 text-green-950 px-4 py-2 rounded-full font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            !isPending && (
              <>
                <NavLink to="/login" className={linkClass}>
                  Login
                </NavLink>

                <Link
                  to="/register"
                  className="bg-amber-400 hover:bg-amber-500 text-green-950 px-5 py-2 rounded-full font-bold"
                >
                  Register
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;