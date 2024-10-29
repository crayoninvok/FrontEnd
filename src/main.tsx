import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './Style.css';
import { BrowserRouter } from 'react-router-dom';

const loadGoogleFonts = () => {

  const preconnectGoogle = document.createElement('link');
  preconnectGoogle.rel = 'preconnect';
  preconnectGoogle.href = 'https://fonts.googleapis.com';

  const preconnectGstatic = document.createElement('link');
  preconnectGstatic.rel = 'preconnect';
  preconnectGstatic.href = 'https://fonts.gstatic.com';
  preconnectGstatic.crossOrigin = 'true';


  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Days+One&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sixtyfour+Convergence&display=swap';
  link.rel = 'stylesheet';


  document.head.appendChild(preconnectGoogle);
  document.head.appendChild(preconnectGstatic);
  document.head.appendChild(link);
};

// Load fonts when the app starts
loadGoogleFonts();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
