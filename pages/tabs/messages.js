import SettingsLayout from '@/components/moreComponents/settingsLayout';
import React from 'react';

export default function Messages() {
  return (
    <SettingsLayout>
      <div className=" border mt-6 mr-10 h-[90%]">
        <div className="flex border-b justify-between">
          <div className="w-[30%] border-r ">
            <div>
              <p>chats</p>
            </div>
          </div>
          <div>
            <p>message box</p>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
}
