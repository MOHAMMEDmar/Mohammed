src/components/Layout.jsx
import React, { useState } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Radar, Apple, Droplets, Shirt, Laptop, Sparkles, Megaphone, Menu, X } from "lucide-react";
import Logo from "@/components/common/Logo";

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/pulse", label: "Catalyst Pulse", icon: Radar },
  { to: "/foodroute", label: "FoodRoute", icon: Apple },
  { to: "/aquaflow", label: "AquaFlow", icon: Droplets },
  { to: "/wearshare", label: "WearShare", icon: Shirt },
  { to: "/techcycle", label: "TechCycle", icon: Laptop },
  { to: "/ecokids", label: "EcoKids", icon: Sparkles },
  { to: "/campaigns", label: "Campaigns", icon: Megaphone },
];

function NavItems({ onClick }) {
  return (
    <nav className="flex flex-col gap-1 px-3">
      {NAV.map(({ to, label, icon: I }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onClick}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`
          }
        >
          <I className="h-[18px] w-[18px]" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  if (loc.pathname === "/") return <Outlet />;

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r bg-sidebar lg:flex">
        <div className="flex h-16 items-center px-5">
          <Link to="/"><Logo /></Link>
        </div>
        <div className="mt-2 flex-1 overflow-y-auto pb-6">
          <NavItems />
        </div>
        <div className="border-t p-4 text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">Connecting Surplus.</p>
          <p>Creating Impact.</p>
        </div>
      </aside>

      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur lg:hidden">
        <Link to="/"><Logo /></Link>
        <button onClick={() => setOpen(true)} className="rounded-lg p-2 hover:bg-accent">
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 bg-sidebar p-2 shadow-xl">
            <div className="flex h-16 items-center justify-between px-3">
              <Logo />
              <button onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-accent"><X className="h-5 w-5" /></button>
            </div>
            <NavItems onClick={() => setOpen(false)} />
          </div>
        </div>
      )}

      <main className="lg:pl-64">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}