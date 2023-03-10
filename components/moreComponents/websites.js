import React from 'react';
import WebTabComponent from './webTabzComp';

export default function Websites({ contab, Tabz, contbz, children }) {
  return (
    <>
    <div className='flex justify-start mt-8 mx-8'>
        <p>Apps and Websites</p>
    </div>
      <div className="flex flex-col pt-8 px-6">
        <div>
          <WebTabComponent contab={contab} Tabz={Tabz} contbz={contbz} />
        </div>
        <div className="w-full text-xs px-6 pt-6">{children}</div>
      </div>
    </>
  );
}
