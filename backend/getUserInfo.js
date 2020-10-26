const db = require('../models');

module.exports = async function getUserInfo(req, res) {
  const { id, first_name, profile_pic } = await db.GroupUsUser.findOne({
    where: {
      google_id: req.user,
    },
  });

  res.send({ id, first_name, profile_pic });
};
