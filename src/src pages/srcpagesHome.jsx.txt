src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Radar, PlayCircle } from "lucide-react";
import Logo from "@/components/common/Logo";
import Counter from "@/components/common/Counter";
import PulseMap from "@/components/common/PulseMap";
import SectionHeading from "@/components/common/SectionHeading";
import Icon from "@/components/common/Icon";
import { Button } from "@/components/ui/button";
import {
  MODULES, LIVE_STATS, PULSE_ZONES, CAMPAIGNS, TESTIMONIALS, PARTNERS, PULSE_FILTERS,
} from "@/lib/mockData";

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href__="#features" className="hover:text-foreground">Modules</a>
          <a href__="#pulse" className="hover:text-foreground">Catalyst Pulse</a>
          <a href__="#impact" className="hover:text-foreground">Impact</a>
          <a href__="#campaigns" className="hover:text-foreground">Campaigns</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex"><Link to="/dashboard">Sign in</Link></Button>
          <Button asChild className="rounded-full"><Link to="/dashboard">Open App <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-700"
          >
            <Radar className="h-3.5 w-3.5" /> AI-Powered Sustainability · Abu Dhabi
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
          >
            Connecting Surplus.<br /><span className="text-gradient">Creating Impact.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-5 max-w-lg text-lg text-slate-600"
          >
            Catalyst is an intelligent resource-routing ecosystem that moves food, water, clothes, books and electronics to where they create the most good.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-full text-base"><Link to="/dashboard">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base"><Link to="/pulse"><PlayCircle className="mr-1.5 h-4 w-4" /> Explore the Pulse</Link></Button>
          </motion.div>
          <div className="mt-9 grid max-w-md grid-cols-3 gap-4">
            {[
              { v: LIVE_STATS.mealsRescued, l: "Meals rescued" },
              { v: LIVE_STATS.peopleHelped, l: "People helped" },
              { v: LIVE_STATS.volunteers, l: "Volunteers" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-extrabold text-emerald-600"><Counter to={s.v} />+</div>
                <div className="text-xs text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border bg-white shadow-2xl shadow-emerald-500/10">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold"><Radar className="h-4 w-4 text-emerald-600" /> Catalyst Pulse — Live</div>
              <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Real-time</span>
            </div>
            <div className="h-[360px]"><PulseMap zones={PULSE_ZONES} /></div>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {PULSE_FILTERS.slice(1).map((f) => (
              <span key={f.key} className="flex items-center gap-1.5 rounded-full border bg-white px-2.5 py-1 text-xs font-medium">
                <span className="h-2 w-2 rounded-full" style={{ background: f.color }} /> {f.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <SectionHeading center eyebrow="Core Modules" title="One platform, six ways to create impact"
        subtitle="Each module uses AI matching and real-time logistics to route surplus to its most impactful destination." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m, i) => (
          <motion.div key={m.key}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
          >
            <Link to={m.path} className="group block h-full rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${m.color}1a`, color: m.color }}>
                <Icon name={m.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{m.name}</h3>
              <p className="text-sm font-medium" style={{ color: m.color }}>{m.tagline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Open <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { icon: "Apple", v: LIVE_STATS.mealsRescued, l: "Meals rescued", a: "#16a34a", suf: "+" },
    { icon: "Droplets", v: LIVE_STATS.litresWaterSaved, l: "Litres water saved", a: "#0ea5e9", suf: "" },
    { icon: "Shirt", v: LIVE_STATS.itemsDonated, l: "Items donated", a: "#8b5cf6", suf: "+" },
    { icon: "Laptop", v: LIVE_STATS.devicesReused, l: "Devices reused", a: "#f59e0b", suf: "" },
    { icon: "Leaf", v: LIVE_STATS.co2Prevented, l: "Tonnes CO₂ prevented", a: "#14b8a6", suf: "" },
    { icon: "Users", v: LIVE_STATS.volunteers, l: "Active volunteers", a: "#ec4899", suf: "+" },
  ];
  return (
    <section id="impact" className="bg-gradient-to-b from-emerald-50/60 to-sky-50/60 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading center eyebrow="Live Impact" title="Measurable change, in real time"
          subtitle="Every match, pickup and donation across Abu Dhabi rolls up into a single living impact ledger." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <motion.div key={s.l}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border bg-white p-5 text-center shadow-sm"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${s.a}1a`, color: s.a }}>
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <div className="mt-3 text-xl font-extrabold"><Counter to={s.v} />{s.suf}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampaignsSection() {
  return (
    <section id="campaigns" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="flex items-end justify-between">
        <SectionHeading eyebrow="Campaign Catalyst Hub" title="Highlighted campaigns" />
        <Button asChild variant="outline" className="rounded-full hidden sm:inline-flex"><Link to="/campaigns">View all <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {CAMPAIGNS.slice(0, 3).map((c, i) => (
          <motion.div key={c.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="overflow-hidden rounded-2xl border bg-card shadow-sm"
          >
            <div className="relative h-40">
              <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold">{c.category}</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.location} · {c.date}</p>
              <p className="mt-2 text-sm font-semibold text-emerald-600">{c.impact} impact</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading center eyebrow="Trusted by" title="Partners creating impact with Catalyst" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <p className="text-slate-700">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-xs font-bold text-white">{t.logo}</div>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-70">
          {PARTNERS.map((p) => (
            <span key={p} className="text-sm font-semibold text-slate-500">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-sky-600 px-8 py-14 text-center text-white shadow-2xl">
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <h2 className="text-3xl font-extrabold md:text-4xl">Be the catalyst your city needs</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">Join citizens, businesses, schools and NGOs turning surplus into impact across Abu Dhabi.</p>
        <Button asChild size="lg" className="mt-7 rounded-full bg-white text-emerald-700 hover:bg-white/90"><Link to="/dashboard">Open the App <ArrowRight className="ml-1.5 h-4 w-4" /></Link></Button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-background">
      <TopBar />
      <Hero />
      <Features />
      <Impact />
      <CampaignsSection />
      <Testimonials />
      <CTA />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4">
          <Logo />
          <p>Catalyst · Connecting Surplus. Creating Impact. · Abu Dhabi 2025</p>
        </div>
      </footer>
    </div>
  );
}