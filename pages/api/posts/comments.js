import Comments from '@/models/Comments';
import Post from '@/models/Post';
import db from '@/utils/db';
import { getSession } from 'next-auth/react';

async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.send({ message: 'Unauthorized' });
  }
  const { user } = session;
  const { postId, comment } = req.body;
  await db.connect();
  const newComment = await Comments.create({
    comment :comment,
    post:postId,
    commentBy:user._id
  });
  const fullComment = await Comments.findOne({_id:newComment._id}).populate("commentBy","_id username image");
  await db.disconnect();
  res.send(fullComment);
}
 export default handler;