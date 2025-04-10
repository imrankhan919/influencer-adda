import axios from "axios";

const fetchInfluencers = async () => {
  const response = await axios.get("/api/influencers");
  return response.data;
};

const influencerService = { fetchInfluencers };

export default influencerService;
