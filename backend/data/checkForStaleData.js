const db = require('../../models');

module.exports = async function checkForStaleData(req, res) {
  const clientSections = req.body;
  const dbSections = await db.GroupUsSection.findAll({
    where: {
      GroupUsUserId: req.user.id,
    },
    attributes: ['id', 'section_info'],
  });

  const allSectionsMatch = dbSections.every((d) => {
    const dbId = d.id;
    const dbVersion = d.section_info.version;

    if (!clientSections[dbId] || clientSections[dbId] !== dbVersion) {
      return false;
    } else {
      return true;
    }
  });

  if (
    allSectionsMatch &&
    Object.keys(clientSections).length === dbSections.length
  ) {
    res.status(304).send('Local user data is up-to-date');
  } else {
    res.status(205).send('Local user data is stale. A refresh is recommended.');
  }
};
