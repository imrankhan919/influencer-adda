import React, { useState } from "react";
import { UserPlus, Edit2 } from "lucide-react";

const InfluencersListAdmin = () => {
  // Mock data
  const initialInfluencers = [
    {
      id: 1,
      name: "John Doe",
      category: "Lifestyle",
      followers: "100K",
      status: "active",
      email: "john@example.com",
      bio: "Lifestyle blogger and content creator",
    },
    {
      id: 2,
      name: "Jane Smith",
      category: "Fashion",
      followers: "500K",
      status: "pending",
      email: "jane@example.com",
      bio: "Fashion enthusiast and trendsetter",
    },
  ];

  const [influencers, setInfluencers] = useState(initialInfluencers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Influencers</h2>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Add Influencer
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Followers
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {influencers.map((influencer) => (
              <tr key={influencer.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {influencer.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {influencer.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {influencer.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {influencer.followers}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      influencer.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {influencer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleOpenModal(influencer)}
                    className="text-purple-600 hover:text-purple-900"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfluencersListAdmin;
