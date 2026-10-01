"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Atom,
  Bell,
  Bot,
  Braces,
  CalendarCheck,
  ChevronLeft,
  Cloud,
  Code2,
  Coffee,
  Container,
  Cpu,
  Database,
  Menu,
  Mic,
  MicOff,
  PhoneOff,
  Play,
  Search,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
});

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

const HeroNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled || open
          ? "border-b border-black/5 bg-white/75 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-to-b from-neutral-700 to-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_10px_-2px_rgba(0,0,0,0.35)]">
            <Mic className="h-4 w-4 text-white" />
          </span>
          <span className="font-aeonik text-lg tracking-tight text-neutral-900">PrepSlay</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/auth"
            className="rounded-xl border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:border-neutral-300 hover:shadow-md"
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-b from-neutral-700 to-neutral-950 px-5 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_16px_-6px_rgba(0,0,0,0.5)] transition hover:brightness-110"
          >
            Get Started
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-lg text-neutral-800 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-neutral-700 hover:bg-neutral-100"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/auth"
                  className="rounded-xl border border-neutral-200 bg-white py-2.5 text-center text-sm font-medium text-neutral-900"
                >
                  Login
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-xl bg-neutral-900 py-2.5 text-center text-sm font-medium text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ------------------------------------------------------------------ */
/* Floating 3D icon tiles                                              */
/* ------------------------------------------------------------------ */

const tileThemes = {
  violet: {
    glow: "bg-violet-400/50",
    face: "from-white to-violet-100",
    edge: "bg-violet-200",
    badge: "from-violet-400 to-violet-600",
  },
  amber: {
    glow: "bg-amber-300/60",
    face: "from-white to-amber-100",
    edge: "bg-amber-200",
    badge: "from-amber-300 to-orange-500",
  },
  emerald: {
    glow: "bg-emerald-300/60",
    face: "from-white to-emerald-100",
    edge: "bg-emerald-200",
    badge: "from-emerald-400 to-teal-600",
  },
  blue: {
    glow: "bg-sky-400/50",
    face: "from-white to-sky-100",
    edge: "bg-sky-200",
    badge: "from-sky-400 to-blue-600",
  },
};

