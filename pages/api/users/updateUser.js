import User from '@/models/User';
import db from '@/utils/db';
import { getSession } from 'next-auth/react';
import { RiSunFoggyLine } from 'react-icons/ri';

const handler = async (req, res) => {
  if (req.method !== 'PUT') {
    return res.status(400).send({ message: `${req.method} not supported` });
  }
  const session = await getSession({ req });
  if (!session) {
    return res.send({ message: 'Unauthorized user' });
  }

  const { image, name, username, websites, bio, email, number, gender, sug } = req.body;

  const { user } = session;
  await db.connect();
  const toUpdateUser = await User.findById(user._id);
  toUpdateUser.username = username;
  toUpdateUser.name = name;
  toUpdateUser.email = email;
  toUpdateUser.image = image;
  toUpdateUser.websites = websites;
  toUpdateUser.bio = bio;
  toUpdateUser.number = number;
  toUpdateUser.gender = gender;
  toUpdateUser.sug = sug;

  await toUpdateUser.save();
  await db.disconnect();
  res.send({
    message: 'User updated',
  });
};

export default handler;
