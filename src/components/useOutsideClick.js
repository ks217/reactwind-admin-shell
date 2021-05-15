import { useEffect, useRef } from 'react';

export default function useOutsideClick(ref, handler) {
  // Create a ref that stores handler
  const savedHandler = useRef();
  // Make sure we always have the latest handler.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    console.log('useOutsideClick useEffect');
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // console.log('sidebar hide outside click');
        savedHandler.current(event);
      }
    };
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      console.log('removeEventListener');
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [ref]);
}
