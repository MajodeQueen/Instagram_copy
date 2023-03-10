import axios from 'axios';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

export default function register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ username, email, password, name }) => {
    try {
      await axios.post('/api/auth/signup', {
        username,
        name,
        email,
        password,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      router.push('/');
      if (result.error) {
        console.log(result.error);
      }
      toast.success('SignUp successful')
    } catch (err) {
      console.log(err);
      toast.error('!Something went wrong')
    }
  };

  return (
    <>
      <Head>
      <title>Signup</title>
        <meta
          name="description"
          content="Instagram clone using next js ,mongodb and tailwind"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/SeekPng.com_insta-png_884742.png" />
      </Head>
      <div className="bg-gray-50 min-h-screen">
        <div className="flex flex-col items-center ">
          <div className="md:border-[1px] md:w-[26%] mt-4 md:bg-white py-2 pb-10">
            <div className="flex justify-center items-center mt-6">
              <img
                src="/images/PngItem_1327993.png"
                alt="insta img"
                width="180"
              />
            </div>
            <div className=" justify-center items-center text-lg font-semibold text-gray-400 px-2 text-center">
              Sign up to see photos and videos from your friends.
            </div>
            <div className="flex justify-center items-center mt-4  w-full">
              <div className="flex items-center justify-center space-x-2 md:w-[60%] shadow py-4 px-2">
                <FcGoogle className="text-1xl" />
                <p className="md:text-md text-sm tracking-tighter ">
                  Sign in with Google
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <div className="flex items-center mt-4 justify-center w-[80%]">
                <div className="flex-grow bg bg-gray-300 h-0.5"></div>
                <div className="flex-grow-0 mx-5 text-xs text-gray-500 dark:text-white font-semibold">
                  OR
                </div>
                <div className="flex-grow bg bg-gray-300 h-0.5"></div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-[85%] relative group border-[1px] ">
                <input
                  {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i ||
                        /^\+(?:[0-9] ?){6,14}[0-9]$/,
                      message: 'Please enter valid email',
                    },
                  })}
                  type="text"
                  id="email"
                  className="w-full h-10 px-4 text-xs peer bg-gray-50 outline-none"
                />
                <label
                  htmlFor="email"
                  className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-[12px] text-gray-400 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/5 peer-valid:h-1/5 group-focus-within:-translate-y-[1/2] peer-valid:-translate-y-[1/2] group-focus-within:pl-2 group-focus-within:py-2  peer-valid:pl-2"
                >
                  Mobile Number or Email
                </label>
              </div>
              {errors.email && (
                <div className="text-red-500 text-[12px] justify-start">
                  {errors.email.message}
                </div>
              )}

              <div className="w-[85%] relative group border-[1px] mt-2 ">
                <input
                  {...register('name', {
                    required: 'Please enter fullname',
                    minLength: {
                      value: 6,
                      message: 'fullname should be atleast 6 characters',
                    },
                  })}
                  type="text"
                  id="name"
                  className="w-full h-10 px-4 text-xs peer bg-gray-50 outline-none"
                />
                <label
                  htmlFor="name"
                  className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-[12px] text-gray-400 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/5 peer-valid:h-1/5 group-focus-within:-translate-y-[1/2] peer-valid:-translate-y-[1/2] group-focus-within:pl-2 group-focus-within:py-2  peer-valid:pl-2"
                >
                  Full Name
                </label>
              </div>
              {errors.name && (
                <div className="text-red-500 text-[12px]">
                  {errors.name.message}
                </div>
              )}

              <div className="w-[85%] relative group border-[1px] mt-2 ">
                <input
                  {...register('username', {
                    required: 'Please enter a username',
                    minLength: {
                      value: 6,
                      message: 'Username should be atleast 6 characters',
                    },
                  })}
                  type="text"
                  id="username"
                  className="w-full h-10 px-4 text-xs peer bg-gray-50 outline-none"
                />
                <label
                  htmlFor="username"
                  className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-[12px] text-gray-400 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/5 peer-valid:h-1/5 group-focus-within:-translate-y-[1/2] peer-valid:-translate-y-[1/2] group-focus-within:pl-2 group-focus-within:py-2  peer-valid:pl-2"
                >
                  Username
                </label>
              </div>
              {errors.username && (
                <div className="text-red-500 text-[12px]">
                  {errors.username.message}
                </div>
              )}

              <div className="w-[85%] relative group border-[1px] mt-2 ">
                <input
                  {...register('password', {
                    required: 'Please enter password',
                    minLength: {
                      value: 6,
                      message: 'password is more than 5 chars',
                    },
                  })}
                  type="text"
                  id="password"
                  className="w-full h-10 px-4 text-xs peer bg-gray-50 outline-none"
                />
                <label
                  htmlFor="password"
                  className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-[12px] text-gray-400 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/5 peer-valid:h-1/5 group-focus-within:-translate-y-[1/2] peer-valid:-translate-y-[1/2] group-focus-within:pl-2 group-focus-within:py-2  peer-valid:pl-2"
                >
                  Password
                </label>
              </div>
              {errors.password && (
                <div className="text-red-500 text-[12px]">
                  {errors.password.message}
                </div>
              )}
              <div className="flex items-center justify-center mt-4 w-[84%] md:text-right text-center">
                <p className="text-xs text-gray-400">
                  People who use our service may have uploaded your contact
                  information to Instagram.
                  <Link href="#">
                    <span className="text-xs text-blue-900">Learn More</span>
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-center mt-4 w-[84%] text-center">
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our
                  <Link href="#">
                    <span className="text-xs text-blue-900">
                      {' '}
                      Terms , Privacy Policy{' '}
                    </span>
                  </Link>
                  {}and{' '}
                  <Link href="#">
                    <span className="text-xs text-blue-900">
                      Cookies Policy .
                    </span>
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="items-center justify-center mt-4 bg-blue-400 text-white font-semibold w-[86%] rounded py-[4px] "
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="md:border-[1px] md:w-[26%] mt-4 py-6 md:bg-white">
            <div className="flex items-center justify-center">
              <p className="text-sm">
                Have an account?{' '}
                <Link href="/login">
                  <span className="text-sm text-blue-500">Log in</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-2 ">
            <p className="text-sm">Get the app.</p>
            <div className="flex flex-row flex-wrap justify-center h-auto items-center -py-4">
              <img
                src="/images/new-get-it-on-google-play-png-logo-20.png"
                alt="google store"
                width={150}
              />
              <img
                src="/images/microsoft_store_badge-logo-brandlogo.net_-768x768.png"
                width={150}
              />
            </div>
          </div>
        </div>
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
    </>
  );
}
