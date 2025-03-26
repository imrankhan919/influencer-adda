const getComments = async (req, res) => {
  res.send("All Comments");
};

const addComment = async (req, res) => {
  res.send("Comment Added");
};

module.exports = { getComments, addComment };
