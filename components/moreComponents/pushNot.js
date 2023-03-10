import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';


export default function PushNot() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="mx-6">
        <p className="font-semibold pb-6">Push Notifications</p>
        <div className="flex justify-between w-full">
          <p>Pause all</p>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div className="mt-6">
          <p className="font-semibold">Likes</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label2"
                  type="radio"
                  name="radio"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From People I Follow
              </label>
            </div>

            <div className="flex items-center py-4">
              <div className="rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label3"
                  type="radio"
                  name="radio"
                  className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <p
                id="label3"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From Everyone
              </p>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed liked your photo.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Likes and Comments on Photos of You</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label4"
                  type="radio"
                  name="radio2"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label4"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label5"
                  type="radio"
                  name="radio2"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label5"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From People I Follow
              </label>
            </div>

            <div className="flex items-center py-4">
              <div className="rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label6"
                  type="radio"
                  name="radio2"
                  className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <p
                id="label6"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From Everyone
              </p>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed commented on a post you're tagged in.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Comments</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label7"
                  type="radio"
                  name="radio3"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label7"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label8"
                  type="radio"
                  name="radio3"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label8"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From People I Follow
              </label>
            </div>

            <div className="flex items-center py-4">
              <div className="rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label9"
                  type="radio"
                  name="radio3"
                  className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <p
                id="label9"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From Everyone
              </p>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed commented on a post you're tagged in.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Comment Likes</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label7"
                  type="radio"
                  name="radio4"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label7"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label8"
                  type="radio"
                  name="radio4"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label8"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed liked your comment: Nice shot!
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">First Posts and Stories</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio5"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label2"
                  type="radio"
                  name="radio5"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From People I Follow
              </label>
            </div>

            <div className="flex items-center py-4">
              <div className="rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label3"
                  type="radio"
                  name="radio5"
                  className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <p
                id="label3"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From Everyone
              </p>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            See johnappleseed's first story on Instagram, and other similar
            notifications.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">New Followers</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio6"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio6"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            John Appleseed (johnappleseed) started following you.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Accepted Follow Requests</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio7"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio7"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            John Appleseed (johnappleseed) accepted your follow request
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Account Suggestions</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio8"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio8"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed, who you might know, is on Instagram, and other
            similar notifications.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Message Requests</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio9"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio9"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed wants to send you a message.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Messages</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-01"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-01"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed sent you a message.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Group Requests</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-02"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-02"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed sent you a message.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Likes</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-3"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-3"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From People I Follow
              </label>
            </div>

            <div className="flex items-center py-4">
              <div className="rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label3"
                  type="radio"
                  name="radio-3"
                  className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <p
                id="label3"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                From Everyone
              </p>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            Video Chats
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Original audio</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-04"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-04"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed created a reel with your audio.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Remixes</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-05"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-05"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed remixed your reel.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Live Videos</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-06"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-06"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed, johndoe and janedoe recently shared new reels.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold">Recently Uploaded Reels</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-07"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-07"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
          johnappleseed, johndoe and janedoe recently shared new reels.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Most Watched Reels</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-08"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-08"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
          Check out the most watched reels in your location today.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold">Your Fundraisers</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-09"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-09"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed donated to your fundraiser.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Fundraisers by Others</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-001"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-001"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            johnappleseed started a fundraiser.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Reminders</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-002"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-002"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            You have unseen notifications, and other similar notifications.
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Support Requests</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-003"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-003"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4 border-b py-1 text-gray-500">
            Your support request from July 10 was just updated.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold">Unrecognized Logins</p>
          <div
            role="radiogroup"
            className=" flex flex-col  justify-start ml-2 mt-4"
          >
            <div className="flex items-center py-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label1"
                  type="radio"
                  name="radio-004"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:rinblue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label1"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                off
              </label>
            </div>

            <div className="flex items-center py-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked
                  aria-labelledby="label2"
                  type="radio"
                  name="radio-004"
                  className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
              >
                on
              </label>
            </div>
          </div>
          <p className="text-[12px] pt-4  py-1 text-gray-500">
            An unrecognized Apple iPhone 11 has logged in from Foster City, CA,
            USA.
          </p>
        </div>
      </div>
  )
}
