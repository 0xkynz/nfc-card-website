import React from 'react';

// components

import CardSettings from 'components/Cards/CardSettings.js';
import withPrivateRoute from 'components/Auth/withPrivateRoute.js';

// layout for page

import User from 'layouts/User.js';

const Settings = withPrivateRoute(() => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-8">
          <CardSettings />
        </div>
        {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
});
Settings.layout = User;

export default Settings;
