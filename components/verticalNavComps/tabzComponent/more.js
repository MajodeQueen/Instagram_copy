import { TbSettings } from 'react-icons/tb';
import { BsBookmark } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import { RxTimer } from 'react-icons/rx';
import { GoReport } from 'react-icons/go';
import Link from 'next/link';

export default function More() {
  return (
    <div className="bg-gray-100 cursor-pointer">
      <div className="bg-white">
        <Link href="/settings">
        <div className="flex items-center justify-between border-b py-3 px-2">
          <p>Settings</p>
          <TbSettings />
        </div>
        </Link>
        
        <div className="flex items-center justify-between border-b py-3 px-2">
          <p>Saved</p>
          <BsBookmark />
        </div>
        <div className="flex items-center justify-between border-b py-3 px-2">
          <p>Switch appearance</p>
          <MdOutlineDarkMode />
        </div>
        <div className="flex items-center justify-between border-b py-3 px-2">
          <p>Your activity</p>
          <RxTimer />
        </div>
        <div className="flex items-center justify-between border-b py-3 px-2">
          <p>Report a problem</p>
          <GoReport />
        </div>
      </div>
      <div className="mt-3">
        <div className="bg-white">
          <div className=" border-b py-3 px-2">
            <p>Switch accounts</p>
          </div>
          <div className="border-b py-4 px-2">
            <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
