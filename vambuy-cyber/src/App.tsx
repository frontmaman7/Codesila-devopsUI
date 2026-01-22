import { Routes, Route, Navigate } from "react-router-dom";

import DeveloperPage from "./pages/DeveloperPage";
import ManagerPage from "./pages/ManagerPage";
import DevOpsPage from "./pages/DevOpsPage";
import AdminPage from "./pages/AdminPage";
import ConveyorPage from "./pages/ConveyorPage";
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/developer" replace />} />
      <Route path="/developer" element={<DeveloperPage />} />
      <Route path="/manager" element={<ManagerPage />} />
      <Route path="/devops" element={<DevOpsPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/conveyor" element={<ConveyorPage />} />
    </Routes>
  );
}
