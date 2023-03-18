import { Store } from '@/utils/Store';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

export default function PostDetails() {
  const { state: cxtState, dispatch: cxtDispatch } = useContext(Store);
  const { post } = cxtState;

  const closePostAbout = () => {
    cxtDispatch({ type: 'CLOSE_POST_DETAILS' });
    console.log('clicked close');
  };
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
                    <div className="w-[50%]">
                      <div className="flex justify-between border-b py-2">
                        <div className=" flex items-center space-x-2 px-2">
                          <Avatar alt="" src={post?.postedImg} />
                          <p className='font-semibold'>{post.postedUsername}</p>
                        </div>
                        <div className='px-2'>
                          <BsThreeDots />
                        </div>
                      </div>
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
