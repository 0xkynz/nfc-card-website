import nextConnect from 'next-connect';
import { saveUser } from './user.service';

const handler = nextConnect()
  .get((req, res) => {
    res.json({ hello: 'world' });
  })
  .post((req, res) => {
    const { body } = req;
    const { username, email, password, cardID } = body;

    saveUser({ username, email, password, cardID })
      .then((newUser) => {
        res.json({ user: newUser });
      })
      .catch((err) => {
        res.statusCode(400).json({ message: err.message });
      });
  });

export default handler;
