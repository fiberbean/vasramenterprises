import React, { useState } from 'react';
import { UserPlus, AlertCircle, X } from 'lucide-react';
import { supabase } from '../../supabaseClient';

export default function AddStaffModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    staff_id: '',
    full_name: '',
    email: '',
    phone: '',
    role: 'Field Service Technician',
    securityPin: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.staff_id || !formData.full_name || !formData.securityPin) {
      setErrorMsg('Staff ID, Full Name, and Security PIN are required.');
      return;
    }

    setLoading(true);
    const payload = {
      staff_id: formData.staff_id.trim().toUpperCase(),
      full_name: formData.full_name.trim(),
      email: formData.email.trim() || `${formData.staff_id.trim().toLowerCase()}@vasramenterprises.in`,
      phone: formData.phone.trim() || 'N/A',
      role: formData.role,
      password_hash: formData.securityPin.trim(),
      status: 'ACTIVE'
    };

    try {
      const { error } = await supabase.from('staff_users').insert([payload]);
      if (error) throw error;

      onSuccess(`Staff ${payload.staff_id} successfully provisioned!`);
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Error inserting staff account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#070e1c] border border-purple-500/40 rounded-2xl p-6 space-y-4 shadow-2xl">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <h3 className="text-sm font-black font-mono text-white uppercase tracking-wider flex items-center gap-2">
            <UserPlus size={16} className="text-purple-400" /> Provision Staff Access to DB
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded transition">
            <X size={16} />
          </button>
        </div>

        {errorMsg && (
          <div className="p-2.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
            <AlertCircle size={14} />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 font-sans text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="e.g. N. Praveen"
                value={formData.full_name}
                onChange={e => setFormData({...formData, full_name: e.target.value})}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Staff User ID</label>
              <input 
                type="text" 
                placeholder="e.g. TECH-03"
                value={formData.staff_id}
                onChange={e => setFormData({...formData, staff_id: e.target.value.toUpperCase()})}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500 font-mono uppercase"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Corporate Email</label>
              <input 
                type="email" 
                placeholder="praveen@vasramenterprises.in"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Official Mobile</label>
              <input 
                type="tel" 
                placeholder="98480 33445"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Role</label>
              <select 
                value={formData.role}
                onChange={e => setFormData({...formData, role: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500 font-mono"
              >
                <option>Field Service Technician</option>
                <option>Optical Fiber Specialist</option>
                <option>CCTV Systems Engineer</option>
                <option>AMC Audit Coordinator</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Security PIN (4-6 Digits)</label>
              <input 
                type="text" 
                maxLength={6}
                placeholder="e.g. 5566"
                value={formData.securityPin}
                onChange={e => setFormData({...formData, securityPin: e.target.value})}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500 font-mono tracking-widest"
              />
            </div>
          </div>

          <div className="pt-3 flex justify-end gap-2 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs disabled:opacity-50 transition"
            >
              {loading ? 'Saving...' : 'Insert to PostgreSQL DB'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}