import { useEffect, useRef } from 'react';

export default function useOutsideClick(ref, handler) {
  // Create a ref that stores handler
  const savedHandler = useRef();
  // Make sure we always have the latest handler.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        savedHandler.current(event);
      }
    };
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [ref]);
}
