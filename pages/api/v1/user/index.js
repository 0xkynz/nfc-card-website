import nextConnect from 'next-connect';
import { updateUser, getUser } from './user.service';
import middleware from '../../../../middleware/auth';

const handler = nextConnect()
  .use(middleware)
  .get((req, res) => {
    const { id } = req.user;

    getUser(id)
      .then((user) => {
        res.status(200).json({ user });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  })
  .put((req, res) => {
    const { body } = req;
    const { id } = req.user;

    updateUser(id, body)
      .then(({ data }) => {
        res.status(200).json({ user: data });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  });

export default handler;
