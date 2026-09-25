import React, { useState } from 'react';
import { Search, ShieldCheck, Clock, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomerPortal() {
  const [ticketId, setTicketId] = useState('');
  const [ticketStatus, setTicketStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!ticketId.trim()) return;
    
    // Sample response display
    setTicketStatus({
      id: ticketId.trim().toUpperCase(),
      client: 'Registered Client Account',
      status: 'Technician Assigned',
      eta: 'Within 4 Hours',
      updatedAt: new Date().toLocaleDateString()
    });
  };

  return (
    <div className="min-h-screen bg-[#050913] text-slate-100 p-6 flex items-center justify-center font-sans">
      <div className="w-full max-w-lg bg-[#070e1c] border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider">Customer Service Portal</h2>
            <p className="text-xs text-slate-400 font-mono">Track your service ticket or AMC request status</p>
          </div>
          <Link to="/" className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400">
            <ArrowLeft size={16} />
          </Link>
        </div>

        <form onSubmit={handleTrack} className="space-y-3">
          <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Enter Ticket / Service ID</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="e.g. TC-1092"
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white uppercase font-mono focus:outline-none focus:border-cyan-500"
            />
            <button type="submit" className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition flex items-center gap-1.5">
              <Search size={14} />
              <span>Track</span>
            </button>
          </div>
        </form>

        {ticketStatus && (
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-400">
              <span>Ticket Code:</span>
              <strong className="text-cyan-400 font-bold">{ticketStatus.id}</strong>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Status:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                {ticketStatus.status}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Estimated Response:</span>
              <span className="text-white">{ticketStatus.eta}</span>
            </div>
          </div>
        )}

        <div className="text-center pt-2">
          <Link to="/" className="text-xs text-slate-500 hover:text-cyan-400 font-mono transition">
            ← Return to Vasram Enterprises Home
          </Link>
        </div>
      </div>
    </div>
  );
}