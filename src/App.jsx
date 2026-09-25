import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLanding from './components/PublicLanding';
import StaffLogin from './components/StaffLogin';
import StaffOpsDesk from './components/StaffOpsDesk';
import CustomerPortal from './components/CustomerPortal';

// Protected Route Guard for Staff Desk
function ProtectedStaffRoute({ children }) {
  const isAuth = sessionStorage.getItem('ve_staff_auth') === 'true';
  return isAuth ? children : <Navigate to="/vemama/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Main Site */}
        <Route path="/" element={<PublicLanding />} />

        {/* Customer Portal */}
        <Route path="/myaccount" element={<CustomerPortal />} />

        {/* Modular Staff System */}
        <Route path="/vemama/login" element={<StaffLogin />} />
        <Route 
          path="/vemama" 
          element={
            <ProtectedStaffRoute>
              <StaffOpsDesk />
            </ProtectedStaffRoute>
          } 
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}