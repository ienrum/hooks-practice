import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

import useClickAway from '@/hooks/useClickAway';

const Modal = ({ children, width = 100, height = 100, onClose }) => {
  const containerStyle = useMemo(
    () => ({
      width: `${width}px`,
      height: `${height}px`,
    }),
    [width, height],
  );

  const el = useMemo(() => document.createElement('div'), []);
  const ref = useClickAway(() => {
    onClose();
  });

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div className='fixed left-0 top-0 h-screen w-screen bg-slate-500 bg-opacity-50'>
      <div
        ref={ref}
        style={containerStyle}
        className='fixed left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 bg-white p-1'>
        {children}
      </div>
    </div>,
    el,
  );
};

export default Modal;
