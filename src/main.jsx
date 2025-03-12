import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // ✅ Only keep HashRouter

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
