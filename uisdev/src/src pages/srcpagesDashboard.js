src/pages/Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";
import AIInsight from "@/components/common/AIInsight";
import Icon from "@/components/common/Icon";
import { USER, BADGES, ACTIVITY, IMPACT_TREND, RESOURCE_SPLIT } from "@/lib/mockData";

export default function Dashboard() {
  return (
    <div>
      <PageHeader title={`Welcome back, ${USER.name.split(" ")[0]} 🌿`} subtitle="Your personal sustainability impact at a glance." />

      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-gradient-to-br from-emerald-600 to-sky-600 p-6 text-white shadow-lg lg:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-white/80">Sustainability Score</span>
            <Icon name="Gauge" className="h-5 w-5 text-white/80" />
          </div>
          <div className="mt-3 text-5xl font-extrabold">{USER.score.toLocaleString()}</div>
          <div className="mt-1 text-sm text-white/80">{USER.level} · Rank #{USER.rank} of {USER.rankOf.toLocaleString()}</div>
          <div className="mt-5">
            <div className="flex justify-between text-xs text-white/80"><span>Progress to next level</span><span>{USER.progressToNext}%</span></div>
            <div className="mt-1.5 h-2 w-full rounded-full bg-white/20">
              <div className="h-2 rounded-full bg-white" style={{ width: `${USER.progressToNext}%` }} />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          <StatCard icon="Heart" label="Resources donated" value={USER.donated} accent="#8b5cf6" />
          <StatCard icon="Apple" label="Resources rescued" value={USER.rescued} accent="#16a34a" />
          <StatCard icon="Leaf" label="CO₂ prevented" value={`${USER.co2Prevented} t`} accent="#14b8a6" />
          <StatCard icon="Droplets" label="Water conserved" value={`${(USER.waterConserved / 1000).toFixed(1)}k L`} accent="#0ea5e9" />
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-5 shadow-sm lg:col-span-2">
          <h3 className="font-bold">Impact trend</h3>
          <p className="text-sm text-muted-foreground">Meals rescued & items donated over time</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={IMPACT_TREND}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f1" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="meals" stroke="#16a34a" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="items" stroke="#8b5cf6" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <h3 className="font-bold">Resource split</h3>
          <p className="text-sm text-muted-foreground">Your contributions by type</p>
          <div className="mt-2 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={RESOURCE_SPLIT} dataKey="value" innerRadius={45} outerRadius={75} paddingAngle={3}>
                  {RESOURCE_SPLIT.map((e) => <Cell key={e.name} fill={e.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {RESOURCE_SPLIT.map((r) => (
              <span key={r.name} className="flex items-center gap-1.5 text-xs"><span className="h-2 w-2 rounded-full" style={{ background: r.color }} />{r.name}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <h3 className="font-bold">Achievement badges</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {BADGES.map((b) => (
              <div key={b.id} className={`flex flex-col items-center rounded-xl border p-3 text-center ${b.earned ? "" : "opacity-40 grayscale"}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: `${b.color}1a`, color: b.color }}>
                  <Icon name={b.icon} className="h-5 w-5" />
                </div>
                <span className="mt-1.5 text-[11px] font-medium leading-tight">{b.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <h3 className="font-bold">Recent activity</h3>
          <ul className="mt-4 space-y-3">
            {ACTIVITY.map((a) => (
              <li key={a.id} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: `${a.color}1a`, color: a.color }}>
                  <Icon name={a.icon} className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-snug">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <AIInsight title="Catalyst AI · For you" lines={[
          "You're 72% to Eco Champion — rescue 2 more food batches this week to level up.",
          "A clothing drive at Al Wahda Mall matches your past donations. Tap WearShare to join.",
          "Your water savings rank in the top 8% of volunteers in Abu Dhabi.",
        ]} />
      </div>
    </div>
  );
}