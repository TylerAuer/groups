const db = require('../../models');

module.exports = async function saveSectionData(req, res) {
  const key = req.params.id;

  const currentDbData = await db.GroupUsSection.findByPk(key);

  const dbVersion = currentDbData.dataValues.section_info.version;
  const incomingVersion = req.body.version;

  if (dbVersion >= incomingVersion) {
    res.status(304).send('Data is stale. Database not updated');
  } else {
    await db.GroupUsSection.update(
      {
        section_info: req.body,
      },
      { where: { id: key } }
    );

    res.send('Successfully saved data');
  }
};
