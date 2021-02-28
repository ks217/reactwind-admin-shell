import React, { useState } from 'react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
const Layout = (props) => {
  const [showSidebar, setSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setSidebar(!showSidebar);
  };
  return (
    <div className="min-h-screen">
      <TopNav
        header={props.header}
        forceOpenSidebar={showSidebar}
        onMenuClick={handleToggleSidebar}
      />
      <div className="flex flex-row min-h-full min-w-full">
        <Sidebar
          forceOpenSidebar={showSidebar}
          toggleSidebar={handleToggleSidebar}
        />
        <div className="maincontent sm:ml-mysidebar h-full w-full px-8 pt-4">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
