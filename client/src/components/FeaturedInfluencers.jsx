const FeaturedInfluencers = () => {
  const featuredInfluencers = [
    {
      id: 1,
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      followers: "1.2M",
      niche: "Lifestyle & Fashion",
      engagement: "4.8%",
    },
    {
      id: 2,
      name: "David Chen",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      followers: "850K",
      niche: "Tech & Gaming",
      engagement: "5.2%",
    },
    {
      id: 3,
      name: "Emma Davis",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      followers: "2M",
      niche: "Health & Wellness",
      engagement: "3.9%",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured <span className="text-purple-600">Influencers</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredInfluencers.map((influencer) => (
            <div
              key={influencer.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {influencer.name}
                    </h3>
                    <p className="text-purple-600">{influencer.niche}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600">Followers</p>
                    <p className="text-lg font-semibold text-purple-600">
                      {influencer.followers}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Engagement</p>
                    <p className="text-lg font-semibold text-green-500">
                      {influencer.engagement}
                    </p>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInfluencers;
