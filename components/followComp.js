
import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FOLLOW':
      return { ...state, followusers: action.payload };
    case 'SAVE_USERINFO':
      return { ...state, userInfo: action.payload };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default function FollowComp() {
  const { data: session } = useSession();
  const [{ userInfo, error, followusers }, dispatch] = useReducer(reducer, {
    error: false,
  });
  // const userId = session?.user._id;

  const fetchAll = async () => {
    try {
      const { data } = await axios.get('/api/users/allUsers');
      dispatch({ type: 'FETCH_FOLLOW', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_FAIL', payload: err });
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('/api/userdata');
        dispatch({ type: 'SAVE_USERINFO', payload: data });
      } catch (err) {
        console.log(err);
        dispatch({ type: 'FETCH_FAIL', payload: err });
      }
    };
    fetchUser();
    fetchAll();
  }, []);

  return (
    <div className="">
      {userInfo ? (
        <div className=" mx-8">
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
              <img src={userInfo.image} className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-[14px] font-semibold">{userInfo.username}</p>
                <p className="text-[14px] text-gray-500">{userInfo.name}</p>
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
                    src={user.image}
                    alt=""
                    className="w-7 h-7 rounded-full"
                  />
                  <div>
                    <p>{user.username}</p>
                    <p className="text-[12px] text-gray-500">
                      suggested for you
                    </p>
                  </div>
                </div>
                <p className="text-[12px]  text-blue-500">follow</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}


