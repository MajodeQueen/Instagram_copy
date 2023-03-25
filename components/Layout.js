import Head from 'next/head';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import TabComponent from './verticalNavComps/tabzComponent';
import Search from './verticalNavComps/tabzComponent/search';
import { BsInstagram } from 'react-icons/bs';
import Notifications from './verticalNavComps/tabzComponent/notifications';
import More from './verticalNavComps/tabzComponent/more';
import CreateWrapper from './createWrapper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FollowComp from './followComp';
import axios from 'axios';
import PostDetails from './postDetails';
import { Store } from '@/utils/Store';


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


export default function Layout({ children, title }) {
  const [open, setOpen] = useState(true);
  const [notOpen, setNotOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [create, setCreate] = useState(false);
  const [postAbout, setPostAbout] = useState(false);
  const [{ userInfo, error, followusers }, dispatch] = useReducer(reducer, {
    error: false,
  });

  const {state:cxtState} = useContext(Store);
  const {openPostDetails} = cxtState;

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
    <>
      <Head>
        <title>{title ? title : 'Instagram Clone'}</title>
        <meta
          name="description"
          content="Instagram clone using next js ,mongodb and tailwind"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/SeekPng.com_insta-png_884742.png" />
      </Head>

      <ToastContainer
        limit={1}
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


      <div
        className={`flex flex-col justify-between md:grid md:grid-cols-5 md:gap-16   min-h-screen md:flex-row bg-white relative `}
      >
        <div
          className={` ${
            !open || notOpen ? 'w-20 ' : 'md:col-span-1'
          } ease-in duration-300 border-r-[1px]
          `}
        >
          
          <div
            className={`md:block hidden pt-5  px-2 fixed  
              }`}
          >
            <div className="pb-4 px-4">
            {!open || notOpen ? (
              <BsInstagram className="ml-2 text-2xl" />
            ) : (
              <img
                src="/images/PngItem_1327993.png"
                alt="insta img"
                width="100"
              />
            )}
          </div>
            <TabComponent
              open={open}
              setOpen={setOpen}
              notOpen={notOpen}
              setNotOpen={setNotOpen}
              more={more}
              setMore={setMore}
              create={create}
              setCreate={setCreate}
              userInfo={userInfo} 
            />
          </div>
        </div>
        <div
          className={`min-h-screen  ease-in-out duration-300 fixed left-16 ${
            open ? 'translate-x-0 ' : 'translate-x-4 shadow-md rounded bg-white'
          } ${!notOpen ? 'translate-x-0' : 'translate-x-4 shadow-md rounded bg-white'}`}
        >
          {!open && !notOpen && <Search />}
          {notOpen && open && <Notifications />}
        </div>

        {more? (
          <div className="fixed left-4 w-[16%]  bottom-5 shadow rounded-md">
            <More/>
          </div>
        ):""}

        <div className="absolute z-50">
          {create && 
          (
            <div>
              <CreateWrapper create={create} setCreate={setCreate}  userInfo={ userInfo} />
            </div>
          )}
        </div>


        <div className="absolute z-50">
          {openPostDetails && 
          (
            <div>
              <PostDetails/>
            </div>
          )}
        </div>

        <div className="md:col-span-4">
          <main>
            <div className={`grid grid-cols-5 min-h-screen`}>
              <div className={`${openPostDetails?' overflow-hidden ':''}col-span-5 md:col-span-3 mt-8 `}>
                {children}
              </div>
              <div className="col-span-2 hidden md:block mt-8 ">
                <FollowComp userInfo={userInfo} error={error} followusers={followusers}/>
              </div>
            </div>
          </main>
        </div>
        <div className="block md:hidden">
          <footer>footer</footer>
        </div>
      </div>
    </>
  );
}


