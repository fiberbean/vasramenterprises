import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Camera, 
  Fingerprint, 
  Flame, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  UserCheck, 
  Lock, 
  ArrowRight, 
  Wrench, 
  Check, 
  ChevronRight, 
  Shield, 
  Clock, 
  Cpu, 
  Server, 
  Layers, 
  Activity 
} from 'lucide-react';
import { supabase } from '../supabaseClient';

// OFFICIAL FULL LOGOS WITH EMBEDDED NAME MARKS
function BrandFullLogo({ code }) {
  switch (code) {
    case 'HIK':
      return (
        <svg viewBox="0 0 170 38" className="h-8 w-auto max-w-[150px]" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="28" fill="#E11D48" fontFamily="Arial Black, Impact, sans-serif" fontSize="26" fontWeight="900" letterSpacing="-1">HIK</text>
          <text x="56" y="28" fill="#94A3B8" fontFamily="Arial Black, Impact, sans-serif" fontSize="26" fontWeight="900" letterSpacing="0">VISION</text>
        </svg>
      );
    case 'CP+':
      return (
        <svg viewBox="0 0 160 38" className="h-8 w-auto max-w-[145px]" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="46" height="30" rx="6" fill="#DC2626" />
          <text x="8" y="26" fill="#FFFFFF" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900">CP</text>
          <text x="56" y="27" fill="#DC2626" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900">PLUS</text>
        </svg>
      );
    case 'DHA':
      return (
        <svg viewBox="0 0 165 38" className="h-8 w-auto max-w-[145px]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="19" r="14" fill="#DC2626" />
          <circle cx="16" cy="19" r="7" fill="#090E17" />
          <text x="36" y="27" fill="#F8FAFC" fontFamily="Arial, Helvetica, sans-serif" fontSize="22" fontWeight="900" letterSpacing="1">alhua</text>
        </svg>
      );
    case 'HON':
      return (
        <svg viewBox="0 0 165 36" className="h-7 w-auto max-w-[145px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="27" fill="#EF4444" fontFamily="Impact, Arial Black, sans-serif" fontSize="26" fontWeight="900" letterSpacing="1.5">Honeywell</text>
        </svg>
      );
    case 'UNV':
      return (
        <svg viewBox="0 0 160 36" className="h-7 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="26" fill="#0284C7" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" letterSpacing="1.5">UNI</text>
          <text x="56" y="26" fill="#F97316" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" letterSpacing="1.5">VIEW</text>
        </svg>
      );
    case 'MTX':
      return (
        <svg viewBox="0 0 165 38" className="h-8 w-auto max-w-[145px]" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="28" height="28" rx="5" fill="#DC2626" />
          <text x="8" y="26" fill="#FFFFFF" fontFamily="Arial Black, sans-serif" fontSize="19" fontWeight="900">M</text>
          <text x="38" y="26" fill="#F8FAFC" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" letterSpacing="2">MATRIX</text>
        </svg>
      );
    case 'ESSL':
      return (
        <svg viewBox="0 0 150 38" className="h-8 w-auto max-w-[130px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="27" fill="#F97316" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900">e</text>
          <text x="22" y="27" fill="#0EA5E9" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="900" letterSpacing="2">SSL</text>
          <text x="96" y="16" fill="#94A3B8" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700">®</text>
        </svg>
      );
    case 'ZKT':
      return (
        <svg viewBox="0 0 165 38" className="h-8 w-auto max-w-[145px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="27" fill="#22C55E" fontFamily="Impact, Arial Black, sans-serif" fontSize="26" fontWeight="900" letterSpacing="1">ZK</text>
          <text x="48" y="27" fill="#94A3B8" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" letterSpacing="0.5">TECO</text>
        </svg>
      );
    case 'RTM':
      return (
        <svg viewBox="0 0 165 36" className="h-7 w-auto max-w-[145px]" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="22" height="22" rx="4" fill="#0284C7" />
          <text x="7" y="23" fill="#FFFFFF" fontFamily="Arial Black, sans-serif" fontSize="15" fontWeight="900">R</text>
          <text x="32" y="25" fill="#38BDF8" fontFamily="Arial Black, sans-serif" fontSize="19" fontWeight="900" letterSpacing="1">REALTIME</text>
        </svg>
      );
    case 'MAN':
      return (
        <svg viewBox="0 0 160 36" className="h-7 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="18" r="10" fill="#10B981" />
          <path d="M10 18 L18 18" stroke="#FFFFFF" strokeWidth="2.5" />
          <text x="32" y="25" fill="#10B981" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" letterSpacing="2">MANTRA</text>
        </svg>
      );
    case 'SUP':
      return (
        <svg viewBox="0 0 165 36" className="h-7 w-auto max-w-[145px]" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,6 24,18 12,30 4,22 12,18 4,14" fill="#E11D48" />
          <text x="30" y="25" fill="#E11D48" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" letterSpacing="2">SUPREMA</text>
        </svg>
      );
    case 'RVL':
      return (
        <svg viewBox="0 0 155 36" className="h-7 w-auto max-w-[135px]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="18" r="10" fill="#EAB308" />
          <text x="32" y="25" fill="#EAB308" fontFamily="Arial Black, sans-serif" fontSize="21" fontWeight="900" letterSpacing="2">RAVEL</text>
        </svg>
      );
    case 'AGN':
      return (
        <svg viewBox="0 0 155 38" className="h-8 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30 C 4 20, 16 14, 12 4 C 20 10, 24 18, 18 30 Z" fill="#F97316" />
          <text x="26" y="26" fill="#EF4444" fontFamily="Impact, Arial Black, sans-serif" fontSize="24" fontWeight="900" letterSpacing="2">AGNI</text>
        </svg>
      );
    case 'APL':
      return (
        <svg viewBox="0 0 160 36" className="h-7 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="18" r="10" stroke="#38BDF8" strokeWidth="3" fill="none" />
          <text x="32" y="25" fill="#38BDF8" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" letterSpacing="1">APOLLO</text>
        </svg>
      );
    case 'SYS':
      return (
        <svg viewBox="0 0 165 36" className="h-6 w-auto max-w-[155px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="25" fill="#EF4444" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" letterSpacing="1">SYSTEM SENSOR</text>
        </svg>
      );
    case 'EDW':
      return (
        <svg viewBox="0 0 160 36" className="h-7 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="25" fill="#DC2626" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" letterSpacing="1.5">EDWARDS</text>
        </svg>
      );
    case 'AHJ':
      return (
        <svg viewBox="0 0 155 38" className="h-8 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="130" height="30" rx="4" fill="#0284C7" />
          <text x="16" y="26" fill="#FFFFFF" fontFamily="Arial Black, sans-serif" fontSize="21" fontWeight="900" letterSpacing="3">AHUJA</text>
        </svg>
      );
    case 'BSH':
      return (
        <svg viewBox="0 0 155 38" className="h-8 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="19" r="13" stroke="#DC2626" strokeWidth="3.5" fill="none" />
          <rect x="11" y="15" width="10" height="8" fill="#DC2626" />
          <text x="38" y="27" fill="#DC2626" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" letterSpacing="1">BOSCH</text>
        </svg>
      );
    case 'JBL':
      return (
        <svg viewBox="0 0 145 38" className="h-8 w-auto max-w-[130px]" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="85" height="30" rx="4" fill="#F97316" />
          <text x="15" y="26" fill="#FFFFFF" fontFamily="Impact, Arial Black, sans-serif" fontSize="24" fontWeight="900" letterSpacing="2">JBL</text>
          <text x="96" y="24" fill="#94A3B8" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="800">PRO</text>
        </svg>
      );
    case 'YMH':
      return (
        <svg viewBox="0 0 155 36" className="h-7 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="25" fill="#6366F1" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" letterSpacing="2">YAMAHA</text>
        </svg>
      );
    case 'STM':
      return (
        <svg viewBox="0 0 165 36" className="h-6 w-auto max-w-[155px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="25" fill="#0EA5E9" fontFamily="Arial Black, sans-serif" fontSize="17" fontWeight="900" letterSpacing="0.5">STUDIOMASTER</text>
        </svg>
      );
    case 'DIV':
      return (
        <svg viewBox="0 0 155 36" className="h-7 w-auto max-w-[140px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="25" fill="#0284C7" fontFamily="Arial Black, sans-serif" fontSize="21" fontWeight="900" letterSpacing="1">Diversey</text>
        </svg>
      );
    case 'TSK':
      return (
        <svg viewBox="0 0 145 36" className="h-7 w-auto max-w-[130px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="25" fill="#38BDF8" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" letterSpacing="2">TASKI</text>
        </svg>
      );
    case 'VPC':
      return (
        <svg viewBox="0 0 165 38" className="h-8 w-auto max-w-[150px]" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="30" height="30" rx="6" fill="#0EA5E9" />
          <text x="7" y="25" fill="#060B14" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900">VE</text>
          <text x="40" y="26" fill="#38BDF8" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900">PRO-CLEAN</text>
        </svg>
      );
    case 'CPB':
      return (
        <svg viewBox="0 0 165 36" className="h-6 w-auto max-w-[155px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="25" fill="#EF4444" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900">COLGATE</text>
          <text x="90" y="25" fill="#38BDF8" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900">BULK</text>
        </svg>
      );
    case 'DLK':
      return (
        <svg viewBox="0 0 150 36" className="h-7 w-auto max-w-[135px]" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="25" fill="#0284C7" fontFamily="Arial Black, sans-serif" fontSize="23" fontWeight="900" letterSpacing="1">D-Link</text>
        </svg>
      );
    default:
      return null;
  }
}

