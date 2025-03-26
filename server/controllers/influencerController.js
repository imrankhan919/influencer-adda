const getInfluencers = async (req, res) => {
  res.send("All Influencers");
};

const getInfluencer = async (req, res) => {
  res.send("Single Influencer");
};

const searchInfluencer = async (req, res) => {
  res.send("Search Influencer");
};

module.exports = { getInfluencers, getInfluencer, searchInfluencer };
