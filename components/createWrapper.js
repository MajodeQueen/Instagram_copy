import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';
import PostForm from './verticalNavComps/createForm';
import Image from 'next/image';

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
    } else if (videoPreview) {
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
    <div className="">
      <div className="fixed inset-0 bg-opaqueBlack bg-opacity-75 transition-opacity w-full h-full"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute flex w-full h-full">
            <div className={`absolute top-3 flex right-4`}>
              <button
                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <AiOutlineClose onClick={()=>setCreate(false)}/>
              </button>
            </div>

            <div className="absolute flex justify-center items-center right-0 left-0 w-screen h-screen mb-8">
              <div className="bg-white mx-20">
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
                          <BiArrowBack  />
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
                            <Image
                            src={imagePreview}
                            width={200}
                            height={300}
                            alt=""
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                     33vw"
                            className={` ${next?'w-[600px] h-[450px]':'w-[350px] h-[450px]'} object-cover`}
                          />
                          )}
                          {videoPreview != null && (
                            <ReactPlayer
                              url={videoPreview}
                              className="flex px-2"
                              loop
                              playing
                              playIcon={<button>Play</button>}
                              width="300px"
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
    </div>
  );
}
