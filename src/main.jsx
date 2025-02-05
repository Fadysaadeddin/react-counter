import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';  // ✅ FIXED: Import as default

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
