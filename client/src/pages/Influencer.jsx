import { Calendar, MapPin, Users, Star, TrendingUp, Clock, Mail, Instagram } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import { getInfluencer } from '../features/influencers/influencerSlice';

const Influencer = () => {

    const { influencer, isLoading, isSuccess, isError, message } = useSelector(state => state.influencer)

    const dispatch = useDispatch()
    const { id } = useParams()


    useEffect(() => {

        dispatch(getInfluencer(id))

        if (isError && message) {
            toast.error(message)
        }

    }, [isError, message])


    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        {/* Profile Image */}
                        <div className="lg:w-1/3">
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                                <img
                                    src={influencer.profilePic}
                                    alt={influencer.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="lg:w-2/3 space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900">{influencer.name}</h1>
                                <p className="text-xl text-purple-600 mt-2">{influencer.type}</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center text-gray-700">
                                    <Users className="h-5 w-5 mr-2" />
                                    <span className="font-semibold">{influencer.followers}</span>
                                    <span className="ml-1">followers</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <Instagram className="h-5 w-5 mr-2" />
                                    <span className="capitalize">{influencer.instagram_handle}</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <MapPin className="h-5 w-5 mr-2" />
                                    <span className="capitalize">{influencer.location}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg">Booking Amount : INR {influencer.rate}/event</p>
                            <p className="text-gray-600 text-lg">Bio : Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dicta ab, illo praesentium in quam nulla aliquid esse voluptatibus ullam magni eveniet impedit dolore quas? Praesentium dicta obcaecati amet voluptatibus!</p>

                            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg">
                                Request Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4">
                            <TrendingUp className="h-8 w-8 text-purple-600" />
                            <div>
                                <p className="text-sm text-gray-500">Average Views</p>
                                <p className="text-2xl font-bold text-gray-900">{influencer.stats.avgViews}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4">
                            <Users className="h-8 w-8 text-purple-600" />
                            <div>
                                <p className="text-sm text-gray-500">Engagement Rate</p>
                                <p className="text-2xl font-bold text-gray-900">{influencer.stats.engagementRate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4">
                            <Clock className="h-8 w-8 text-purple-600" />
                            <div>
                                <p className="text-sm text-gray-500">Response Time</p>
                                <p className="text-2xl font-bold text-gray-900">{influencer.stats.responseTime}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4">
                            <Star className="h-8 w-8 text-purple-600" />
                            <div>
                                <p className="text-sm text-gray-500">Rating</p>
                                <p className="text-2xl font-bold text-gray-900">{influencer.stats.rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    );

}

export default Influencer
