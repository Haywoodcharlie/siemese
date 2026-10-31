import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Cpu,
  DollarSign,
  Heart,
  MapPin,
  Send,
  ShieldCheck,
  Sliders,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'market', label: 'Market Opportunity' },
  { id: 'problem', label: 'Problem & Cost' },
  { id: 'product', label: 'Product & AI' },
  { id: 'financials', label: 'Financials & Sim' },
  { id: 'roi', label: 'ROI & Valuation' },
  { id: 'terms', label: 'Terms & Contact' },
]

function StatCard({ icon: Icon, title, value, sub, accent }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#12181F] p-6 transition hover:border-emerald-500/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</span>
        <Icon className={`h-5 w-5 ${accent}`} />
      </div>
      <div className="text-3xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-400">{sub}</div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [execRate, setExecRate] = useState(10000)
  const [wastedHours, setWastedHours] = useState(15)
  const [proMembers, setProMembers] = useState(1000)
  const [execMembers, setExecMembers] = useState(500)
  const [founderMembers, setFounderMembers] = useState(250)
  const [investmentAmount, setInvestmentAmount] = useState(750000)
  const [preMoneyValuation, setPreMoneyValuation] = useState(5000000)
  const [exitValuation, setExitValuation] = useState(250000000)
  const [showTermSheetModal, setShowTermSheetModal] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    fund: '',
    checkSize: '$100K+',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const weeklyCost = useMemo(() => execRate * wastedHours, [execRate, wastedHours])
  const annualCost = useMemo(() => weeklyCost * 50, [weeklyCost])

  const proMRR = useMemo(() => proMembers * 500, [proMembers])
  const execMRR = useMemo(() => execMembers * 1000, [execMembers])
  const founderMRR = useMemo(() => founderMembers * 2000, [founderMembers])
  const totalMRR = useMemo(() => proMRR + execMRR + founderMRR, [proMRR, execMRR, founderMRR])
  const totalARR = useMemo(() => totalMRR * 12, [totalMRR])

  const postMoneyValuation = useMemo(
    () => preMoneyValuation + investmentAmount,
    [preMoneyValuation, investmentAmount],
  )
  const ownershipPercentage = useMemo(
    () => (investmentAmount / postMoneyValuation) * 100,
    [investmentAmount, postMoneyValuation],
  )
  const investorPayout = useMemo(
    () => exitValuation * (ownershipPercentage / 100),
    [exitValuation, ownershipPercentage],
  )
  const roiMultiple = useMemo(() => investorPayout / investmentAmount, [investorPayout, investmentAmount])

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setShowTermSheetModal(false)
    }, 1800)
  }

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <div className="fixed inset-x-0 top-0 z-0 h-80 bg-gradient-to-b from-emerald-500/15 via-emerald-500/5 to-transparent blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-slate-700/80 bg-[#0B0F12]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-black shadow-glow">
              <Brain className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-wider">SIAMESE</div>
              <div className="hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300 sm:inline-block">
                Founded by Jeremy Michael Shaw • Founder & CEO
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-1 rounded-xl border border-slate-700 bg-[#12181F] p-1 md:flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-black'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setShowTermSheetModal(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-4 py-2 text-xs font-bold text-black transition hover:opacity-90"
          >
            Request Term Sheet
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="border-t border-slate-700 bg-[#0D131A] md:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[11px] font-medium ${
                  activeTab === tab.id ? 'bg-emerald-500 text-black' : 'bg-[#12181F] text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === 'overview' && (
          <div className="space-y-10">
            <section className="rounded-3xl border border-slate-700 bg-gradient-to-br from-[#12181F] via-[#0D131A] to-[#0B0F12] p-8 shadow-2xl sm:p-12">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Founded by Jeremy Michael Shaw • Founder & CEO
                </div>
                <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
                  The <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">$19.6B</span> opportunity nobody sees
                </h1>
                <p className="text-lg text-slate-300 sm:text-xl">
                  Executive Wellness AI Assistant — <span className="font-semibold text-white">premium mental health meets premium productivity</span>. Built for high-stakes leaders.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-[#1E293B]/60 px-4 py-2 text-xs font-semibold text-slate-200">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                    St. Joseph, MO • Midwest execution, Silicon Valley ambition
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-[#1E293B]/60 px-4 py-2 text-xs font-semibold text-slate-200">
                    <DollarSign className="h-4 w-4 text-emerald-400" />
                    Seeking $750K Seed @ $5.0M pre-money
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-4">
              <StatCard icon={TrendingUp} title="Market Size" value="$19.6B" sub="Projected 2030 category growth" accent="text-emerald-400" />
              <StatCard icon={Zap} title="Midwest Cost Edge" value="65% Lower" sub="Operating burn vs. coast" accent="text-amber-400" />
              <StatCard icon={BarChart3} title="Year 1 Exit Target" value="$18M ARR" sub="$1.5M recurring target" accent="text-emerald-400" />
              <StatCard icon={Award} title="Target ROI" value="43.5x" sub="Scenario return multiple" accent="text-emerald-300" />
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Leadership</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-black text-white">Jeremy Michael Shaw</div>
                    <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Founder & CEO</div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Jeremy Michael Shaw leads SIAMESE with a clear mission: build the premium AI operating system for executive focus, resilience, and decision quality.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Under his leadership, SIAMESE brings together wellness intelligence, productivity automation, and premium subscription value into a single executive-first platform.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-[#12181F] to-[#0D131A] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Founder vision</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Build a company that helps high-performing leaders operate with more clarity, less friction, and more sustainable peak performance.
                </p>
                <div className="mt-6 rounded-2xl border border-slate-700 bg-[#0D131A] p-4 text-sm text-slate-200">
                  “The future of executive performance is not more noise — it is better decisions, healthier rhythms, and smarter leverage.”
                </div>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The investment thesis</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  High-earning executives are overworked and under-supported. Most wellness products focus on meditation and general productivity, while the true pain point is decision quality, cognitive capacity, and time leverage in high-pressure roles.
                </p>
                <div className="mt-6 space-y-3 rounded-2xl border border-slate-700 bg-[#0D131A] p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-xs text-slate-200">SIAMESE creates a new category at the intersection of wellness intelligence and productivity automation.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-xs text-slate-200">The business model supports premium pricing, rapid scale, and a strong acquisition story.</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('market')}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-[#1E293B]/60 px-4 py-3 text-xs font-bold text-white transition hover:bg-[#1E293B]"
                >
                  Explore market breakdown
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Seed round snapshot</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-700 bg-[#0D131A] p-4">
                    <div className="text-[11px] text-slate-400">Target raise</div>
                    <div className="text-2xl font-bold text-emerald-400">$750K</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-[#0D131A] p-4">
                    <div className="text-[11px] text-slate-400">Pre-money</div>
                    <div className="text-2xl font-bold text-white">$5M</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-[#0D131A] p-4">
                    <div className="text-[11px] text-slate-400">Equity offered</div>
                    <div className="text-2xl font-bold text-white">~13.04%</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-[#0D131A] p-4">
                    <div className="text-[11px] text-slate-400">Min. check</div>
                    <div className="text-2xl font-bold text-white">$50K</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'market' && (
          <div className="space-y-10">
            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-3xl font-black text-white">We found the hole in a $19.6B market</h2>
              <p className="mt-1 text-sm text-slate-400">SIAMESE sits at the intersection of wellness, productivity, and AI executive assistance.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-400">Market intersection analysis</h3>
                <div className="relative mx-auto flex h-80 w-full max-w-md items-center justify-center">
                  <div className="absolute left-12 top-2 flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-emerald-500/40 bg-emerald-500/10 text-center">
                    <span className="text-[11px] font-extrabold uppercase text-emerald-400">Wellness</span>
                    <span className="mt-2 text-sm font-bold text-white">$15B</span>
                  </div>
                  <div className="absolute right-12 top-2 flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-amber-500/40 bg-amber-500/10 text-center">
                    <span className="text-[11px] font-extrabold uppercase text-amber-400">Productivity</span>
                    <span className="mt-2 text-sm font-bold text-white">$500M</span>
                  </div>
                  <div className="absolute bottom-2 left-1/2 flex h-48 w-48 -translate-x-1/2 flex-col items-center justify-center rounded-full border-2 border-cyan-500/40 bg-cyan-500/10 text-center">
                    <span className="text-[11px] font-extrabold uppercase text-cyan-400">AI Assistants</span>
                    <span className="mt-2 text-sm font-bold text-white">$3.4B</span>
                  </div>
                  <div className="absolute z-20 rounded-2xl border-2 border-emerald-400 bg-[#0B0F12] px-5 py-3 text-center shadow-2xl shadow-emerald-500/30">
                    <div className="text-[10px] font-black tracking-widest text-emerald-400">SIAMESE</div>
                    <div className="text-[10px] text-white">Premium AI Hub</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">AI assistant category growth</h3>
                    <p className="text-xs text-slate-400">Projected market size ($ billions)</p>
                  </div>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-300">
                    41.9% CAGR
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { year: '2025', value: 3.4, pct: 17 },
                    { year: '2026', value: 4.8, pct: 24 },
                    { year: '2027', value: 6.8, pct: 34 },
                    { year: '2028', value: 9.7, pct: 49 },
                    { year: '2029', value: 13.8, pct: 70 },
                    { year: '2030', value: 19.6, pct: 100 },
                  ].map((item) => (
                    <div key={item.year}>
                      <div className="mb-1 flex justify-between text-xs font-semibold text-slate-300">
                        <span>{item.year}</span>
                        <span className="font-bold text-white">${item.value}B</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full border border-slate-700 bg-[#0D131A]">
                        <div className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'problem' && (
          <div className="space-y-10">
            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-3xl font-black text-white">Executives are broken — and nobody is fixing them</h2>
              <p className="mt-1 text-sm text-slate-400">Mental exhaustion reduces decision quality and creates real organisational cost.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { metric: '78%', label: 'Executive burnout', sub: 'Reported by Forbes' },
                { metric: '15+ Hrs', label: 'Wasted weekly', sub: 'On routine admin' },
                { metric: '$10,000', label: 'Hourly exec rate', sub: 'Benchmark' },
                { metric: '$500K', label: 'Annual opp. cost', sub: 'Per executive' },
                { metric: '32%', label: 'Productivity decline', sub: 'Under stress' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-700 bg-[#12181F] p-5 text-center">
                  <div className="text-2xl font-black text-emerald-400">{item.metric}</div>
                  <div className="mt-1 text-xs font-bold text-white">{item.label}</div>
                  <div className="text-[10px] text-slate-400">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400">
                  <Sliders className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Executive economics simulator</h3>
                  <p className="text-xs text-slate-400">Model the missed value created by executive friction.</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-300">
                      <span>Executive hourly rate</span>
                      <span className="font-bold text-emerald-400">${execRate.toLocaleString()}/hr</span>
                    </div>
                    <input type="range" min="500" max="20000" step="500" value={execRate} onChange={(e) => setExecRate(Number(e.target.value))} className="w-full" />
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-300">
                      <span>Weekly wasted admin hours</span>
                      <span className="font-bold text-emerald-400">{wastedHours} hrs/week</span>
                    </div>
                    <input type="range" min="5" max="30" step="1" value={wastedHours} onChange={(e) => setWastedHours(Number(e.target.value))} className="w-full" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-[#0D131A] p-6 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Annual lost value</div>
                  <div className="mt-2 text-4xl font-black text-transparent bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text">
                    ${annualCost.toLocaleString()}
                  </div>
                  <div className="mt-2 text-xs text-slate-400">Per executive, every year</div>
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-700 pt-4 text-xs">
                    <div>
                      <div className="text-slate-400">Weekly cost</div>
                      <div className="font-bold text-white">${weeklyCost.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Target savings</div>
                      <div className="font-bold text-emerald-400">10+ hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'product' && (
          <div className="space-y-10">
            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-3xl font-black text-white">SIAMESE: your AI executive coach + productivity genius</h2>
              <p className="mt-1 text-sm text-slate-400">Dual-engine technology designed specifically for C-suite demands.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-500/30 bg-[#12181F] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Wellness intelligence</h3>
                    <p className="text-xs text-emerald-300">Cognitive and mental optimization</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    '24/7 wellbeing monitoring and stress-state detection',
                    'Mental health tracking and cognitive load analysis',
                    'Personalized AI coaching based on executive context',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-700 bg-[#0D131A] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-500/30 bg-[#12181F] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Productivity automation</h3>
                    <p className="text-xs text-cyan-300">High-speed executive execution</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    'Intelligent scheduling and focus preservation',
                    'Lifestyle management and personal admin automation',
                    'Task orchestration that saves 10+ hours per week',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-700 bg-[#0D131A] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-[#12181F] via-[#1E293B]/40 to-[#12181F] p-8 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400">
                  <Cpu className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Strategic vision</div>
                  <h4 className="text-xl font-black text-white">Tesla Optimus-ready personality layer</h4>
                </div>
              </div>
              <span className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-black text-black">Hardware-agnostic AI</span>
            </div>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-10">
            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-3xl font-black text-white">Financials that make sense in minutes</h2>
              <p className="mt-1 text-sm text-slate-400">High ARR generated through premium pricing and a compact member base.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: 'PRO', price: '$500', desc: 'Entry executive tier', members: '1,000 members', mrr: '$500K MRR' },
                { name: 'EXECUTIVE', price: '$1,000', desc: 'Core market tier', members: '500 members', mrr: '$500K MRR' },
                { name: 'FOUNDER', price: '$2,000', desc: 'Premium service tier', members: '250 members', mrr: '$500K MRR' },
              ].map((tier) => (
                <div key={tier.name} className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-400">{tier.name}</div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-xs text-slate-400">/mo</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{tier.desc}</p>
                  <div className="mt-6 space-y-2 border-t border-slate-700 pt-4 text-xs">
                    <div className="flex justify-between"><span className="text-slate-400">Baseline</span><span className="font-bold text-white">{tier.members}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Contribution</span><span className="font-bold text-emerald-400">{tier.mrr}</span></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Interactive revenue simulator</h3>
                  <p className="text-xs text-slate-400">Adjust users to project MRR and run-rate ARR.</p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-300">
                      <span>Pro tier members</span>
                      <span className="font-bold text-white">{proMembers} • ${proMRR.toLocaleString()}/mo</span>
                    </div>
                    <input type="range" min="0" max="3000" step="50" value={proMembers} onChange={(e) => setProMembers(Number(e.target.value))} className="w-full" />
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-300">
                      <span>Executive tier members</span>
                      <span className="font-bold text-emerald-400">{execMembers} • ${execMRR.toLocaleString()}/mo</span>
                    </div>
                    <input type="range" min="0" max="2000" step="25" value={execMembers} onChange={(e) => setExecMembers(Number(e.target.value))} className="w-full" />
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-300">
                      <span>Founder tier members</span>
                      <span className="font-bold text-amber-400">{founderMembers} • ${founderMRR.toLocaleString()}/mo</span>
                    </div>
                    <input type="range" min="0" max="1000" step="10" value={founderMembers} onChange={(e) => setFounderMembers(Number(e.target.value))} className="w-full" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-[#0D131A] p-6">
                  <div className="text-center">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total MRR</div>
                    <div className="mt-2 text-3xl font-black text-emerald-400">${totalMRR.toLocaleString()}</div>
                  </div>
                  <div className="mt-6 border-t border-slate-700 pt-4 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Exit run-rate ARR</div>
                    <div className="mt-2 text-2xl font-bold text-white">${totalARR.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roi' && (
          <div className="space-y-10">
            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-3xl font-black text-white">Scenario-based upside and seed valuation bridge</h2>
              <p className="mt-1 text-sm text-slate-400">Test investor outcomes across multiple exit scenarios.</p>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-[#12181F] p-8">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Investor ROI simulator</h3>
                  <p className="text-xs text-slate-400">Model payout on different exit valuations.</p>
                </div>
                <div className="flex gap-2">
                  {[30000000, 50000000, 250000000].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setExitValuation(value)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                        exitValuation === value ? 'bg-emerald-500 text-black' : 'bg-[#1E293B] text-white'
                      }`}
                    >
                      {value >= 100000000 ? 'Strategic' : value >= 40000000 ? 'Series A' : 'Conservative'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-300">
                      <span>Your investment check</span>
                      <span className="font-bold text-white">${investmentAmount.toLocaleString()}</span>
                    </div>
                    <input type="range" min="50000" max="750000" step="25000" value={investmentAmount} onChange={(e) => setInvestmentAmount(Number(e.target.value))} className="w-full" />
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-300">
                      <span>Pre-money valuation</span>
                      <span className="font-bold text-white">${(preMoneyValuation / 1000000).toFixed(2)}M</span>
                    </div>
                    <input type="range" min="3000000" max="10000000" step="500000" value={preMoneyValuation} onChange={(e) => setPreMoneyValuation(Number(e.target.value))} className="w-full" />
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-300">
                      <span>Projected exit valuation</span>
                      <span className="font-bold text-emerald-400">${(exitValuation / 1000000).toFixed(1)}M</span>
                    </div>
                    <input type="range" min="10000000" max="600000000" step="10000000" value={exitValuation} onChange={(e) => setExitValuation(Number(e.target.value))} className="w-full" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-[#0D131A] p-6 text-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-slate-700 bg-[#12181F] p-3">
                      <div className="text-[10px] text-slate-400">Ownership</div>
                      <div className="text-lg font-bold text-white">{ownershipPercentage.toFixed(2)}%</div>
                    </div>
                    <div className="rounded-xl border border-slate-700 bg-[#12181F] p-3">
                      <div className="text-[10px] text-slate-400">Post-money</div>
                      <div className="text-lg font-bold text-white">${(postMoneyValuation / 1000000).toFixed(2)}M</div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-4">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Projected investor payout</div>
                    <div className="mt-2 text-4xl font-black text-emerald-400">${investorPayout.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                    <div className="mt-3 inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-black text-black">{roiMultiple.toFixed(1)}x return</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-10">
            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-3xl font-black text-white">Terms and Midwest execution advantage</h2>
              <p className="mt-1 text-sm text-slate-400">A lean cost profile paired with a strong strategic launch location.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
                <h3 className="mb-4 text-xl font-bold text-white">65% lower operating cost structure</h3>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-xs font-bold text-slate-300">
                      <span>Silicon Valley burn rate</span>
                      <span>100%</span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full border border-slate-700 bg-[#0D131A]">
                      <div className="h-full w-full rounded-full bg-slate-500" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-xs font-bold text-emerald-300">
                      <span>St. Joseph burn rate</span>
                      <span>35%</span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full border border-slate-700 bg-[#0D131A]">
                      <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" />
                    </div>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" /> Lower salary burden while supporting product velocity.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" /> Stronger capital efficiency for product and go-to-market.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" /> Access to Midwest networks and emerging digital health partners.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-[#12181F] p-8">
                <h3 className="mb-4 text-xl font-bold text-white">Regional ecosystem partners</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['KCRise Fund', '$50M Digital Health Fund'],
                    ['Digital Sandbox KC', 'Proof-of-concept grants'],
                    ['Raise Health', 'AI mental health detection'],
                    ['UMKC Research', 'Clinical validation studies'],
                  ].map(([name, detail]) => (
                    <div key={name} className="rounded-xl border border-slate-700 bg-[#0D131A] p-4">
                      <div className="text-xs font-bold text-white">{name}</div>
                      <div className="mt-1 text-[10px] text-emerald-300">{detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-emerald-500 bg-gradient-to-br from-[#12181F] to-[#0D131A] p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Seed Series A-1 terms</div>
                  <h3 className="mt-2 text-2xl font-black text-white">Seed round structure summary</h3>
                </div>
                <button type="button" onClick={() => setShowTermSheetModal(true)} className="rounded-xl bg-emerald-500 px-6 py-3 text-xs font-black text-black">View term sheet</button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['Product', '$300,000', '40%'],
                  ['Marketing & CAC', '$225,000', '30%'],
                  ['Team expansion', '$150,000', '20%'],
                  ['Operations & legal', '$75,000', '10%'],
                ].map(([label, amount, pct]) => (
                  <div key={label} className="rounded-2xl border border-slate-700 bg-[#0D131A] p-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label} ({pct})</div>
                    <div className="mt-2 text-2xl font-bold text-white">{amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-700 bg-[#0D131A] py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
          Founded and led by <span className="font-bold text-emerald-300">Jeremy Michael Shaw</span>, Founder & CEO of SIAMESE.
        </div>
      </footer>

      {showTermSheetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-[#12181F] p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Request term sheet</div>
                <h3 className="mt-1 text-2xl font-black text-white">Connect with SIAMESE</h3>
              </div>
              <button type="button" onClick={() => setShowTermSheetModal(false)} className="rounded-lg bg-[#1E293B] p-2 text-slate-300">✕</button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-xs text-slate-300">
                  <span>Name</span>
                  <input value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full rounded-xl border border-slate-700 bg-[#0D131A] px-3 py-2.5 text-white outline-none focus:border-emerald-400" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-xs text-slate-300">
                  <span>Email</span>
                  <input type="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full rounded-xl border border-slate-700 bg-[#0D131A] px-3 py-2.5 text-white outline-none focus:border-emerald-400" placeholder="name@company.com" />
                </label>
              </div>

              <label className="block space-y-2 text-xs text-slate-300">
                <span>Fund / firm</span>
                <input value={contactForm.fund} onChange={(e) => setContactForm({ ...contactForm, fund: e.target.value })} className="w-full rounded-xl border border-slate-700 bg-[#0D131A] px-3 py-2.5 text-white outline-none focus:border-emerald-400" placeholder="Fund or firm name" />
              </label>

              <label className="block space-y-2 text-xs text-slate-300">
                <span>Check size</span>
                <select value={contactForm.checkSize} onChange={(e) => setContactForm({ ...contactForm, checkSize: e.target.value })} className="w-full rounded-xl border border-slate-700 bg-[#0D131A] px-3 py-2.5 text-white outline-none focus:border-emerald-400">
                  <option>$100K+</option>
                  <option>$250K+</option>
                  <option>$500K+</option>
                  <option>$1M+</option>
                </select>
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#0D131A] p-3 text-xs text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Confidential investment deck and term sheet available on request.
              </div>

              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 px-4 py-3 text-sm font-black text-black transition hover:opacity-90">
                {formSubmitted ? 'Submitted' : 'Send request'}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
