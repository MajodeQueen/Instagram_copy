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
  const { commentId, postId } = req.body;
  await db.connect();
  try {
    
     await Post.updateOne(
      {
        _id: postId,
        'comments._id':commentId,
      },
      { $pull: { 'comments.$.likes': userId }}
    );
    res.send({message:"unlike successful"})
  } catch (err) {
    console.log(err);
  }
  ;
  await db.disconnect();
}
export default handler;
