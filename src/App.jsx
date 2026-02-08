import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@components/layout/MainLayout';
import Dashboard from '@pages/Dashboard';
import Departments from '@pages/Departments';
import Agents from '@pages/Agents';
import Goals from '@pages/Goals';
import Alerts from '@pages/Alerts';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/react-operations-dashboard' : '/'}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="departments" element={<Departments />} />
          <Route path="agents" element={<Agents />} />
          <Route path="goals" element={<Goals />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
