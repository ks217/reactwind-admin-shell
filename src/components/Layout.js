import React from 'react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
const Layout = (props) => {
  return (
    <div className="min-h-screen">
      <TopNav />
      <div className="flex flex-row min-h-full">
        <Sidebar />
        <div className="maincontent sm:ml-mysidebar h-full px-8 pt-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
