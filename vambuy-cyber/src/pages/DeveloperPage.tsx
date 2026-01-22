// src/pages/DeveloperPage.tsx
import { useState, useEffect } from 'react';
import { Play, Download, Terminal, GitBranch, Shield, Clock, BarChart, User, Key, Activity } from 'lucide-react';

const DeveloperPage = () => {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'vambuy-platform/main', connected: true, lastSync: '2 мин назад' },
    { id: 2, name: 'auth-service/dev', connected: true, lastSync: '5 мин назад' },
    { id: 3, name: 'payment-service/main', connected: false, lastSync: 'Никогда' },
  ]);

  const [pipelines, setPipelines] = useState([
    { id: 'BLD-2026-001', date: '2026-01-07 16:45', status: 'success', size: '42 МБ', branch: 'main', duration: '2м 34с' },
    { id: 'BLD-2026-002', date: '2026-01-07 14:20', status: 'failed', size: '41 МБ', branch: 'feature/auth', duration: '1м 45с' },
    { id: 'BLD-2026-003', date: '2026-01-07 10:15', status: 'success', size: '38 МБ', branch: 'main', duration: '2м 12с' },
  ]);

  const [logs, setLogs] = useState([
    '[INFO] Запуск пайплайна...',
    '[BUILD] Компиляция модулей...',
    '[TEST] 42/42 тестов пройдено',
    '[DEPLOY] Отправка на staging...',
    '[SUCCESS] Развертывание завершено!',
  ]);

  const [reports] = useState([
    { id: 1, title: 'Успешность сборок', value: '92%', trend: 'вверх', color: 'text-cyber-green' },
    { id: 2, title: 'Покрытие тестами', value: '87%', trend: 'вверх', color: 'text-cyber-cyan' },
    { id: 3, title: 'Время деплоя', value: '2.4м', trend: 'вниз', color: 'text-cyber-magenta' },
    { id: 4, title: 'Неудачные сборки', value: '3', trend: 'стабильно', color: 'text-yellow-400' },
  ]);

  const [auditLogs] = useState([
    { id: 1, action: 'Запуск пайплайна', user: 'farid@vambuy.com', time: '2 мин назад', status: 'success' },
    { id: 2, action: 'Загрузка артефакта', user: 'farid@vambuy.com', time: '15 мин назад', status: 'success' },
    { id: 3, action: 'Синхронизация Git', user: 'system', time: '30 мин назад', status: 'success' },
  ]);

  const [gitConfig] = useState({
    provider: 'github',
    tokenConfigured: true,
    webhookUrl: 'https://api.vambuy.com/webhook/github  ',
  });

  const [userProfile] = useState({
    name: 'Farid',
    email: 'farid@vambuy.com',
    role: 'Разработчик',
    lastLogin: '2026-01-07 16:30',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prevLogs => {
        if (prevLogs.length >= 10) return prevLogs;
        return [...prevLogs, `[SYSTEM] ${new Date().toLocaleTimeString()} - Проверка системы пройдена`];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRunPipeline = () => {
    const newPipeline = {
      id: `BLD-${new Date().getFullYear()}-${String(pipelines.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0] + ' ' + new Date().toLocaleTimeString().slice(0, 5),
      status: 'running',
      size: '0 МБ',
      branch: 'main',
      duration: '0с'
    };
    setPipelines([newPipeline, ...pipelines]);
    
    setTimeout(() => {
      setPipelines(prev => prev.map(p => 
        p.id === newPipeline.id ? { ...p, status: 'success', size: '42 МБ', duration: '2м 34с' } : p
      ));
    }, 3000);
  };

  const handleConnectGit = (repoId: number) => {
    setRepositories(prev => prev.map(repo =>
      repo.id === repoId ? { ...repo, connected: true, lastSync: 'Только что' } : repo
    ));
  };

  return (
    <div className="min-h-screen bg-cyber-base text-cyber-text font-fira p-6">
      {/* Header with User Info */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 
            className="text-3xl font-bold font-orbitron animate-glitch"
            style={{ color: '#4C29BD' }}
          >
            CODESILA DEVELOPER PORTAL
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <User size={14} />
              <span className="text-cyber-magenta">[DEV] {userProfile.name} — {userProfile.role}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Key size={14} />
              <span className="text-cyber-green">Последний вход: {userProfile.lastLogin}</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 bg-cyber-cyan text-cyber-base font-bold rounded hover:animate-pulseNeon transition">
          Выйти
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Git Repository Management */}
        <div className="bg-gray-900/30 border border-cyber-cyan/30 p-5 rounded-lg">
          <h2 className="text-cyber-cyan font-orbitron mb-3 flex items-center gap-2">
            <GitBranch size={18} /> Git-репозитории
          </h2>
          <div className="space-y-3">
            {repositories.map((repo) => (
              <div key={repo.id} className="bg-gray-800/50 p-3 rounded flex justify-between items-center">
                <div>
                  <div className="font-medium">{repo.name}</div>
                  <div className="text-xs text-gray-400">Последняя синхронизация: {repo.lastSync}</div>
                </div>
                {repo.connected ? (
                  <span className="text-xs px-2 py-1 bg-cyber-green/20 text-cyber-green rounded">Подключено</span>
                ) : (
                  <button
                    onClick={() => handleConnectGit(repo.id)}
                    className="text-xs px-3 py-1 bg-cyber-cyan text-cyber-base rounded hover:bg-cyber-cyan/80"
                  >
                    Подключить
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-gray-800/30 rounded text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={14} />
              <span>Статус интеграции Git</span>
            </div>
            <div className="text-xs text-gray-400">
              Провайдер: {gitConfig.provider.toUpperCase()} • Webhook: {gitConfig.webhookUrl}
            </div>
          </div>
        </div>

        {/* Pipeline Runner */}
        <div className="bg-gray-900/30 border border-cyber-magenta/30 p-5 rounded-lg">
          <h2 className="text-cyber-magenta font-orbitron mb-3">▶️ Запуск пайплайна</h2>
          <div className="space-y-3">
            <select className="w-full bg-gray-800 text-white p-2 rounded border border-cyber-magenta/20">
              <option>vambuy-platform/main</option>
              <option>auth-service/dev</option>
            </select>
            <select className="w-full bg-gray-800 text-white p-2 rounded border border-cyber-magenta/20">
              <option>Сборка, тесты и деплой</option>
              <option>Только сборка</option>
              <option>Только тесты</option>
              <option>Деплой на staging</option>
            </select>
            <button 
              onClick={handleRunPipeline}
              className="w-full flex items-center justify-center gap-2 bg-cyber-green text-cyber-base font-bold py-2 rounded hover:animate-pulseNeon transition"
            >
              <Play size={16} /> Запустить пайплайн
            </button>
          </div>
          <div className="mt-4 p-3 bg-gray-800/30 rounded">
            <div className="flex items-center justify-between text-sm">
              <span className="text-cyber-green">✓ Последний запуск: 2 мин назад</span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> Длительность: 2м 34с
              </span>
            </div>
          </div>
        </div>

        {/* Reports Dashboard */}
        <div className="bg-gray-900/30 border border-cyber-green/30 p-5 rounded-lg">
          <h2 className="text-cyber-green font-orbitron mb-3 flex items-center gap-2">
            <BarChart size={18} /> Отчёты и метрики
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {reports.map((report) => (
              <div key={report.id} className="bg-gray-800/50 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">{report.title}</div>
                <div className={`text-xl font-bold ${report.color}`}>{report.value}</div>
                <div className="text-xs text-gray-400 mt-1">Тренд: {report.trend}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-cyber-cyan hover:text-white transition">
            Подробные отчёты →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Artifact Explorer */}
        <div className="bg-gray-900/30 border border-cyber-magenta/30 p-5 rounded-lg">
          <h2 className="text-cyber-magenta font-orbitron mb-3">📦 Артефакты и статус пайплайнов</h2>
          <div className="space-y-2 mb-4">
            {pipelines.map((p) => (
              <div key={p.id} className="flex justify-between items-center bg-gray-800/50 p-3 rounded hover:bg-gray-800/70 transition">
                <div>
                  <div className="font-medium">{p.id}</div>
                  <div className="text-xs text-gray-400">
                    {p.date} • {p.branch} • {p.duration}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    p.status === 'success' ? 'bg-cyber-green/20 text-cyber-green' :
                    p.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {p.status.toUpperCase()}
                  </span>
                  <span className="text-xs">{p.size}</span>
                  <button className="text-cyber-cyan hover:text-white transition">
                    <Download size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm">
            <button className="text-cyber-cyan hover:text-white transition">Все пайплайны →</button>
            <div className="flex items-center gap-2">
              <Activity size={14} />
              <span>Активных: 1 • В очереди: 0</span>
            </div>
          </div>
        </div>

        {/* Live Log Viewer with Audit */}
        <div className="bg-gray-900/30 border border-cyber-green/30 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-cyber-green font-orbitron flex items-center gap-2">
              <Terminal size={18} /> Журналы в реальном времени и аудит
            </h2>
            <button className="text-sm text-cyber-cyan hover:text-white transition">
              Очистить журналы
            </button>
          </div>
          <div className="h-64 overflow-y-auto font-mono text-sm bg-black/30 p-3 rounded mb-4">
            {logs.map((line, i) => (
              <div key={i} className="text-cyber-cyan mb-1">{line}</div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-3">
            <h3 className="text-sm font-medium mb-2">Недавняя активность</h3>
            <div className="space-y-2">
              {auditLogs.map((a) => (
                <div key={a.id} className="flex items-center justify-between text-sm bg-gray-800/40 p-2 rounded">
                  <div>
                    <div className="font-medium">{a.action}</div>
                    <div className="text-xs text-gray-400">{a.user} • {a.time}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    a.status === 'success' ? 'bg-cyber-green/20 text-cyber-green' :
                    a.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;