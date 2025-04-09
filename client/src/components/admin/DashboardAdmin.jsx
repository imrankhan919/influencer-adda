import React from "react";

const DashboardAdmin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">
          Total Influencers
        </h3>
        <p className="text-3xl font-bold text-purple-600 mt-2">1,234</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">Active Bookings</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">56</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">892</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">New Comments</h3>
        <p className="text-3xl font-bold text-orange-600 mt-2">28</p>
      </div>
    </div>
  );
};

export default DashboardAdmin;
