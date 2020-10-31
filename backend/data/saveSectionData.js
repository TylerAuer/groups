const db = require('../../models');

module.exports = async function saveSectionData(req, res) {
  const key = req.params.id;

  const currentDbData = await db.GroupUsSection.findByPk(key);

  const dbVersion = currentDbData.dataValues.data.version;
  const incomingVersion = req.body.version;

  if (dbVersion >= incomingVersion) {
    res.status(304).send('Data is stale. Database not updated');
  } else {
    const updatedSection = await db.GroupUsSection.update(
      {
        data: req.body,
      },
      { where: { id: key } }
    );

    const flatUpdatedSection = {
      id: updatedSection.id,
      last_updated: updatedSection.updatedAt,
      ...updatedSection.data,
    };

    res.send(flatUpdatedSection);
  }
};
