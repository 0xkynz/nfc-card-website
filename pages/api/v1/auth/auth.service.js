/* eslint-disable no-undef */
import { Users } from '../../../../db/models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_KEY;

export const validate = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Request missing username or password');
  }

  /* Check user in database */
  const user = await Users.findOne({
    where: { email: email },
    attributes: ['id', 'email', 'password'],
    limit: 1,
  });

  /* Check if exists */
  if (!user) {
    throw new Error('User Not Found');
  }

  /* Define variables */
  const dataUser = user.toJSON();
  const { id: userId, email: userEmail, password: userPassword } = dataUser;

  const isMatch = await bcrypt.compare(password, userPassword);

  if (isMatch) {
    /* User matched */
    /* Create JWT Payload */
    const payload = {
      id: userId,
      email: userEmail,
    };
    /* Sign token */
    const token = jwt.sign(payload, KEY, {
      expiresIn: 31556926, // 1 year in seconds
    });

    return {
      token: 'Bearer ' + token,
    };
  }
};
