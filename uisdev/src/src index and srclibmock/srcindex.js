src/index.css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 160 30% 99%;
    --foreground: 200 25% 12%;
    --card: 0 0% 100%;
    --card-foreground: 200 25% 12%;
    --popover: 0 0% 100%;
    --popover-foreground: 200 25% 12%;
    --primary: 158 64% 38%;
    --primary-foreground: 0 0% 100%;
    --secondary: 200 90% 42%;
    --secondary-foreground: 0 0% 100%;
    --muted: 160 20% 95%;
    --muted-foreground: 200 12% 42%;
    --accent: 158 50% 94%;
    --accent-foreground: 158 64% 24%;
    --destructive: 0 78% 56%;
    --destructive-foreground: 0 0% 100%;
    --border: 160 20% 90%;
    --input: 160 20% 90%;
    --ring: 158 64% 38%;
    --chart-1: 158 64% 42%;
    --chart-2: 200 90% 48%;
    --chart-3: 42 95% 55%;
    --chart-4: 280 60% 60%;
    --chart-5: 12 76% 61%;
    --radius: 1rem;
    --font-heading: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
    --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    --sidebar-background: 0 0% 100%;
    --sidebar-foreground: 200 20% 30%;
    --sidebar-primary: 158 64% 38%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 158 50% 95%;
    --sidebar-accent-foreground: 158 64% 24%;
    --sidebar-border: 160 20% 90%;
    --sidebar-ring: 158 64% 38%;
  }

  .dark {
    --background: 200 30% 7%;
    --foreground: 160 20% 96%;
    --card: 200 28% 10%;
    --card-foreground: 160 20% 96%;
    --popover: 200 28% 10%;
    --popover-foreground: 160 20% 96%;
    --primary: 158 64% 44%;
    --primary-foreground: 200 30% 7%;
    --secondary: 200 90% 52%;
    --secondary-foreground: 0 0% 100%;
    --muted: 200 20% 16%;
    --muted-foreground: 160 12% 65%;
    --accent: 200 24% 18%;
    --accent-foreground: 160 20% 96%;
    --destructive: 0 70% 50%;
    --destructive-foreground: 0 0% 100%;
    --border: 200 20% 18%;
    --input: 200 20% 18%;
    --ring: 158 64% 44%;
    --chart-1: 158 64% 48%;
    --chart-2: 200 90% 56%;
    --chart-3: 42 95% 60%;
    --chart-4: 280 60% 66%;
    --chart-5: 12 76% 64%;
    --sidebar-background: 200 28% 10%;
    --sidebar-foreground: 160 16% 80%;
    --sidebar-primary: 158 64% 44%;
    --sidebar-primary-foreground: 200 30% 7%;
    --sidebar-accent: 200 24% 16%;
    --sidebar-accent-foreground: 160 20% 96%;
    --sidebar-border: 200 20% 18%;
    --sidebar-ring: 158 64% 44%;
  }
}

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground font-body antialiased; }
  h1,h2,h3,h4,h5 { @apply font-heading; }
}

.text-gradient {
  background: linear-gradient(100deg, hsl(158 64% 38%), hsl(200 90% 42%));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-grid {
  background-image: radial-gradient(hsl(158 40% 80% / 0.4) 1px, transparent 1px);
  background-size: 22px 22px;
}
.glass {
  background: hsl(0 0% 100% / 0.7);
  backdrop-filter: blur(12px);
}
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-thumb { background: hsl(158 30% 80%); border-radius: 10px; }
.leaflet-container { font-family: var(--font-body); border-radius: 1rem; }