import { Link, useNavigate } from "react-router-dom";
import animals from "../data/animals.json";
import AnimalCard from "../components/AnimalCard";

const Home = () => {
  const navigate = useNavigate();
  const featuredAnimals = animals.slice(0, 4);

  const handleBreedClick = (breed) => {
    navigate(`/animals?breed=${breed}`);
  };

  return (
    <div className="bg-[#F7F3E8]">
      <section className="px-4 py-10 md:py-16">
        <div className="max-w-7xl mx-auto bg-[#123524] rounded-[32px] overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-14 text-white animate__animated animate__fadeInLeft">
              <span className="inline-block bg-[#F6C453] text-[#123524] px-4 py-2 rounded-full font-bold mb-5">
                QurbaniHat Marketplace
              </span>

              <h1 className="text-4xl md:text-6xl font-black leading-tight animate__animated animate__fadeInUp">
                Premium Livestock Booking for Qurbani
              </h1>

              <p className="mt-5 text-lg text-green-100 animate__animated animate__fadeInUp">
                Explore selected cows and goats with clear price, breed, weight,
                age and location before booking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate__animated animate__fadeInUp">
                <Link
                  to="/animals"
                  className="bg-[#F6C453] text-[#123524] px-7 py-3 rounded-full font-black text-center hover:bg-yellow-400 transition"
                >
                  Browse Animals
                </Link>

                <Link
                  to="/register"
                  className="border border-white/40 px-7 py-3 rounded-full font-bold text-center hover:bg-white hover:text-[#123524] transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            <div className="bg-[#E8D8B5] min-h-[420px] flex items-center justify-center p-8">
              <div className="bg-white rounded-[28px] shadow-xl p-8 w-full max-w-md animate__animated animate__zoomIn">
                <img
                  src="/images/cow1.png"
                  alt="Qurbani Cow"
                  className="w-full h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ["🐄", "Selected Animals", "Premium cows and goats listed with details."],
            ["📍", "Location Based", "Check animal location before booking."],
            ["✅", "Easy Booking", "Login and submit booking form easily."],
          ].map(([icon, title, text]) => (
            <button
              key={title}
              onClick={() => navigate("/animals")}
              className="text-left bg-white rounded-3xl p-7 shadow-md border border-[#E8D8B5] hover:-translate-y-2 hover:shadow-2xl transition-all animate__animated animate__fadeInUp"
            >
              <h3 className="text-4xl mb-3">{icon}</h3>
              <h4 className="text-xl font-black text-[#123524]">{title}</h4>
              <p className="text-gray-600 mt-2">{text}</p>
              <span className="inline-block mt-5 text-[#B87900] font-black">
                Explore Now →
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <p className="text-[#B87900] font-black">Featured Animals</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#123524]">
                Popular Qurbani Collection
              </h2>
            </div>

            <Link
              to="/animals"
              className="bg-[#123524] text-white px-6 py-3 rounded-full font-bold hover:bg-green-900"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 bg-[#F7F3E8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-[#123524] text-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-black text-[#F6C453] mb-5">
              Qurbani Tips
            </h3>
            <ul className="space-y-3 text-lg">
              <li>✔ Healthy and active animal choose করুন।</li>
              <li>✔ চোখ, দাঁত এবং চলাফেরা ভালোভাবে দেখুন।</li>
              <li>✔ বয়স ও ওজন seller থেকে confirm করুন।</li>
              <li>✔ booking করার আগে location check করুন।</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E8D8B5]">
            <h3 className="text-3xl font-black text-[#123524] mb-5">
              Top Breeds
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {["Local Deshi", "Sahiwal", "Black Bengal", "Jamnapari"].map(
                (breed) => (
                  <button
                    key={breed}
                    onClick={() => handleBreedClick(breed)}
                    className="bg-[#F7F3E8] border border-[#E8D8B5] p-4 rounded-2xl text-center font-black text-[#123524] hover:bg-[#123524] hover:text-white transition"
                  >
                    {breed}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;