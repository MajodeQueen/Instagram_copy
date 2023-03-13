import User from '@/models/User';
import db from '@/utils/db';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.send({ message: 'Unauthorized user' });
  }
  const { user } = session;
  await db.connect();
  const userdata = await User.findOne({ _id: user._id });
  db.disconnect();
  res.send(userdata);
};

export default handler;
