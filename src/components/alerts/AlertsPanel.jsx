import { useEffect } from 'react';
import useAlertsStore from '@stores/alertsStore';
import AlertCard from '@components/common/AlertCard';
import EmptyState from '@components/common/EmptyState';
import { Bell } from 'lucide-react';

export default function AlertsPanel() {
  const { alerts, dismissAlert, startAlertSimulation } = useAlertsStore();
  
  useEffect(() => {
    const cleanup = startAlertSimulation();
    return cleanup;
  }, [startAlertSimulation]);
  
  const recentAlerts = alerts.slice(0, 5);
  
  if (recentAlerts.length === 0) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
        <EmptyState
          icon={Bell}
          title="No alerts"
          description="All systems operating normally"
        />
      </div>
    );
  }
  
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Alerts</h3>
        <span className="text-sm text-gray-500">{alerts.length} total</span>
      </div>
      <div className="space-y-3">
        {recentAlerts.map(alert => (
          <AlertCard
            key={alert.id}
            alert={alert}
            onDismiss={dismissAlert}
          />
        ))}
      </div>
    </div>
  );
}
