src/pages/TechCycle.jsx
import React from "react";
import { motion } from "framer-motion";
import { Laptop, Recycle, Plus, CheckCircle2, Truck } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";
import AIInsight from "@/components/common/AIInsight";
import { Button } from "@/components/ui/button";
import { DEVICES } from "@/lib/mockData";

const STATUS = {
  available: { label: "Available", cls: "bg-emerald-100 text-emerald-700", icon: Plus },
  matched: { label: "Matched", cls: "bg-sky-100 text-sky-700", icon: CheckCircle2 },
  in_transit: { label: "In transit", cls: "bg-amber-100 text-amber-700", icon: Truck },
};

export default function TechCycle() {
  return (
    <div>
      <PageHeader title="TechCycle" accent="#f59e0b"
        subtitle="Redistribute laptops, phones, tablets & accessories to schools, students, NGOs and repair centres. E-waste tracked and recycled.">
        <Button className="rounded-full bg-amber-500 hover:bg-amber-600"><Plus className="mr-1.5 h-4 w-4" /> Donate a device</Button>
      </PageHeader>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon="Laptop" label="Devices reused" value="3,940" accent="#f59e0b" />
        <StatCard icon="GraduationCap" label="Students equipped" value="2,310" accent="#16a34a" />
        <StatCard icon="Recycle" label="E-waste recycled" value="8.2 t" accent="#14b8a6" />
        <StatCard icon="Leaf" label="CO₂ saved" value="183 t" accent="#0ea5e9" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          {DEVICES.map((d, i) => {
            const st = STATUS[d.status];
            return (
              <motion.div key={d.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="flex flex-wrap items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"><Laptop className="h-6 w-6" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold">{d.type}</h3>
                  <p className="text-sm text-muted-foreground">{d.model} · {d.condition}</p>
                  <p className="text-xs text-emerald-600">{d.co2}</p>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">{d.matchedTo || "Awaiting match"}</span>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${st.cls}`}><st.icon className="h-3 w-3" /> {st.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="font-bold">E-waste recycling tracker</h3>
            <div className="mt-4 space-y-4">
              {[["Collected", 82, "#f59e0b"], ["Refurbished", 64, "#16a34a"], ["Responsibly recycled", 91, "#14b8a6"]].map(([l, v, c]) => (
                <div key={l}>
                  <div className="flex justify-between text-sm"><span>{l}</span><span className="font-semibold">{v}%</span></div>
                  <div className="mt-1 h-2 rounded-full bg-muted"><div className="h-2 rounded-full" style={{ width: `${v}%`, background: c }} /></div>
                </div>
              ))}
            </div>
          </div>
          <AIInsight title="Device Matching AI" lines={[
            "8 refurbished laptops best matched to Al Bateen School (40 needed).",
            "iPhone SE batch → Students Network, dispatch with Thursday route.",
            "Tablets in 'fair' condition: route to Mussafah Repair Hub first.",
          ]} />
        </div>
      </div>
    </div>
  );
}