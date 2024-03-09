import React from 'react';
import NavigationBar from './Navbar';
import ContentArea from './ContentArea';

const UserScreen = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col w-full">
      <NavigationBar />
      <ContentArea />
    </div>
  );
};

export default UserScreen;