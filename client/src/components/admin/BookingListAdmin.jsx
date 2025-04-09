import {
  Users,
  UserPlus,
  MessageSquare,
  Calendar,
  LayoutDashboard,
  ChevronDown,
  Search,
  Bell,
  LogOut,
  X,
  Edit2,
} from "lucide-react";
import { useState } from "react";

const BookingListAdmin = () => {
  const bookings = [
    {
      id: 1,
      influencer: "John Doe",
      client: "Brand X",
      date: "2024-03-20",
      status: "pending",
    },
    {
      id: 2,
      influencer: "Jane Smith",
      client: "Brand Y",
      date: "2024-03-21",
      status: "completed",
    },
  ];

  const [selectedBooking, setSelectedBooking] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Bookings</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Influencer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
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
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {booking.influencer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {booking.client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      booking.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    className="text-sm border rounded-md px-2 py-1"
                    onChange={(e) =>
                      updateBookingStatus(booking.id, e.target.value)
                    }
                    value={booking.status}
                  >
                    <option value="pending">Pending</option>
                    <option value="accepted">Accept</option>
                    <option value="rejected">Reject</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingListAdmin;
