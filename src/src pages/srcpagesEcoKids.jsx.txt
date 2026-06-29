src/pages/EcoKids.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Flame, Star, CheckCircle2, GraduationCap } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import Icon from "@/components/common/Icon";
import { Button } from "@/components/ui/button";
import { LEADERBOARD, ECO_CHALLENGES, QUIZ, BADGES } from "@/lib/mockData";

function Quiz() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = QUIZ[idx];

  const pick = (i) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (idx + 1 < QUIZ.length) { setIdx(idx + 1); setPicked(null); }
      else setDone(true);
    }, 900);
  };

  if (done) return (
    <div className="rounded-2xl border bg-gradient-to-br from-pink-50 to-amber-50 p-6 text-center">
      <div className="text-5xl">🎉</div>
      <h3 className="mt-2 text-xl font-extrabold">You scored {score}/{QUIZ.length}!</h3>
      <p className="text-sm text-muted-foreground">+{score * 20} eco-points earned</p>
      <Button className="mt-4 rounded-full bg-pink-500 hover:bg-pink-600"
        onClick={() => { setIdx(0); setPicked(null); setScore(0); setDone(false); }}>Play again</Button>
    </div>
  );

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Question {idx + 1} of {QUIZ.length}</span>
        <span className="flex items-center gap-1 font-semibold text-amber-500"><Star className="h-4 w-4" /> {score * 20} pts</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.h3 key={idx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="mt-3 text-lg font-bold">{q.q}</motion.h3>
      </AnimatePresence>
      <div className="mt-4 space-y-2">
        {q.options.map((o, i) => {
          const correct = picked !== null && i === q.answer;
          const wrong = picked === i && i !== q.answer;
          return (
            <button key={i} onClick={() => pick(i)}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                correct ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                : wrong ? "border-red-400 bg-red-50 text-red-600"
                : "hover:bg-accent"}`}>
              {o}
              {correct && <CheckCircle2 className="h-4 w-4" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function EcoKids() {
  const [challenges, setChallenges] = useState(ECO_CHALLENGES);
  const toggle = (id) => setChallenges((c) => c.map((x) => x.id === id ? { ...x, done: !x.done } : x));
  const earned = challenges.filter((c) => c.done).reduce((a, c) => a + c.points, 0);

  return (
    <div>
      <PageHeader title="EcoKids Zone 🌍" accent="#ec4899"
        subtitle="Learn, play and become a young changemaker! Daily eco-challenges, quizzes, games and class leaderboards." />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Today's eco-challenges</h3>
              <span className="flex items-center gap-1 rounded-full bg-pink-100 px-3 py-1 text-sm font-bold text-pink-600">
                <Flame className="h-4 w-4" /> {earned} pts today
              </span>
            </div>
            <div className="mt-4 space-y-2">
              {challenges.map((c) => (
                <motion.button key={c.id} onClick={() => toggle(c.id)} whileTap={{ scale: 0.98 }}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${c.done ? "border-emerald-300 bg-emerald-50" : "hover:bg-accent"}`}>
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full ${c.done ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"}`}>
                    {c.done ? <CheckCircle2 className="h-5 w-5" /> : <Icon name={c.icon} className="h-4 w-4" />}
                  </div>
                  <span className={`flex-1 text-sm font-medium ${c.done ? "line-through text-muted-foreground" : ""}`}>{c.title}</span>
                  <span className="text-sm font-bold text-amber-500">+{c.points}</span>
                </motion.button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-bold">Sustainability quiz 🧠</h3>
            <Quiz />
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold"><Trophy className="h-5 w-5 text-amber-500" /> Class leaderboard</h3>
            <ul className="mt-4 space-y-2">
              {LEADERBOARD.map((l) => (
                <li key={l.rank} className="flex items-center gap-3 rounded-xl border p-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    l.rank === 1 ? "bg-amber-400 text-white" : l.rank === 2 ? "bg-slate-300 text-white" : l.rank === 3 ? "bg-orange-400 text-white" : "bg-muted"}`}>{l.rank}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.kind}</div>
                  </div>
                  <span className="text-sm font-bold text-emerald-600">{l.points.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="font-bold">Your badges</h3>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {BADGES.map((b) => (
                <div key={b.id} className={`flex flex-col items-center rounded-xl border p-3 text-center ${b.earned ? "" : "opacity-40 grayscale"}`}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: `${b.color}1a`, color: b.color }}>
                    <Icon name={b.icon} className="h-4 w-4" />
                  </div>
                  <span className="mt-1 text-[10px] font-medium leading-tight">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-gradient-to-br from-pink-50 to-violet-50 p-5">
            <h3 className="flex items-center gap-2 font-bold"><GraduationCap className="h-5 w-5 text-pink-600" /> Teacher dashboard</h3>
            <p className="mt-1 text-sm text-muted-foreground">Track class participation, assign challenges and run school-vs-school competitions.</p>
            <Button className="mt-3 rounded-full bg-pink-500 hover:bg-pink-600">Open teacher view</Button>
          </div>
        </div>
      </div>
    </div>
  );
}