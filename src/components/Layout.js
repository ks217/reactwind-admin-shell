import React, { useState } from 'react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
const Layout = (props) => {
  const [showSidebar, setSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setSidebar(!showSidebar);
  };
  return (
    <div className="flex flex-col h-screen">
      <TopNav
        header={props.header}
        forceOpenSidebar={showSidebar}
        onMenuClick={handleToggleSidebar}
      />
      <div className="flex-1">
        <div className="flex flex-row relative h-full">
          <Sidebar
            forceOpenSidebar={showSidebar}
            toggleSidebar={handleToggleSidebar}
          />
          <div className="maincontent sm:ml-mysidebar bg-white flex-1 h-full px-8 pt-4">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
