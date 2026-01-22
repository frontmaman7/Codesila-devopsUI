// src/pages/AdminPage.tsx
import { ShieldAlert, Settings, FileText } from 'lucide-react';

const AdminPage = () => {
  const auditLogs = [
    { user: 'farid', action: 'Ran pipeline', ip: '192.168.1.5', time: '17:02', outcome: 'success' },
    { user: 'admin', action: 'Changed RBAC', ip: '10.0.0.1', time: '16:45', outcome: 'success' },
    { user: 'unknown', action: 'Login attempt', ip: '203.0.113.42', time: '16:30', outcome: 'failed' }
  ];

  return (
    <div className="min-h-screen bg-cyber-base text-cyber-text font-fira p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-orbitron text-cyber-cyan">VAMBUY BRYAN DEVOPS</h1>
          <p className="text-sm text-cyber-magenta">[ADMIN] System Administrator</p>
        </div>
        <button className="px-4 py-2 bg-cyber-red text-cyber-base font-bold rounded">Log Out</button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Audit Trail */}
        <div className="lg:col-span-2 bg-gray-900/30 border border-cyber-red/30 p-5 rounded-lg">
          <h2 className="text-cyber-red font-orbitron mb-3 flex items-center gap-2">
            <ShieldAlert size={20} /> Audit Trail
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyber-red/20">
                  <th>User</th>
                  <th>Action</th>
                  <th>IP</th>
                  <th>Time</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log, i) => (
                  <tr key={i} className="border-b border-gray-700/50">
                    <td>{log.user}</td>
                    <td>{log.action}</td>
                    <td className="text-cyber-cyan">{log.ip}</td>
                    <td>{log.time}</td>
                    <td>
                      <span className={log.outcome === 'success' ? 'text-green-400' : 'text-cyber-red'}>
                        {log.outcome}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-3 text-xs text-cyber-cyan underline">Export as CSV</button>
        </div>

        {/* System Settings */}
        <div className="bg-gray-900/30 border border-cyber-green/30 p-5 rounded-lg">
          <h2 className="text-cyber-green font-orbitron mb-3 flex items-center gap-2">
            <Settings size={20} /> System
          </h2>
          <div className="space-y-3 text-sm">
            <div>CPU: <span className="text-cyber-green">24%</span></div>
            <div>RAM: <span className="text-cyber-green">61%</span></div>
            <div>Disk: <span className="text-yellow-400">89%</span></div>
            <div>Backup: <span className="text-green-400">2026-01-06</span></div>
            <div className="text-cyber-red mt-2">⚠️ 1 security alert</div>
          </div>
          <button className="w-full mt-4 py-2 bg-cyber-magenta text-white rounded">Maintenance Mode</button>
        </div>
      </div>

      {/* Role Editor */}
      <div className="bg-gray-900/30 border border-cyber-cyan/30 p-5 rounded-lg">
        <h2 className="text-cyber-cyan font-orbitron mb-3 flex items-center gap-2">
          <FileText size={20} /> Role & Permission Editor
        </h2>
        <p className="text-sm mb-3">Drag permissions to roles (demo: static view)</p>
        <div className="flex space-x-4">
          {['Admin', 'DevOps', 'PM', 'Developer'].map((role) => (
            <div key={role} className="bg-gray-800/50 p-3 rounded text-center w-32">
              <div className="font-orbitron text-cyber-cyan">{role}</div>
              <div className="text-xs mt-2 text-gray-400">12 permissions</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;