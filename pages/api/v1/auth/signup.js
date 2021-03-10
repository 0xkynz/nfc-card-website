import nextConnect from 'next-connect';
import { signup } from './auth.service';

const handler = nextConnect()
  .get((req, res) => {
    res.json({ hello: 'world' });
  })
  .post((req, res) => {
    const { body } = req;
    const { username, email, password, cardID, displayName } = body;

    signup(username, cardID, { email, password, displayName })
      .then(({ token }) => {
        res.json({ token });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  });

export default handler;
