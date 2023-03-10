import React from 'react';
import Link from 'next/link';

export default function ChangePwd() {
  const userData = {
    name: 'glamar_rose ',
    img: '/images/PngItem_1503945.png',
  };
  return (
    <div>
      <div className="pt-4 flex flex-col mx-20 ">
        <div className="flex items-center  space-x-8">
          <img
            src={userData?.img}
            alt=""
            width={30}
            height={30}
            className="rounded-full "
          />
          <p className="font-semibold"> {userData?.name}</p>
        </div>
        <div className="flex pt-4 items-center w-full space-x-4 ">
          <p className="">Old password</p>
          <input className="border w-[80%] h-10 bg-gray-50 rounded-md" />
        </div>
        <div className="flex pt-4 items-center w-full space-x-4 ">
          <p className="">New password</p>
          <input className="border w-[80%] h-10 bg-gray-50 rounded-md" />
        </div>
        <div className="flex pt-4 items-center w-full ">
          <p className="">Confirm new password</p>
          <input className="border w-[100%] h-10 bg-gray-50 rounded-md" />
        </div>
        <div className="flex pt-4 items-center w-full space-x-2 ">
          <p className="w-[25%]"></p>
          <div>
            <button className="bg-blue-400 rounded-md text-white px-2 py-1">
              Change password
            </button>
            <Link href="#">
              <p className="pt-6 text-blue-500">Forgot password?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
