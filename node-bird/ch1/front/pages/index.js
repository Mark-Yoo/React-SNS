import React from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return(
    <div>
      <AppLayout></AppLayout>
      <Link href="/about"><a>to about</a></Link>
      <div>Hello, Next!</div>
    </div>
  );
};

export default Home;