const IconTile = ({ icon: Icon, theme, className, rotate = 0, delay = 0 }) => {
  const t = tileThemes[theme];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 + delay, type: "spring", bounce: 0.4 }}
      className={`pointer-events-none absolute z-10 hidden md:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [rotate, rotate + 3, rotate] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className="relative"
      >
        <div className={`absolute -inset-8 rounded-full blur-3xl ${t.glow}`} />
        {/* thickness */}
        <div className={`absolute inset-0 translate-x-1 translate-y-2 rounded-[24px] ${t.edge} shadow-[0_18px_30px_-10px_rgba(15,23,42,0.35)]`} />
        {/* face */}
        <div
          className={`relative grid h-[84px] w-[84px] place-items-center rounded-[24px] border border-white bg-gradient-to-br ${t.face} shadow-[inset_0_2px_0_rgba(255,255,255,1),inset_0_-6px_12px_rgba(15,23,42,0.06)]`}
        >
          <div className="absolute inset-x-3 top-1.5 h-6 rounded-full bg-white/70 blur-[6px]" />
          <div
            className={`relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${t.badge} shadow-[inset_0_2px_3px_rgba(255,255,255,0.45),0_6px_14px_-4px_rgba(15,23,42,0.4)]`}
          >
            <Icon className="h-6 w-6 text-white drop-shadow" strokeWidth={2.2} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* Phone shell                                                         */
/* ------------------------------------------------------------------ */

const StatusBar = () => (
  <div className="relative flex h-11 items-center justify-between px-6 pt-1 text-[11px] font-semibold text-neutral-900">
    <span>9:41</span>
    <div className="absolute left-1/2 top-2.5 h-[26px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
    <div className="flex items-center gap-1">
      <div className="flex items-end gap-[2px]">
        {[4, 6, 8, 10].map((h) => (
          <span key={h} className="w-[3px] rounded-sm bg-neutral-900" style={{ height: h }} />
        ))}
      </div>
      <div className="ml-1 flex h-[11px] w-[22px] items-center rounded-[3px] border border-neutral-900/60 p-[1.5px]">
        <div className="h-full w-[75%] rounded-[1.5px] bg-neutral-900" />
      </div>
    </div>
  </div>
);

const Phone = ({ children, className = "" }) => (
  <div
    className={`relative rounded-[46px] bg-gradient-to-b from-[#e7e9ee] via-[#b9bec8] to-[#8e94a0] p-[3px] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.45),0_20px_40px_-20px_rgba(15,23,42,0.3)] ${className}`}
  >
    <div className="rounded-[43px] bg-neutral-950 p-[8px]">
      <div className="relative h-full overflow-hidden rounded-[36px] bg-white">
        <StatusBar />
        {children}
      </div>
    </div>
    {/* side buttons */}
    <span className="absolute -left-[3px] top-28 h-8 w-[3px] rounded-l bg-[#a7adb8]" />
    <span className="absolute -left-[3px] top-40 h-12 w-[3px] rounded-l bg-[#a7adb8]" />
    <span className="absolute -right-[3px] top-36 h-16 w-[3px] rounded-r bg-[#a7adb8]" />
  </div>
);

/* ------------------------------------------------------------------ */
/* Screen: Live interview (center)                                     */
/* ------------------------------------------------------------------ */

const transcript = [
  { from: "ai", text: "Hey Rahul! Walk me through how you'd design a rate limiter for our API." },
  { from: "you", text: "I'd start with a token bucket per user, backed by Redis for atomic counters…" },
  { from: "ai", text: "Nice. How would you handle bursts across multiple regions?" },
  { from: "you", text: "Sliding-window logs with a small local cache, then sync to a global store." },
  { from: "ai", text: "Love it. Let's talk trade-offs between consistency and latency." },
];

const LiveInterviewScreen = () => {
  const [step, setStep] = useState(1);
  const [seconds, setSeconds] = useState(12 * 60 + 48);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % transcript.length), 3200);
    const c = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      clearInterval(t);
      clearInterval(c);
    };
  }, []);

  const visible = [transcript[(step + transcript.length - 1) % transcript.length], transcript[step]];
  const speaking = transcript[step].from === "ai";
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="flex h-full flex-col px-4">
      <div className="flex items-center justify-between">
        <span className="grid h-8 w-8 place-items-center rounded-full border border-neutral-200">
          <ChevronLeft className="h-4 w-4 text-neutral-700" />
        </span>
        <div className="text-center">
          <p className="text-[13px] font-semibold text-neutral-900">Live Interview</p>
          <p className="text-[10px] text-neutral-500">Senior Frontend Engineer</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          {mm}:{ss}
        </span>
      </div>

      {/* AI orb */}
      <div className="relative mx-auto mt-4 grid h-20 w-20 place-items-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border border-indigo-300/70"
            animate={{ scale: [1, 1.55], opacity: [0.7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
          />
        ))}
        <motion.div
          animate={{ scale: speaking ? [1, 1.06, 1] : 1 }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="relative grid h-[72px] w-[72px] place-items-center rounded-full bg-[conic-gradient(from_200deg,#818cf8,#c084fc,#38bdf8,#818cf8)] shadow-[0_15px_35px_-8px_rgba(99,102,241,0.6)]"
        >
          <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400" />
          <div className="absolute left-3 top-2 h-5 w-8 rounded-full bg-white/40 blur-md" />
          <Sparkles className="relative h-7 w-7 text-white drop-shadow" />
        </motion.div>
      </div>

      <div className="mt-3 text-center">
        <p className="text-[13px] font-semibold text-neutral-900">Aria · AI Interviewer</p>
        <div className="mt-2 flex h-5 items-center justify-center gap-[3px]">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className={`eq-bar w-[3px] rounded-full ${speaking ? "bg-indigo-500" : "bg-neutral-300"}`}
              style={{
                height: 6 + ((i * 7) % 14),
                animationDelay: `${(i % 5) * 0.12}s`,
                animationPlayState: speaking ? "running" : "paused",
              }}
            />
          ))}
        </div>
        <p className="mt-1 text-[10px] text-neutral-500">{speaking ? "Speaking…" : "Listening…"}</p>
      </div>

      {/* transcript */}
      <div className="mt-3 flex h-[132px] flex-col justify-start gap-2 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((m) => (
            <motion.div
              key={m.text}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className={`max-w-[88%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
                m.from === "ai"
                  ? "self-start rounded-bl-md bg-indigo-50 text-indigo-950"
                  : "self-end rounded-br-md bg-neutral-900 text-white"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-center gap-5">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-neutral-100">
          <MicOff className="h-4 w-4 text-neutral-700" />
        </span>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-red-500 shadow-[0_8px_18px_-6px_rgba(239,68,68,0.8)]">
          <PhoneOff className="h-5 w-5 text-white" />
        </span>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-neutral-100">
          <Code2 className="h-4 w-4 text-neutral-700" />
        </span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Screen: Candidate report (left)                                     */
/* ------------------------------------------------------------------ */

const skills = [
  { label: "Technical", value: 92, color: "bg-indigo-500" },
  { label: "Communication", value: 84, color: "bg-emerald-500" },
  { label: "Problem Solving", value: 88, color: "bg-amber-500" },
  { label: "Culture Fit", value: 79, color: "bg-sky-500" },
];

const ReportScreen = () => {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-neutral-200">
          <ChevronLeft className="h-3.5 w-3.5 text-neutral-700" />
        </span>
        <p className="text-[12px] font-semibold text-neutral-900">Candidate Report</p>
        <span className="grid h-7 w-7 place-items-center rounded-full border border-neutral-200">
          <Bell className="h-3.5 w-3.5 text-neutral-700" />
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-rose-400 to-orange-400 text-[11px] font-bold text-white">
          PS
        </span>
        <div>
          <p className="text-[12px] font-semibold text-neutral-900">Priya Sharma</p>
          <p className="text-[10px] text-neutral-500">Backend Engineer · 24 min</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 rounded-2xl bg-neutral-50 p-3">
        <div className="relative h-20 w-20">
          <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
            <circle cx="40" cy="40" r={r} fill="none" stroke="#e5e7eb" strokeWidth="7" />
            <motion.circle
              cx="40"
              cy="40"
              r={r}
              fill="none"
              stroke="url(#scoreGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              animate={{ strokeDashoffset: c * (1 - 0.87) }}
              transition={{ duration: 1.6, delay: 1, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <p className="text-lg font-bold leading-none text-neutral-900">
              87<span className="text-[9px] font-medium text-neutral-400">/100</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-neutral-500">Overall score</p>
          <span className="mt-1 inline-block whitespace-nowrap rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
            ✓ Strong hire
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {skills.map((s, i) => (
          <div key={s.label}>
            <div className="flex justify-between text-[10px]">
              <span className="text-neutral-600">{s.label}</span>
              <span className="font-semibold text-neutral-900">{s.value}</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                className={`h-full rounded-full ${s.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${s.value}%` }}
                transition={{ duration: 1.2, delay: 1.2 + i * 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Screen: Interviews list (right)                                     */
/* ------------------------------------------------------------------ */

const candidates = [
  { initials: "RK", name: "Rahul Kumar", role: "Frontend · React", status: "92", tone: "text-emerald-600", sub: "Completed", grad: "from-indigo-400 to-violet-500" },
  { initials: "AM", name: "Aisha Malik", role: "Backend · Go", status: "Live", tone: "text-red-500", sub: "In progress", grad: "from-emerald-400 to-teal-500" },
  { initials: "JL", name: "Jason Lee", role: "DevOps · AWS", status: "78", tone: "text-amber-600", sub: "Completed", grad: "from-amber-400 to-orange-500" },
  { initials: "SN", name: "Sara Nunes", role: "ML · Python", status: "4 PM", tone: "text-neutral-900", sub: "Scheduled", grad: "from-sky-400 to-blue-500" },
  { initials: "DV", name: "Dev Verma", role: "Mobile · Swift", status: "85", tone: "text-emerald-600", sub: "Completed", grad: "from-rose-400 to-pink-500" },
];

const ListScreen = () => (
  <div className="px-4">
    <div className="flex items-center justify-between">
      <span className="grid h-7 w-7 place-items-center rounded-full border border-neutral-200">
        <ChevronLeft className="h-3.5 w-3.5 text-neutral-700" />
      </span>
      <p className="text-[12px] font-semibold text-neutral-900">Interviews</p>
      <span className="grid h-7 w-7 place-items-center rounded-full border border-neutral-200">
        <Search className="h-3.5 w-3.5 text-neutral-700" />
      </span>
    </div>

    <div className="mt-4 flex gap-1.5 text-[10px]">
      <span className="rounded-full bg-lime-300 px-2.5 py-1 font-semibold text-neutral-900">All</span>
      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-600">Completed</span>
      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-600">Live</span>
      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-600">Scheduled</span>
    </div>

    <p className="mt-4 text-[10px] font-medium text-neutral-400">Today</p>
    <div className="mt-2 space-y-3">
      {candidates.map((cd, i) => (
        <motion.div
          key={cd.name}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 + i * 0.12 }}
          className="flex items-center gap-2.5"
        >
          <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br ${cd.grad} text-[10px] font-bold text-white`}>
            {cd.initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-semibold text-neutral-900">{cd.name}</p>
            <p className="truncate text-[9px] text-neutral-500">{cd.role}</p>
          </div>
          <div className="text-right">
            <p className={`text-[11px] font-bold ${cd.tone}`}>{cd.status}</p>
            <p className="text-[9px] text-neutral-400">{cd.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Tech-stack marquee                                                  */
/* ------------------------------------------------------------------ */

const stack = [
  { icon: Atom, label: "React" },
  { icon: Server, label: "Node.js" },
  { icon: Braces, label: "TypeScript" },
  { icon: Terminal, label: "Python" },
  { icon: Coffee, label: "Java" },
  { icon: Cpu, label: "Go" },
  { icon: Cloud, label: "AWS" },
  { icon: Container, label: "Kubernetes" },
  { icon: Database, label: "PostgreSQL" },
];

const StackMarquee = () => (
  <div className="mx-auto mt-16 max-w-6xl px-5 pb-20 md:mt-20">
    <p className="text-center text-lg text-neutral-600 md:text-xl">
      Built for teams hiring across <span className="font-semibold text-neutral-900">every stack.</span>
    </p>
    <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-16">
        {[...stack, ...stack].map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex items-center gap-2.5 text-neutral-400 transition-colors hover:text-neutral-800">
            <Icon className="h-7 w-7" strokeWidth={1.75} />
            <span className="font-aeonik text-2xl tracking-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero2 = () => {
  return (
    <div className="relative bg-[#f5f6fa]">
      <HeroNav />

      <section className="px-3 pt-20 md:px-5">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] border border-white bg-gradient-to-b from-[#eaf0ff] via-[#f3f5ff] to-white shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_30px_60px_-30px_rgba(30,41,99,0.18)] ring-1 ring-neutral-900/[0.04]">
          {/* background layers */}
          <div className="hero-grid pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-300/40 blur-[120px]" />
          <div className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-sky-300/40 blur-[120px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-violet-200/50 blur-[100px]" />

          {/* floating tiles */}
          <IconTile icon={Mic} theme="violet" className="left-[9%] top-[14%]" rotate={-8} delay={0} />
          <IconTile icon={Code2} theme="amber" className="left-[6%] top-[42%]" rotate={6} delay={1.2} />
          <IconTile icon={Bot} theme="emerald" className="right-[8%] top-[13%]" rotate={8} delay={0.6} />
          <IconTile icon={CalendarCheck} theme="blue" className="right-[10%] top-[40%]" rotate={-6} delay={1.8} />

          {/* copy */}
          <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-5 pt-14 text-center md:pt-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-1.5 text-[13px] text-neutral-600 shadow-[0_2px_10px_-2px_rgba(30,41,99,0.12)] backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>
                <span className="font-semibold text-neutral-900">Vapi-powered</span> AI Voice Interviewer
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-aeonik mt-6 text-[42px] leading-[1.02] tracking-[-0.035em] text-neutral-950 sm:text-6xl md:text-7xl"
            >
              Interviews on Autopilot.
              <br />
              <span className={`${instrumentSerif.className} text-[1.12em] font-normal tracking-[-0.01em]`}>Grill</span>{" "}
              or{" "}
              <span className={`${instrumentSerif.className} text-[1.12em] font-normal tracking-[-0.01em]`}>Get Grilled</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-500 md:text-base"
            >
              One AI interviewer for modern hiring teams. Create a role, share a link, and let our voice agent{" "}
              <span className="font-medium text-neutral-900">screen every candidate 24/7</span> — with{" "}
              <span className="font-medium text-neutral-900">scored feedback</span> in your inbox.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
            >
              <Link
                href="/dashboard/create-interview"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-neutral-700 to-neutral-950 px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_24px_-10px_rgba(0,0,0,0.6)] transition hover:brightness-110 sm:w-auto"
              >
                Create Interview
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#how-it-works"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:border-neutral-300 hover:shadow-md sm:w-auto"
              >
                <Play className="h-3.5 w-3.5 fill-neutral-900" />
                Watch Demo
              </Link>
            </motion.div>
          </div>

          {/* phones */}
          <div className="relative z-10 mt-14 flex h-[440px] items-start justify-center md:mt-16 md:h-[470px]">
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.25 }}
              className="relative z-0 -mr-8 mt-16 hidden md:block lg:-mr-4"
            >
              <Phone className="h-[540px] w-[250px] -rotate-[8deg]">
                <ReportScreen />
              </Phone>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 140 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.25 }}
              className="relative z-10"
            >
              <Phone className="h-[580px] w-[280px]">
                <LiveInterviewScreen />
              </Phone>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85, type: "spring", bounce: 0.25 }}
              className="relative z-0 -ml-8 mt-16 hidden md:block lg:-ml-4"
            >
              <Phone className="h-[540px] w-[250px] rotate-[8deg]">
                <ListScreen />
              </Phone>
            </motion.div>

            {/* bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>
        </div>
      </section>

      <StackMarquee />
    </div>
  );
};

export { Hero2 };
