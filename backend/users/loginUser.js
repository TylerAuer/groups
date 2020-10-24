const { OAuth2Client } = require('google-auth-library');

const loginUser = (req, res, next) => {
  const client = new OAuth2Client(req.body.idToken);

  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.idToken,
      audience:
        '325368153381-d40kp8akmfjfq3sonbjvs703ajgv1bct.apps.googleusercontent.com',
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    console.log(payload);
  }

  verify().catch(console.error);
};

module.exports = { loginUser };
