import React from 'react';
import Broker from './Broker/Broker';
import Navbar from './Navbar/Navbar';
import Wallet from './Wallet/Wallet';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Broker /> */}
      <Wallet />
    </>
  );
};

export default Home;
