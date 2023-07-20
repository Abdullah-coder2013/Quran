import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';
import App from './App';

if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('/sw.js');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode>
    <App />
  </StrictMode>);

