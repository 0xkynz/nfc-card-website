import React from 'react';

// components

import FooterSmall from 'components/Footers/FooterSmall.js';

export default function Auth({ children }) {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                'url(' + require('assets/img/register_bg_2.png') + ')',
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
