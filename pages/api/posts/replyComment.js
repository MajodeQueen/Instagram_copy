import Post from '@/models/Post';
import db from '@/utils/db';
import { getSession } from 'next-auth/react';

async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.send({ message: 'Signin' });
  }
  const { user } = session;
  const userId = user._id;
  const { postId, isReply, addText } = req.body;
  await db.connect();
  try {
    await Post.updateOne(
      {
        _id: postId,
        'comments._id': isReply,
      },
      {
        $push: {
          'comments.$.replies': {
            text: addText,
            repliedBy: userId,
          },
        },
      }
    );
    res.send({ message: 'successful Reply' });
  } catch (err) {
    console.log(err);
  }
  res.send({ message: 'successful Reply' });
  await db.disconnect();
}
export default handler;
