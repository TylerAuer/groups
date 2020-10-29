const db = require('../../models');

module.exports = async function saveSectionData(req, res) {
  const key = req.params.id;

  const currentDbData = await db.GroupUsSection.findByPk(key);

  const dbVersion = currentDbData.dataValues.data.version;
  const incomingVersion = req.body.version;

  if (dbVersion >= incomingVersion) {
    res.status(304).send('Data is stale. Database not updated');
  } else {
    db.GroupUsSection.update(
      {
        data: req.body,
      },
      {
        where: {
          id: key,
        },
      }
    )
      .then(() => {
        res.send('Data saved');
      })
      .catch((err) => {
        res.send(`
    Ugh oh, there's been an error!
    ${err}
    `);
      });
  }
};
