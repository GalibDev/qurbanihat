import { Link } from "react-router-dom";

const AnimalCard = ({ animal }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-green-100">
      <div className="bg-gradient-to-br from-green-50 to-amber-50 h-56 flex items-center justify-center overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="h-48 w-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            {animal.category}
          </span>
          <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">
            {animal.type}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-green-900 mb-2">
          {animal.name}
        </h3>

        <div className="space-y-1 text-gray-600">
          <p>Breed: {animal.breed}</p>
          <p>Weight: {animal.weight} kg</p>
          <p>Location: {animal.location}</p>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className="text-2xl font-extrabold text-amber-600">
            ৳{animal.price}
          </p>

          <Link
            to={`/details-page/${animal.id}`}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full font-semibold"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;