import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Outlet />
    </main>
  );
};

export default Home;
