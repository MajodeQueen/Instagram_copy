import Head from 'next/head';
import React, { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateWrapper from '../createWrapper';
import TabComponent from '../verticalNavComps/tabzComponent';
import More from '../verticalNavComps/tabzComponent/more';
import Notifications from '../verticalNavComps/tabzComponent/notifications';
import Search from '../verticalNavComps/tabzComponent/search';

export default function SettingsLayout({ children , title ,userData}) {
  const [open, setOpen] = useState(true);
  const [notOpen, setNotOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [create, setCreate] = useState(false);
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

      <div className="flex flex-col justify-between md:grid md:grid-cols-5 md:gap-16 min-h-screen md:flex-row bg-white relative ">
        <div
          className={`${
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
              userData={userData}
            />
          </div>
        </div>

        <div
          className={`min-h-screen  ease-in-out duration-300 absolute left-16 ${
            open ? 'translate-x-0' : 'translate-x-4 shadow-md rounded'
          } ${!notOpen ? 'translate-x-0' : 'translate-x-4 shadow-md rounded'}`}
        >
          {!open && !notOpen && <Search />}
          {notOpen && open && <Notifications />}
        </div>

        {more && (
          <div className="fixed left-4 w-[16%]  bottom-5 shadow rounded-md">
            <More />
          </div>
        )}

        <div className="absolute z-50">
          {create && <CreateWrapper create={create} setCreate={setCreate} />}
        </div>
        <div className="col-span-4 min-h-screen">{children}</div>
      </div>
    </>
  );
}
