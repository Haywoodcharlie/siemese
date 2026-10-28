# SIAMESE — Executive AI Wellness Assistant | Investor Briefing Platform

An interactive, dark-themed pitch deck and investor dashboard web application for **SIAMESE**, built with **React** and **Tailwind CSS**.

### 🌟 Key Features
- 📊 **Interactive Pitch Deck View**: Full 15-page presentation with step-by-step slide navigation and quick-jump controls.
- 🧮 **Executive Burnout & Cost Calculator**: Real-time economic cost and lost productivity estimator for executive teams.
- 💰 **Pricing & MRR Simulator**: Interactive tier distribution model ($500–$2,000/mo) targeting $1.5M MRR.
- 📈 **Seed ROI & Exit Scenario Simulator**: Dynamic investment return calculator projecting seed stake outcomes up to 43.5x ROI.
- 🗺️ **Market & Competitive Analysis**: Visual $19.6B market opportunity Venn diagram and competitive matrix positioning SIAMESE against existing tools.
- 📍 **Midwest Advantage & Ecosystem Map**: Strategic breakdown highlighting the 65% cost-efficiency advantage of operating in St. Joseph / Kansas City.

### 🛠️ Tech Stack
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  Users, 
  Brain, 
  Zap, 
  Target, 
  MapPin, 
  Award, 
  ChevronRight, 
  BarChart3, 
  PieChart, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Briefcase, 
  Calendar, 
  Heart, 
  Sparkles, 
  Clock, 
  Cpu, 
  Building2, 
  Mail, 
  Send, 
  Sliders, 
  Info,
  Maximize2,
  ChevronDown,
  X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Interactive Friction Calculator State
  const [execRate, setExecRate] = useState(10000);
  const [wastedHours, setWastedHours] = useState(15);
  
  // Interactive Revenue Tier Simulator State
  const [proMembers, setProMembers] = useState(1000);
  const [execMembers, setExecMembers] = useState(500);
  const [founderMembers, setFounderMembers] = useState(250);

  // Interactive Exit Calculator State
  const [investmentAmount, setInvestmentAmount] = useState(750000);
  const [preMoneyValuation, setPreMoneyValuation] = useState(5000000);
  const [exitValuation, setExitValuation] = useState(250000000);

  // Term Sheet Modal
  const [showTermSheetModal, setShowTermSheetModal] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', fund: '', checkSize: '$100K+' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Dynamic Calculations for Opportunity Cost
  const weeklyCost = useMemo(() => execRate * wastedHours, [execRate, wastedHours]);
  const annualCost = useMemo(() => weeklyCost * 50, [weeklyCost]);

  // Dynamic Calculations for Revenue Model
  const proMRR = useMemo(() => proMembers * 500, [proMembers]);
  const execMRR = useMemo(() => execMembers * 1000, [execMembers]);
  const founderMRR = useMemo(() => founderMembers * 2000, [founderMembers]);
  const totalMRR = useMemo(() => proMRR + execMRR + founderMRR, [proMRR, execMRR, founderMRR]);
  const totalARR = useMemo(() => totalMRR * 12, [totalMRR]);

  // Dynamic Calculations for Investment ROI
  const postMoneyValuation = useMemo(() => preMoneyValuation + investmentAmount, [preMoneyValuation, investmentAmount]);
  const ownershipPercentage = useMemo(() => (investmentAmount / postMoneyValuation) * 100, [investmentAmount, postMoneyValuation]);
  const investorPayout = useMemo(() => (exitValuation * (ownershipPercentage / 100)), [exitValuation, ownershipPercentage]);
  const roiMultiple = useMemo(() => investorPayout / investmentAmount, [investorPayout, investmentAmount]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowTermSheetModal(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B0F12] text-[#F9FAFB] font-sans antialiased selection:bg-[#10B981] selection:text-black">
      {/* Top Ambient Glow Effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#10B981]/15 via-[#00F5A0]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0B0F12]/80 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5A0] to-[#059669] flex items-center justify-center shadow-lg shadow-[#10B981]/20">
              <Brain className="w-6 h-6 text-black font-bold" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-wider text-white">SIAMESE</span>
              <span className="hidden sm:inline-block ml-3 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#10B981]/10 text-[#00F5A0] border border-[#10B981]/30">
                Seed Pitch & Dashboard
              </span>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden md:flex space-x-1 bg-[#12181F] p-1.5 rounded-xl border border-[#1E293B]">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'market', label: 'Market Opportunity' },
              { id: 'problem', label: 'Problem & Cost' },
              { id: 'product', label: 'Product & AI' },
              { id: 'financials', label: 'Financials & Sim' },
              { id: 'roi', label: 'ROI & Valuation' },
              { id: 'terms', label: 'Terms & Contact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#10B981] text-black shadow-md shadow-[#10B981]/20 font-bold'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-[#1E293B]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setShowTermSheetModal(true)}
            className="px-4 py-2 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-[#00F5A0] to-[#10B981] text-black hover:opacity-90 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#10B981]/25 flex items-center gap-2"
          >
            <span>Request Term Sheet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Tab Selector */}
        <div className="md:hidden flex overflow-x-auto px-4 py-2 gap-2 border-t border-[#1E293B] bg-[#0D131A] scrollbar-none">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'market', label: 'Market' },
            { id: 'problem', label: 'Problem' },
            { id: 'product', label: 'Product' },
            { id: 'financials', label: 'Financials' },
            { id: 'roi', label: 'ROI Calc' },
            { id: 'terms', label: 'Terms' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 text-xs whitespace-nowrap font-medium rounded-lg ${
                activeTab === tab.id
                  ? 'bg-[#10B981] text-black font-bold'
                  : 'bg-[#12181F] text-[#9CA3AF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* HERO / EXECUTIVE OVERVIEW SECTION */}
        {activeTab === 'overview' && (
          <div className="space-y-10 animate-fade-in">
            {/* Banner Header */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#12181F] via-[#0D131A] to-[#0B0F12] p-8 sm:p-12 border border-[#1E293B]/80 shadow-2xl">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#00F5A0] text-xs font-bold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> SEED STAGE INVESTMENT PROPOSAL
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#10B981]">$19.6B</span> OPPORTUNITY NOBODY SEES
                </h1>
                
                <p className="text-lg sm:text-xl text-[#9CA3AF] font-light leading-relaxed">
                  Executive Wellness AI Assistant — <strong className="text-white font-medium">Premium Mental Health Meets Premium Productivity</strong>. Engineered for high-stakes leaders.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#E5E7EB] bg-[#1E293B]/60 px-4 py-2.5 rounded-xl border border-[#1E293B]">
                    <MapPin className="w-4 h-4 text-[#00F5A0]" />
                    <span>Based in St. Joseph, MO (Midwest Execution, Silicon Valley Ambition)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#E5E7EB] bg-[#1E293B]/60 px-4 py-2.5 rounded-xl border border-[#1E293B]">
                    <DollarSign className="w-4 h-4 text-[#00F5A0]" />
                    <span>Seeking $750K Seed Raise @ $5.0M Pre-Money Valuation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Deck Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Market Size', value: '$19.6B', sub: 'Projected 2030 Category Growth', icon: TrendingUp, color: 'text-[#00F5A0]' },
                { title: 'Midwest Cost Edge', value: '65% Lower', sub: 'Operating burn vs Silicon Valley', icon: Zap, color: 'text-amber-400' },
                { title: 'Year 1 Exit Target', value: '$18M ARR', sub: '$1.5M Monthly Recurring Target', icon: BarChart3, color: 'text-[#10B981]' },
                { title: 'Target ROI', value: '43.5x', sub: '$32.61M Payout on $250M Acquisition', icon: Award, color: 'text-emerald-300' },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#12181F] border border-[#1E293B] hover:border-[#10B981]/50 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">{stat.title}</span>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-black text-white group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Quick Pitch Summary Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Executive Thesis */}
              <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B] space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#10B981]/10 text-[#00F5A0]">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Investment Thesis</h3>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  High-earning executives and founders are broken. Standard apps like Calm focus purely on meditation ($15B market), while productivity tools like Motion focus on calendars ($500M market).
                </p>
                <div className="p-4 rounded-2xl bg-[#0D131A] border border-[#1E293B] space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00F5A0] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#E5E7EB]"><strong className="text-white">SIAMESE</strong> creates a new category at the intersection of Wellness Intelligence + Productivity Automation + Executive AI Assistants.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00F5A0] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#E5E7EB]">High-ticket pricing ($500 - $2,000/mo) leads to rapid $18M ARR exit run-rate with only 1,750 subscribers.</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('market')}
                  className="w-full py-3 rounded-xl bg-[#1E293B]/60 hover:bg-[#1E293B] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-[#1E293B]"
                >
                  Explore Detailed Market Breakdown <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Founder & Seed Structure Card */}
              <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B] space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-[#10B981]/10 text-[#00F5A0]">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Seed Round Snapshot</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0D131A] border border-[#1E293B]">
                      <div className="text-xs text-[#9CA3AF]">Target Seed Raise</div>
                      <div className="text-2xl font-bold text-[#00F5A0]">$750,000</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0D131A] border border-[#1E293B]">
                      <div className="text-xs text-[#9CA3AF]">Pre-Money Valuation</div>
                      <div className="text-2xl font-bold text-white">$5,000,000</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0D131A] border border-[#1E293B]">
                      <div className="text-xs text-[#9CA3AF]">Equity Offered</div>
                      <div className="text-2xl font-bold text-white">~13.04%</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0D131A] border border-[#1E293B]">
                      <div className="text-xs text-[#9CA3AF]">Min. Check Size</div>
                      <div className="text-2xl font-bold text-white">$50,000</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between">
                  <span className="text-xs text-[#9CA3AF]">Lead Investor Position Available</span>
                  <button
                    onClick={() => setShowTermSheetModal(true)}
                    className="px-4 py-2 rounded-xl bg-[#10B981] text-black text-xs font-bold hover:bg-[#00F5A0] transition-colors"
                  >
                    Lock In Terms
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MARKET OPPORTUNITY & VENN DIAGRAM SECTION (Slides 2 & 8) */}
        {activeTab === 'market' && (
          <div className="space-y-10 animate-fade-in">
            <div className="border-b border-[#1E293B] pb-6">
              <h2 className="text-3xl font-black text-white">WE FOUND THE HOLE IN A $19.6B MARKET</h2>
              <p className="text-sm text-[#9CA3AF] mt-1">SIAMESE sits uniquely at the nexus of Wellness, Productivity, and AI Executive Assistants.</p>
            </div>

            {/* Interactive Venn Diagram & Market Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Custom SVG Venn Diagram */}
              <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B] flex flex-col items-center justify-center relative min-h-[400px]">
                <h3 className="text-sm font-bold uppercase text-[#9CA3AF] tracking-wider mb-6">Market Intersection Analysis</h3>
                
                <div className="relative w-full max-w-md h-80 flex items-center justify-center">
                  {/* Top Circle: Wellness ($15B) */}
                  <div className="absolute top-2 left-12 w-48 h-48 rounded-full border-2 border-emerald-500/40 bg-emerald-500/10 backdrop-blur-sm flex flex-col items-center pt-6 text-center hover:bg-emerald-500/20 transition-all cursor-pointer">
                    <span className="text-xs font-extrabold uppercase text-emerald-400">Wellness</span>
                    <span className="text-sm font-bold text-white">$15B Market</span>
                    <span className="text-[10px] text-[#9CA3AF]">Calm, Headspace</span>
                  </div>

                  {/* Top Right Circle: Productivity ($500M) */}
                  <div className="absolute top-2 right-12 w-48 h-48 rounded-full border-2 border-amber-500/40 bg-amber-500/10 backdrop-blur-sm flex flex-col items-center pt-6 text-center hover:bg-amber-500/20 transition-all cursor-pointer">
                    <span className="text-xs font-extrabold uppercase text-amber-400">Productivity</span>
                    <span className="text-sm font-bold text-white">$500M Market</span>
                    <span className="text-[10px] text-[#9CA3AF]">Superhuman, Motion</span>
                  </div>

                  {/* Bottom Circle: Assistants ($3.4B) */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border-2 border-cyan-500/40 bg-cyan-500/10 backdrop-blur-sm flex flex-col items-center justify-end pb-6 text-center hover:bg-cyan-500/20 transition-all cursor-pointer">
                    <span className="text-xs font-extrabold uppercase text-cyan-400">AI Assistants</span>
                    <span className="text-sm font-bold text-white">$3.4B Market</span>
                    <span className="text-[10px] text-[#9CA3AF]">Siri, Alexa, Google</span>
                  </div>

                  {/* Center Target: SIAMESE */}
                  <div className="absolute z-20 px-5 py-3 rounded-2xl bg-[#0B0F12] border-2 border-[#00F5A0] shadow-2xl shadow-[#00F5A0]/40 text-center transform hover:scale-110 transition-transform">
                    <div className="text-xs font-black tracking-widest text-[#00F5A0]">SIAMESE</div>
                    <div className="text-[10px] text-white font-medium">PREMIUM AI HUB</div>
                  </div>
                </div>

                <div className="mt-4 text-center text-xs text-[#9CA3AF]">
                  Combining 24/7 wellness tracking with executive automation into one high-margin platform.
                </div>
              </div>

              {/* Market Size Projection Chart (2025 - 2030) */}
              <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-white">AI Assistant Category Growth</h3>
                      <p className="text-xs text-[#9CA3AF]">Projected Market Size ($ Billions)</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/10 text-[#00F5A0] text-xs font-bold border border-[#10B981]/30">
                      41.9% Projected CAGR
                    </span>
                  </div>

                  {/* Visual Bar Representation of Market Growth */}
                  <div className="space-y-4 my-6">
                    {[
                      { year: '2025', val: 3.4, pct: 17 },
                      { year: '2026', val: 4.8, pct: 24 },
                      { year: '2027', val: 6.8, pct: 34 },
                      { year: '2028', val: 9.7, pct: 49 },
                      { year: '2029', val: 13.8, pct: 70 },
                      { year: '2030', val: 19.6, pct: 100 },
                    ].map((item) => (
                      <div key={item.year} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-[#9CA3AF]">{item.year}</span>
                          <span className="text-white font-bold">${item.val}B</span>
                        </div>
                        <div className="w-full h-3 bg-[#0D131A] rounded-full overflow-hidden border border-[#1E293B]">
                          <div
                            className="h-full bg-gradient-to-r from-[#059669] to-[#00F5A0] rounded-full transition-all duration-1000"
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0D131A] border border-[#1E293B] text-xs text-[#9CA3AF]">
                  <strong className="text-white">Investor Context:</strong> Premium segment capture (Executive Tier $1k/mo) projected to represent $500M+ opportunity by 2027.
                </div>
              </div>
            </div>

            {/* Competitive Matrix Positioning (Slide 8) */}
            <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B]">
              <h3 className="text-xl font-bold text-white mb-2">Competitive Positioning Matrix</h3>
              <p className="text-sm text-[#9CA3AF] mb-8">Low vs High Wellness Depth & Productivity Automation</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative p-6 bg-[#0D131A] rounded-2xl border border-[#1E293B]">
                {/* Quadrant 1: Top Left */}
                <div className="p-6 rounded-xl border border-dashed border-[#1E293B] bg-[#12181F]/50 flex flex-col justify-between h-48">
                  <span className="text-xs font-bold text-amber-400 uppercase">Wellness Specialists</span>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-lg bg-[#1E293B] text-xs font-semibold text-white mr-2">Calm</span>
                    <span className="inline-block px-3 py-1 rounded-lg bg-[#1E293B] text-xs font-semibold text-white">Headspace</span>
                  </div>
                  <span className="text-[10px] text-[#9CA3AF]">High Wellness / Low Automation</span>
                </div>

                {/* Quadrant 2: Top Right (SIAMESE - Target Leader) */}
                <div className="p-6 rounded-xl border-2 border-[#00F5A0] bg-gradient-to-br from-[#10B981]/20 to-[#12181F] flex flex-col justify-between h-48 shadow-xl shadow-[#10B981]/10 relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#00F5A0] text-black text-[10px] font-black">SOLO PLAY</div>
                  <span className="text-xs font-black text-[#00F5A0] uppercase tracking-wider">SIAMESE PREMIUM AI HUB</span>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">Dual-Core Intelligence</div>
                    <div className="text-xs text-[#9CA3AF]">24/7 Stress Monitoring + Executive Task Automation</div>
                  </div>
                  <span className="text-[10px] text-[#00F5A0] font-bold">HIGH WELLNESS DEPTH / HIGH AUTOMATION</span>
                </div>

                {/* Quadrant 3: Bottom Left */}
                <div className="p-6 rounded-xl border border-dashed border-[#1E293B] bg-[#12181F]/50 flex flex-col justify-between h-48">
                  <span className="text-xs font-bold text-slate-400 uppercase">Generic Assistants</span>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-lg bg-[#1E293B] text-xs font-semibold text-white">Siri / Alexa / Google</span>
                  </div>
                  <div className="text-[10px] text-red-400">Human Assistants: $100K/yr baseline</div>
                </div>

                {/* Quadrant 4: Bottom Right */}
                <div className="p-6 rounded-xl border border-dashed border-[#1E293B] bg-[#12181F]/50 flex flex-col justify-between h-48">
                  <span className="text-xs font-bold text-cyan-400 uppercase">Productivity Tools</span>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-lg bg-[#1E293B] text-xs font-semibold text-white mr-2">Superhuman</span>
                    <span className="inline-block px-3 py-1 rounded-lg bg-[#1E293B] text-xs font-semibold text-white">Motion</span>
                  </div>
                  <span className="text-[10px] text-[#9CA3AF]">Low Wellness / High Automation</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* THE PROBLEM & ECONOMIC COST BREAKDOWN (Slide 3) */}
        {activeTab === 'problem' && (
          <div className="space-y-10 animate-fade-in">
            <div className="border-b border-[#1E293B] pb-6">
              <h2 className="text-3xl font-black text-white">EXECUTIVES ARE BROKEN — AND NOBODY'S FIXING THEM</h2>
              <p className="text-sm text-[#9CA3AF] mt-1">Mental exhaustion reduces decision quality, creating millions in lost opportunity.</p>
            </div>

            {/* Metric Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { metric: '78%', label: 'Executive Burnout', sub: 'Reported by Forbes' },
                { metric: '15+ Hrs', label: 'Wasted Weekly', sub: 'On routine admin tasks' },
                { metric: '$10,000', label: 'Hourly Exec Rate', sub: 'Fortune 500 CEO benchmark' },
                { metric: '$500,000', label: 'Annual Opp. Cost', sub: 'Per executive wasted time' },
                { metric: '32%', label: 'Productivity Decline', sub: 'Under chronic stress' },
              ].map((card, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#12181F] border border-[#1E293B] text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#00F5A0]">{card.metric}</div>
                  <div className="text-xs font-bold text-white mt-1">{card.label}</div>
                  <div className="text-[10px] text-[#9CA3AF] mt-0.5">{card.sub}</div>
                </div>
              ))}
            </div>

            {/* Interactive Opportunity Cost Calculator */}
            <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B] space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Sliders className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Executive Economic Cost Simulator</h3>
                  <p className="text-xs text-[#9CA3AF]">Adjust hourly rate and wasted hours to model organizational loss.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  {/* Slider 1: Hourly Executive Rate */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#9CA3AF]">Executive Hourly Rate ($)</span>
                      <span className="text-[#00F5A0] font-bold">${execRate.toLocaleString()}/hr</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="20000"
                      step="500"
                      value={execRate}
                      onChange={(e) => setExecRate(Number(e.target.value))}
                      className="w-full h-2 bg-[#0D131A] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    />
                  </div>

                  {/* Slider 2: Weekly Wasted Hours */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#9CA3AF]">Weekly Wasted Administrative Hours</span>
                      <span className="text-[#00F5A0] font-bold">{wastedHours} Hours / week</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={wastedHours}
                      onChange={(e) => setWastedHours(Number(e.target.value))}
                      className="w-full h-2 bg-[#0D131A] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    />
                  </div>
                </div>

                {/* Output Display Card */}
                <div className="p-6 rounded-2xl bg-[#0D131A] border border-[#1E293B] space-y-4 text-center">
                  <span className="text-xs font-bold text-[#9CA3AF] uppercase">Calculated Direct Impact</span>
                  
                  <div className="py-2">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
                      ${annualCost.toLocaleString()}
                    </div>
                    <div className="text-xs text-[#9CA3AF] mt-1">Annual Lost Value Per Executive</div>
                  </div>

                  <div className="pt-4 border-t border-[#1E293B] grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[#9CA3AF] block">Weekly Cost</span>
                      <strong className="text-white">${weeklyCost.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] block">SIAMESE Target Savings</span>
                      <strong className="text-[#00F5A0]">10+ Hours Saved</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FEATURE MATRIX & STRATEGIC VISION (Slide 4) */}
        {activeTab === 'product' && (
          <div className="space-y-10 animate-fade-in">
            <div className="border-b border-[#1E293B] pb-6">
              <h2 className="text-3xl font-black text-white">SIAMESE: YOUR AI EXECUTIVE COACH + PRODUCTIVITY GENIUS</h2>
              <p className="text-sm text-[#9CA3AF] mt-1">Dual-engine technology designed specifically for C-suite demands.</p>
            </div>

            {/* Side by Side Dual Engines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Wellness Intelligence */}
              <div className="p-8 rounded-3xl bg-[#12181F] border border-[#10B981]/30 hover:border-[#10B981] transition-all space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#10B981]/10 text-[#00F5A0]">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Wellness Intelligence</h3>
                    <p className="text-xs text-[#00F5A0]">Cognitive & Mental Optimization</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { title: '24/7 Wellness Monitoring', desc: 'Continuous biometrics integration and stress-state detection for executive resilience.' },
                    { title: 'Mental Health Tracking', desc: 'Advanced sentiment analysis and cognitive load assessment to prevent burnout.' },
                    { title: 'Personalized AI Coaching', desc: 'Real-time mental optimization guides based on situational stress and schedule demands.' },
                  ].map((feature, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#0D131A] border border-[#1E293B] flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00F5A0] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-white">{feature.title}</div>
                        <div className="text-xs text-[#9CA3AF] mt-0.5">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Productivity Automation */}
              <div className="p-8 rounded-3xl bg-[#12181F] border border-cyan-500/30 hover:border-cyan-400 transition-all space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Productivity Automation</h3>
                    <p className="text-xs text-cyan-400">High-Speed Executive Execution</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { title: 'Intelligent Scheduling', desc: 'Dynamic calendar optimization that protects high-value focus time and deep work.' },
                    { title: 'Lifestyle Management', desc: 'Premium restaurant and experience booking handled autonomously by the AI agent.' },
                    { title: 'Task Automation Engine', desc: 'Targets 10+ hours saved weekly by handling routine executive administrative tasks.' },
                  ].map((feature, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#0D131A] border border-[#1E293B] flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-white">{feature.title}</div>
                        <div className="text-xs text-[#9CA3AF] mt-0.5">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic Vision: Tesla Optimus Integration */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#12181F] via-[#1E293B]/40 to-[#12181F] border border-[#10B981]/40 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0]">
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#00F5A0]">STRATEGIC VISION</div>
                  <h4 className="text-xl font-black text-white">Tesla Optimus-Ready Personality Layer</h4>
                  <p className="text-xs text-[#9CA3AF] max-w-xl mt-1">
                    Embodied Intelligence: First-mover thesis for integrating SIAMESE’s executive coaching agent into premium humanoid robotics platforms.
                  </p>
                </div>
              </div>
              <span className="px-4 py-2 rounded-xl bg-[#10B981] text-black text-xs font-bold whitespace-nowrap">
                Hardware-Agnostic AI
              </span>
            </div>
          </div>
        )}

        {/* FINANCIAL PROJECTIONS & TIER REVENUE SIMULATOR (Slide 5) */}
        {activeTab === 'financials' && (
          <div className="space-y-10 animate-fade-in">
            <div className="border-b border-[#1E293B] pb-6">
              <h2 className="text-3xl font-black text-white">FINANCIALS THAT MAKE SENSE IN MINUTES</h2>
              <p className="text-sm text-[#9CA3AF] mt-1">High ARR generated with an ultra-compact, high-ticket member base.</p>
            </div>

            {/* Static Pricing Tiers Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'PRO', price: '$500', period: '/mo', desc: 'Entry-level executives focused on core productivity.', members: '1,000 Members', mrr: '$500K MRR', border: 'border-[#1E293B]' },
                { name: 'EXECUTIVE', price: '$1,000', period: '/mo', desc: 'Core market: Full wellness + high-speed automation.', members: '500 Members', mrr: '$500K MRR', border: 'border-[#10B981]' },
                { name: 'FOUNDER', price: '$2,000', period: '/mo', desc: 'Premium segment: White-glove lifestyle management.', members: '250 Members', mrr: '$500K MRR', border: 'border-[#1E293B]' },
              ].map((tier, idx) => (
                <div key={idx} className={`p-8 rounded-3xl bg-[#12181F] border ${tier.border} relative flex flex-col justify-between space-y-6`}>
                  {tier.name === 'EXECUTIVE' && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#10B981] text-black text-[10px] font-black uppercase">
                      Core Segment
                    </span>
                  )}
                  <div>
                    <div className="text-xs font-black tracking-widest text-[#9CA3AF]">{tier.name}</div>
                    <div className="flex items-baseline gap-1 my-2">
                      <span className="text-4xl font-black text-white">{tier.price}</span>
                      <span className="text-xs text-[#9CA3AF]">{tier.period}</span>
                    </div>
                    <p className="text-xs text-[#9CA3AF]">{tier.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-[#1E293B] space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#9CA3AF]">Target Baseline:</span>
                      <span className="text-white font-bold">{tier.members}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#9CA3AF]">Contribution:</span>
                      <span className="text-[#00F5A0] font-bold">{tier.mrr}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Pricing Tier Revenue Simulator */}
            <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B] space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#10B981]/10 text-[#00F5A0]">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Interactive Member & Revenue Simulator</h3>
                  <p className="text-xs text-[#9CA3AF]">Adjust user volume across tiers to project MRR & Run-Rate ARR.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sliders */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Pro Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#9CA3AF]">Pro Tier Members ($500/mo)</span>
                      <span className="text-white font-bold">{proMembers} Members (${proMRR.toLocaleString()}/mo)</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="50"
                      value={proMembers}
                      onChange={(e) => setProMembers(Number(e.target.value))}
                      className="w-full h-2 bg-[#0D131A] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    />
                  </div>

                  {/* Executive Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#9CA3AF]">Executive Tier Members ($1,000/mo)</span>
                      <span className="text-[#00F5A0] font-bold">{execMembers} Members (${execMRR.toLocaleString()}/mo)</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="25"
                      value={execMembers}
                      onChange={(e) => setExecMembers(Number(e.target.value))}
                      className="w-full h-2 bg-[#0D131A] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    />
                  </div>

                  {/* Founder Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#9CA3AF]">Founder Tier Members ($2,000/mo)</span>
                      <span className="text-amber-400 font-bold">{founderMembers} Members (${founderMRR.toLocaleString()}/mo)</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={founderMembers}
                      onChange={(e) => setFounderMembers(Number(e.target.value))}
                      className="w-full h-2 bg-[#0D131A] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    />
                  </div>
                </div>

                {/* Calculation Metrics Sidebar */}
                <div className="p-6 rounded-2xl bg-[#0D131A] border border-[#1E293B] flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF]">TOTAL SIMULATED MRR</span>
                      <div className="text-3xl font-black text-[#00F5A0] mt-1">${totalMRR.toLocaleString()}</div>
                    </div>

                    <div className="text-center pt-3 border-t border-[#1E293B]">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF]">EXIT RUN-RATE ARR</span>
                      <div className="text-2xl font-bold text-white mt-0.5">${totalARR.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#12181F] border border-[#1E293B] space-y-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Target LTV : CAC</span>
                      <strong className="text-[#00F5A0]">24x Ratio</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">CAC / LTV Value</span>
                      <span className="text-white">$3,000 / $72,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Target Retention</span>
                      <span className="text-white">36 Months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INTERACTIVE INVESTOR RETURN SCENARIO & VALUATION BRIDGE (Slides 10, 12, 13) */}
        {activeTab === 'roi' && (
          <div className="space-y-10 animate-fade-in">
            <div className="border-b border-[#1E293B] pb-6">
              <h2 className="text-3xl font-black text-white">SCENARIO-BASED UPSIDE & SEED VALUATION BRIDGE</h2>
              <p className="text-sm text-[#9CA3AF] mt-1">Simulate investor returns across exit valuations for the $750K Seed Round.</p>
            </div>

            {/* Dynamic Return Calculator */}
            <div className="p-8 rounded-3xl bg-[#12181F] border border-[#10B981]/30 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Interactive Investor ROI Simulator</h3>
                  <p className="text-xs text-[#9CA3AF]">Test different exit values to project your capital return.</p>
                </div>

                {/* Preset Scenario Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setExitValuation(30000000)}
                    className="px-3 py-1.5 rounded-lg bg-[#1E293B] hover:bg-[#10B981]/20 hover:text-[#00F5A0] text-xs font-semibold text-white transition-all border border-[#1E293B]"
                  >
                    Conservative ($30M)
                  </button>
                  <button
                    onClick={() => setExitValuation(50000000)}
                    className="px-3 py-1.5 rounded-lg bg-[#1E293B] hover:bg-[#10B981]/20 hover:text-[#00F5A0] text-xs font-semibold text-white transition-all border border-[#1E293B]"
                  >
                    Series A ($50M)
                  </button>
                  <button
                    onClick={() => setExitValuation(250000000)}
                    className="px-3 py-1.5 rounded-lg bg-[#10B981] text-black text-xs font-bold transition-all shadow-md"
                  >
                    Strategic Acquisition ($250M)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Inputs */}
                <div className="space-y-6">
                  {/* Investment Check Size */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#9CA3AF]">Your Investment Check</span>
                      <span className="text-white font-bold">${investmentAmount.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="750000"
                      step="25000"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="w-full h-2 bg-[#0D131A] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    />
                  </div>

                  {/* Pre-Money Valuation */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#9CA3AF]">Pre-Money Valuation</span>
                      <span className="text-white font-bold">${(preMoneyValuation / 1000000).toFixed(2)}M</span>
                    </div>
                    <input
                      type="range"
                      min="3000000"
                      max="10000000"
                      step="500000"
                      value={preMoneyValuation}
                      onChange={(e) => setPreMoneyValuation(Number(e.target.value))}
                      className="w-full h-2 bg-[#0D131A] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    />
                  </div>

                  {/* Exit Valuation Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#9CA3AF]">Projected Exit Valuation</span>
                      <span className="text-[#00F5A0] font-bold">${(exitValuation / 1000000).toFixed(1)}M Exit</span>
                    </div>
                    <input
                      type="range"
                      min="10000000"
                      max="600000000"
                      step="10000000"
                      value={exitValuation}
                      onChange={(e) => setExitValuation(Number(e.target.value))}
                      className="w-full h-2 bg-[#0D131A] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    />
                  </div>
                </div>

                {/* Return Output Box */}
                <div className="p-6 rounded-2xl bg-[#0D131A] border border-[#1E293B] space-y-6 text-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl bg-[#12181F] border border-[#1E293B]">
                      <span className="text-[10px] text-[#9CA3AF] block uppercase">Equity Ownership</span>
                      <strong className="text-lg font-bold text-white">{ownershipPercentage.toFixed(2)}%</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-[#12181F] border border-[#1E293B]">
                      <span className="text-[10px] text-[#9CA3AF] block uppercase">Post-Money Valuation</span>
                      <strong className="text-lg font-bold text-white">${(postMoneyValuation / 1000000).toFixed(2)}M</strong>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#10B981]/15 to-transparent border border-[#10B981]/30">
                    <span className="text-xs font-bold text-[#9CA3AF] uppercase">PROJECTED INVESTOR PAYOUT</span>
                    <div className="text-4xl font-black text-[#00F5A0] my-1">
                      ${investorPayout.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#00F5A0] text-black font-black text-xs mt-1">
                      {roiMultiple.toFixed(1)}x Return on Investment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Use of Funds Flow / Breakdown (Slide 10) */}
            <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B]">
              <h3 className="text-xl font-bold text-white mb-6">Use of Funds Allocation ($750K Seed Raise)</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { category: 'Product Dev', pct: '40%', amount: '$300,000', color: 'border-cyan-500 text-cyan-400' },
                  { category: 'Marketing & CAC', pct: '30%', amount: '$225,000', color: 'border-amber-500 text-amber-400' },
                  { category: 'Team Expansion', pct: '20%', amount: '$150,000', color: 'border-emerald-500 text-emerald-400' },
                  { category: 'Operations & Legal', pct: '10%', amount: '$75,000', color: 'border-slate-500 text-slate-400' },
                ].map((item, i) => (
                  <div key={i} className={`p-5 rounded-2xl bg-[#0D131A] border-l-4 ${item.color} border-[#1E293B] space-y-1`}>
                    <div className="text-xs text-[#9CA3AF]">{item.category} ({item.pct})</div>
                    <div className="text-2xl font-bold text-white">{item.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MIDWEST COST ADVANTAGE & ECOSYSTEM NETWORK (Slide 6 & 9) */}
        {activeTab === 'terms' && (
          <div className="space-y-10 animate-fade-in">
            <div className="border-b border-[#1E293B] pb-6">
              <h2 className="text-3xl font-black text-white">TERMS & MIDWEST EXECUTION ADVANTAGE</h2>
              <p className="text-sm text-[#9CA3AF] mt-1">St. Joseph, MO base delivers 65% lower burn rate paired with Silicon Valley ambition.</p>
            </div>

            {/* Midwest Ecosystem & Cost Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cost Edge */}
              <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B] space-y-6">
                <h3 className="text-xl font-bold text-white">65% Lower Operating Cost Structure</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-[#9CA3AF]">Silicon Valley Burn Rate</span>
                      <span className="text-white">100% Baseline</span>
                    </div>
                    <div className="w-full h-4 bg-[#0D131A] rounded-full overflow-hidden border border-[#1E293B]">
                      <div className="w-full h-full bg-slate-600 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-[#00F5A0]">St. Joseph, MO Burn Rate</span>
                      <span className="text-[#00F5A0]">35% (65% Savings)</span>
                    </div>
                    <div className="w-full h-4 bg-[#0D131A] rounded-full overflow-hidden border border-[#1E293B]">
                      <div className="w-1/3 h-full bg-gradient-to-r from-[#059669] to-[#00F5A0] rounded-full" />
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-[#9CA3AF]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00F5A0]" /> Talent arbitrage — top Midwest engineers at 40-50% coastal salaries.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00F5A0]" /> Kansas City health-tech investment surge (+300% since 2021).</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00F5A0]" /> Research validation pipeline via UMKC partnership.</li>
                </ul>
              </div>

              {/* Ecosystem Targets */}
              <div className="p-8 rounded-3xl bg-[#12181F] border border-[#1E293B] space-y-4">
                <h3 className="text-xl font-bold text-white">Regional Ecosystem Partners</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'KCRise Fund', role: '$50M Digital Health Fund' },
                    { name: 'Digital Sandbox KC', role: 'Proof-of-concept Grants' },
                    { name: 'Raise Health', role: 'AI Mental Health Detection' },
                    { name: 'UMKC Research', role: 'Clinical Validation Studies' },
                  ].map((partner, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#0D131A] border border-[#1E293B]">
                      <div className="text-xs font-bold text-white">{partner.name}</div>
                      <div className="text-[10px] text-[#00F5A0] mt-0.5">{partner.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Term Sheet Overview */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#12181F] to-[#0D131A] border-2 border-[#10B981] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#00F5A0]">SEED SERIES A-1 TERMS</span>
                  <h3 className="text-2xl font-black text-white">Seed Round Structure Summary</h3>
                </div>
                <button
                  onClick={() => setShowTermSheetModal(true)}
                  className="px-6 py-3 rounded-xl bg-[#10B981] text-black font-bold text-xs hover:bg-[#00F5A0] transition-all shadow-lg shadow-[#10B981]/20"
                >
                  Request Full Term Sheet & Legal Room
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0B0F12] border border-[#1E293B]">
                  <span className="text-[#9CA3AF] block">Pre-Money Valuation</span>
                  <strong className="text-white text-base font-bold">$5.0M</strong>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0F12] border border-[#1E293B]">
                  <span className="text-[#9CA3AF] block">Post-Money Valuation</span>
                  <strong className="text-white text-base font-bold">$5.75M</strong>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0F12] border border-[#1E293B]">
                  <span className="text-[#9CA3AF] block">Liquidation Preference</span>
                  <strong className="text-white text-base font-bold">1x Non-Participating</strong>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0F12] border border-[#1E293B]">
                  <span className="text-[#9CA3AF] block">Lead Rights</span>
                  <strong className="text-[#00F5A0] text-base font-bold">Board Seat + Pro Rata</strong>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* REQUEST TERM SHEET MODAL */}
      {showTermSheetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg p-8 rounded-3xl bg-[#12181F] border border-[#10B981] shadow-2xl space-y-6">
            <button
              onClick={() => setShowTermSheetModal(false)}
              className="absolute top-6 right-6 text-[#9CA3AF] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#00F5A0]">SIAMESE INVESTOR PORTAL</div>
              <h3 className="text-2xl font-black text-white mt-1">Request Term Sheet & Access Data Room</h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#0D131A] border border-[#10B981] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#00F5A0] mx-auto" />
                <div className="text-lg font-bold text-white">Access Granted</div>
                <p className="text-xs text-[#9CA3AF]">
                  Term sheet details and financial model link have been dispatched to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D131A] border border-[#1E293B] text-white text-sm focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] mb-1">Work / Fund Email</label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@venturecapital.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D131A] border border-[#1E293B] text-white text-sm focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#9CA3AF] mb-1">Fund / Entity</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Ventures"
                      value={contactForm.fund}
                      onChange={(e) => setContactForm({ ...contactForm, fund: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D131A] border border-[#1E293B] text-white text-sm focus:border-[#10B981] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#9CA3AF] mb-1">Target Check Size</label>
                    <select
                      value={contactForm.checkSize}
                      onChange={(e) => setContactForm({ ...contactForm, checkSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D131A] border border-[#1E293B] text-white text-sm focus:border-[#10B981] focus:outline-none"
                    >
                      <option>$50K - Minimum</option>
                      <option>$100K - $250K</option>
                      <option>$250K - $500K</option>
                      <option>$750K - Full Lead</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00F5A0] to-[#10B981] text-black font-black text-sm hover:opacity-90 transition-all shadow-lg shadow-[#10B981]/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Unlock Data Room</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#1E293B] mt-20 py-8 bg-[#0B0F12]">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-[#9CA3AF] space-y-2">
          <p>© SIAMESE Executive AI. St. Joseph, MO — Seed Investment Pitch Proposal.</p>
          <p className="text-[10px]">Management assumptions based on user-provided brief. For prospective accredited investors only.</p>
        </div>
      </footer>
    </div>
  );
}
