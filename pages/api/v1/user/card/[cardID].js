import nextConnect from 'next-connect';
import { getUserByCardID } from '../user.service';

const handler = nextConnect().get((req, res) => {
  const { query } = req;
  const { cardID } = query;

  getUserByCardID(cardID)
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

export default handler;
