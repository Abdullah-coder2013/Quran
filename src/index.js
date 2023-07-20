import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import App from './App';

serviceWorkerRegistration.register();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode>
    <App />
  </StrictMode>);

