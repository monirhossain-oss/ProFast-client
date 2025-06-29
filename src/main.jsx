import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router";
import { router } from './router/Router';
import 'aos/dist/aos.css';
import Aos from 'aos';
import 'leaflet/dist/leaflet.css';
import AuthProvider from './context/AuthContext/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

Aos.init();
const queryClient = new QueryClient
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist max-w-6xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>,
)
