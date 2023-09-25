// User profile controller
exports.getUserProfile = (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated.
};
