// Adapted from:
// https://stackoverflow.com/a/42234988/5381471

import { useEffect } from 'react';

// Hook that listens for clicking outside of an element
// Useful for dropdowns and modals where clicking outside of the element
// should close / hide the element
const useOutsideClickListener = (ref, callback) => {
  useEffect(() => {
    // Trigger callback if clicked outside of the element
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClickListener;
