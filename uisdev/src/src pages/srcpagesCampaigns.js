src/pages/Campaigns.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Sparkles, Check } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";
import AIInsight from "@/components/common/AIInsight";
import { Button } from "@/components/ui/button";
import { CAMPAIGNS } from "@/lib/mockData";

const FILTERS = ["All", "Recommended", "Tree Planting", "Cleanup", "Food Rescue", "Donation", "Water"];

export default function Campaigns() {
  const [filter, setFilter] = useState("All");
  const [joined, setJoined] = useState([]);
  const list = CAMPAIGNS.filter((c) =>
    filter === "All" ? true : filter === "Recommended" ? c.recommended : c.category === filter);

  const toggle = (id) => setJoined((j) => j.includes(id) ? j.filter((x) => x !== id) : [...j, id]);

  return (
    <div>
      <PageHeader title="Campaign Catalyst Hub" accent="#14b8a6"
        subtitle="Join tree drives, cleanups, food rescues and donation campaigns. AI recommends events by your interests, age, location and activity." />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon="Megaphone" label="Active campaigns" value="142" accent="#14b8a6" />
        <StatCard icon="Users" label="Volunteers engaged" value="8,650" accent="#16a34a" />
        <StatCard icon="Leaf" label="CO₂ reduced" value="412 t" accent="#0ea5e9" />
        <StatCard icon="Heart" label="People helped" value="96.4k" accent="#ec4899" />
      </div>

      <div className="mt-6">
        <AIInsight title="Recommended for you" lines={[
          "Based on your food rescues, the Ramadan Food Rescue needs volunteers near you.",
          "You planted trees before — Mangrove Planting Drive (12 Apr) is a 96% match.",
          "Saadiyat Beach Cleanup is close to home and fits your weekend availability.",
        ]} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${filter === f ? "bg-teal-600 text-white" : "bg-card border hover:bg-accent"}`}>{f}</button>
        ))}
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => {
          const isJoined = joined.includes(c.id);
          const pct = Math.min(100, Math.round((c.volunteers / c.goal) * 100));
          return (
            <motion.div key={c.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border bg-card shadow-sm">
              <div className="relative h-44">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold">{c.category}</span>
                {c.recommended && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-teal-600 px-2.5 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" /> For you
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold">{c.title}</h3>
                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {c.date}</p>
                  <p className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {c.location}</p>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {c.volunteers}/{c.goal} volunteers</span>
                    <span className="font-semibold text-teal-600">{c.impact}</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-teal-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <Button onClick={() => toggle(c.id)}
                  className={`mt-4 w-full rounded-full ${isJoined ? "bg-emerald-600 hover:bg-emerald-700" : "bg-teal-600 hover:bg-teal-700"}`}>
                  {isJoined ? <><Check className="mr-1.5 h-4 w-4" /> Registered</> : "Register to join"}
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}