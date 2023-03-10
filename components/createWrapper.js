import axios from 'axios';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';
import PostForm from './verticalNavComps/createForm';

export default function CreateWrapper({ create, setCreate }) {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [next, setNext] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [desc, setInput] = useState('');
  const [details, setAccess] = useState('');
  const [location, setLocation] = useState('');
  const [hide, setEnabled] = useState(false);
  const [offcomts, setEnabled2] = useState(false);

  function previewFile(e) {
    // Reading New File (open file Picker Box)
    const reader = new FileReader();
    // Gettting Selected File (user can select multiple but we are choosing only one)
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes('image')) {
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes('video')) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await imageUpload();
    console.log(imageUrl);
    try {
      const { data } = await axios.post('/api/posts/createPost', {
        desc,
        details,
        location,
        hide,
        offcomts,
        imageUrl,
      });
      if (data) {
        toast.success('Post successfully created');
        setCreate(!create);
      } else {
        toast.error('!Something went wrong');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const imageUpload = async () => {
    const form = new FormData();
    if (imagePreview) {
      form.append('file', imagePreview);
      form.append('upload_preset', 'instaPics');
      form.append('cloud_name', 'naksdabitch');
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/naksdabitch/image/upload',
        form
      );
      return res.data.url;
    } else if(videoPreview) {
      form.append('file', videoPreview);
      form.append('upload_preset', 'instaPics');
      form.append('cloud_name', 'naksdabitch');
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/naksdabitch/video/upload',
        form
      );
      return res.data.url;
    }
  };
  
  return (
    <div>
      <div className="fixed inset-0 bg-opaqueBlack bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 left-[32%] flex max-w-full">
            <div className={`absolute top-0 -right-32 `}>
              <button
                onClick={() => setCreate(!create)}
                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Close panel</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-white flex flex-col justify-center items-center mt-10 mb-0 rounded-md  max-w-2xl max-h-[80%] overflow-y-auto">
              {imagePreview || videoPreview ? (
                <div className="">
                  <div className="flex items-center justify-between px-2 w-full border-b py-2 sticky  z-10 top-0 bg-white">
                    {next ? (
                      <div className="flex items-center justify-between px-2 w-full">
                        <BiArrowBack onClick={() => setNext(!next)} />
                        <p>Create new post</p>
                        <div
                          onClick={handleSubmit}
                          className="text-buttonBlue font-semibold cursor-pointer active:text-blue-900"
                        >
                          Share
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between px-2 w-full">
                        <BiArrowBack />
                        <p>Crop</p>
                        <div
                          onClick={() => setNext(!next)}
                          className="text-buttonBlue font-semibold"
                        >
                          Next
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-4">
                    <div
                      className={` ${
                        next ? 'col-span-2 border-r' : 'col-span-4'
                      }`}
                    >
                      <div className="sticky top-10">
                        {imagePreview != null && (
                          <img
                            src={imagePreview}
                            alt=""
                            width="300"
                            className="justify-center items-center px-2 "
                          />
                        )}
                        {videoPreview != null && (
                          <ReactPlayer
                          url={videoPreview}
                          className='flex px-2'
                          loop
                          playing
                          playIcon={<button>Play</button>}
                          width='300px'
                          height="500px"
                        />
                        )}
                      </div>
                    </div>

                    {next && (
                      <div className="col-span-2   pt-4 ">
                        <PostForm
                          isPickerVisible={isPickerVisible}
                          setPickerVisible={setPickerVisible}
                          desc={desc}
                          setInput={setInput}
                          details={details}
                          setAccess={setAccess}
                          location={location}
                          setLocation={setLocation}
                          hide={hide}
                          setEnabled={setEnabled}
                          offcomts={offcomts}
                          setEnabled2={setEnabled2}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3">
                  <div className="col-span-3">
                    <div className="w-full  font-semibold border-b justify-center items-center py-6">
                      <p className="flex justify-center items-center ">
                        Create new post
                      </p>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-20 pb-8">
                      <img
                        src="/images/pngkey.com-white-post-it-png-3525856.png"
                        alt=""
                        width={60}
                      />
                      <p className="pt-4 text-xl font-thin px-20">
                        Drag photos and videos here
                      </p>
                    </div>
                    <div className="flex justify-center items-center pt-6 mb-20 ">
                      <button className="bg-buttonBlue hover:bg-btnHoverBlue px-4 rounded-md py-1 text-white font-semibold">
                        <label className="">
                          <input
                            type="file"
                            accept="video/*,image/*"
                            onChange={previewFile} 
                          />
                          Select from computer
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
