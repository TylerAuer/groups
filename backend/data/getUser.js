const db = require('../../models');

module.exports = async function getUser(req, res) {
  const userData = await db.GroupUsUser.findOne({
    where: {
      google_id: req.user.google_id,
    },
    attributes: { exclude: ['google_id', 'email', 'last_name'] },
  });

  res.send(userData);
};
