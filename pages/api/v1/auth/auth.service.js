/* eslint-disable no-undef */
import bcrypt from 'bcryptjs';

import { Users, Cards } from '../../../../db/models';
import { generateToken } from '../../../../utils/token';

export const signin = async (email, password) => {
  if (!email || !password) {
    throw new Error('Request missing username or password');
  }

  /* Check user in database */
  const user = await Users.findOne({
    where: { email },
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
    const { token } = generateToken({ userId, userEmail });

    return {
      token: token,
    };
  }

  throw new Error('User Not Found');
};

export const signup = async (
  username,
  cardID,
  { email, password, displayName }
) => {
  const card = await Cards.findByPk(cardID);
  if (!card) {
    throw new Error('Card does not exist');
  }
  const user = await Users.findOne({
    where: { cardID },
    limit: 1,
  });
  if (user) {
    throw new Error('Card was used by other account');
  }

  const newUser = await Users.create({
    username,
    email,
    password,
    cardID,
    displayName,
  });

  const { id: userId, email: userEmail } = newUser;
  const { token } = await generateToken({ userId, userEmail });

  return { token };
};
