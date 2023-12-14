import useClickAway from '@/hooks/useClickAway';
import { useState } from 'react';

export default {
  title: 'Hooks/useClickAway',
};

export const Default = () => {
  const [show, setShow] = useState(false);
  const ref = useClickAway((e: MouseEvent | TouchEvent) => {
    if (e.target instanceof HTMLElement && e.target.tagName !== 'BUTTON')
      setShow(false);
  });

  return (
    <>
      <button onClick={() => setShow(true)}>click me</button>
      <div
        ref={ref}
        className='h-9 w-9 bg-slate-600'
        style={{ display: show ? 'block' : 'none' }}
      />
    </>
  );
};
