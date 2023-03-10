import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  async function handleGoogleSign() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        console.log(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="bg-white md:bg-gray-50 mx-auto">
        <div className="flex justify-center space-x- py-4">
          <div className="hidden md:block">
            <img
              src="/images/Screen-Shot-2018-09-03-at-11.05.04-PM-e1536030535339.png"
              alt="instagram"
            />
          </div>
          <div className=" md:w-[26%]">
            <div className="flex flex-col md:border md:border-gray-200  items-center bg-white mt-12 px-6 py-6">
              <div className="mt-8">
                <img
                  src="/images/PngItem_1327993.png"
                  alt="insta img"
                  width="180"
                />
              </div>
              <form
                className="w-[90%] mt-8  overflow-hidden"
                onSubmit={handleSubmit(submitHandler)}
              >
                <div className="relative group border-[1px] rounded bg-gray-50 ">
                  <input
                    id="email"
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
                    className="w-full h-10 px-4 text-xs peer  outline-none"
                  />
                  <label
                    htmlFor="email"
                    className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-[12px] text-gray-400 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/5 peer-valid:h-1/5 group-focus-within:-translate-y-[1/2] peer-valid:-translate-y-[1/2] group-focus-within:pl-2 group-focus-within:py-2  peer-valid:pl-2"
                  >
                    Phone number , username, or Email
                  </label>
                </div>
                {errors.email && (
                  <div className="text-red-500 text-[12px]">
                    {errors.email.message}
                  </div>
                )}
                <div className="flex items-center relative group border-[1px] mt-2 bg-gray-50 ">
                  <input
                    {...register('password', {
                      required: 'Please enter password',
                      minLength: {
                        value: 6,
                        message: 'password is more than 5 chars',
                      },
                    })}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full h-10 px-4 text-xs peer  outline-none"
                  />
                  <p
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer text-xs mb-[3px] font-semibold"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </p>
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

                <div className="flex items-center mt-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-black bg-black border-gray-300 rounded focus:ring-black "
                  />
                  <label className="ml-2 text-xs text-black ">
                    Save Login Info
                  </label>
                </div>
                <div className="flex items-center mt-4 ">
                  <button className="bg-blue-500 w-full rounded text-white text-xs font-semibold py-[4px] hover:bg-blue-700">
                    Log in
                  </button>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex-grow bg bg-gray-300 h-[1px]"></div>
                  <div className="flex-grow-0 mx-5 text-xs text-gray-500 dark:text-white">
                    OR
                  </div>
                  <div className="flex-grow bg bg-gray-300 h-[1px]"></div>
                </div>
                <button
                  type="submit"
                  onClick={handleGoogleSign}
                  className="w-full md:mx- flex justify-center items-center mt-4 space-x-2 shadow py-4"
                >
                  <FcGoogle />
                  <p className="text-xs tracking-tighter">
                    Sign in with Google
                  </p>
                </button>

                <div className="mt-4">
                  <button className="w-full text-xs text-blue-900">
                    Forgot password?
                  </button>
                </div>
              </form>
            </div>

            <div className="flex  justify-center md:border   md:border-gray-200  items-center bg-white md:mt-2 px-6 py-6">
              <p className="text-xs">Don't have an account?</p>
              <Link href="/register">
                <p className="text-xs text-blue-500 font-semibold">
                  Sign Up
                </p>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center mt-2 ">
              <p className="text-xs">Get the app.</p>
              <div className="flex flex-row flex-wrap justify-center h-auto items-center -py-4">
                <img
                  src="/images/new-get-it-on-google-play-png-logo-20.png"
                  alt="google store"
                  width={90}
                />
                <img
                  src="/images/microsoft_store_badge-logo-brandlogo.net_-768x768.png"
                  width={90}
                />
              </div>
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
