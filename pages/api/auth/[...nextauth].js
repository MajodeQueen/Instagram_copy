import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import db from '@/utils/db';


export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
        async authorize(credentials){
            await db.connect();
            const user = await User.findOne({
                email:credentials.email,
            });
            await db.disconnect();
            if(user && bcrypt.compareSync(credentials.password , user.password)) {
                return {
                  _id: user._id,
                  fullname:user.fullname,
                  username: user.name,
                  email: user.email,
                  image: '',
                };
            }
            throw new Error('Invalid email or password');
        }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  
});
