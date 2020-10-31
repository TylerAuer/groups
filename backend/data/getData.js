const db = require('../../models');

module.exports = async function getData(req, res) {
  const userData = await db.GroupUsUser.findOne({
    where: {
      google_id: req.user.google_id,
    },
    attributes: { exclude: ['google_id', 'email', 'last_name'] },
    include: db.GroupUsSection,
    order: [[db.GroupUsSection, 'id']], // returns in ascending id order
  });

  res.send(userData);
};
