// src/pages/DevOpsPage.tsx
import { useState } from 'react';
import { 
  GitBranch, Key, Shield, Users, Activity, GitPullRequest, 
  Settings, BarChart, Eye, EyeOff, LogOut,
  Server, FileText, Package
} from 'lucide-react';

const DevOpsPage = () => {
  const [secretsVisible, setSecretsVisible] = useState(false);
  const [activeRole, setActiveRole] = useState('devops-admin');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock data
  const users = [
    { id: 1, name: 'Admin User', role: 'admin', email: 'admin@vambuy.com' },
    { id: 2, name: 'DevOps Engineer', role: 'devops', email: 'devops@vambuy.com' },
    { id: 3, name: 'Developer', role: 'developer', email: 'dev@vambuy.com' },
    { id: 4, name: 'Project Manager', role: 'manager', email: 'pm@vambuy.com' },
  ];
  
  const pipelines = [
    { id: 1, name: 'frontend-ci', status: 'success', lastRun: '2 min ago' },
    { id: 2, name: 'backend-deploy', status: 'running', lastRun: 'Now' },
    { id: 3, name: 'api-tests', status: 'failed', lastRun: '10 min ago' },
  ];
  
  const auditLogs = [
    { id: 1, user: 'admin', action: 'Created new pipeline', timestamp: '2024-01-15 14:30' },
    { id: 2, user: 'devops', action: 'Updated secrets', timestamp: '2024-01-15 14:25' },
    { id: 3, user: 'developer', action: 'Triggered build', timestamp: '2024-01-15 14:20' },
  ];

  return (
    <div className="min-h-screen bg-cyber-base text-cyber-text font-fira p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-orbitron text-cyber-cyan">VAMBUY BRYAN DEVOPS</h1>
          <p className="text-sm text-cyber-magenta">[DEVOPS] Engineer Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <div className="text-cyber-green">Logged in as: DevOps Engineer</div>
            <div className="text-xs text-gray-400">Last login: Today 14:20</div>
          </div>
          <button className="px-4 py-2 bg-cyber-red text-cyber-base font-bold rounded flex items-center gap-2">
            <LogOut size={16} /> Log Out
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 border-b border-cyber-cyan/20 pb-2">
        {['dashboard', 'pipelines', 'secrets', 'users', 'audit', 'monitoring'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg font-orbitron text-sm ${
              activeTab === tab
                ? 'bg-cyber-cyan text-cyber-base'
                : 'text-cyber-cyan hover:bg-cyber-cyan/10'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Git/Docker Integration */}
        <div className="bg-gray-900/30 border border-cyber-cyan/30 p-5 rounded-lg">
          <h2 className="text-cyber-cyan font-orbitron mb-3 flex items-center gap-2">
            <GitBranch size={20} /> Integrations
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <GitBranch size={16} /> GitHub
              </span>
              <span className="text-green-400">Connected</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Package size={16} /> DockerHub
              </span>
              <span className="text-yellow-400">Pending</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Server size={16} /> AWS ECR
              </span>
              <span className="text-red-400">Not Connected</span>
            </div>
            <button className="w-full py-2 bg-gray-800 border border-cyber-cyan/30 rounded mt-2 hover:bg-cyber-cyan/10">
              + Add Integration
            </button>
          </div>
        </div>

        {/* Secrets Manager */}
        <div className="bg-gray-900/30 border border-cyber-magenta/30 p-5 rounded-lg">
          <h2 className="text-cyber-magenta font-orbitron mb-3 flex items-center gap-2">
            <Key size={20} /> Secrets Manager (prod)
          </h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
              <span className="text-sm">DB_PASSWORD</span>
              <span className="font-mono">
                {secretsVisible ? 'p@ssw0rd123!' : '••••••••'}
              </span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
              <span className="text-sm">API_KEY</span>
              <span className="font-mono">
                {secretsVisible ? 'ak_live_789xyz123' : '••••••••'}
              </span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
              <span className="text-sm">JWT_SECRET</span>
              <span className="font-mono">
                {secretsVisible ? 'supersecretjwtkey' : '••••••••'}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setSecretsVisible(!secretsVisible)}
              className="text-sm text-cyber-green underline flex items-center gap-1"
            >
              {secretsVisible ? <EyeOff size={14} /> : <Eye size={14} />}
              {secretsVisible ? 'Hide Secrets' : 'Reveal Secrets'}
            </button>
            <button className="text-sm text-cyber-cyan">+ Add Secret</button>
          </div>
        </div>

        {/* Pipeline Status */}
        <div className="bg-gray-900/30 border border-cyber-green/30 p-5 rounded-lg">
          <h2 className="text-cyber-green font-orbitron mb-3 flex items-center gap-2">
            <Activity size={20} /> Pipeline Status
          </h2>
          <div className="space-y-3">
            {pipelines.map((pipe) => (
              <div key={pipe.id} className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <div>
                  <div className="font-medium">{pipe.name}</div>
                  <div className="text-xs text-gray-400">Last run: {pipe.lastRun}</div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  pipe.status === 'success' ? 'bg-green-900/50 text-green-400' :
                  pipe.status === 'running' ? 'bg-blue-900/50 text-blue-400' :
                  'bg-red-900/50 text-red-400'
                }`}>
                  {pipe.status.toUpperCase()}
                </span>
              </div>
            ))}
            <button className="w-full py-2 bg-gray-800 border border-cyber-green/30 rounded hover:bg-cyber-green/10">
              <GitPullRequest size={16} className="inline mr-2" />
              Run New Pipeline
            </button>
          </div>
        </div>
      </div>

      {/* Second Row - RBAC and Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* RBAC Simulator */}
        <div className="bg-gray-900/30 border border-cyber-yellow/30 p-5 rounded-lg">
          <h2 className="text-cyber-yellow font-orbitron mb-3 flex items-center gap-2">
            <Shield size={20} /> RBAC Simulator
          </h2>
          <div className="mb-4">
            <select
              value={activeRole}
              onChange={(e) => setActiveRole(e.target.value)}
              className="w-full bg-gray-800 p-2 rounded text-white mb-3"
            >
              <option value="admin">Admin</option>
              <option value="devops-admin">DevOps Admin</option>
              <option value="developer">Developer</option>
              <option value="manager">Project Manager</option>
            </select>
          </div>
          <div className="text-sm space-y-2">
            <div className={`flex items-center gap-2 ${activeRole === 'admin' || activeRole === 'devops-admin' ? 'text-green-400' : 'text-gray-500'}`}>
              {activeRole === 'admin' || activeRole === 'devops-admin' ? '✅' : '❌'} Can manage users
            </div>
            <div className={`flex items-center gap-2 ${activeRole === 'admin' || activeRole === 'devops-admin' || activeRole === 'developer' ? 'text-green-400' : 'text-gray-500'}`}>
              {activeRole === 'admin' || activeRole === 'devops-admin' || activeRole === 'developer' ? '✅' : '❌'} Can edit pipelines
            </div>
            <div className={`flex items-center gap-2 ${activeRole === 'admin' || activeRole === 'devops-admin' ? 'text-green-400' : 'text-gray-500'}`}>
              {activeRole === 'admin' || activeRole === 'devops-admin' ? '✅' : '❌'} Can view secrets
            </div>
            <div className={`flex items-center gap-2 ${activeRole === 'admin' ? 'text-green-400' : 'text-gray-500'}`}>
              {activeRole === 'admin' ? '✅' : '❌'} Can delete platform
            </div>
            <div className={`flex items-center gap-2 ${activeRole === 'manager' || activeRole === 'admin' || activeRole === 'devops-admin' ? 'text-green-400' : 'text-gray-500'}`}>
              {activeRole === 'manager' || activeRole === 'admin' || activeRole === 'devops-admin' ? '✅' : '❌'} Can view reports
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-gray-900/30 border border-cyber-blue/30 p-5 rounded-lg">
          <h2 className="text-cyber-blue font-orbitron mb-3 flex items-center gap-2">
            <Users size={20} /> User Management
          </h2>
          <div className="space-y-3">
            {users.map((user) => (
              <div key={user.id} className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-gray-400">{user.email}</div>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  user.role === 'admin' ? 'bg-purple-900/50 text-purple-300' :
                  user.role === 'devops' ? 'bg-cyan-900/50 text-cyan-300' :
                  user.role === 'developer' ? 'bg-green-900/50 text-green-300' :
                  'bg-yellow-900/50 text-yellow-300'
                }`}>
                  {user.role.toUpperCase()}
                </span>
              </div>
            ))}
            <button className="w-full py-2 bg-gray-800 border border-cyber-blue/30 rounded hover:bg-cyber-blue/10">
              + Add User
            </button>
          </div>
        </div>
      </div>

      {/* Third Row - Audit Logs and Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Audit Logs */}
        <div className="bg-gray-900/30 border border-cyber-purple/30 p-5 rounded-lg">
          <h2 className="text-cyber-purple font-orbitron mb-3 flex items-center gap-2">
            <FileText size={20} /> Audit Logs
          </h2>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {auditLogs.map((log) => (
              <div key={log.id} className="p-3 bg-gray-800/50 rounded">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-cyber-cyan">{log.user}</span>
                  <span className="text-xs text-gray-400">{log.timestamp}</span>
                </div>
                <div className="text-sm">{log.action}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 py-2 bg-gray-800 border border-cyber-purple/30 rounded hover:bg-cyber-purple/10">
            View All Logs
          </button>
        </div>

        {/* Architectural Monitoring */}
        <div className="bg-gray-900/30 border border-orange-500/30 p-5 rounded-lg">
          <h2 className="text-orange-400 font-orbitron mb-3 flex items-center gap-2">
            <BarChart size={20} /> Architecture Monitoring
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-800/50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-green-400">95%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-blue-400">42ms</div>
              <div className="text-xs text-gray-400">Avg Response</div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-yellow-400">2.3k</div>
              <div className="text-xs text-gray-400">Req/Min</div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-purple-400">99.2%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>
          </div>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Frontend Services</span>
              <span className="text-green-400">● Healthy</span>
            </div>
            <div className="flex justify-between">
              <span>Database Cluster</span>
              <span className="text-green-400">● Healthy</span>
            </div>
            <div className="flex justify-between">
              <span>Cache Layer</span>
              <span className="text-yellow-400">● Warning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Configuration Panel (Collapsible) */}
      <div className="mt-8 bg-gray-900/50 border border-cyber-cyan/20 rounded-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-cyber-cyan font-orbitron flex items-center gap-2">
            <Settings size={20} /> Pipeline Configuration
          </h2>
          <button className="text-sm text-cyber-green">Save Configuration</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">Pipeline Name</label>
            <input 
              type="text" 
              defaultValue="production-deploy" 
              className="w-full bg-gray-800 p-2 rounded text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Git Branch</label>
            <input 
              type="text" 
              defaultValue="main" 
              className="w-full bg-gray-800 p-2 rounded text-white"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Build Commands</label>
            <div className="bg-gray-800 p-3 rounded font-mono text-sm">
              <div className="text-cyber-green">$ npm install</div>
              <div className="text-cyber-green">$ npm run build</div>
              <div className="text-cyber-green">$ docker build -t app:v1 .</div>
              <div className="text-cyber-green">$ docker push registry/app:v1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsPage;