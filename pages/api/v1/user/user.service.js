import { Users, Cards } from '../../../../db/models';

export const saveUser = async ({ username, email, password, cardID }) => {
  const card = await Cards.findByPk(cardID);
  if (!card) {
    throw new Error('Card does not exist');
  }
  const user = await Users.findOne({
    where: { card_id: cardID },
    limit: 1,
  });
  if (user) {
    throw new Error('Card was used by other account');
  }

  const newUser = await Users.create({
    username,
    email,
    password,
    card_id: cardID,
  });

  return newUser;
};
