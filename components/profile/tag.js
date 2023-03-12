import React from 'react';

export default function Tag() {
  return (
    <div className="flex flex-col justify-center text-center items-center py-12">
      <div className="py-2">
        <img
          src="/images/Daco_4623656.png"
          alt=""
          className="w-12 h-12 bg-white"
        />
      </div>
      <h1 className="text-3xl font-semibold py-2">Photos of you</h1>
      <p className="py-2">
        When people tag you in photos, they'll appear here.
      </p>
    </div>
  );
}
