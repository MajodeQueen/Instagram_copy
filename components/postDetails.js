import { Store } from '@/utils/Store';
import { Avatar } from '@mui/material';
import axios from 'axios';
import moment from 'moment/moment';
import Image from 'next/image';
import React, { useContext } from 'react';
import { BsChat, BsHeart, BsThreeDots, BsEmojiSmile } from 'react-icons/bs';

export default function PostDetails() {
  const { state: cxtState, dispatch: cxtDispatch } = useContext(Store);
  const { post } = cxtState;
  const postId = post._id;

  const closePostAbout = () => {
    cxtDispatch({ type: 'CLOSE_POST_DETAILS' });
    console.log('clicked close');
  };

  const formatter = (time) => {
    return moment.utc(time).local().startOf('seconds').fromNow();
  };

  const dateString = '2019-10-30T14:01:59.689Z';

  return (
    <>
      <div className="fixed inset-0 bg-opaqueBlack bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0  max-w-full ">
            <div className="pointer-events-auto relative w-screen ">
              <div className="absolute top-0 right-4">
                <button
                  onClick={closePostAbout}
                  type="button"
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className=" absolute flex justify-center items-center right-0 left-0 mx-auto mt-6 w-full ">
                <div className="w-full bg-white mx-40">
                  <div className="flex w-full">
                    <div className="w-[50%] border-r">
                      <div className="">
                        <Image
                          src={post.imageUrl}
                          width={200}
                          height={300}
                          alt=""
                          sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                                   33vw"
                          className="w-[600px] h-[450px] object-cover"
                        />
                      </div>
                    </div>
                    <div className=" flex flex-col w-[50%] justify-between ">
                      <header>
                        <div className="flex justify-between border-b py-2 sticky z-10">
                          <div className=" flex items-center space-x-2 px-2">
                            <Avatar alt="" src={post?.postedImg} />
                            <p className="font-semibold">
                              {post.postedUsername}
                            </p>
                          </div>
                          <div className="px-2">
                            <BsThreeDots />
                          </div>
                        </div>
                      </header>
                      <main className="invisible-scrollbar h-56 overflow-auto px-2">
                        <div className="w-full">
                          {post.comments.map((comment) => (
                            <div key={comment._id} className="flex items-center space-x-4 justify-between">
                              <Avatar alt="" src={comment.commentBy.image} />
                              <div className='w-[90%]'>
                                <div className="flex space-x-2 mt-2">
                                  <p className="text-[14px] w-[90%]">
                                    <span className="font-semibold">
                                      {comment.commentBy.username}
                                    </span>
                                    {comment.text}
                                  </p>
                                  
                                </div>
                                <div className="flex items-center space-x-2">
                                  <p>{formatter(comment.date)}</p>
                                </div>
                              </div>
                              <BsHeart className="" />
                            </div>
                          ))}
                        </div>
                      </main>
                      <footer className="flex flex-col justify-between  border-t h-36 shadow-inner sticky z-10 pb-2">
                        <div className="flex items-center justify-between mt-4 px-2">
                          <div className="flex items-center space-x-4">
                            <div>
                              <BsHeart className="text-2xl" />
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
                          <img
                            src="/images/kindpng_1791489.png"
                            alt=""
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="px-2">{post.likes.length} likes</div>

                        <div className="flex items-center space-x-2 border-t py-2 px-2">
                          <BsEmojiSmile className="text-2xl " />
                          <input className="w-[80%] focus:outline-none " />
                          <button className="text-blue-400 ">Post</button>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
