/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Vault from './pages/Vault';
import ThreatIntel from './pages/ThreatIntel';
import Verification from './pages/Verification';
import MainLayout from './components/layout/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/threats" element={<ThreatIntel />} />
          <Route path="/verify" element={<Verification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


