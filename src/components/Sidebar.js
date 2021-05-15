import React, { useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import navigationLinks from '../utils/navigationLinks';
import useOutsideClick from './useOutsideClick';
export default function Sidebar(props) {
  const wrapperRef = useRef();
  const onOutsideClick = () => {
    console.log('func func');
    if (props.forceOpenSidebar) props.toggleSidebar();
  };
  const memoizedCallback = useCallback(onOutsideClick, [props]);
  useOutsideClick(wrapperRef, memoizedCallback);

  return (
    <aside
      className={`absolute h-full ${
        props.forceOpenSidebar ? 'block' : 'hidden'
      } sm:block w-mysidebar bg-indigo-800`}
      ref={wrapperRef}
    >
      <div className="flex flex-col space-y-1 p-2 text-left text-indigo-300">
        {navigationLinks.map((item) => {
          return (
            <NavLink
              to={item.link}
              activeClassName="rounded-md bg-indigo-900 text-white"
              className="hover:bg-indigo-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              key={item.link}
              onClick={props.toggleSidebar}
            >
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}
