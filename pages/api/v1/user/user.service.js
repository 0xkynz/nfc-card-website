import { users } from '../../../../db/models';

export const updateUser = async (
  id,
  { email, displayName, aboutMe, tiktok, facebook, twitter, instagram }
) => {
  const newUser = await users.update(
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
  const user = await users.findByPk(id);
  if (!user) {
    throw new Error("User doesn't exists");
  }

  return user;
};

export const getUserByUsername = async (username) => {
  const user = await users.findOne({
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
  const user = await users.findOne({
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
