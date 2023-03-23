import { Avatar } from '@mui/material';
import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function FollowComp({userInfo, error, followusers}) {
 
  return (
    <div className="">
      <div className=" mx-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-4">
            <div className="">
               <Avatar alt=""  src={userInfo?.image} />
            </div>
            <div>
              <p className="text-[14px] font-semibold">{userInfo?.username}</p>
              <p className="text-[14px] text-gray-500">{userInfo?.name}</p>
            </div>
          </div>
          <Link href="#">
            <p className="text-[13px] text-blue-300">Switch</p>
          </Link>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-[15px] text-gray-500 font-semibold">
            Suggestions for you
          </p>
          <p className="text-[13px]">See all</p>
        </div>
        <div>
          {followusers?.map((user, i) => (
            <div key={i} className="flex justify-between items-center pb-2">
              <div className="flex items-center space-x-2">
                <img
                  src={user?.image}
                  alt=""
                  className="w-7 h-7 rounded-full"
                />
                <div>
                  <p>{user.username}</p>
                  <p className="text-[12px] text-gray-500">suggested for you</p>
                </div>
              </div>
              <p className="text-[12px]  text-blue-500">follow</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
