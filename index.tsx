import React from 'react';
import { createRoot } from 'react-dom/client';
// Fix: Add file extension to the import path for App.tsx to resolve the module import error.
import App from './App.tsx';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
