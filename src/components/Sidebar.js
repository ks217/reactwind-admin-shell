import React from 'react';
import { NavLink } from 'react-router-dom';
import navigationLinks from '../utils/navigationLinks';
export default function Sidebar(props) {
  return (
    <>
      <aside
        className={`absolute h-full ${
          props.forceSidebar ? 'block' : 'hidden'
        } sm:block w-mysidebar bg-indigo-800`}
      >
        <div className="flex flex-col space-y-1 p-2 text-left text-indigo-300">
          {navigationLinks.map((item) => {
            return (
              <NavLink
                to={item.link}
                activeClassName="rounded-md bg-indigo-900 text-white"
                className="hover:bg-indigo-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                key={item.link}
                onClick={props.onLinkClick}
              >
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </aside>
    </>
  );
}
