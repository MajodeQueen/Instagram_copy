import Post from '@/models/Post';
import db from '@/utils/db';

async function handler(req, res) {
  await db.connect();
  const posts = await Post.find().populate('comments.commentBy','_id username image').
  sort({"createdAt":-1})
  db.disconnect()
  res.send(posts);
}
export default handler;
