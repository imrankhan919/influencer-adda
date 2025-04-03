const asyncHandler = require("express-async-handler");
const Influencer = require("../models/influencerModel");

const getInfluencers = asyncHandler(async (req, res) => {
  const influencers = await Influencer.find();

  if (!influencers) {
    res.status(404);
    throw new Error("Influencers Not Fond!");
  }

  res.status(200).json(influencers);
});

const getInfluencer = async (req, res) => {
  const influencer = await Influencer.findById(req.params.id);

  if (!influencer) {
    res.status(404);
    throw new Error("Influencer Not Fond!");
  }

  res.status(200).json(influencer);
};

const searchInfluencer = async (req, res) => {
  res.send("Search Influencer");
};

module.exports = { getInfluencers, getInfluencer, searchInfluencer };
