import { Users, MapPin, Filter } from "lucide-react";

const SearchSection = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Find Your Perfect{" "}
          <span className="text-purple-600">Influencer Match</span>
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option value="">Select Location</option>
                <option value="us">United States</option>
                <option value="eu">Europe</option>
                <option value="asia">Asia</option>
              </select>
            </div>
            <div className="relative">
              <Filter
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option value="">Select Niche</option>
                <option value="fashion">Fashion</option>
                <option value="tech">Technology</option>
                <option value="health">Health & Fitness</option>
              </select>
            </div>
            <div className="relative">
              <Users
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option value="">Followers Range</option>
                <option value="micro">10K - 50K</option>
                <option value="mid">50K - 500K</option>
                <option value="macro">500K+</option>
              </select>
            </div>
          </div>
          <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold">
            Search Influencers
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
