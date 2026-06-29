src/components/common/PageHeader.jsx
import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, accent = "#16a34a", children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <div className="h-1.5 w-12 rounded-full mb-3" style={{ background: accent }} />
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1.5 text-muted-foreground max-w-2xl">{subtitle}</p>}
      </div>
      {children}
    </motion.div>
  );
}