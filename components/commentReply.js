import React from 'react';
import { Avatar } from '@mui/material';
import { BsHeart } from 'react-icons/bs';
import moment from 'moment';
export default function CommentReply({ reply, comment }) {
  const userName = comment.commentBy.username;
  const comt = reply.text;
  const nwStr = comt.replace(userName, '');
  const formatter = (time) => {
    return moment(new Date(time)).fromNow();
  };
  return (
    <div>
      <div className="flex justify-between  ml-6 items-center  rounded-md">
        <div className="p-3">
          <div className="flex gap-3 items-center">
            <div>
              <Avatar
                alt=""
                src={reply.repliedBy.image}
                sx={{ width: 24, height: 24 }}
              />
            </div>

            <div>
              <div className="flex items-center space-x-1">
                <p className="text-[14px]">
                  <span className="text-blue-600">{userName}</span>
                  {nwStr}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-[12px] text-gray-500">
                  {formatter(reply.date)}
                </p>
                <p className="text-[12px] text-gray-500">
                  {reply.likes?.length}{' '}
                  {reply.likes.length < 2 ? (
                    <span>like</span>
                  ) : (
                    <span>likes</span>
                  )}
                </p>
                <button className="text-[12px] text-gray-500">Reply</button>
              </div>
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
