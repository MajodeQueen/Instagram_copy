import React from 'react';

function Expired() {
  return (
    <div>
      <p>
        These are apps and websites you've connected to your Instagram account
        that you may not have used in the last 90 days. They're no longer able
        to access your non-public information, but may still have the
        information you shared while they were active. "Non-public" means
        information that an app can only access if you choose to share it when
        you log in with your Instagram account (like your email address).
      </p>
      <p className="text-[12px] text-gray-400 pt-4">
        You have no expired applications that had access to your Instagram
        account.
      </p>
    </div>
  );
}

export default Expired;
