import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Clock, 
  Search, 
  Plus, 
  RefreshCw, 
  LogOut, 
  Package, 
  UserPlus, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { supabase } from '../supabaseClient';

// Clean imports from modals subfolder
import StaffModal from './modals/StaffModal';
import AmcModal from './modals/AmcModal';
import SpareModal from './modals/SpareModal';

export default function StaffOpsDesk() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('leads');
  const [searchQuery, setSearchQuery] = useState('');

  // Live Data States
  const [leads, setLeads] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [amcList, setAmcList] = useState([]);
  const [sparesList, setSparesList] = useState([]);

  // Loading States
  const [loadingLeads, setLoadingLeads] = useState(true);
  const [loadingStaff, setLoadingStaff] = useState(false);
  const [loadingAmc, setLoadingAmc] = useState(false);
  const [loadingSpares, setLoadingSpares] = useState(false);

  // Modal Visibility States
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);
  const [isAmcModalOpen, setIsAmcModalOpen] = useState(false);
  const [isSpareModalOpen, setIsSpareModalOpen] = useState(false);

  // Status Notification
  const [successMsg, setSuccessMsg] = useState('');

  // Active Session Info
  const staffRole = sessionStorage.getItem('ve_staff_role') || 'Super Admin';
  const staffUser = sessionStorage.getItem('ve_staff_user') || 'ADMIN-01';
  const staffName = sessionStorage.getItem('ve_staff_name') || 'Master Administrator';

  useEffect(() => {
    const isAuth = sessionStorage.getItem('ve_staff_auth') === 'true';
    if (!isAuth) {
      navigate('/vemama/login');
      return;
    }
    fetchAllModules();
  }, [navigate]);

  const fetchAllModules = () => {
    fetchLeads();
    fetchStaffUsers();
    fetchAmcContracts();
    fetchSpares();
  };

  const handleLogout = () => {
    sessionStorage.removeItem('ve_staff_auth');
    sessionStorage.removeItem('ve_staff_user');
    sessionStorage.removeItem('ve_staff_name');
    sessionStorage.removeItem('ve_staff_email');
    sessionStorage.removeItem('ve_staff_role');
    sessionStorage.removeItem('ve_staff_db_id');
    navigate('/vemama/login');
  };

  const triggerSuccess = (msg) => {
    setSuccessMsg(msg);
    fetchAllModules();
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // 1. Fetch leads
  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const { data, error } = await supabase.from('services_cms').select('*').order('id', { ascending: false });
      if (error) throw error;
      setLeads(data || []);
    } catch (err) {
      console.error('Leads error:', err);
    } finally {
      setLoadingLeads(false);
    }
  };

  // 2. Fetch staff
  const fetchStaffUsers = async () => {
    setLoadingStaff(true);
    try {
      const { data, error } = await supabase.from('staff_users').select('*').order('created_at', { ascending: true });
      if (error) throw error;
      setStaffList(data || []);
    } catch (err) {
      console.error('Staff fetch error:', err);
    } finally {
      setLoadingStaff(false);
    }
  };

  // 3. Fetch AMC
  const fetchAmcContracts = async () => {
    setLoadingAmc(true);
    try {
      const { data, error } = await supabase.from('amc_contracts').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setAmcList(data || []);
    } catch (err) {
      console.error('AMC fetch error:', err);
    } finally {
      setLoadingAmc(false);
    }
  };

  // 4. Fetch Spares
  const fetchSpares = async () => {
    setLoadingSpares(true);
    try {
      const { data, error } = await supabase.from('spares_inventory').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setSparesList(data || []);
    } catch (err) {
      console.error('Spares fetch error:', err);
    } finally {
      setLoadingSpares(false);
    }
  };

  // Delete Staff Member
  const handleDeleteStaff = async (id, staffId) => {
    if (staffId === 'ADMIN-01') {
      alert('Master Administrator account cannot be revoked.');
      return;
    }

    if (window.confirm(`Revoke access for staff account ${staffId}?`)) {
      try {
        const { error } = await supabase.from('staff_users').delete().eq('id', id);
        if (error) throw error;
        triggerSuccess(`Staff user ${staffId} removed.`);
      } catch (err) {
        alert(err.message || 'Failed to revoke staff credentials.');
      }
    }
  };

  const filteredLeads = leads.filter(l => 
    (l.title && l.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (l.description && l.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#050913] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Operations Bar */}
      <header className="sticky top-0 z-40 bg-[#070e1c]/95 backdrop-blur-md border-b border-slate-800 px-6 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
            OPS
          </div>
          <div>
            <div className="text-sm font-black text-white tracking-wider flex items-center gap-2">
              VASRAM INTERNAL DESK
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                {staffRole.toUpperCase()}
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
              Active User: <span className="text-cyan-400 font-bold">{staffUser}</span> ({staffName})
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={fetchAllModules}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono transition"
          >
            <RefreshCw size={13} className={loadingLeads || loadingStaff || loadingAmc || loadingSpares ? 'animate-spin text-cyan-400' : ''} />
            <span>Sync DB</span>
          </button>

          <button 
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-rose-500/50 text-slate-400 hover:text-rose-400 text-xs font-mono transition"
          >
            <LogOut size={13} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        
        {/* Module Switcher Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800/80 pb-3">
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition ${
              activeTab === 'leads'
                ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Clock size={14} />
            <span>Survey Inquiries ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('amc')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition ${
              activeTab === 'amc'
                ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Shield size={14} />
            <span>AMC Contracts ({amcList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition ${
              activeTab === 'inventory'
                ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Package size={14} />
            <span>Spares & Inventory ({sparesList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('staff-mgmt')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition ${
              activeTab === 'staff-mgmt'
                ? 'bg-purple-500/20 border border-purple-500/50 text-purple-300'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus size={14} className={activeTab === 'staff-mgmt' ? 'text-purple-400' : ''} />
            <span>Staff PIN Registry ({staffList.length})</span>
          </button>
        </div>

        {/* Global Notifications */}
        {successMsg && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 font-mono">
            <CheckCircle2 size={15} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* 1. DISPATCH / SURVEY LEADS TAB */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <Search size={14} className="absolute left-3 top-3 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Filter inquiries by name, phone or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div className="text-xs font-mono text-slate-400">
                Total Queue: {filteredLeads.length} Requests
              </div>
            </div>

            <div className="border border-slate-800 rounded-xl bg-slate-900/40 overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Ticket ID</th>
                    <th className="py-3 px-4">Inquiry / Client</th>
                    <th className="py-3 px-4">Parameters & Notes</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {loadingLeads ? (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-slate-500">
                        Loading live dispatch queues from Supabase...
                      </td>
                    </tr>
                  ) : filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-slate-500">
                        No service inquiries found.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-900/80 transition">
                        <td className="py-3 px-4 text-cyan-400 font-bold whitespace-nowrap">{item.id}</td>
                        <td className="py-3 px-4 font-sans font-semibold text-white">{item.title}</td>
                        <td className="py-3 px-4 text-slate-400 max-w-md truncate">{item.description}</td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-[10px] font-mono">
                            Pending Dispatch
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 2. AMC LEDGER TAB */}
        {activeTab === 'amc' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-xs font-mono text-slate-400">
                Active Industrial Agreements (PostgreSQL: public.amc_contracts)
              </div>
              <button 
                onClick={() => setIsAmcModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition shadow"
              >
                <Plus size={13} /> Add AMC Contract
              </button>
            </div>

            <div className="border border-slate-800 rounded-xl bg-slate-900/40 overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Contract ID</th>
                    <th className="py-3 px-4">Facility / Client</th>
                    <th className="py-3 px-4">Scale</th>
                    <th className="py-3 px-4">Quarterly Due</th>
                    <th className="py-3 px-4">Renewal Date</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {loadingAmc ? (
                    <tr>
                      <td colSpan="6" className="py-6 text-center text-slate-500">
                        Querying public.amc_contracts table...
                      </td>
                    </tr>
                  ) : amcList.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-6 text-center text-slate-500">
                        No AMC contracts found. Click "Add AMC Contract".
                      </td>
                    </tr>
                  ) : (
                    amcList.map((amc) => (
                      <tr key={amc.id} className="hover:bg-slate-900/80 transition">
                        <td className="py-3 px-4 text-cyan-400 font-bold">{amc.id}</td>
                        <td className="py-3 px-4 font-sans font-semibold text-white">{amc.client_name}</td>
                        <td className="py-3 px-4 text-slate-400">{amc.scale}</td>
                        <td className="py-3 px-4">
                          <span className={amc.quarterly_due === 'Overdue' ? 'text-rose-400 font-bold' : 'text-slate-300'}>
                            {amc.quarterly_due}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{amc.renewal_date}</td>
                        <td className="py-3 px-4 text-right">
                          <span className={`px-2 py-0.5 rounded text-[10px] ${
                            amc.status === 'Active' 
                              ? 'bg-emerald-950 border border-emerald-800 text-emerald-400' 
                              : 'bg-amber-950 border border-amber-800 text-amber-400'
                          }`}>
                            {amc.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. SPARES INVENTORY TAB */}
        {activeTab === 'inventory' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-xs font-mono text-slate-400">
                Field Spares & Units (PostgreSQL: public.spares_inventory)
              </div>
              <button 
                onClick={() => setIsSpareModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition shadow"
              >
                <Plus size={13} /> Log New Stock
              </button>
            </div>

            <div className="border border-slate-800 rounded-xl bg-slate-900/40 overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">SKU Code</th>
                    <th className="py-3 px-4">Component</th>
                    <th className="py-3 px-4">Current Stock</th>
                    <th className="py-3 px-4">Threshold</th>
                    <th className="py-3 px-4 text-right">Health</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {loadingSpares ? (
                    <tr>
                      <td colSpan="5" className="py-6 text-center text-slate-500">
                        Querying public.spares_inventory table...
                      </td>
                    </tr>
                  ) : sparesList.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-6 text-center text-slate-500">
                        No inventory records found. Click "Log New Stock".
                      </td>
                    </tr>
                  ) : (
                    sparesList.map((item) => {
                      const isLow = item.stock <= item.min_threshold;
                      return (
                        <tr key={item.sku} className="hover:bg-slate-900/80 transition">
                          <td className="py-3 px-4 text-cyan-400 font-bold">{item.sku}</td>
                          <td className="py-3 px-4 font-sans font-semibold text-white">{item.name}</td>
                          <td className="py-3 px-4 text-white font-bold">{item.stock} {item.unit}</td>
                          <td className="py-3 px-4 text-slate-400">{item.min_threshold} {item.unit}</td>
                          <td className="py-3 px-4 text-right">
                            {isLow ? (
                              <span className="px-2 py-0.5 rounded text-[10px] bg-rose-950 border border-rose-800 text-rose-400 font-bold inline-flex items-center gap-1">
                                <AlertTriangle size={10} /> Critical Low
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 border border-emerald-800 text-emerald-400">
                                Sufficient
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. ADMIN-ONLY: LIVE SUPABASE staff_users REGISTRY */}
        {activeTab === 'staff-mgmt' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-purple-950/20 border border-purple-500/30 p-4 rounded-xl">
              <div>
                <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                  <Shield size={14} /> Live Staff PIN Registry (PostgreSQL: public.staff_users)
                </div>
                <p className="text-[11px] text-slate-400 font-light mt-0.5">
                  Accounts created here are immediately authenticated at `/vemama/login` using Staff ID and PIN.
                </p>
              </div>

              <button 
                onClick={() => setIsStaffModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition shadow-md"
              >
                <Plus size={14} /> Provision New Staff User
              </button>
            </div>

            <div className="border border-slate-800 rounded-xl bg-slate-900/40 overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Staff User ID</th>
                    <th className="py-3 px-4">Full Name</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">PIN Code</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {loadingStaff ? (
                    <tr>
                      <td colSpan="6" className="py-6 text-center text-slate-500">
                        Querying public.staff_users table...
                      </td>
                    </tr>
                  ) : staffList.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="py-6 text-center text-slate-500">
                        No staff accounts found. Execute initial SQL or click "Provision New Staff User".
                      </td>
                    </tr>
                  ) : (
                    staffList.map((staff) => (
                      <tr key={staff.id} className="hover:bg-slate-900/80 transition">
                        <td className="py-3 px-4 text-purple-400 font-bold tracking-wider">{staff.staff_id}</td>
                        <td className="py-3 px-4 font-sans font-semibold text-white">{staff.full_name}</td>
                        <td className="py-3 px-4 text-slate-400">{staff.email}</td>
                        <td className="py-3 px-4 text-slate-300">{staff.role}</td>
                        <td className="py-3 px-4 text-cyan-400 font-mono tracking-widest">{staff.password_hash || '••••'}</td>
                        <td className="py-3 px-4 text-right">
                          {staff.staff_id !== 'ADMIN-01' && (
                            <button 
                              onClick={() => handleDeleteStaff(staff.id, staff.staff_id)}
                              className="p-1 rounded hover:bg-rose-950/60 text-slate-500 hover:text-rose-400 transition"
                              title="Revoke Staff Credentials"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* MODAL COMPONENTS (Separated & Cleanly Located in ./modals/) */}
      <StaffModal 
        isOpen={isStaffModalOpen} 
        onClose={() => setIsStaffModalOpen(false)} 
        onSuccess={triggerSuccess} 
      />

      <AmcModal 
        isOpen={isAmcModalOpen} 
        onClose={() => setIsAmcModalOpen(false)} 
        onSuccess={triggerSuccess} 
      />

      <SpareModal 
        isOpen={isSpareModalOpen} 
        onClose={() => setIsSpareModalOpen(false)} 
        onSuccess={triggerSuccess} 
      />

    </div>
  );
}