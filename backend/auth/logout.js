module.exports = function logout(req, res) {
  req.logout();
  res.send('Successfully logged out');
};
