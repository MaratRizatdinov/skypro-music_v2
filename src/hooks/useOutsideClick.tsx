import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();        
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);      
    };
  }, [callback]);

  return ref;
};

// ПРИМЕР   

// -------------------------------------------------------------


// import { useOutsideClick } from './useOutsideClick';

// export const MyComponent = () => {
//   const ref = useOutsideClick(() => {
//     console.log('Clicked outside of MyComponent');
//   });

//   return (
//     <div ref={ref}>
//       My Component
//     </div>
//   );
// };