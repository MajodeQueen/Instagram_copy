import Post from '@/models/Post';
import db from '@/utils/db';

async function handler(req, res) {
  await db.connect();
  const posts = await Post.find().sort({"createdAt":-1})
  await db.disconnect();
  res.send(posts);
}
export default handler;
