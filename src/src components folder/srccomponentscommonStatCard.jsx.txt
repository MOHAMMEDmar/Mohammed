src/components/common/StatCard.jsx
import React from "react";
import { motion } from "framer-motion";
import Icon from "@/components/common/Icon";

export default function StatCard({ icon = "Activity", label, value, sub, accent = "#16a34a", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}1a`, color: accent }}
        >
          <Icon name={icon} className="h-5 w-5" />
        </div>
        {sub && <span className="text-xs font-medium text-muted-foreground">{sub}</span>}
      </div>
      <div className="mt-4 text-2xl font-bold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}