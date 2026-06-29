src/components/common/AIInsight.jsx
import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AIInsight({ title = "Catalyst AI", lines = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-sky-50 p-5"
    >
      <div className="flex items-center gap-2 text-emerald-700">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-sky-500 text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <span className="text-sm font-bold">{title}</span>
        <span className="ml-auto rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">LIVE</span>
      </div>
      <ul className="mt-3 space-y-2">
        {lines.map((l, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}