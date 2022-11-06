import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import AppRoutes from './AppRoutes'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('mongkonai-root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

// Service worker for PWA
serviceWorkerRegistration.register()