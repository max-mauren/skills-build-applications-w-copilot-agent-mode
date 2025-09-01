import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (!process.env.REACT_APP_CODESPACE_NAME && window.location.hostname.includes('github.dev')) {
  const codespace = window.location.hostname.split('-')[0];
  process.env.REACT_APP_CODESPACE_NAME = codespace;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  // Display a clear error if the root element is missing
  document.body.innerHTML = '<div style="color:red;font-size:2em;text-align:center;margin-top:2em;">Error: Root element with id "root" not found. Check public/index.html.</div>';
  throw new Error('Root element with id "root" not found.');
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  document.body.innerHTML = `<div style="color:red;font-size:2em;text-align:center;margin-top:2em;">Render error: ${err.message}</div>`;
  // Optionally log to console for debugging
  console.error('Render error:', err);
}

reportWebVitals();
