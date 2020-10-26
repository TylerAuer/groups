const db = require('../../models');

module.exports = async function handleNewUser(user) {
  const { id } = user.dataValues;

  // Create a default blank section for a new user
  const blankSectionForNewUser = db.GroupUsSection.create({
    GroupUsUserId: id,
    data: {
      name: 'Section Name',
      students: [],
      generations: [],
    },
  });

  return blankSectionForNewUser;
};
