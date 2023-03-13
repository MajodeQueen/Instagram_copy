import Link from 'next/link';
import { useRouter } from 'next/router';
import { GrHomeRounded } from 'react-icons/gr';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { CgAddR, CgProfile, CgDetailsMore } from 'react-icons/cg';
import { Avatar } from '@mui/material';

const TabComponent = ({
  open,
  setOpen,
  notOpen,
  setNotOpen,
  more,
  setMore,
  create,
  setCreate,
  userInfo,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-[#FFFFFF]  w-full  items-center cursor-pointer">
      <div className="w-full flex flex-col">
        <Link href="/">
          <div
            className={`flex items-center  space-x-6 text-center py-3 px-4 mb-2  w-full rounded-full  text-xs hover:bg-blue-gray-50 ${
              router.asPath === '/' ? 'font-semibold' : ''
            } `}
          >
            <span className="text-2xl ">
              <GrHomeRounded />
            </span>
            <span
              className={`text-[16px] ${!open && 'hidden'} ${
                notOpen && 'hidden'
              }`}
            >
              Home
            </span>
          </div>
        </Link>

        <div
          className={`flex items-center  space-x-6 text-center py-3 px-4 mb-2  w-full rounded-full  text-xs hover:bg-blue-gray-50 active:font-semibold`}
          onClick={
            notOpen
              ? () => setNotOpen(!notOpen) && setOpen(!open)
              : () => setOpen(!open)
          }
        >
          <span className="text-2xl ">
            <BsSearch />
          </span>
          <span
            className={`text-[16px] ${!open && 'hidden'} ${
              notOpen && 'hidden'
            }`}
          >
            Search
          </span>
        </div>
        <Link href="/tabs/explore">
          <div
            className={`flex items-center  space-x-6 text-center py-3 px-4 mb-2  w-full rounded-full  text-xs hover:bg-blue-gray-50 ${
              router.asPath === '/tabs/explore' ? 'font-semibold' : ''
            }`}
          >
            <span className="text-2xl ">
              <MdOutlineExplore />
            </span>
            <span
              className={`text-[16px] ${!open && 'hidden'} ${
                notOpen && 'hidden'
              }`}
            >
              Explore
            </span>
          </div>
        </Link>
        <Link href="/tabs/reels">
          <div
            className={`flex items-center  space-x-6 text-center py-3 px-4 mb-2  w-full rounded-full  text-xs hover:bg-blue-gray-50 ${
              router.asPath === '/tabs/reels' ? 'font-semibold' : ''
            }`}
          >
            <div className="">
              <img
                src="/images/instagram-reels-13408 (1).png"
                alt="reel img"
                width="22"
              />
            </div>
            <span
              className={`text-[16px] ${!open && 'hidden'} ${
                notOpen && 'hidden'
              }`}
            >
              Reels
            </span>
          </div>
        </Link>
        <Link href="/tabs/messages">
          <div
            className={`flex items-center  space-x-6 text-center py-3 px-4 mb-2  w-full rounded-full  text-xs hover:bg-blue-gray-50 ${
              router.asPath === '/tabs/messages' ? 'font-semibold' : ''
            }`}
          >
            <span className="text-2xl ">
              <RiMessengerLine />
            </span>
            <span
              className={`text-[16px] ${!open && 'hidden'} ${
                notOpen && 'hidden'
              }`}
            >
              Messages
            </span>
          </div>
        </Link>
        <div
          className={`flex items-center  space-x-6 text-center py-3 px-4 mb-2  w-full rounded-full  text-xs hover:bg-blue-gray-50 active:font-semibold`}
          onClick={
            !open
              ? () => setOpen(!open) && setNotOpen(!notOpen)
              : () => setNotOpen(!notOpen)
          }
        >
          <span className="text-2xl ">
            <BsHeart />
          </span>
          <span
            className={`text-[16px] ${!open && 'hidden'} ${
              notOpen && 'hidden'
            }`}
          >
            Notifications
          </span>
        </div>

        <div
          className={`flex items-center  space-x-6 text-center py-3 px-4 mb-2  w-full rounded-full  text-xs hover:bg-blue-gray-50 active:font-semibold`}
          onClick={() => setCreate(!create)}
        >
          <span className="text-2xl ">
            <CgAddR />
          </span>
          <span
            className={`text-[16px] ${!open && 'hidden'} ${
              notOpen && 'hidden'
            }`}
          >
            Create
          </span>
        </div>

        <Link href="/tabs/profile">
          <div
            className={`flex items-center  space-x-6 text-center py-3 px-4 mb-0 w-full rounded-full  text-xs hover:bg-blue-gray-50 ${
              router.asPath === '/tabs/profile' ? 'font-semibold' : ''
            }`}
          >
            <Avatar
              alt=""
              src={userInfo?.image}
              sx={{ width: 24, height: 24 }}
            />
            <span
              className={`text-[16px] ${!open && 'hidden'} ${
                notOpen && 'hidden'
              }`}
            >
              Profile
            </span>
          </div>
        </Link>

        <div
          className={`flex items-center  space-x-6 text-center py-3 px-4 mb-2 w-full rounded-full  text-xs hover:bg-blue-gray-50 active:font-semibold`}
          onClick={() => setMore(!more)}
        >
          <span className="text-2xl ">
            <CgDetailsMore />
          </span>
          <span
            className={`text-[16px] ${!open && 'hidden'} ${
              notOpen && 'hidden'
            }`}
          >
            More
          </span>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
