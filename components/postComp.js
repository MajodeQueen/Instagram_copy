import React from 'react';
import { BsChat, BsHeart } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import ReactPlayer from 'react-player';

export default function PostComp({ post }) {
  return (
    <div>
      <div key={post._id} className="w-[450px] min-h-[100px] mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 mb-2">
            <img
              src={post?.postedImg}
              alt=""
              className="w-10 h-10 rounded-full"
            />
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
           playing ={true}
           controls={true}
           width="460px"
         />
          ) : (
            <img src={post.imageUrl} alt="" />
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
