/* eslint-disable no-undef */
import React from 'react';

export default function Profile({ user }) {
  const { displayName, tiktok, facebook, twitter, instagram, aboutMe } = user;
  return (
    <>
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={require('assets/img/team-2-800x800.jpg')}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="text-center py-6 px-3 mt-32 sm:mt-0">
                    <a target="_blank" rel="noreferrer" href={facebook}>
                      <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a
                      rel="noreferrer"
                      href={instagram}
                      target="_blank"
                      className="ml-2"
                    >
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a
                      rel="noreferrer"
                      href={tiktok}
                      target="_blank"
                      className="ml-2"
                    >
                      <i className="fab fa-tiktok fa-2x"></i>
                    </a>
                    <a
                      rel="noreferrer"
                      href={twitter}
                      target="_blank"
                      className="ml-2"
                    >
                      <i className="fab fa-twitter fa-2x"></i>
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                  {displayName}
                </h3>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {aboutMe}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
