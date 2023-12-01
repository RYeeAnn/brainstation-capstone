import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MaintenancePage from './pages/MaintenancePage/MaintenancePage';
import WarningLightsPage from './pages/WarningLightsPage/WarningLightsPage';
import ChatBotPage from './pages/ChatBotPage/ChatBotPage';
import TroubleshootPage from './pages/TroubleshootPage/TroubleshootPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/AboutPage' element={< AboutPage />} />
        <Route path='/WarningLightsPage' element={< WarningLightsPage />} />
        <Route path='/MaintenancePage' element={< MaintenancePage />} />
        <Route path='/TroubleshootPage' element={<TroubleshootPage />} />
        <Route path='/ChatBotPage' element={<ChatBotPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
