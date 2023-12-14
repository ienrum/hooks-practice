import Modal from '@/components/Modal';
import { useState } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'A modal component.',
      },
    },
  },
};

export const Default = () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <button className='btn btn-primary' onClick={() => setVisible((v) => !v)}>
        open
      </button>
      {visible && (
        <Modal onClose={onClose}>
          <div className='p-4'>
            <h1 className='text-2xl font-bold'>Modal</h1>
            <p className='text-gray-700'>This is a modal.</p>
          </div>
        </Modal>
      )}
    </>
  );
};
