import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import useUIStore from '@stores/uiStore';

export default function MainLayout() {
  const { sidebarOpen, toggleSidebar } = useUIStore();
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
