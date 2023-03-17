import Post from '@/models/Post';
import db from '@/utils/db';
import { getSession } from 'next-auth/react';
import { TbRuler2 } from 'react-icons/tb';

async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(400).send({ message: `${req.method} not supported` });
  }
  const session = await getSession({ req });
  if (!session) {
    return res.send({ message: 'Unauthorized' });
  }
  const { user } = session;
  const { postId } = req.body;
  await db.connect();
  const updatedLike = await Post.findByIdAndUpdate(
    postId,
    { $pull: { likes: user._id } },
    { new: true }
  );
  await db.disconnect();
  res.send(updatedLike);
}

export default handler;
