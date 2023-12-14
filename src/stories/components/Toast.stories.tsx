import Toast from '@/components/Toast';

export default {
  title: 'Components/Toast',
};

export const Default = () => {
  console.log(Toast);
  return <button onClick={() => Toast.show('hi', 3000)}>show toast</button>;
};
