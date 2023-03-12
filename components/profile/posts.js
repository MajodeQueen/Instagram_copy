import React from 'react'

export default function Posts() {
  return (
    <div className='flex flex-col justify-center text-center items-center py-12'>
      <div className='py-2'><img src='/images/Daco_4623656.png' alt='' className='w-12 h-12 bg-white'/></div> 
      <h1 className='text-3xl font-semibold py-2'>Share Photos</h1>
      <p className='py-2'>When you share photos, they will appear on your profile.</p>
      <div>
        <p className='text-blue-500 py-2'>Share your first photo</p>
      </div>
    </div>
  )
}
