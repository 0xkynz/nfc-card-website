/* eslint-disable no-undef */
import React from 'react';
import Footer from 'components/Footers/Footer.js';
import Profile from 'components/Profile/Profile.js';

import { getByCardID } from '../../services/user';

export default function ProfilePage({ user }) {
  return (
    <>
      <main className="profile-page">
        <Profile user={user}></Profile>
        <Footer></Footer>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { cardID } = params;
  const res = await getByCardID(cardID);
  const {
    data: { user },
  } = res;
  return { props: { user } };
}
