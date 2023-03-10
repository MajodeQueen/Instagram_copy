import React from 'react'

export default function EmailNot() {
  return (
    <div className="flex flex-col w-full justify-start ml-8">
        <div role="radiogroup" className=" py-4 flex flex-col justify-start">
          <p className="pb-4">Feedback Emails</p>
          <div className="flex items-center">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label2"
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label2"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              Off
            </label>
          </div>
          <div className="flex items-center mt-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                checked
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label1"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              On
            </label>
          </div>
          <p className="border-b py-1 w-full text-[12px] text-gray-500 pt-6">
            Give feedback on Instagram
          </p>
        </div>

        <div role="radiogroup" className=" py-4 flex flex-col justify-start">
          <p className="pb-4">Reminder Emails</p>

          <div className="flex items-center">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label4"
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label4"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              Off
            </label>
          </div>
          <div className="flex items-center mt-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label3"
                checked
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label3"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              On
            </label>
          </div>
          <p className="border-b py-1 w-full text-[12px] text-gray-500 pt-6">
            Get notifications you may have missed.
          </p>
        </div>

        <div role="radiogroup" className=" py-4 flex flex-col justify-start">
          <p className="pb-4">Product Emails</p>

          <div className="flex items-center">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label6"
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label6"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              Off
            </label>
          </div>
          <div className="flex items-center mt-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label5"
                checked
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label5"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              On
            </label>
          </div>
          <p className="border-b py-1 w-full text-[12px] text-gray-500 pt-6">
            Get tips and resources about Instagram's tools.
          </p>
        </div>

        <div role="radiogroup" className=" py-4 flex flex-col justify-start">
          <p className="pb-4">News Emails</p>

          <div className="flex items-center">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label8"
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label8"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              Off
            </label>
          </div>
          <div className="flex items-center mt-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label7"
                checked
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label7"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              On
            </label>
          </div>
          <p className="border-b py-1 w-full text-[12px] text-gray-500 pt-6">
            Learn about new Instagram features.
          </p>
        </div>

        <div role="radiogroup" className=" py-4 flex flex-col justify-start">
          <p className="pb-4">Support Emails</p>

          <div className="flex items-center">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label10"
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label10"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              Off
            </label>
          </div>
          <div className="flex items-center mt-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label9"
                checked
                type="radio"
                className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
              />
              <div className="check-icon hidden border-4 border-blue-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label
              id="label9"
              className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
            >
              On
            </label>
          </div>
          <p className=" py-1 w-full text-[12px] text-gray-500 pt-6">
            Get notifications you may have missed.
          </p>
        </div>
      </div>
  )
}
