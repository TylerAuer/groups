const db = require('../../models');

module.exports = async function destroy(req, res) {
  const { id } = req.user;

  req.logout();

  // Destroy a user's sections
  await db.GroupUsSection.destroy({
    where: { GroupUsUserId: id },
  });

  // Destroy a user's account
  await db.GroupUsUser.destroy({
    where: { id: id },
  });

  res.send('Successfully logged out');
};
