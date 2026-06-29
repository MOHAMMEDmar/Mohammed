src/components/common/Logo.jsx
import React from "react";
import { Leaf } from "lucide-react";

export default function Logo({ size = "md", withText = true }) {
  const dim = size === "lg" ? "h-11 w-11" : size === "sm" ? "h-8 w-8" : "h-9 w-9";
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${dim} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 shadow-lg shadow-emerald-500/20`}>
        <Leaf className="h-1/2 w-1/2 text-white" />
      </div>
      {withText && (
        <div className="leading-none">
          <div className="font-display text-lg font-extrabold tracking-tight">Catalyst</div>
          <div className="text-[10px] font-medium text-muted-foreground">Abu Dhabi</div>
        </div>
      )}
    </div>
  );
}