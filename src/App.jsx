import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MaintenancePage from './pages/MaintenancePage/MaintenancePage';
import WarningLightsPage from './pages/WarningLightsPage/WarningLightsPage';
import CommonQuestionsPage from './pages/CommonQuestionsPage/CommonQuestionsPage';
import TroubleshootPage from './pages/TroubleshootPage/TroubleshootPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/AboutPage' element={< AboutPage />} />
        <Route path='/MaintenancePage' element={< MaintenancePage />} />
        <Route path='/WarningLightsPage' element={< WarningLightsPage />} />
        <Route path='/CommonQuestionsPage' element={< CommonQuestionsPage />} />
        <Route path='/TroubleshootPage' element={<TroubleshootPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
