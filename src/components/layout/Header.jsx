import { Bell, Menu, User } from 'lucide-react';
import useAlertsStore from '@stores/alertsStore';
import useUIStore from '@stores/uiStore';

export default function Header() {
  const { unreadCount } = useAlertsStore();
  const { toggleSidebar } = useUIStore();
  
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Operations Dashboard</h1>
            <p className="text-sm text-gray-500">Monitor performance and track goals</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
            <Bell className="w-6 h-6" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          
          <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
