import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MaintenancePage from './pages/MaintenancePage/MaintenancePage';
import WarningLightsPage from './pages/WarningLightsPage/WarningLightsPage';
import ChatBotPage from './pages/ChatBotPage/ChatBotPage';
import TroubleshootPage from './pages/TroubleshootPage/TroubleshootPage';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import ProfileEditPage from './pages/ProfileEditPage/ProfileEditPage';

function App() {

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/AboutPage' element={<AboutPage />} />
            <Route path='/WarningLightsPage' element={<WarningLightsPage />} />
            <Route path='/MaintenancePage' element={<MaintenancePage />} />
            <Route path='/TroubleshootPage' element={<TroubleshootPage />} />
            <Route path='/ChatBotPage' element={<ChatBotPage />} />
            <Route path='/ProfileEditPage' element={<ProfileEditPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Auth0Provider>
  );
}

export default App;
