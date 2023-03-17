import { Avatar } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState } from 'react';
import { BsChat, BsHeart } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import { FcLike } from 'react-icons/fc';
import axios from 'axios';
import { useSession } from 'next-auth/react';

export default function PostComp({ post, fetchData }) {
  const { data: session } = useSession();
  const [isLiked, setisLiked] = useState(false);
  const [comment, setComment] = useState('');
  const postId = post._id;
  const alreayliked = post.likes.find((x) => x === session.user._id);

  const addLike = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put('/api/posts/likes', {
        postId,
      });
      if (result) {
        setisLiked(true);
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeLike = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put('/api/posts/unlikes', {
        postId,
      });
      if (result) {
        setisLiked(false);
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    const result = await axios.post('/api/posts/comments', {
      postId,
      comment,
    });
    if (result) {
      setComment('');
      fetchData();
    }
  };
  return (
    <div>
      <div key={post._id} className="w-[450px] mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 mb-2">
            <Avatar alt="" src={post?.postedImg} />
            <p>{post?.postedUsername}</p>
          </div>
          <MdOutlineMoreHoriz />
        </div>
        <div>
          {post?.imageUrl && post.imageUrl.endsWith('.mp4') ? (
            <ReactPlayer
              className="bg-white"
              url={post?.imageUrl}
              loop
              playing={true}
              controls={true}
              width="460px"
            />
          ) : (
            <Image src={post?.imageUrl} alt="" width={450} height={200} />
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <div onClick={alreayliked ? removeLike : addLike}>
              {isLiked || alreayliked ? (
                <FcLike className="text-3xl" />
              ) : (
                <BsHeart className="text-2xl" />
              )}
            </div>
            <div>
              <BsChat className="text-2xl " />
            </div>
            <img
              src="/images/pngkit_send-icon-png_1882778.png"
              alt=""
              className="w-6 h-6"
            />
          </div>
          <img src="/images/kindpng_1791489.png" alt="" className="w-6 h-6" />
        </div>
        <div className="mt-2">{post.likes.length} likes</div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{post?.postedUsername}</p>
          <p>{post?.desc}</p>
        </div>
        <div>
          <p className="mt-2 text-gray-400">View all 66 comments</p>
        </div>
        <div className="flex items-center border-b border-black ">
          <input
            onChange={(e) => setComment(e.target.value)}
            className="w-full mt-2 py-3 px-2  focus:outline-none "
            placeholder="Add a comment..."
          />
          <div className="flex items-center space-x-1">
            {comment.length > 0 && (
              <button
                onClick={addComment}
                className="text-blue-400 text-[12px]"
              >
                Post
              </button>
            )}
            <GrEmoji className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
