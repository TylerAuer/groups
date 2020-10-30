const db = require('../../models');

module.exports = async function getSections(req, res) {
  const { id } = req.user;

  const sections = await db.GroupUsSection.findAll({
    where: {
      GroupUsUserId: id,
    },
  });

  const flattenedSections = sections.map((s) => ({
    id: s.id,
    last_update: s.updatedAt,
    ...s.data,
  }));

  res.send(flattenedSections);
};
