src/pages/FoodRoute.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Truck, CheckCircle2, Plus } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";
import AIInsight from "@/components/common/AIInsight";
import { Button } from "@/components/ui/button";
import { FOOD_LISTINGS } from "@/lib/mockData";

function Countdown({ minutes }) {
  const [sec, setSec] = useState(minutes * 60);
  useEffect(() => {
    const t = setInterval(() => setSec((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const urgent = sec < 60 * 120;
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums ${urgent ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-700"}`}>
      <Clock className="h-3 w-3" /> {String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
    </span>
  );
}

const STATUS = {
  available: { label: "Available", cls: "bg-emerald-100 text-emerald-700", icon: Plus },
  matched: { label: "Matched", cls: "bg-sky-100 text-sky-700", icon: CheckCircle2 },
  in_transit: { label: "In transit", cls: "bg-amber-100 text-amber-700", icon: Truck },
};

export default function FoodRoute() {
  const [listings, setListings] = useState(FOOD_LISTINGS);
  const match = (id) => setListings((ls) => ls.map((l) => l.id === id ? { ...l, status: "matched", matchedTo: "Emirates Red Crescent" } : l));

  return (
    <div>
      <PageHeader title="FoodRoute" accent="#16a34a"
        subtitle="AI matches surplus food from restaurants, farms, hotels & households to nearby shelters and families before it expires.">
        <Button className="rounded-full"><Plus className="mr-1.5 h-4 w-4" /> Post surplus food</Button>
      </PageHeader>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon="Apple" label="Active listings" value={listings.length} accent="#16a34a" />
        <StatCard icon="CheckCircle2" label="Matched today" value="38" accent="#0ea5e9" />
        <StatCard icon="Truck" label="Pickups in transit" value="6" accent="#f59e0b" />
        <StatCard icon="Users" label="Volunteers available" value="24" accent="#8b5cf6" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          {listings.map((l, i) => {
            const st = STATUS[l.status];
            return (
              <motion.div key={l.id}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                className="rounded-2xl border bg-card p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{l.title}</h3>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">{l.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{l.donor}</p>
                    <p className="mt-1 text-sm font-medium">{l.qty}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {l.distanceKm} km away</span>
                      <span className="flex items-center gap-1">Expires in <Countdown minutes={l.expiresInMin} /></span>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${st.cls}`}>
                    <st.icon className="h-3 w-3" /> {st.label}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <span className="text-sm text-muted-foreground">
                    {l.matchedTo ? <>Matched to <span className="font-semibold text-foreground">{l.matchedTo}</span></> : "Awaiting AI match…"}
                  </span>
                  {l.status === "available"
                    ? <Button size="sm" className="rounded-full" onClick={() => match(l.id)}>AI Match now</Button>
                    : <Button size="sm" variant="outline" className="rounded-full">Track route</Button>}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-4">
          <AIInsight title="Route Optimisation" lines={[
            "Optimal pickup loop: Spinneys → Le Pain → Yas Hotel saves 14 km & 22 min.",
            "Best match for dairy (90m left): Tarahum Food Bank, 3.2 km — assign now.",
            "2 volunteers near Al Mina can cover 3 listings in one trip.",
          ]} />
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="font-bold">Volunteer coordination</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {[["Ahmed K.", "Marina · available now"], ["Sara M.", "Al Reem · 2 pickups today"], ["Omar B.", "Yas · en route"]].map(([n, d]) => (
                <li key={n} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">{n.split(" ").map((x) => x[0]).join("")}</div>
                  <div><div className="font-medium">{n}</div><div className="text-xs text-muted-foreground">{d}</div></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}