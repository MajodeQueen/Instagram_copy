import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';
import { BsChat, BsHeart } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { MdOutlineMoreHoriz } from 'react-icons/md';
export default function Messages() {
  return (
    <Layout>
      <div className="w-[450px] min-h-[100px] mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 mb-2">
            <img
              src="/images/PngItem_1503945.png"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <p>galaxyfmug</p>
          </div>
          <MdOutlineMoreHoriz />
        </div>
        <div>
          <img src="/images/pexels-edgar-serrano-1964970.jpg" />
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
        <div className="flex">
          <p className="font-semibold">galaxyfmug</p>
          <p>The girl in a yellow dress, not jumper</p>
        </div>
        <div>
          <p className='mt-2 text-gray-400'>View all 66 comments</p>
        </div>
        <div className="flex items-center relative group">
          <input className="w-full mt-2 py-3 px-2 border-b border-black focus:outline-none " placeholder='Add a comment...'/>
          <GrEmoji className='absolute right-0 mr-2'/>
        </div>
      </div>
    </Layout>
  );
}
