import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TiendaProvider } from './context/TiendaContext';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import './admin.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><TiendaProvider><BrowserRouter><App /></BrowserRouter></TiendaProvider></React.StrictMode>
);
