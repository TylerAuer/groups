const db = require('../../models');

module.exports = async function getDataForSection(req, res) {
  const userData = await db.GroupUsUser.findOne({
    where: {
      google_id: req.user,
    },
    attributes: { exclude: ['google_id', 'email', 'last_name'] },
    include: db.GroupUsSection,
  });

  res.send(userData);
};
