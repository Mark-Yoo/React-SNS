import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const About = () => {
  return(
    <>
      <Head>
        <title>ReactSNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.4/antd.css" />
      </Head>
      <AppLayout>
        <div>about page</div>
      </AppLayout>
    </>
  );
}

export default About;