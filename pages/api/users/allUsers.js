import User from '@/models/User';
import db from '@/utils/db';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
    const session = await getSession({ req });
  if (!session) {
    return res.send({ message: 'Signin' });
  } else {
    const {user} = session
    await db.connect();
    const allusers = await User.find({
      _id: { $ne: user._id},
    });
    db.disconnect();
    res.send(allusers);
  }
};

export default handler;
