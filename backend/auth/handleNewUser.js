const db = require('../../models');

module.exports = async function handleNewUser(user) {
  const { id, first_name } = user.dataValues;

  // Create a default blank section for a new user
  const blankSectionForNewUser = db.GroupUsSection.create({
    GroupUsUserId: id,
    data: {
      version: 0,
      name: `${first_name}'s 1st Section`,
      students: [],
      generations: [],
    },
  });

  return blankSectionForNewUser;
};
