// src/pages/ManagerPage.tsx
import { TrendingUp, AlertTriangle, BarChart3 } from 'lucide-react';

const ManagerPage = () => {
  const metrics = [
    { label: 'Pipelines Today', value: '12', change: '+15%', icon: TrendingUp, color: 'text-cyber-cyan' },
    { label: 'Failed Builds', value: '2', change: '+1', icon: AlertTriangle, color: 'text-cyber-red' },
    { label: 'Deployment Rate', value: '89%', change: '+3%', icon: BarChart3, color: 'text-cyber-green' }
  ];

  return (
    <div className="min-h-screen bg-cyber-base text-cyber-text font-fira p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-orbitron text-cyber-cyan">VAMBUY BRYAN DEVOPS</h1>
          <p className="text-sm text-cyber-magenta">[PM] Project Manager</p>
        </div>
        <button className="px-4 py-2 bg-cyber-magenta text-cyber-base font-bold rounded">Log Out</button>
      </header>

      {/* Metrics HUD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-gray-900/40 border border-cyber-cyan/20 p-4 rounded text-center">
              <Icon className={`w-8 h-8 mx-auto mb-2 ${m.color}`} />
              <div className="text-2xl font-orbitron">{m.value}</div>
              <div className="text-sm">{m.label}</div>
              <div className={`text-xs mt-1 ${m.color}`}>{m.change}</div>
            </div>
          );
        })}
      </div>

      {/* CI/CD Config */}
      <div className="bg-gray-900/30 border border-cyber-cyan/30 p-5 rounded-lg mb-8">
        <h2 className="text-cyber-cyan font-orbitron mb-4">⚙️ CI/CD Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Trigger</label>
            <select className="w-full bg-gray-800 text-white p-2 rounded border border-cyber-cyan/30">
              <option>On Push</option>
              <option>Cron (Daily)</option>
              <option>Manual</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Environment</label>
            <select className="w-full bg-gray-800 text-white p-2 rounded border border-cyber-cyan/30">
              <option>Staging</option>
              <option>Production</option>
            </select>
          </div>
          <div className="md:col-span-2 flex items-center">
            <input type="checkbox" id="approval" className="mr-2" />
            <label htmlFor="approval">Require manual approval before deploy</label>
          </div>
        </div>
      </div>

      {/* Reports */}
      <div className="bg-gray-900/30 border border-cyber-green/30 p-5 rounded-lg">
        <h2 className="text-cyber-green font-orbitron mb-3">📊 Weekly Reports</h2>
        <button className="px-4 py-2 bg-cyber-green text-cyber-base rounded mr-3">Export PDF</button>
        <button className="px-4 py-2 border border-cyber-cyan text-cyber-cyan rounded">Export CSV</button>
      </div>
    </div>
  );
};

export default ManagerPage;