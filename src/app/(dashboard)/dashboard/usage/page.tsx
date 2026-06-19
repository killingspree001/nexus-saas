"use client";

import { motion } from "framer-motion";
import { Activity, Database, Gauge, AlertTriangle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/dashboard/PageHeader";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const daily = [
  { d: "01", v: 3200 }, { d: "03", v: 4100 }, { d: "05", v: 3800 }, { d: "07", v: 5200 },
  { d: "09", v: 4700 }, { d: "11", v: 6100 }, { d: "13", v: 5800 }, { d: "15", v: 7300 },
  { d: "17", v: 6900 }, { d: "19", v: 8200 }, { d: "21", v: 7600 }, { d: "23", v: 9100 },
  { d: "25", v: 8800 }, { d: "27", v: 10200 }, { d: "29", v: 11800 },
];

const stats = [
  { title: "API Requests", value: "104,920", change: "+18.2%", up: true, icon: Activity, color: "text-violet-400" },
  { title: "Bandwidth", value: "284 GB", change: "+9.4%", up: true, icon: Database, color: "text-sky-400" },
  { title: "Avg Latency", value: "84 ms", change: "-12 ms", up: true, icon: Gauge, color: "text-emerald-400" },
  { title: "Error Rate", value: "0.04%", change: "+0.01%", up: false, icon: AlertTriangle, color: "text-amber-400" },
];

const endpoints = [
  { path: "POST /v1/inference", pct: 42, calls: "44,066" },
  { path: "GET /v1/projects", pct: 23, calls: "24,131" },
  { path: "POST /v1/embeddings", pct: 18, calls: "18,885" },
  { path: "GET /v1/usage", pct: 11, calls: "11,541" },
  { path: "POST /v1/webhooks", pct: 6, calls: "6,297" },
];

export default function UsagePage() {
  return (
    <div className="space-y-8 p-8">
      <PageHeader title="Usage" subtitle="Real-time consumption across all clusters and projects.">
        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Billing cycle · Jun 1 – Jun 30
        </div>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Card className="glass border-none">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <p
                  className={`mt-1 flex items-center text-[10px] font-bold ${
                    stat.up ? "text-emerald-400" : "text-amber-400"
                  }`}
                >
                  {stat.up ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                  {stat.change} vs last cycle
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="glass border-none md:col-span-4">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-widest">Daily Requests</CardTitle>
            <CardDescription className="text-xs">API calls per day this billing cycle.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-4 h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={daily}>
                  <defs>
                    <linearGradient id="barBrand" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0.4} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="d" stroke="#52525b" fontSize={10} fontWeight="bold" axisLine={false} tickLine={false} />
                  <YAxis stroke="#52525b" fontSize={10} fontWeight="bold" axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: "rgba(139,92,246,0.08)" }}
                    contentStyle={{
                      backgroundColor: "rgba(10,10,14,0.9)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      borderRadius: "12px",
                    }}
                    itemStyle={{ color: "#fff", fontWeight: "bold" }}
                    labelStyle={{ color: "#a1a1aa", fontSize: 11, fontWeight: 700 }}
                  />
                  <Bar dataKey="v" name="Requests" fill="url(#barBrand)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-none md:col-span-3">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-widest">Top Endpoints</CardTitle>
            <CardDescription className="text-xs">Share of total requests this cycle.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {endpoints.map((e, i) => (
                <motion.div
                  key={e.path}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <code className="font-mono text-xs text-white">{e.path}</code>
                    <span className="text-[10px] font-bold text-muted-foreground">{e.calls}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${e.pct}%` }}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.6 }}
                      className="h-full rounded-full bg-brand-gradient"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass border-none">
        <CardHeader>
          <CardTitle className="text-sm font-bold uppercase tracking-widest">Plan Quota</CardTitle>
          <CardDescription className="text-xs">Pro plan includes 150,000 requests / month.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-2 flex items-end justify-between">
            <span className="text-2xl font-black text-white">104,920 <span className="text-sm font-bold text-muted-foreground">/ 150,000</span></span>
            <span className="text-xs font-bold text-violet-400">70% used</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-[70%] rounded-full bg-brand-gradient" />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            At current pace you&apos;ll reach ~131,000 requests by cycle end — within plan limits.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
