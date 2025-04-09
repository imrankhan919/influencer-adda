import { useState } from "react";
import DashboardAdmin from "../components/admin/DashboardAdmin";
import InfluencersListAdmin from "../components/admin/InfluencersListAdmin";
import BookingListAdmin from "../components/admin/BookingListAdmin";
import CommentsListAdmin from "../components/admin/CommentsListAdmin";
import SidebarAdmin from "../components/admin/SidebarAdmin";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SidebarAdmin activeTab={activeTab} handleTabChange={handleTabChange} />
      <main className="flex-1">
        <div className="p-8">
          {activeTab === "dashboard" && <DashboardAdmin />}
          {activeTab === "influencers" && <InfluencersListAdmin />}
          {activeTab === "bookings" && <BookingListAdmin />}
          {activeTab === "comments" && <CommentsListAdmin />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
