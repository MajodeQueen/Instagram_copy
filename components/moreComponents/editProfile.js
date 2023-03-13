import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function EditProfile({userData}) {
  const [text, setText] = useState("");
  
  // const userData = {
  //   name: 'glamar_rose ',
  //   img: '/images/PngItem_1503945.png',
  // };
  return (
    <>
      <div className="pt-4 flex flex-col mx-20 ">
        <div className="flex items-center space-x-12">
          <img
            src={userData?.image}
            alt=""
            width={30}
            height={30}
            className="rounded-full "
          />
          <div className="">
            <p className="font-semibold"> {userData?.username}</p>
            <label className="text-buttonBlue">
              <input type="file" />
              Change profile photo
            </label>
          </div>
        </div>
        <div className="flex space-x-9 pt-4">
          <p>Name</p>
          <div className="">
            <input type="text" className="focus:outline-none px-2 h-6 w-[80%] border" defaultValue={userData?.name}/>
            <p className="text-[12px] text-gray-400 pt-2 pb-4">
              Help people discover your account by using the name you're known
              by: either your full name, nickname, or business name.
            </p>
            <p className="text-[12px] text-gray-400 ">
              You can only change your name twice within 14 days.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 pt-4">
          <p>Username</p>
          <div className="">
            <input type="text" className="focus:outline-none px-2 h-6 w-[80%] border"  defaultValue={userData?.username}/>
            <div className="flex text-[12px] text-gray-400 pt-4 ">
              <p>
                <span>
                  In most cases, you'll be able to change your username back to{' '}
                </span>
                <span>glamar_rose</span>
                <span>for another 14 days. </span>
                <Link href="#">
                  <span className="text-buttonBlue"> Learn more</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 pt-4">
          <p>Website</p>
          <div className="">
            <input className="focus:outline-none px-2 h-6 w-[80%] border" />
            <p className="text-[12px] text-gray-400 pt-2 pb-4">
              Editing your links is only available on mobile. Visit the
              Instagram app and edit your profile to change the websites in your
              bio.
            </p>
          </div>
        </div>
        <div className="flex space-x-14 pt-4">
          <p>Bio</p>
          <div className="">
            <textarea
              onChange={(e) => setText(e.target.value)}
              maxLength="150"
              className="focus:outline-none  h-14 w-[80%] border"
            ></textarea>
            <p className=" flex flex-col text-[12px] text-gray-400 pt-2 pb-4">
              <span className=""> {text.length}/150</span>
              <span className="pt-4 font-semibold">Personal information</span>
              <span>
                Provide your personal information, even if the account is used
                for a business, a pet or something else. This won't be a part of
                your public profile.
              </span>
            </p>
          </div>
        </div>
        <div className="flex space-x-10 pt-4">
          <p>Email</p>
            <input type="text"  defaultValue={userData?.email} className="focus:outline-none  h-6 w-[70%] border px-2"/>
        </div>
        <div className="flex pt-6 -space-x-2">
          <p className="w-[20%]">Phone number </p>
            <input className="focus:outline-none  h-6 w-[70%] border px-2" />
        </div>
        <div className="flex space-x-7 pt-4">
          <p>Gender</p>
            <input className="focus:outline-none  h-6 w-[70%] border px-2" />
        </div>
        <div className="flex pt-6">
          <p className="w-[20%]">Similar account suggestions</p>
          <div className="flex  mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Include your account when recommending similar accounts people might want to follow.<span className='text-buttonBlue'>[?]</span>
            </label>
          </div>
        </div>
        <div className="flex  pt-4 pb-4">
          <p className='w-[20%]'></p>
          <div className="flex space-x-10  w-[80%]">
            <button className='bg-blue-500 px-3 rounded-md text-white'>Submit</button>
            <Link href="#">
            <p className='text-blue-500 text-[14px] font-semibold'>Temporaliy Deactivate Account</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
