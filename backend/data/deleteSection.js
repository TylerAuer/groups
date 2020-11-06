const db = require('../../models');

module.exports = async function deleteSection(req, res) {
  const id = req.params.id;

  await db.GroupUsSection.destroy({
    where: {
      id: id,
    },
  }).catch((err) => {
    res.status(404).send(`Error deleting section: ${err}`);
  });

  res.send('Successfully deleted section');
};
