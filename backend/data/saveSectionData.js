const db = require('../../models');

module.exports = async function saveSectionData(req, res) {
  const key = req.params.id;

  console.log(req.body);

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
};
