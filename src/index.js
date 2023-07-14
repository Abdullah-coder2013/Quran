import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';
import App from './App';

// navigator.serviceWorker.register("/service-worker.js")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode>
    <App />
  </StrictMode>);

