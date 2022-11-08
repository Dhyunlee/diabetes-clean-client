import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import AppLayout from './layouts/AppLayout';
=======
import AppLayout from 'layouts/AppLayout';
import { Global } from "@emotion/react";
import { reset } from 'styles/reset';
>>>>>>> 27b344e52cf974a626e076a56a40b4880d035c79

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
=======
    <Global styles={reset}/>
>>>>>>> 27b344e52cf974a626e076a56a40b4880d035c79
    <AppLayout />
  </React.StrictMode>
);
