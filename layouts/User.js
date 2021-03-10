import React from 'react';

// components

import UserNavbar from 'components/Navbars/UserNavbar';
import FooterAdmin from 'components/Footers/FooterAdmin.js';

export default function Admin({ children }) {
  return (
    <>
      <div className="relative bg-gray-200">
        <UserNavbar />
        <div className="relative bg-gray-900 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full"></div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
