import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLanding from './components/PublicLanding';
import StaffLogin from './components/StaffLogin';
import StaffOpsDesk from './components/StaffOpsDesk';
import CustomerPortal from './components/CustomerPortal';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<PublicLanding />} />

        {/* Staff authentication and ops desk */}
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/staff/login" element={<StaffLogin />} />
        <Route path="/login" element={<StaffLogin />} />
        <Route path="/ops-desk" element={<StaffOpsDesk />} />
        <Route path="/staff-ops" element={<StaffOpsDesk />} />

        {/* Customer portal */}
        <Route path="/customer-portal" element={<CustomerPortal />} />
        <Route path="/portal" element={<CustomerPortal />} />

        {/* Fallback to landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;