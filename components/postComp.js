import { Avatar } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useContext, useEffect, useState } from 'react';
import { BsChat, BsHeart } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import { FcLike } from 'react-icons/fc';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { Store } from '@/utils/Store';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

export default function PostComp({ post, fetchData, userData }) {
  const { state, dispatch: cxtDispatch } = useContext(Store);
  const { user } = state;
  const [isLiked, setisLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [openEmoji, setEmoji] = useState(false);
  const postId = post._id;
  const alreayliked = post.likes.find((x) => x._id === userData._id);

  const addEmoji = (e) => {
    let emoji = e.native;
    setComment(comment + emoji);
  };

  const addLike = async (e) => {
    e.preventDefault();
    try {
      setisLiked(true);
      let url;
      if (process.env.NODE_ENV === 'production') {
        url = 'http://localhost:5000/api/posts/likes';
      } else {
        url = 'http://localhost:5000/api/posts/likes';
      }

      const config = {
        headers: { authorization: `Bearer ${user.token}` },
      };
      const result = await axios.put(
        url,
        {
          postId,
        },
        config
      );
      if (result) {
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };



  const removeLike = async (e) => {
    e.preventDefault();
    try {
      setisLiked(false);
      let url;
      if (process.env.NODE_ENV === 'production') {
        url = 'http://localhost:5000/api/posts/unlikes';
      } else {
        url = 'http://localhost:5000/api/posts/unlikes';
      }

      const config = {
        headers: { authorization: `Bearer ${user.token}` },
      };

      const result = await axios.put(
        url,
        {
          postId,
        },
        config
      );
      if (result) {
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {

      let url;
      if (process.env.NODE_ENV === 'production') {
        url = 'http://localhost:5000/api/posts/addComments';
      } else {
        url = 'http://localhost:5000/api/posts/addComments';
      }

      const config = {
        headers: { authorization: `Bearer ${user.token}` },
      };
      const data = await axios.post(url, {
        postId,
        comment,
      },config);
      if (data) {
        fetchData();
        setComment('');
      } else {
        console.log('Nothing happpened');
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const openAboutPost = async () => {
    cxtDispatch({ type: 'OPEN_POST_DETAILS', payload: post });
  };

  return (
    <div className="relative border-b border-gray-400  md:border-none  ">
      <div key={post._id} className="md:w-[450px] w-full mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 md:mb-2 md:mt-0 mt-2 ">
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
              <BsChat className="text-2xl " onClick={openAboutPost} />
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
        <div className="">
          <p className="font-semibold">{post?.postedUsername}</p>
          <p>{post?.desc}</p>
        </div>
        <div className="cursor-pointer" onClick={openAboutPost}>
          <p className="mt-2 text-gray-400">
            View all {post.comments?.length} comments
          </p>
        </div>
        <div className="hidden md:flex items-center border-b border-black ">
          <input
            value={comment}
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
            <div className="flex items-center space-x-4">
              <GrEmoji onClick={() => setEmoji(!openEmoji)} />
              {openEmoji && (
                <div className=" absolute  overflow-hidden ">
                  <Picker data={data} onEmojiSelect={addEmoji} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
