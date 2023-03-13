import Link from 'next/link';
import React, { useEffect } from 'react';
import TabComponent from './editTabzComponent';
import SettingsLayout from './settingsLayout';
import { TbBrandMeta } from 'react-icons/tb';
export default function SettingsComp({ children, tab, Tab, tabz }) {
  return (
    <>
      <SettingsLayout title="Edit profile.Instagram clone">
        <div className="grid grid-cols-3 border mt-4 mx-4 mb-6">
          <div className="col-span-1 border-r">
            <TabComponent tab={tab} Tab={Tab} tabz={tabz} />

            <Link href="#">
              <span className="text-[12px] px-8 pt-6 text-buttonBlue">
                Switch to professional account
              </span>
            </Link>
            <div className="mt-48 w-full border-t-[2px] border-solid">
              <div className="px-8 pt-6">
                <div className="flex items-center space-x-1">
                  <TbBrandMeta className="text-buttonBlue text-2xl" />
                  <p className="text-lg font-medium">Meta</p>
                </div>
                <div className="text-buttonBlue  pt-2">Accounts Center</div>
                <div>
                  <p className="text-[12px] text-gray-400 pt-4 pb-4">
                    Control settings for connected experiences across Instagram,
                    the Facebook app and Messenger, including story and post
                    sharing and logging in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 justify-center items-center">{children}</div>
        </div>
        <div className="flex flex-col  text-center pt-2 pb-4">
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
      </SettingsLayout>
    </>
  );
}
