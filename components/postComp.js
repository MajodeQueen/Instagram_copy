import { Avatar } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { BsChat, BsHeart } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import ReactPlayer from 'react-player';
import Image from 'next/image';

export default function PostComp({ post }) {
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
            <Image
              src={post?.imageUrl}
              alt=""
              width={450}
              height={200}
            />
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <BsHeart className="text-2xl" />
            <BsChat className="text-2xl " />
            <img
              src="/images/pngkit_send-icon-png_1882778.png"
              alt=""
              className="w-6 h-6"
            />
          </div>
          <img src="/images/kindpng_1791489.png" alt="" className="w-6 h-6" />
        </div>
        <div className="mt-2">38,634 likes</div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{post?.postedUsername}</p>
          <p>{post?.desc}</p>
        </div>
        <div>
          <p className="mt-2 text-gray-400">View all 66 comments</p>
        </div>
        <div className="flex items-center border-b border-black ">
          <input
            className="w-full mt-2 py-3 px-2  focus:outline-none "
            placeholder="Add a comment..."
          />
          <GrEmoji className="" />
        </div>
      </div>
    </div>
  );
}
