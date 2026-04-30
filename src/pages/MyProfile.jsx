import { Link } from "react-router-dom";
import { authClient } from "../lib/auth-client";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const user = session?.user;

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <img
          src={user?.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
          alt={user?.name}
          className="w-28 h-28 rounded-full mx-auto object-cover border"
        />

        <h2 className="text-2xl font-bold text-green-700 mt-4">
          {user?.name}
        </h2>

        <p className="text-gray-600 mt-2">{user?.email}</p>

        <Link
          to="/update-profile"
          className="inline-block mt-6 bg-green-600 text-white px-5 py-3 rounded-lg font-semibold"
        >
          Update Information
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;