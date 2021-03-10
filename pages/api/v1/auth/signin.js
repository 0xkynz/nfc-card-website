import nextConnect from 'next-connect';
import { signin } from './auth.service';

const handler = nextConnect()
  .get((req, res) => {
    res.json({ hello: 'world' });
  })
  .post((req, res) => {
    const { email, password } = req.body;

    signin(email, password)
      .then(({ token }) => {
        res.json({ token });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  });

export default handler;
