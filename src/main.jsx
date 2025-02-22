
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookingData from './component/BookingData/Bookingdata.jsx'
import MainPage from './component/NewDashboard/MainPage.jsx'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      {/* <App/> */}
      <Suspense>
        {/* <MainPage /> */}
        <App/>
      </Suspense>
    </I18nextProvider>
  </StrictMode>,
)

