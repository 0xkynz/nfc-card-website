import { Users } from '../../../../db/models';

export const updateUser = async (
  id,
  { email, displayName, aboutMe, tiktok, facebook, twitter, instagram }
) => {
  const newUser = await Users.update(
    {
      email,
      displayName,
      aboutMe,
      tiktok,
      facebook,
      twitter,
      instagram,
    },
    {
      where: { id },
    }
  );

  return newUser;
};

export const getUser = async (id) => {
  const user = await Users.findByPk(id);
  if (!user) {
    throw new Error("User doesn't exists");
  }

  return user;
};

export const getUserByUsername = async (username) => {
  const user = await Users.findOne({
    where: { username },
    attributes: [
      'username',
      'displayName',
      'tiktok',
      'facebook',
      'instagram',
      'twitter',
      'cardID',
      'aboutMe',
    ],
  });
  if (!user) {
    throw new Error("User doesn't exists");
  }

  return user;
};

export const getUserByCardID = async (cardID) => {
  const user = await Users.findOne({
    where: { cardID },
    attributes: [
      'username',
      'displayName',
      'tiktok',
      'facebook',
      'instagram',
      'twitter',
      'cardID',
      'aboutMe',
    ],
  });
  if (!user) {
    throw new Error("User doesn't exists");
  }

  return user;
};
