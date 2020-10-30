const db = require('../../models');
const passport = require('passport');

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await db.GroupUsUser.findOne({
    where: {
      google_id: id,
    },
  });

  cb(null, user);
});
