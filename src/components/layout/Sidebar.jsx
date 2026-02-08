import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Users, Target, Bell } from 'lucide-react';
import useUIStore from '@stores/uiStore';

export default function Sidebar() {
  const location = useLocation();
  const { sidebarOpen } = useUIStore();
  
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/departments', icon: Building2, label: 'Departments' },
    { path: '/agents', icon: Users, label: 'Agents' },
    { path: '/goals', icon: Target, label: 'Goals' },
    { path: '/alerts', icon: Bell, label: 'Alerts' }
  ];
  
  return (
    <aside className={`
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40
      w-64 bg-white border-r border-gray-200 transition-transform duration-300
    `}>
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">OpsMonitor</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">© 2024 OpsMonitor</p>
        </div>
      </div>
    </aside>
  );
}
