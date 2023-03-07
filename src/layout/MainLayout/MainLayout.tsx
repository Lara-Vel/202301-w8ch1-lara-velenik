import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../features/header/Header';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
