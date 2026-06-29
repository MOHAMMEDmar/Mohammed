src/pages/Pulse.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/common/PageHeader";
import PulseMap from "@/components/common/PulseMap";
import AIInsight from "@/components/common/AIInsight";
import { PULSE_ZONES, PULSE_FILTERS, statusColor } from "@/lib/mockData";

export default function Pulse() {
  const [filter, setFilter] = useState("all");
  const zones = useMemo(() => filter === "all" ? PULSE_ZONES : PULSE_ZONES.filter((z) => z.type === filter), [filter]);
  const counts = {
    red: zones.filter((z) => z.status === "red").length,
    yellow: zones.filter((z) => z.status === "yellow").length,
    green: zones.filter((z) => z.status === "green").length,
  };

  return (
    <div>
      <PageHeader title="Catalyst Pulse — Abu Dhabi" accent="#0ea5e9"
        subtitle="A live, AI-powered sustainability heatmap. Red = urgent need or excess waste, yellow = moderate activity, green = resolved.">
        <span className="flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm font-medium text-emerald-600">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Real-time updates
        </span>
      </PageHeader>

      <div className="flex flex-wrap gap-2">
        {PULSE_FILTERS.map((f) => (
          <button key={f.key} onClick={() => setFilter(f.key)}
            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              filter === f.key ? "bg-foreground text-background" : "bg-card hover:bg-accent"}`}>
            {f.key !== "all" && <span className="h-2 w-2 rounded-full" style={{ background: f.color }} />}
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm lg:col-span-2">
          <div className="h-[480px]"><PulseMap zones={zones} /></div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[["red", "Urgent"], ["yellow", "Moderate"], ["green", "Resolved"]].map(([k, l]) => (
              <div key={k} className="rounded-xl border bg-card p-3 text-center">
                <div className="text-2xl font-extrabold" style={{ color: statusColor[k] }}>{counts[k]}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
          <AIInsight title="Predictive Forecast" lines={[
            "Food waste spike predicted near Yas Island hotels this weekend — pre-position 3 volunteers.",
            "Water shortage risk rising in Mussafah Block 12 over the next 48h.",
            "Donation demand in Al Reem trending +18% — schedule a WearShare drive.",
          ]} />
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-bold">Active zones</h3>
            <ul className="mt-3 max-h-56 space-y-2 overflow-y-auto pr-1">
              {zones.map((z) => (
                <li key={z.id} className="flex items-center gap-2 text-sm">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: statusColor[z.status] }} />
                  <span className="font-medium">{z.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{z.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}