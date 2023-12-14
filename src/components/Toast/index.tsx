import ReactDOM from 'react-dom';
import ToastManager from './ToastManger';

type CreateToast = (message: string, duration: number) => void;

class Toast {
  portal: HTMLElement | null = null;

  createToast: CreateToast = () => {};

  constructor() {
    const portalId = 'toast-portal';
    const partalElement = document.getElementById(portalId);

    if (partalElement) {
      this.portal = partalElement;
    } else {
      this.portal = document.createElement('div');
      this.portal.id = portalId;
      document.body.appendChild(this.portal);
    }

    ReactDOM.render(
      <ToastManager
        bind={(createToast: CreateToast) => {
          this.createToast = createToast;
        }}
      />,
      this.portal,
    );
  }

  show(message: string, duration: number = 2000) {
    this.createToast(message, duration);
  }
}

export default new Toast();
