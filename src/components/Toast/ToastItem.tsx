import useTimeout from '@/hooks/useTimeout';

interface Props {
  message: string;
  duration: number;
  onDone: () => void;
}

const ToastItem = ({ message, duration, onDone }: Props) => {
  useTimeout(onDone, duration);
  return (
    <div className='pointer-events-auto flex w-full items-center justify-center'>
      <div className='flex h-12 w-64 items-center justify-center rounded-lg bg-white shadow-lg'>
        <div className='text-lg text-slate-600'>{message}</div>
      </div>
    </div>
  );
};

export default ToastItem;
