import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { UserPlus, Edit2 } from "lucide-react";
import Loader from "../Loader";
import { getAllInfluencersForAdmin } from "../../features/admin/adminSlice";

const InfluencersListAdmin = () => {
  const { influencers, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInfluencersForAdmin());

    if (isError && message) {
      toast.error(message, { position: "top-center" });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

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
                Instagram Handle
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
                  @{influencer.instagram_handle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {influencer.niche}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {influencer.followers}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      influencer.isActive === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {influencer.isActive ? "Active" : "Not Available"}
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
