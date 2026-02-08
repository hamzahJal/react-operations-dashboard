import { useEffect } from 'react';
import useAlertsStore from '@stores/alertsStore';
import PageHeader from '@components/common/PageHeader';
import AlertCard from '@components/common/AlertCard';
import EmptyState from '@components/common/EmptyState';
import { Bell, AlertCircle, AlertTriangle, Info } from 'lucide-react';

export default function Alerts() {
  const { 
    alerts, 
    filterSeverity, 
    dismissAlert, 
    markAllAsRead, 
    setFilterSeverity, 
    getFilteredAlerts,
    startAlertSimulation 
  } = useAlertsStore();
  
  useEffect(() => {
    const cleanup = startAlertSimulation();
    return cleanup;
  }, [startAlertSimulation]);
  
  const filteredAlerts = getFilteredAlerts();
  
  const criticalCount = alerts.filter(a => a.severity === 'critical').length;
  const warningCount = alerts.filter(a => a.severity === 'warning').length;
  const infoCount = alerts.filter(a => a.severity === 'info').length;
  
  return (
    <div className="space-y-6">
      <PageHeader
        title="Alerts"
        subtitle={`${alerts.length} total alerts`}
        actions={
          alerts.length > 0 && (
            <button
              onClick={markAllAsRead}
              className="btn-secondary text-sm"
            >
              Mark All as Read
            </button>
          )
        }
      />
      
      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{criticalCount}</p>
              <p className="text-sm text-gray-600">Critical Alerts</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{warningCount}</p>
              <p className="text-sm text-gray-600">Warning Alerts</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Info className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{infoCount}</p>
              <p className="text-sm text-gray-600">Info Alerts</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter Buttons */}
      <div className="card">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterSeverity('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filterSeverity === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({alerts.length})
          </button>
          <button
            onClick={() => setFilterSeverity('critical')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filterSeverity === 'critical'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Critical ({criticalCount})
          </button>
          <button
            onClick={() => setFilterSeverity('warning')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filterSeverity === 'warning'
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Warning ({warningCount})
          </button>
          <button
            onClick={() => setFilterSeverity('info')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filterSeverity === 'info'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Info ({infoCount})
          </button>
        </div>
      </div>
      
      {/* Alerts List */}
      {filteredAlerts.length === 0 ? (
        <EmptyState
          icon={Bell}
          title="No alerts"
          description="All systems operating normally"
        />
      ) : (
        <div className="space-y-4">
          {filteredAlerts.map(alert => (
            <AlertCard
              key={alert.id}
              alert={alert}
              onDismiss={dismissAlert}
            />
          ))}
        </div>
      )}
    </div>
  );
}
