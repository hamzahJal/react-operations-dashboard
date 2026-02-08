import { useEffect, useState } from 'react';
import useAgentsStore from '@stores/agentsStore';
import PageHeader from '@components/common/PageHeader';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { Search } from 'lucide-react';
import { formatTime } from '@utils/formatters';

export default function Agents() {
  const { agents, isLoading, fetchAgents, setSearchQuery, setDepartmentFilter, getFilteredAgents, getDepartments } = useAgentsStore();
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('all');
  
  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);
  
  const filteredAgents = getFilteredAgents();
  const departments = getDepartments();
  
  const handleSearch = (value) => {
    setSearch(value);
    setSearchQuery(value);
  };
  
  const handleDeptFilter = (value) => {
    setDeptFilter(value);
    setDepartmentFilter(value);
  };
  
  if (isLoading) {
    return <LoadingSpinner fullscreen />;
  }
  
  return (
    <div className="space-y-6">
      <PageHeader
        title="Agents"
        subtitle={`${agents.length} agents across all departments`}
      />
      
      {/* Search and Filter */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search agents..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={deptFilter}
            onChange={(e) => handleDeptFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept === 'all' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map(agent => (
          <div key={agent.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{agent.name}</h3>
                <p className="text-sm text-gray-500">{agent.department}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg Handling Time</span>
                <span className="font-medium">{formatTime(agent.aht)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tasks Completed</span>
                <span className="font-medium">{agent.tasksCompleted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Error Count</span>
                <span className="font-medium">{agent.errorCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">SLA Compliance</span>
                <span className={`font-medium ${agent.slaCompliance >= 95 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {agent.slaCompliance}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredAgents.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-gray-500">No agents found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
