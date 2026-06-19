"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  CreditCard, 
  Layers, 
  Zap,
  ArrowUpRight,
  MoreHorizontal,
  Circle
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mon", total: 400 },
  { name: "Tue", total: 300 },
  { name: "Wed", total: 900 },
  { name: "Thu", total: 500 },
  { name: "Fri", total: 1100 },
  { name: "Sat", total: 800 },
  { name: "Sun", total: 1200 },
];

const stats = [
  {
    title: "Total API Requests",
    value: "12,840",
    change: "+12.5%",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Project Count",
    value: "14",
    change: "+2",
    icon: Layers,
    color: "text-blue-500",
  },
  {
    title: "Credits Remaining",
    value: "450",
    change: "65% used",
    icon: Activity,
    color: "text-emerald-500",
  },
  {
    title: "Current Plan",
    value: "Pro",
    change: "Renews in 12 days",
    icon: CreditCard,
    color: "text-purple-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white">OVERVIEW</h1>
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mt-1">
            System Status: <span className="text-emerald-500">All Systems Operational</span>
          </p>
        </div>
        <div className="flex gap-3">
           <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold transition-colors hover:bg-white/10">
              Export CSV
           </button>
           <button className="rounded-lg bg-brand-gradient px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110">
              New Project
           </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
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
                <p className="text-[10px] font-bold text-muted-foreground mt-1 flex items-center">
                  {stat.change} <ArrowUpRight className="ml-1 h-3 w-3" />
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4 glass border-none">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-widest">Usage Analytics</CardTitle>
            <CardDescription className="text-xs">Daily API throughput across all clusters.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="strokeTotal" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    stroke="#52525b"
                    fontSize={10}
                    fontWeight="bold"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#52525b"
                    fontSize={10}
                    fontWeight="bold"
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ stroke: "#8b5cf6", strokeWidth: 1, strokeDasharray: "4 4" }}
                    contentStyle={{
                      backgroundColor: "rgba(10,10,14,0.9)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      borderRadius: "12px",
                      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.6)",
                    }}
                    itemStyle={{ color: "#fff", fontWeight: "bold" }}
                    labelStyle={{ color: "#a1a1aa", fontSize: 11, fontWeight: 700 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="url(#strokeTotal)"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorTotal)"
                    dot={{ r: 0 }}
                    activeDot={{ r: 5, fill: "#8b5cf6", stroke: "#fff", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 glass border-none">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-widest">Recent Activity</CardTitle>
              <CardDescription className="text-xs">Latest infrastructure events.</CardDescription>
            </div>
            <MoreHorizontal className="h-4 w-4 text-muted-foreground cursor-pointer" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { label: "Deployment Successful", sub: "nexus-production-v42", time: "2m ago", color: "text-emerald-500" },
                { label: "Database Migration", sub: "Add user_roles table", time: "1h ago", color: "text-blue-500" },
                { label: "High Traffic Alert", sub: "Latency increase in us-east-1", time: "3h ago", color: "text-yellow-500" },
                { label: "New User Registered", sub: "m.rossi@enterprise.io", time: "5h ago", color: "text-purple-500" },
                { label: "SSL Certificate Renewed", sub: "api.nexussaas.io", time: "12h ago", color: "text-emerald-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Circle className={`h-2 w-2 mt-1.5 fill-current ${item.color}`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold text-white leading-none">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">{item.time}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
               View System Logs
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
