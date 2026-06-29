src/pages/WearShare.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Upload, Plus } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";
import AIInsight from "@/components/common/AIInsight";
import { Button } from "@/components/ui/button";
import { DONATION_ITEMS } from "@/lib/mockData";

const CATS = ["All", "Clothes", "Books", "Furniture", "Supplies"];
const urgCls = { High: "bg-red-100 text-red-600", Medium: "bg-amber-100 text-amber-700", Low: "bg-emerald-100 text-emerald-700" };

export default function WearShare() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? DONATION_ITEMS : DONATION_ITEMS.filter((i) => i.category === cat);

  return (
    <div>
      <PageHeader title="WearShare" accent="#8b5cf6"
        subtitle="Donate clothes, books, furniture & supplies. AI recognises each item's type & condition and matches it by urgency and distance.">
        <Button className="rounded-full bg-violet-600 hover:bg-violet-700"><Plus className="mr-1.5 h-4 w-4" /> Donate an item</Button>
      </PageHeader>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon="Shirt" label="Items listed" value="1,284" accent="#8b5cf6" />
        <StatCard icon="Heart" label="Fulfilled requests" value="912" accent="#16a34a" />
        <StatCard icon="Sparkles" label="AI auto-tagged" value="98%" accent="#0ea5e9" />
        <StatCard icon="Users" label="Open requests" value="46" accent="#f59e0b" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${cat === c ? "bg-violet-600 text-white" : "bg-card border hover:bg-accent"}`}>{c}</button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <motion.div key={it.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border bg-card shadow-sm">
                <div className="relative h-40">
                  <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-violet-700">
                    <Sparkles className="h-3 w-3" /> {it.aiTag}
                  </span>
                  <span className={`absolute right-3 top-3 rounded-full px-2 py-1 text-[11px] font-semibold ${urgCls[it.urgency]}`}>{it.urgency}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{it.name}</h3>
                  <p className="text-sm text-muted-foreground">{it.category} · {it.condition}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {it.distanceKm} km</span>
                    <Button size="sm" variant="outline" className="rounded-full">Request</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-dashed border-violet-200 bg-violet-50/50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600"><Upload className="h-6 w-6" /></div>
            <h3 className="mt-3 font-bold">AI Image Recognition</h3>
            <p className="mt-1 text-sm text-muted-foreground">Snap a photo — Catalyst auto-detects the item type, category and condition for you.</p>
            <Button className="mt-4 rounded-full bg-violet-600 hover:bg-violet-700">Upload photo</Button>
          </div>
          <AIInsight title="Smart Matching" lines={[
            "Winter jackets best routed to Al Reem shelter (high urgency, 3.4 km).",
            "School stationery demand peaking before term start — prioritise dispatch.",
            "Furniture pickups: batch with TechCycle van on Thursday to cut trips.",
          ]} />
        </div>
      </div>
    </div>
  );
}