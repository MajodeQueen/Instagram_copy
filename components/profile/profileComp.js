import SettingsLayout from '@/components/moreComponents/settingsLayout';
import { Store } from '@/utils/Store';
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useReducer } from 'react';
import { TbSettings } from 'react-icons/tb';
import ProfileTabz from './profiletabzComp';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default function ProfileComp({ children, tab, Tab, ptabz }) {
  const [{ userInfo }, dispatch] = useReducer(reducer, { user: null });
 const {state:cxtState} = useContext(Store)
 const {user} = cxtState
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let url;
        if (process.env.NODE_ENV === 'production') {
          url = 'http://localhost:5000/api/userdata';
        } else {
          url = 'http://localhost:5000/api/userdata';
        }
        const config = {
          headers: { authorization: `Bearer ${user.token}` }
        };
        const { data } = await axios.get(url, config);
        dispatch({type: 'FETCH_USER',payload:data})
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser() ;
  });
  return (
    <SettingsLayout>
      {userInfo ? (
        <div className="mt-6 mx-20">
          <div className="flex space-x-20">
            <label className="">
              <input type="file" />
              <img
                src={userInfo?.image}
                alt=""
                className="w-40 h-40 rounded-full"
              />
            </label>
            <div className="flex flex-col">
              <div className="flex items-center space-x-6">
                <p className="text-[20px]">{userInfo?.username}</p>
                <Link href="/settings">
                  <button className="py-1 px-4 bg-gray-100 rounded-md hover:bg-gray-400">
                    Edit profile
                  </button>
                </Link>
                <TbSettings className="text-3xl" />
              </div>
              <div className="flex mt-4 items-center space-x-6">
                <p>0 posts</p>
                <p>46 followers</p>
                <p>241 following</p>
              </div>
              <p className="mt-4">{userInfo?.name}</p>
            </div>
          </div>
          <div className="mt-8">
            <ProfileTabz tab={tab} Tab={Tab} ptabz={ptabz} />
          </div>
          <div className="flex item-center justify-center">{children}</div>
          <div className="flex flex-col  text-center">
            <div className=" flex  justify-center items-center -py-4 ">
              <ul className="w-full flex flex-row flex-wrap justify-center h-auto items-center -py-4 space-x-4 text-xs text-gray-500 ">
                <li>
                  <Link href="#">
                    <p>Meta</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p>Blog</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p>Jobs</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p>Help</p>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <p>API</p>
                  </Link>
                </li>
                <li>
                  <p>Privacy</p>
                </li>
                <li>
                  <p>Terms</p>
                </li>
                <li>
                  <p>Top Accounts</p>
                </li>
                <li>
                  <p>Locations</p>
                </li>
                <li>
                  <p>Instagram Lite</p>
                </li>
                <li>
                  <p>Contact Uploading & Non-Users</p>
                </li>
              </ul>
            </div>

            <div className="flex justify-center py-2">
              <ul className="w-full flex flex-row flex-wrap justify-center h-auto items-center -py-4 space-x-2 text-xs text-gray-500">
                <li>
                  <p>English</p>
                </li>
                <li>
                  <p>© 2023 Instagram from Meta</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </SettingsLayout>
  );
}
