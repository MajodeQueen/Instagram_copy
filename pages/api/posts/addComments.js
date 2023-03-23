import Post from '@/models/Post';
import db from '@/utils/db';
import { getSession } from 'next-auth/react';

async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.send({ message: 'Signin' });
  } else {
    const { user } = session;
    const { comment, postId } = req.body;
    const newComment = {
      text:comment,
      commentBy:user._id
    }
    await db.connect();
    const addComment = await Post.findByIdAndUpdate(postId,{$push:{comments:newComment}},{new:true}).populate("comments.commentBy","_id image name").exec((err,result)=>{
      if(err){
        console.log(err)
      }else{
        console.log(result)
      }
    })
    res.send(addComment)
    await db.disconnect();
  }
}
export default handler;
