import React, { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { GrEmoji } from 'react-icons/gr';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { Switch } from '@headlessui/react';
import Link from 'next/link';
import Head from 'next/head';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function PostForm({
  isPickerVisible,
  setPickerVisible,
  desc,
  setInput,
  details,
  setAccess,
  location,
  setLocation,
  hide,
  setEnabled,
  offcomts,
  setEnabled2,
}) {
  const [open, setOpen] = useState(0);

  const addEmoji = (e) => {
    let emoji = e.native;
    setInput(desc + emoji);
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const userData = {
    name: 'glamar_rose ',
    img: '/images/PngItem_1503945.png',
  };
  return (
    <>
      <div className=" bg-white  overflow-y-auto flex flex-col justify-start">
        <div className="flex items-center space-x-4 px-4">
          <img
            src={userData?.img}
            alt=""
            width={30}
            height={30}
            className="rounded-full "
          />
          <p className="font-semibold">{userData?.name}</p>
        </div>
        <form>
          <div className="w-full mb-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 mt-4 scrollbar-hide">
            <div className="py-2 bg-white rounded-t-lg dark:bg-gray-800 ">
              <label for="comment" className="sr-only">
                Your caption{' '}
              </label>
              <textarea
                id="caption"
                value={desc}
                onChange={(e) => setInput(e.target.value)}
                rows="4"
                className="w-full px-4 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 focus:outline-none mt-4"
                placeholder="Write a caption..."
              ></textarea>
              <div
                onClick={() => setPickerVisible(!isPickerVisible)}
                className="px-4"
              >
                <GrEmoji />
              </div>
              {isPickerVisible && (
                <div className="h-48 overflow-hidden ">
                  <Picker data={data} onEmojiSelect={addEmoji} />
                </div>
              )}

              <div className="mt-2 border-t border-b">
                <input
                  placeholder="Add location"
                  value = {location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="focus:outline-none py-2 px-4"
                />
              </div>

              <div className="">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <p className="text-[16px] px-4 text-gray-400 font-normal">
                      Accessibility
                    </p>
                  </AccordionHeader>
                  <AccordionBody>
                    <p className="text-[12px] px-4">
                      Alt text describes your photos for people with visual
                      impairments. Alt text will be automatically created for
                      your photos or you can choose to write your own.
                    </p>
                    <div className="w-full justify-center items-center mt-2 px-2">
                      <input
                      value={details}
                        onChange={(e) => setAccess(e.target.value)}
                        placeholder="Write alt text"
                        className="text-[12px] border px-3 py-2  rounded-md w-[90%]"
                      />
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <p className="text-[16px] px-4 text-gray-400 font-normal">
                      Advanced settings
                    </p>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex items-center  space-x-4 px-4">
                      <p className="text-[16px]">
                        Hide like and view counts on this post
                      </p>
                      <Switch
                        checked={hide}
                        onChange={setEnabled}
                        className={`${
                          hide ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">
                          Enable or disable likes and views
                        </span>
                        <span
                          className={`${
                            hide? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>
                    <p className="px-4 pt-2">
                      Only you will see the total number of likes and views on
                      this post. You can change this later by going to the ···
                      menu at the top of the post. To hide like counts on other
                      people's posts, go to your account settings.
                    </p>
                    <Link href="#">
                      <p className="text-xs px-4  text-blue-900">Learn more.</p>
                    </Link>
                    <div className="flex justify-between items-center px-4 pt-2">
                      <p className="text-[16px]">Turn off commenting</p>
                      <Switch
                        checked={offcomts}
                        onChange={setEnabled2}
                        className={`${
                          offcomts ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">disable commenting</span>
                        <span
                          className={`${
                            offcomts ? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>
                    <p className="text-xs px-4 pt-2">
                      You can change this later by going to the ··· menu at the
                      top of your post.
                    </p>
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
