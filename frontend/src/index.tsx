import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './routes/router';
import GlobalStyles from './global/Theme/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

