const db = require('../../models');

module.exports = async function makeNewSection(req, res) {
  const userPrimaryKey = req.user.id;
  const usersFirstName = req.user.first_name;

  // Creates new blank section for the user
  const newSectionData = {
    version: 0,
    name: `${usersFirstName}'s New Section`,
    students: [],
    generations: [],
  };

  const newSection = await db.GroupUsSection.create({
    GroupUsUserId: userPrimaryKey,
    data: newSectionData,
  });

  res.send(newSection);
};
