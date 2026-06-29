src/pages/AquaFlow.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Droplets, AlertTriangle, Plus } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, CartesianGrid } from "recharts";
import PageHeader from "@/components/common/PageHeader";
import PulseMap from "@/components/common/PulseMap";
import StatCard from "@/components/common/StatCard";
import AIInsight from "@/components/common/AIInsight";
import { Button } from "@/components/ui/button";
import { WATER_REPORTS, PULSE_ZONES } from "@/lib/mockData";

const sevCls = { high: "bg-red-100 text-red-600", medium: "bg-amber-100 text-amber-700", low: "bg-emerald-100 text-emerald-700" };
const usage = [
  { t: "Mon", l: 320 }, { t: "Tue", l: 290 }, { t: "Wed", l: 340 }, { t: "Thu", l: 280 },
  { t: "Fri", l: 250 }, { t: "Sat", l: 230 }, { t: "Sun", l: 210 },
];

export default function AquaFlow() {
  const [tab, setTab] = useState("all");
  const reports = tab === "all" ? WATER_REPORTS : WATER_REPORTS.filter((r) => r.kind.toLowerCase() === tab);
  const waterZones = PULSE_ZONES.filter((z) => z.type === "water");

  return (
    <div>
      <PageHeader title="AquaFlow" accent="#0ea5e9"
        subtitle="Smart water management & routing. Communities report shortages, leaks and surplus — AI recommends efficient distribution.">
        <Button className="rounded-full bg-sky-600 hover:bg-sky-700"><Plus className="mr-1.5 h-4 w-4" /> Report water issue</Button>
      </PageHeader>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon="Droplets" label="Litres conserved (mo)" value="2.64M" accent="#0ea5e9" />
        <StatCard icon="AlertTriangle" label="Open leaks" value="3" accent="#ef4444" />
        <StatCard icon="MapPin" label="Active reports" value={WATER_REPORTS.length} accent="#f59e0b" />
        <StatCard icon="TrendingUp" label="Efficiency gain" value="+18%" accent="#16a34a" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b px-5 py-3">
            <h3 className="font-bold">Abu Dhabi water map</h3>
            <span className="text-xs text-muted-foreground">{waterZones.length} water zones</span>
          </div>
          <div className="h-[360px]"><PulseMap zones={waterZones} /></div>
        </div>
        <div className="space-y-4">
          <AIInsight title="Distribution AI" lines={[
            "Redirect 12,000 L surplus from Khalidiya Park → Mussafah Block 12 shortage.",
            "Corniche West leak losing ~4,000 L/hr — dispatch crew within 1h.",
            "Forecast: demand peak Thu 6–9pm; pre-fill MBZ reserve tonight.",
          ]} />
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="font-bold">Weekly usage (k L)</h3>
            <div className="mt-3 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={usage}>
                  <defs>
                    <linearGradient id="w" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f1" />
                  <XAxis dataKey="t" tickLine={false} axisLine={false} fontSize={12} />
                  <Tooltip />
                  <Area type="monotone" dataKey="l" stroke="#0ea5e9" strokeWidth={2.5} fill="url(#w)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border bg-card p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-bold">Community reports</h3>
          <div className="flex gap-2">
            {["all", "leak", "shortage", "surplus"].map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`rounded-full px-3 py-1 text-sm font-medium capitalize transition-colors ${tab === t ? "bg-sky-600 text-white" : "bg-muted hover:bg-accent"}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {reports.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
              className="flex flex-wrap items-center gap-3 rounded-xl border p-4">
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${sevCls[r.severity]}`}>{r.kind}</span>
              <div className="min-w-0">
                <div className="font-medium">{r.location}</div>
                <div className="text-xs text-muted-foreground">{r.reportedBy} · {r.ago} ago</div>
              </div>
              <div className="ml-auto flex items-center gap-2 text-sm text-sky-700">
                <Droplets className="h-4 w-4" /> {r.rec}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}