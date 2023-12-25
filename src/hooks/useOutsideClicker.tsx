import {useEffect, useRef} from 'react';

type UseOutsideClickerProps = {
  onOutsideClick: () => void;
};

const useOutsideClicker = ({onOutsideClick}: UseOutsideClickerProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return wrapperRef;
};

export default useOutsideClicker;