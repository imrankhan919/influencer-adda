import { CalendarDays, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';


const Profile = () => {

    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()



    const bookings = [
        {
            id: 1,
            service: 'Spa Treatment',
            date: '2024-03-25',
            time: '10:00 AM',
            status: 'upcoming',
        },
        {
            id: 2,
            service: 'Yoga Class',
            date: '2024-03-22',
            time: '2:00 PM',
            status: 'completed',
        },
        {
            id: 3,
            service: 'Massage Therapy',
            date: '2024-03-20',
            time: '3:30 PM',
            status: 'completed',
        },
    ];


    useEffect(() => {
        if (!user) {
            navigate("/login")
        }

        if (isError && message) {
            toast.error(message)
        }
    }, [user, isError, message])


    if (isLoading) {
        return <Loader />
    }


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center gap-6">
                        <div className="relative h-20 w-20 rounded-full overflow-hidden bg-gray-200">
                            <img
                                src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'
                                alt={user?.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                            <div className="mt-2 flex items-center space-x-6">
                                <div className="flex items-center text-gray-600">
                                    <Mail className="h-5 w-5 mr-2" />
                                    {user.email}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Overview</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Member since</span>
                                    <span className="text-gray-900">{new Date(user.memberSince).toLocaleDateString('en-IN')}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Total bookings</span>
                                    <span className="text-gray-900">{bookings.length}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Upcoming bookings</span>
                                    <span className="text-gray-900">
                                        {bookings.filter(b => b.status === 'upcoming').length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bookings Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Your Bookings</h2>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {bookings.map((booking) => (
                                    <a
                                        key={booking.id}
                                        href={`/booking/${booking.id}`}
                                        className="block p-6 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <CalendarDays className="h-6 w-6 text-gray-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-medium text-gray-900">
                                                        {booking.service}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {booking.date} at {booking.time}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <span
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${booking.status === 'upcoming'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-gray-100 text-gray-800'
                                                        }`}
                                                >
                                                    {booking.status}
                                                </span>
                                                <span className="text-gray-400 hover:text-gray-600">→</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile
