import React, { useState } from 'react';
import { Package, AlertCircle, X } from 'lucide-react';
import { supabase } from '../../supabaseClient';

export default function AddSpareModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    sku: '',
    name: '',
    stock: '',
    min_threshold: '5',
    unit: 'Units'
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.sku || !formData.name || !formData.stock) {
      setErrorMsg('SKU, Component Name, and Current Stock are required.');
      return;
    }

    setLoading(true);
    const payload = {
      sku: formData.sku.trim().toUpperCase(),
      name: formData.name.trim(),
      stock: parseInt(formData.stock, 10),
      min_threshold: parseInt(formData.min_threshold || '5', 10),
      unit: formData.unit
    };

    try {
      const { error } = await supabase.from('spares_inventory').insert([payload]);
      if (error) throw error;

      onSuccess(`Component ${payload.sku} added to inventory!`);
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to log inventory item.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#070e1c] border border-cyan-500/40 rounded-2xl p-6 space-y-4 shadow-2xl">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <h3 className="text-sm font-black font-mono text-white uppercase tracking-wider flex items-center gap-2">
            <Package size={16} className="text-cyan-400" /> Log Inventory Item
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
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">SKU Code</label>
              <input 
                type="text" 
                placeholder="e.g. SP-FIB-01"
                value={formData.sku}
                onChange={e => setFormData({...formData, sku: e.target.value.toUpperCase()})}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono uppercase focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Unit Type</label>
              <input 
                type="text" 
                placeholder="e.g. Units, Boxes"
                value={formData.unit}
                onChange={e => setFormData({...formData, unit: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Component Name</label>
            <input 
              type="text" 
              placeholder="e.g. D-Link Cat6 Cable 305M Roll"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Current Stock Quantity</label>
              <input 
                type="number" 
                min="0"
                placeholder="e.g. 15"
                value={formData.stock}
                onChange={e => setFormData({...formData, stock: e.target.value})}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Min Threshold Alert</label>
              <input 
                type="number" 
                min="1"
                value={formData.min_threshold}
                onChange={e => setFormData({...formData, min_threshold: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="pt-3 flex justify-end gap-2 border-t border-slate-800">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs hover:text-white">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="px-5 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs disabled:opacity-50 transition">
              {loading ? 'Inserting...' : 'Insert Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}