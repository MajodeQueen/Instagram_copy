import React from 'react';
import { Avatar } from '@mui/material';
import { BsHeart } from 'react-icons/bs';
export default function CommentReply({ reply, comment }) {
  const userName = comment.commentBy.username;
  const comt = reply.text;
  const nwStr = comt.replace(userName, '');
  return (
    <div>
      <div className="flex justify-between  ml-6 items-center  rounded-md">
        <div className="p-3">
          <div className="flex gap-3 items-center">
            <Avatar
              alt=""
              src={reply.repliedBy.image}
              sx={{ width: 24, height: 24 }}
            />
            <div className="flex items-center space-x-1">
              <p className="text-[14px]">
                <span className="text-blue-600">{userName}</span>
                {nwStr}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <BsHeart />
        </div>
      </div>
    </div>
  );
}
