import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import animalsData from "../data/animals.json";
import AnimalCard from "../components/AnimalCard";

const AllAnimals = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedBreed = queryParams.get("breed");

  const [sortType, setSortType] = useState("");

  const animals = useMemo(() => {
    let filteredAnimals = selectedBreed
      ? animalsData.filter((animal) =>
          animal.breed.toLowerCase().includes(selectedBreed.toLowerCase())
        )
      : animalsData;

    if (sortType === "low") {
      filteredAnimals = [...filteredAnimals].sort((a, b) => a.price - b.price);
    }

    if (sortType === "high") {
      filteredAnimals = [...filteredAnimals].sort((a, b) => b.price - a.price);
    }

    return filteredAnimals;
  }, [selectedBreed, sortType]);

  return (
    <div className="min-h-screen bg-[#F7F3E8] px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-[#B87900] font-bold">Livestock Collection</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#123524]">
              {selectedBreed ? `${selectedBreed} Animals` : "All Animals"}
            </h2>
          </div>

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border border-[#E8D8B5] px-5 py-3 rounded-full bg-[#F7F3E8] font-semibold outline-none"
          >
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        {animals.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow">
            <h3 className="text-2xl font-black text-[#123524]">
              No animals found
            </h3>
            <p className="text-gray-600 mt-2">
              Please choose another breed or view all animals.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAnimals;