import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import ToastItem from './ToastItem';

interface Toast {
  id: string;
  message: string;
  duration: number;
}

interface Props {
  bind: (createToast: (message: string, duration: number) => void) => void;
}

const ToastManager = ({ bind }: Props) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = useCallback((message: string, duration: number) => {
    const newToast = {
      id: v4(),
      message,
      duration,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <div className='pointer-events-none fixed inset-0 flex flex-col items-end justify-end p-4'>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          key={id}
          message={message}
          duration={duration}
          onDone={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

export default ToastManager;
