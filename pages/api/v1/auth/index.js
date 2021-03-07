import nextConnect from 'next-connect';
import { validate } from './auth.service';

const handler = nextConnect()
  .get((req, res) => {
    res.json({ hello: 'world' });
  })
  .post((req, res) => {
    const { email, password } = req.body;

    validate(email, password)
      .then(({ token }) => {
        res.json({ token });
      })
      .catch((err) => {
        res.statusCode(400).json({ message: err.message });
      });
  });

export default handler;
