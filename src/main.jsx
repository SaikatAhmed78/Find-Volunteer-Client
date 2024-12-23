import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'




import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router';
import AuthProvider from './Providers/AuthProvider';
import { ThemeProvider } from './Providers/ThemeProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
<ThemeProvider>
<RouterProvider router={router}>
</RouterProvider>
</ThemeProvider>
  </AuthProvider>
  </StrictMode>,
)
  

