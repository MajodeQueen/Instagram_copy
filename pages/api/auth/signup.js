import User from '@/models/User';
import db from '@/utils/db';
import bcrypt from 'bcryptjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const { username, email, password ,name } = req.body;
  if (!username || !email || !password || password.trim().length < 5) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }
  await db.connect();

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    await db.disconnect();
    return;
  }

  const newUser = new User({
    username,
    name,
    email,
    password: bcrypt.hashSync(password),
  });

  const user = await newUser.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Created user!',
    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
  });
}

export default handler;
