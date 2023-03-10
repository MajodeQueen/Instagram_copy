import Post from '@/models/Post';
import User from '@/models/User';
import db from '@/utils/db';
import { getSession } from 'next-auth/react';

async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.send({ message: 'Signin' });
  } else {
    const { user } = session;
    const userdt = await User.findOne({_id:user._id})
    const postedUsername = userdt.username
    const postedImg = userdt.image
    await db.connect();
    const { imageUrl, desc, location, hide, offcomts, details } = req.body;
    if (!imageUrl) {
      return res.status(422).json({ message: 'Image not uploaded' });
    }
    const post = new Post({
      imageUrl,
      desc,
      location,
      hide,
      offcomts,
      details,
      user: user._id,
      postedUsername:postedUsername,
      postedImg:postedImg,
    });
    const savedPost = await post.save();
    return res.status(201).json(savedPost);
  }
}

export default handler;
