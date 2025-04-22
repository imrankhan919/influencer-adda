import axios from "axios";

const fetchUserBookings = async (token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get("/api/booking", options);
    return response.data;

}


const requestBooking = async (id, token) => {

    console.log(id, token)

    const options = {
        headers: {
            authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`/api/booking/${id}`, {}, options)
    console.log(response.data)
    return response.data

}



const bookingService = { fetchUserBookings, requestBooking };

export default bookingService;
