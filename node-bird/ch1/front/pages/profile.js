import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
  return(
    <>
      <Head>
        <title>ReactSNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.4/antd.css" />
      </Head>
      <AppLayout>
        <div>내 프로필</div>
      </AppLayout>
    </>
  );
};

export default Profile;