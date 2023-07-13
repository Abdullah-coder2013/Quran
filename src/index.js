import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';
import App from './App';

if('serviceWorker' in navigator) {
  let registration;

  const registerServiceWorker = async () => {
    registration = await navigator.serviceWorker.register('./service-worker.js');
  };

  registerServiceWorker();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode>
    <App />
  </StrictMode>);

