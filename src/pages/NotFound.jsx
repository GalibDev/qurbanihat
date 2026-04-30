import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-8xl font-bold text-green-700">404</h1>
        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-3">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;