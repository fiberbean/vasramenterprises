import React, { useState } from 'react';
import { Shield, AlertCircle, X } from 'lucide-react';
import { supabase } from '../../supabaseClient';

export default function AddAmcModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    id: '',
    client_name: '',
    scale: '',
    quarterly_due: '',
    renewal_date: '',
    status: 'Active'
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.id || !formData.client_name || !formData.renewal_date) {
      setErrorMsg('Contract ID, Client Name, and Renewal Date are required.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from('amc_contracts').insert([formData]);
      if (error) throw error;

      onSuccess(`AMC Contract ${formData.id} registered successfully!`);
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to add AMC contract.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#070e1c] border border-cyan-500/40 rounded-2xl p-6 space-y-4 shadow-2xl">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <h3 className="text-sm font-black font-mono text-white uppercase tracking-wider flex items-center gap-2">
            <Shield size={16} className="text-cyan-400" /> New AMC Agreement
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
          <div>
            <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Contract ID</label>
            <input 
              type="text" 
              placeholder="e.g. AMC-9002"
              value={formData.id}
              onChange={e => setFormData({...formData, id: e.target.value.toUpperCase()})}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono uppercase focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div>
            <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Client / Facility Name</label>
            <input 
              type="text" 
              placeholder="e.g. Vijaya Spun Pipes Pvt Ltd"
              value={formData.client_name}
              onChange={e => setFormData({...formData, client_name: e.target.value})}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Scale / Node Count</label>
              <input 
                type="text" 
                placeholder="e.g. 24 Cameras"
                value={formData.scale}
                onChange={e => setFormData({...formData, scale: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Quarterly Due</label>
              <input 
                type="text" 
                placeholder="e.g. 2026-12-01"
                value={formData.quarterly_due}
                onChange={e => setFormData({...formData, quarterly_due: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Renewal Date</label>
              <input 
                type="date" 
                value={formData.renewal_date}
                onChange={e => setFormData({...formData, renewal_date: e.target.value})}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Contract Status</label>
              <select 
                value={formData.status}
                onChange={e => setFormData({...formData, status: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-cyan-500"
              >
                <option>Active</option>
                <option>Expiring Soon</option>
                <option>Under Audit</option>
              </select>
            </div>
          </div>

          <div className="pt-3 flex justify-end gap-2 border-t border-slate-800">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs hover:text-white">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="px-5 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs disabled:opacity-50 transition">
              {loading ? 'Saving...' : 'Save to Database'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}