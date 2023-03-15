import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MdAutoAwesomeMotion,
  MdOutlineAutoAwesomeMotion,
} from 'react-icons/md';
import { FaComment, FaHeart } from 'react-icons/fa';

export default function ExploreComp({ post }) {
  const [postHovered, setHovered] = useState(false);
  return (
    <div className="m-[2px] md:mb-6 md:mx-4">
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="md:h-[300px] md:w-[200px] ">
          <Image
            priority
            quality={100}
            src={post?.imageUrl}
            loading="eager"
            fill={true}
            alt=""
            className="object-cover"
          />
        </div>
        <div
          className={` ${
            postHovered ? 'block' : 'hidden'
          } absolute w-full h-full top-0 flex flex-col gap-16 p-1 pr-2 z-50`}
        >
          <div className=" absolute right-3">
            <Link href="#">
              <MdAutoAwesomeMotion className="text-white w-8 h-8 rounded-lg" />
            </Link>
          </div>
          <div className="absolute left-0 right-0 w-full h-full flex justify-center items-center space-x-2">
            <div>
              <FaHeart className="text-white w-6 h-6 rounded-xl" />
            </div>
            <div>
              <FaComment className="text-white w-6 h-6 rounded-xl" />
            </div>
          </div>
        </div>

        {postHovered && (
          <div
            className={`
            absolute inset-0 w-full h-full bg-opaqueBlack bg-opacity-75   
        `}
          ></div>
        )}
      </div>
    </div>
  );
}
