import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router';
import AuthProvider from './Providers/AuthProvider';
import { ThemeProvider } from './Providers/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <HelmetProvider>
 <AuthProvider>
<ThemeProvider>
<RouterProvider router={router}>
</RouterProvider>
</ThemeProvider>
  </AuthProvider>
 </HelmetProvider>
  </StrictMode>,
);


  