export default function PublicLanding() {
  const servicesCatalogue = [
    {
      id: 'cctv',
      title: 'Industrial CCTV & AI Vision Networks',
      shortName: 'CCTV Surveillance',
      icon: <Camera size={20} />,
      tagline: 'High-definition optical coverage engineered from single-counter retail to high-acre maritime ports and hazardous chemical zones.',
      brands: [
        { name: 'HIKVISION', code: 'HIK', tag: 'Official Video Tier' },
        { name: 'CP PLUS', code: 'CP+', tag: 'Authorized Partner' },
        { name: 'DAHUA TECH', code: 'DHA', tag: 'Certified Enterprise' },
        { name: 'HONEYWELL', code: 'HON', tag: 'Industrial Systems' },
        { name: 'UNIVIEW', code: 'UNV', tag: 'IP AI Analytics' },
        { name: 'MATRIX COMSEC', code: 'MTX', tag: 'Telecom & Security' }
      ],
      scales: [
        {
          tier: 'Micro Scale',
          category: 'Retail & Kiosks',
          range: '1 - 4 Channels',
          target: 'Pan Shops, Tea Stalls, Retail Outlets & Small Offices',
          hardware: 'Full-HD 2MP/3MP Audio-enabled bullet cameras, Wi-Fi NVR/SD-card vault, mobile live view with zero router port-forwarding.',
          sla: 'Standard On-Demand Technician Dispatch',
          scope: 'Site survey, wall-mounting, power supply routing, mobile streaming setup.'
        },
        {
          tier: 'Small Enterprise',
          category: 'Commercial Units',
          range: '4 - 8 Channels',
          target: 'Pharmacies, Supermarkets, Bakeries & Godowns',
          hardware: '4MP PoE IP network cameras, 8-channel NVR with H.265+ smart compression, night-color Starlight optics, 15-day local RAID retention.',
          sla: '24-Hour Breakdown Turnaround Guarantee',
          scope: 'Concealed CAT6 cabling, PoE switch setup, NVR configuration, dual-monitor feeds.'
        },
        {
          tier: 'Medium Complex',
          category: 'Institutional Sites',
          range: '8 - 32 Channels',
          target: 'Apartment Enclaves, Hospitals, Colleges & Multi-Floor Commercials',
          hardware: 'Motorized varifocal lenses, smart perimeter crossing detection, server-rack mounted enterprise NVR, 30+ days continuous HDD recording.',
          sla: '12-Hour Priority SLA with Dedicated Line Engineer',
          scope: 'Armored multi-zone routing, central control room rack assembly, power surge insulation.'
        },
        {
          tier: 'Large Industrial',
          category: 'Heavy Infrastructure',
          range: '32 - 128+ Endpoints',
          target: 'Maritime Ports, Rice Mills, Processing Factories & Logistics Parks',
          hardware: 'Armored multi-core optical fiber backbone, laser PTZ tracking, ANPR vehicle plate capture, explosion-proof housings, central SOC wall.',
          sla: '< 4-Hour On-Site Critical Response Protocol',
          scope: 'Optical fiber core fusion splicing, lightning surge grounding, control desk integration, annual SLA.'
        }
      ]
    },
    {
      id: 'biometrics',
      title: 'Biometric Access Control & Workforce Terminals',
      shortName: 'Biometrics & Access',
      icon: <Fingerprint size={20} />,
      tagline: 'Precision identity verification, multi-shift workforce logging, and high-security electromagnetic door automation.',
      brands: [
        { name: 'eSSL SECURITY', code: 'ESSL', tag: 'Authorized Partner' },
        { name: 'ZKTECO GLOBAL', code: 'ZKT', tag: 'Global Biometric' },
        { name: 'MATRIX COMSEC', code: 'MTX', tag: 'Enterprise Access' },
        { name: 'REALTIME', code: 'RTM', tag: 'Time Attendance' },
        { name: 'MANTRA SOFTECH', code: 'MAN', tag: 'Optical Biometric' },
        { name: 'SUPREMA AI', code: 'SUP', tag: 'Premium Access' }
      ],
      scales: [
        {
          tier: 'Micro Scale',
          category: 'Small Offices',
          range: '1 - 15 Staff Members',
          target: 'Boutiques, Salons, Law Offices & Small Retail Counters',
          hardware: 'Standalone optical fingerprint & RFID badge terminal, direct USB Excel payroll export, internal lithium-ion battery backup.',
          sla: 'Standard Remote & On-Site Assistance',
          scope: 'Wall mounting, admin lock setup, staff fingerprint enrollment.'
        },
        {
          tier: 'Small Enterprise',
          category: 'Business Floors',
          range: '15 - 50 Employees',
          target: 'Private Clinics, Logistics Branches, Accounts & Tech Studios',
          hardware: 'TCP/IP networked fingerprint & PIN terminals, automatic email shift summaries, electromagnetic door locks (EM Locks) with exit buttons.',
          sla: 'Same-Day Field Service Attendance',
          scope: 'LAN cable termination, EM lock bracket alignment, overtime formula setup.'
        },
        {
          tier: 'Medium Complex',
          category: 'Campuses & Multi-Shift',
          range: '50 - 250 Workforce',
          target: 'Degree Colleges, Corporate Head Offices & Warehouses',
          hardware: 'Contactless high-speed 0.2s visible light face recognition terminals, card access relays, multi-door controller units, cloud attendance dashboard.',
          sla: '12-Hour Guaranteed Field Support',
          scope: 'Multi-door access zoning, centralized employee database sync, WhatsApp daily absentee alerts.'
        },
        {
          tier: 'Large Industrial',
          category: 'Industrial Workforce',
          range: '250 - 5000+ Personnel',
          target: 'Rice Mills, Manufacturing Plants, Port Gates & Construction Yards',
          hardware: 'Heavy-duty motorized tripod turnstiles / flap barriers, IP65 dust-proof biometric terminals, anti-passback controllers, SAP/ERP payroll sync.',
          sla: '< 4-Hour Critical Barrier Recovery Protocol',
          scope: 'Barrier civil foundation alignment, multi-shift roster programming, server clustering.'
        }
      ]
    },
    {
      id: 'fire',
      title: 'Industrial Fire Alarm & Detection Systems',
      shortName: 'Fire Alarm Systems',
      icon: <Flame size={20} />,
      tagline: 'Regulatory life-safety compliance, addressable smoke loop architecture, and audible emergency evacuation systems.',
      brands: [
        { name: 'HONEYWELL', code: 'HON', tag: 'Certified Protection' },
        { name: 'RAVEL ELECTRONICS', code: 'RVL', tag: 'Microprocessor Loops' },
        { name: 'AGNI INSTRUMENTS', code: 'AGN', tag: 'Conventional Panels' },
        { name: 'APOLLO UK', code: 'APL', tag: 'Optical Sensor Array' },
        { name: 'SYSTEM SENSOR', code: 'SYS', tag: 'Hazard Detection' },
        { name: 'EDWARDS', code: 'EDW', tag: 'Heavy Industrial' }
      ],
      scales: [
        {
          tier: 'Micro Scale',
          category: 'Small Facilities',
          range: '1 - 2 Protection Zones',
          target: 'Commercial Kitchens, Bakeries & Independent Retail Shops',
          hardware: 'Standalone optical smoke detectors, LPG/CNG combustible gas leak sensors, high-decibel audible alert buzzers.',
          sla: 'Annual Calibration & Spot Service',
          scope: 'Ceiling mount sensor positioning, wiring, operational test.'
        },
        {
          tier: 'Small Enterprise',
          category: 'Commercial Spaces',
          range: '2 - 4 Zone Coverage',
          target: 'Auto Garages, Small Godowns & Single-Floor Offices',
          hardware: 'Multi-zone conventional fire alarm control panel, break-glass manual call points (MCP), dual-strobe electronic sirens.',
          sla: '24-Hour Emergency Dispatch',
          scope: 'Fire-grade cable conduit routing, panel battery calibration, fire drill verification.'
        },
        {
          tier: 'Medium Complex',
          category: 'Institutional Buildings',
          range: '4 - 16 Zones',
          target: 'Hospitals, Commercial Towers, Colleges & Multiplexes',
          hardware: 'Centralized microprocessor FACP, rate-of-rise heat sensors, duct smoke sensors, waterflow integration for sprinkler lines.',
          sla: '12-Hour Priority SLA Coverage',
          scope: 'Multi-floor annunciator panels, statutory fire audit certification documentation.'
        },
        {
          tier: 'Large Industrial',
          category: 'Heavy Plants & Warehouses',
          range: 'Multi-Loop Addressable',
          target: 'Rice Processing Mills, Chemical Hubs & Logistics Corridors',
          hardware: 'Intelligent addressable loop panels pinpointing exact detector coordinates, automatic exhaust damper triggers, integrated plant siren relays.',
          sla: '< 4-Hour Emergency Response Protocol',
          scope: 'Addressable loop calculation, mimic display routing, quarterly mock audit tests.'
        }
      ]
    },
    {
      id: 'pa',
      title: 'Commercial Public Address & Evacuation Audio',
      shortName: 'PA & Paging Systems',
      icon: <Volume2 size={20} />,
      tagline: 'High-intelligibility acoustic paging, automated industrial shift bells, and facility-wide emergency broadcast channels.',
      brands: [
        { name: 'AHUJA RADIOS', code: 'AHJ', tag: 'Industrial Audio' },
        { name: 'BOSCH SECURITY', code: 'BSH', tag: 'Commercial Acoustics' },
        { name: 'JBL COMMERCIAL', code: 'JBL', tag: 'High-Fidelity Sound' },
        { name: 'YAMAHA PRO', code: 'YMH', tag: 'Digital DSP Mixing' },
        { name: 'STUDIOMASTER', code: 'STM', tag: 'Power Amplifiers' }
      ],
      scales: [
        {
          tier: 'Micro Scale',
          category: 'Counter Paging',
          range: '1 - 2 Speakers',
          target: 'Doctor Clinics, Token Counters & Customer Desks',
          hardware: 'Compact flush ceiling speakers, low-distortion gooseneck chime microphone, high-efficiency tabletop mini amplifier.',
          sla: 'Standard Service Support',
          scope: 'Counter acoustic positioning, audio cable routing, volume balancing.'
        },
        {
          tier: 'Small Enterprise',
          category: 'Hospitality & Retail',
          range: '4 - 8 Speaker Grid',
          target: 'Restaurants, Supermarkets, Fitness Centers & Retail Floors',
          hardware: 'Two-way wall speakers, multi-source background music mixer, individual room volume attenuators, wireless mic options.',
          sla: 'Next-Day Site Assistance',
          scope: 'Balanced impedance routing, acoustic dead-zone prevention, zone testing.'
        },
        {
          tier: 'Medium Complex',
          category: 'Academic & Corporate',
          range: '8 - 24 Zone Speakers',
          target: 'Schools, Colleges, Function Halls & Corporate Offices',
          hardware: 'Multi-zone paging master unit, automated scheduled bell chime generator, stage microphones, heavy booster power amps.',
          sla: '12-Hour Priority Field Service',
          scope: 'Zone distribution panel cabling, auto-timer clock synchronization, stage acoustic tuning.'
        },
        {
          tier: 'Large Industrial',
          category: 'Harsh Yard Paging',
          range: 'High-Decibel Array',
          target: 'Dry Docks, Container Yards, Railway Sidings & Heavy Mills',
          hardware: 'IP66 weatherproof reflex acoustic horn arrays designed to pierce through industrial machinery noise, priority emergency override panel.',
          sla: '< 4-Hour Yard Technician Protocol',
          scope: '100V line transmission testing, pole horn mounting, emergency override test.'
        }
      ]
    },
    {
      id: 'sanitation',
      title: 'Industrial Hygiene & Facility Chemical Supplies',
      shortName: 'Sanitation Supplies',
      icon: <Sparkles size={20} />,
      tagline: 'Wholesale formulated disinfectants, heavy mechanical degreasers, and automated washroom consumables for industry.',
      brands: [
        { name: 'DIVERSEY', code: 'DIV', tag: 'Hospitality Hygiene' },
        { name: 'TASKI PRO', code: 'TSK', tag: 'Surface Care' },
        { name: 'VASRAM PRO-CLEAN', code: 'VPC', tag: 'Industrial Formulations' },
        { name: 'COLGATE BULK', code: 'CPB', tag: 'Consumables Line' }
      ],
      scales: [
        {
          tier: 'Micro Scale',
          category: 'Commercial Units',
          range: '5L - 10L Containers',
          target: 'Shops, Boutiques, Dental Clinics & Private Studios',
          hardware: 'Hospital-grade perfumed surface floor cleaner, streak-free glass cleaners, concentrated anti-bacterial handwash cans.',
          sla: '48-Hour Regular Refill Dispatch',
          scope: 'Direct-to-counter delivery, dilution measurement guidelines.'
        },
        {
          tier: 'Small Enterprise',
          category: 'Commercial Facilities',
          range: '20L - 50L Monthly',
          target: 'Hostels, Diagnostic Labs, Lodges & Commercial Gyms',
          hardware: 'Broad-spectrum phenolic disinfectants, high-action urinal sanitizing formulations, bulk liquid dispensers.',
          sla: '24-Hour Scheduled Replenishment',
          scope: 'Quarterly supply calendar, dispenser hardware check, safety data sheets.'
        },
        {
          tier: 'Medium Complex',
          category: 'Institutional Complexes',
          range: '50L - 150L Bulk Lots',
          target: 'Multi-Specialty Hospitals, Hotels & Convention Centers',
          hardware: 'Machine scrubber detergent concentrates, industrial toilet bowl acids, odor counteracting neutralizers.',
          sla: 'Dedicated Accounts Dispatch Manager',
          scope: 'Bulk storage setup, housekeeping staff chemical dilution training.'
        },
        {
          tier: 'Large Industrial',
          category: 'Heavy Plants & Yards',
          range: '200L Barrel Drums',
          target: 'Rice Mills, Processing Plants & Port Facility Canteens',
          hardware: 'Heavy mechanical floor oil degreasers, machinery cleaning fluids, food-grade processing disinfectants in 200-liter drums.',
          sla: 'Priority Continuous Plant Supply Line',
          scope: 'Direct industrial site logistics, chemical handling guidance.'
        }
      ]
    },
    {
      id: 'repairs',
      title: 'Emergency Breakdown & Preventive Servicing',
      shortName: 'Breakdown & Repairs',
      icon: <Wrench size={20} />,
      tagline: 'Rapid on-site technician deployment for offline channels, severed optical fiber, blown SMPS units, and faulty NVR storage.',
      brands: [
        { name: 'HIKVISION SPARES', code: 'HIK', tag: 'Genuine Optical Spares' },
        { name: 'CP PLUS OEM', code: 'CP+', tag: 'Authorized Parts Stock' },
        { name: 'D-LINK INDUSTRIAL', code: 'DLK', tag: 'Gigabit PoE Switches' },
        { name: 'HONEYWELL SPARES', code: 'HON', tag: 'Industrial Panels' },
        { name: 'eSSL GENUINE PARTS', code: 'ESSL', tag: 'Relays & Sensors' }
      ],
      scales: [
        {
          tier: 'Micro Scale',
          category: 'Small Setups',
          range: '1 - 4 Endpoints',
          target: 'Homes, Boutiques & Retail Shops',
          hardware: 'Remote smartphone viewing recovery, SMPS power supply replacement, forgotten NVR admin password recovery.',
          sla: 'Same-Day Local Attendance',
          scope: 'Volt-drop testing, power supply replacement, mobile app re-sync.'
        },
        {
          tier: 'Small Enterprise',
          category: 'Commercial Offices',
          range: '4 - 8 Endpoints',
          target: 'Offices, Bakeries & Retail Outlets',
          hardware: 'Re-crimping oxidized RJ45/BNC connectors, replacing failed PoE switch ports, camera IR night-vision fixes.',
          sla: 'Within 6-12 Hours Dispatch',
          scope: 'Cable continuity scan, PoE power load balancing, lens focus tuning.'
        },
        {
          tier: 'Medium Complex',
          category: 'Institutional Sites',
          range: '8 - 32 Channels',
          target: 'Apartment Enclaves, Schools & Commercial Hubs',
          hardware: 'Surveillance hard drive bad-sector replacement, video noise hum elimination, electromagnetic lock realignment.',
          sla: 'Guaranteed Priority Callout',
          scope: 'RAID rebuild, ground-loop isolator deployment, door latch calibration.'
        },
        {
          tier: 'Large Industrial',
          category: 'Harsh Yard Environments',
          range: 'Long-Distance Fiber',
          target: 'Industrial Corridors, Ports & Mill Compounds',
          hardware: 'On-site armored optical fiber fusion splicing, high-altitude pole camera replacement, surge and lightning damage repairs.',
          sla: '< 4-Hour Emergency Plant Callout Protocol',
          scope: 'OTDR optical line testing, core fusion splicing, weather seal verification.'
        }
      ]
    }
  ];

  const [activeServiceId, setActiveServiceId] = useState(servicesCatalogue[0].id);
  const [selectedScaleIndex, setSelectedScaleIndex] = useState(0);

  const currentService = servicesCatalogue.find(s => s.id === activeServiceId) || servicesCatalogue[0];
  const activeScale = currentService.scales[selectedScaleIndex] || currentService.scales[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: currentService.title,
    scale: activeScale.tier,
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSelectService = (id) => {
    setActiveServiceId(id);
    setSelectedScaleIndex(0);
    const target = servicesCatalogue.find(s => s.id === id);
    if (target) {
      setFormData(prev => ({
        ...prev,
        service: target.title,
        scale: target.scales[0].tier
      }));
    }
  };

  const handleSelectScale = (index) => {
    setSelectedScaleIndex(index);
    const scale = currentService.scales[index];
    if (scale) {
      setFormData(prev => ({
        ...prev,
        scale: `${scale.tier} (${scale.range})`
      }));
    }
  };

  const handleQuoteTransfer = (tierName) => {
    setFormData(prev => ({
      ...prev,
      service: currentService.title,
      scale: tierName,
      message: `Requesting engineering assessment for: ${currentService.title} - ${tierName} (${activeScale.target})`
    }));
    const el = document.getElementById('procurement-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);

    try {
      await supabase.from('services_cms').insert([{
        id: `ENG-${Date.now().toString().slice(-6)}`,
        title: `${formData.name} - ${formData.service}`,
        description: `Phone: ${formData.phone} | Scale: ${formData.scale} | Location: ${formData.location} | Details: ${formData.message}`
      }]);
      setSubmitted(true);
      setFormData({ name: '', phone: '', service: currentService.title, scale: activeScale.tier, location: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* IT INFRASTRUCTURE & NETWORK CIRCUIT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2444_1px,transparent_1px),linear-gradient(to_bottom,#0f2444_1px,transparent_1px)] bg-[size:48px_48px] opacity-25"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-600/10 blur-[140px] rounded-full"></div>
        <div className="absolute top-[600px] -right-32 w-[600px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 -left-20 w-[500px] h-[350px] bg-cyan-800/10 blur-[130px] rounded-full"></div>

        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="it-circuit-pattern" width="320" height="320" patternUnits="userSpaceOnUse">
              <path d="M 0 40 L 100 40 L 140 80 L 260 80 L 280 100 L 320 100" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" />
              <path d="M 40 320 L 40 220 L 80 180 L 180 180 L 220 140 L 220 0" fill="none" stroke="#0ea5e9" strokeWidth="0.8" />
              <path d="M 120 320 L 160 280 L 280 280 L 320 240" fill="none" stroke="#0284c7" strokeWidth="1" />
              <path d="M 0 260 L 60 260 L 100 300" fill="none" stroke="#38bdf8" strokeWidth="0.8" />
              <circle cx="100" cy="40" r="3" fill="#38bdf8" />
              <circle cx="140" cy="80" r="2.5" fill="#38bdf8" />
              <circle cx="280" cy="100" r="3" fill="#0284c7" />
              <circle cx="80" cy="180" r="2.5" fill="#38bdf8" />
              <circle cx="220" cy="140" r="3" fill="#38bdf8" />
              <circle cx="160" cy="280" r="3" fill="#0ea5e9" />
              <rect x="256" y="76" width="8" height="8" fill="none" stroke="#38bdf8" strokeWidth="1" />
              <rect x="176" y="176" width="8" height="8" fill="none" stroke="#0ea5e9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#it-circuit-pattern)" />
        </svg>

        <div className="absolute top-28 right-8 text-[9px] font-mono text-cyan-500/30 hidden xl:flex flex-col gap-1 tracking-widest pointer-events-none select-none">
          <span>PORT: 8080/NVR-SYS</span>
          <span>FIBER-LINK: 10G-OPTICAL</span>
          <span>PO_E: V_ACTIVE: 48V</span>
          <span>IP_GATEWAY: 192.168.1.1</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#060b14]/95 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 font-black tracking-tighter shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              VE
            </div>
            <div>
              <div className="text-lg font-black tracking-wider text-white flex items-center gap-2">
                VASRAM ENTERPRISES
                <span className="hidden sm:inline-block text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
                  ONLINE
                </span>
              </div>
              <div className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                Systems & Industrial Integrations • Kakinada
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#services-matrix" className="hover:text-cyan-400 transition">Systems Matrix</a>
            <a href="#amc-sla" className="hover:text-cyan-400 transition">SLA Protocol</a>
            <a href="#procurement-console" className="hover:text-cyan-400 transition">Request Assessment</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link 
              to="/myaccount" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold hover:border-slate-500 transition"
            >
              <UserCheck size={14} className="text-cyan-400" />
              <span>Customer Portal</span>
            </Link>
            <Link 
              to="/vemama" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition"
            >
              <Lock size={14} className="text-emerald-400" />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Value Proposition Banner */}
        <section className="pt-14 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="border border-slate-800/90 bg-gradient-to-b from-[#091224]/80 to-[#070e1c]/90 backdrop-blur-md rounded-xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-4 right-5 hidden md:flex items-center gap-2 text-[10px] font-mono text-slate-500">
              <Activity size={12} className="text-cyan-400" />
              <span>NETWORK DISPATCH: ONLINE</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800/90 border border-slate-700 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Shield size={13} /> Engineering Procurement & SLA Contracting
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Industrial Surveillance, Life Safety & <br className="hidden md:block"/>
                Workforce Access Infrastructure
              </h1>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                From micro commercial outlets to high-capacity maritime yards and agro-processing complexes. Guaranteed technician SLAs, certified OEM components, and uninterrupted contract maintenance across Coastal Andhra Pradesh.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#services-matrix" 
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded transition flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                >
                  Examine Operational Matrix <ArrowRight size={15} />
                </a>
                <a 
                  href="#procurement-console" 
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold uppercase tracking-wider rounded transition"
                >
                  Book On-Site Engineering Survey
                </a>
              </div>
            </div>

            {/* Industrial Summary Ribbons */}
            <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <div className="text-slate-500 uppercase tracking-widest text-[10px]">Turnaround SLA</div>
                <div className="text-white font-bold text-base mt-0.5">&lt; 4 Hours</div>
                <div className="text-slate-500 text-[11px]">Priority breakdown response</div>
              </div>
              <div>
                <div className="text-slate-500 uppercase tracking-widest text-[10px]">Scale Bandwidth</div>
                <div className="text-white font-bold text-base mt-0.5">1 to 128+ Nodes</div>
                <div className="text-slate-500 text-[11px]">Fiber optic infrastructure ready</div>
              </div>
              <div>
                <div className="text-slate-500 uppercase tracking-widest text-[10px]">OEM Hardware</div>
                <div className="text-white font-bold text-base mt-0.5">100% Genuine</div>
                <div className="text-slate-500 text-[11px]">Authorized distribution sourcing</div>
              </div>
              <div>
                <div className="text-slate-500 uppercase tracking-widest text-[10px]">Service Verification</div>
                <div className="text-white font-bold text-base mt-0.5">Digital Audit Log</div>
                <div className="text-slate-500 text-[11px]">Direct /myaccount portal sync</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE CORE MATRIX: SERVICE & SCALE ARCHITECTURE */}
        <section id="services-matrix" className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
          
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// ARCHITECTURE EXPLORER</div>
            <h2 className="text-2xl md:text-3xl font-black text-white">System Deployments by Scale & Tier</h2>
            <p className="text-slate-400 text-xs md:text-sm">
              Select a system domain to evaluate hardware specifications, implementation capacity, and authorized manufacturing partners.
            </p>
          </div>

          {/* Primary Service Selector Ribbons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {servicesCatalogue.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => handleSelectService(service.id)}
                  className={`flex flex-col items-start p-3.5 rounded border text-left transition ${
                    isSelected 
                      ? 'bg-slate-800/95 border-cyan-500 text-white shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/20' 
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <div className={`mb-2 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold leading-tight">{service.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Unified Engineering Console Frame */}
          <div className="border border-slate-800 bg-[#070e1c]/95 backdrop-blur-md rounded-xl p-6 md:p-8 space-y-8 shadow-xl">
            
            {/* Domain Overview Bar */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 uppercase">
                  <Cpu size={14} /> Active Domain Specification
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">{currentService.title}</h3>
                <p className="text-xs md:text-sm text-slate-400 max-w-2xl">{currentService.tagline}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuoteTransfer(`Full Domain Assessment (${currentService.shortName})`)}
                  className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold rounded transition flex items-center gap-1.5"
                >
                  <span>Request Engineering Assessment</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Split Operational Spectrum Console */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: 4-Tier Interactive Scale Selector */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers size={14} /> 1. Select Capacity Scale
                </div>

                <div className="space-y-2">
                  {currentService.scales.map((scale, idx) => {
                    const isCurrent = idx === selectedScaleIndex;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleSelectScale(idx)}
                        className={`p-4 rounded border cursor-pointer transition ${
                          isCurrent
                            ? 'bg-slate-800/90 border-cyan-500 ring-1 ring-cyan-500/30'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-black uppercase tracking-wider ${isCurrent ? 'text-white' : 'text-slate-400'}`}>
                            {scale.tier}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                            {scale.range}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-slate-200 mt-1">{scale.category}</div>
                        <div className="text-[11px] text-slate-500 truncate mt-0.5">{scale.target}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Deep Architectural Specifications */}
              <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-lg p-6 space-y-6">
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Operational Target Segment</span>
                    <h4 className="text-base md:text-lg font-black text-white">{activeScale.target}</h4>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Capacity Band</span>
                    <div className="text-xs font-mono font-bold text-cyan-300">{activeScale.range}</div>
                  </div>
                </div>

                {/* Hardware Spec */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Server size={13} className="text-cyan-400" /> Deployed Hardware Architecture
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 bg-slate-950 p-4 rounded border border-slate-800/80 leading-relaxed">
                    {activeScale.hardware}
                  </p>
                </div>

                {/* Scope and SLA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/80 space-y-1.5">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Wrench size={12} className="text-amber-400" /> Implementation Scope
                    </div>
                    <p className="text-slate-300 font-light leading-snug">{activeScale.scope}</p>
                  </div>

                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/80 space-y-1.5">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock size={12} className="text-emerald-400" /> Contract SLA Level
                    </div>
                    <p className="text-slate-300 font-light leading-snug">{activeScale.sla}</p>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="text-[11px] text-slate-500">
                    Configuration matched for {activeScale.tier} deployments.
                  </div>
                  <button
                    onClick={() => handleQuoteTransfer(`${activeScale.tier} - ${activeScale.target}`)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition flex items-center justify-center gap-2"
                  >
                    <span>Configure {activeScale.tier} Setup</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* BRAND LOGOS SECTION: OFFICIAL COMBINED LOGO & NAME MARKS */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck size={14} className="text-cyan-400" /> 2. Authorized Hardware Manufacturers & Distribution Partners
                </div>
                <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                  OEM VERIFIED
                </span>
              </div>
              
              {/* Brand Logo Grid with Integrated Logo + Name Mark */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {currentService.brands.map((b, bIdx) => (
                  <div 
                    key={bIdx}
                    className="group bg-[#090e17] border border-slate-800/90 hover:border-cyan-500/60 rounded-xl p-4 flex flex-col items-center justify-between text-center transition-all duration-200 hover:bg-slate-900/90 shadow-sm"
                  >
                    {/* The Full Brand Logo Lockup (Emblem + Wordmark) */}
                    <div className="h-12 w-full flex items-center justify-center mb-1 group-hover:scale-105 transition-transform duration-200">
                      <BrandFullLogo code={b.code} />
                    </div>

                    <div className="w-full border-t border-slate-800/80 pt-2">
                      <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-semibold">{b.tag}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 3. PROACTIVE AMC SLA PROTOCOL */}
        <section id="amc-sla" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="border border-slate-800 bg-slate-900/40 backdrop-blur-md rounded-xl p-8 md:p-10 space-y-8">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// CONTRACT GOVERNANCE</div>
              <h2 className="text-2xl font-black text-white">Annual Maintenance Contract (AMC) SLA Standards</h2>
              <p className="text-xs md:text-sm text-slate-400">
                Preventing silent camera blackouts, voltage drop failures, and lost CCTV loops through quarterly precision inspections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-5 rounded bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-emerald-400 font-bold uppercase text-[11px]">Quarterly Health Checks</div>
                <div className="text-slate-200 font-semibold text-sm">Routine Loop Auditing</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Scheduled on-site cleaning of optical lenses, power adapter volt testing, cable continuity sweeps, and NVR disk sector monitoring.
                </p>
              </div>

              <div className="p-5 rounded bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-cyan-400 font-bold uppercase text-[11px]">Guaranteed SLA Callout</div>
                <div className="text-slate-200 font-semibold text-sm">&lt; 4 Hours Emergency SLA</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Fast emergency response protocol for complete system shutdowns, blackouts, or cut optical fiber lines across district industrial corridors.
                </p>
              </div>

              <div className="p-5 rounded bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-amber-400 font-bold uppercase text-[11px]">Portal Synchronization</div>
                <div className="text-slate-200 font-semibold text-sm">Verified Service Records</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Every technician visit report, replaced component, and active warranty card is uploaded immediately to your Customer Portal (/myaccount).
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Operating with third-party legacy hardware? We audit and onboard existing installations into our AMC system.
              </div>
              <button
                onClick={() => handleQuoteTransfer('Annual Maintenance Contract (AMC Audit & Onboarding)')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold rounded border border-slate-700 transition"
              >
                Request AMC Facility Audit
              </button>
            </div>
          </div>
        </section>

        {/* 4. PROCUREMENT / SITE SURVEY CONSOLE */}
        <section id="procurement-console" className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
          <div className="border border-slate-800 bg-[#070e1c]/95 backdrop-blur-md rounded-xl p-8 md:p-10 space-y-6 shadow-xl">
            <div className="space-y-1">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// DISPATCH COORDINATION DESK</div>
              <h2 className="text-2xl font-black text-white">Schedule Facility Engineering Survey</h2>
              <p className="text-xs text-slate-400">
                Submit your facility parameters below. Our engineering dispatch desk in Kakinada will review and contact your team promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded bg-slate-950 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white">Engineering Assessment Queued</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Your inquiry has been registered in our operations desk. A technical coordinator will reach out to schedule an on-site visit.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-cyan-400 hover:underline pt-2 font-mono"
                >
                  [Submit another requirement]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Organization / Contact Person</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Apex Marine Logistics / R. Sharma" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})} 
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Direct Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. 98480 22338" 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})} 
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">System Category</label>
                    <input 
                      type="text" 
                      value={formData.service} 
                      onChange={e => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-xs text-cyan-300 font-bold focus:outline-none focus:border-cyan-500" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Deployment Scale Tier</label>
                    <input 
                      type="text" 
                      value={formData.scale} 
                      onChange={e => setFormData({...formData, scale: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Facility Location (Town / Industrial Corridor)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Kakinada Deep Water Port, Samalkot Industrial Area, Rajahmundry" 
                    value={formData.location} 
                    onChange={e => setFormData({...formData, location: e.target.value})} 
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Hardware Parameters / Existing Issues</label>
                  <textarea 
                    placeholder="Specify number of required endpoints, fiber distance, biometric count, or breakdown symptoms..." 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})} 
                    rows="3"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition flex items-center justify-center gap-2 disabled:opacity-50 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                >
                  <Send size={14} />
                  {loading ? 'Transmitting Request...' : 'Transmit Engineering Survey Request'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Structural Enterprise Footer */}
      <footer className="border-t border-slate-800 bg-[#040810] px-4 md:px-8 py-8 text-xs font-mono text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-slate-300 font-bold">VASRAM ENTERPRISES</span> • Engineering Integrations & Surveillance AMC • Kakinada, AP
          </div>
          <div className="flex items-center gap-6">
            <Link to="/myaccount" className="hover:text-cyan-400 transition">// CUSTOMER PORTAL</Link>
            <Link to="/vemama" className="text-slate-600 hover:text-slate-400 transition">// STAFF DESK</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}