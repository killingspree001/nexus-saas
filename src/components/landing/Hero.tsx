"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, PlayCircle, TrendingUp } from "lucide-react";

const sparkline = [38, 52, 31, 64, 48, 82, 70, 96];

export const Hero = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pb-16 pt-28">
      {/* Animated background grid */}
      <div className="animate-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Decorative brand glows */}
      <div className="absolute left-1/2 top-1/4 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute right-1/4 top-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-brand-gradient opacity-20 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              v2.0 is now live — Explore the new Dashboard
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-[0.95] tracking-tight text-gradient lg:text-8xl">
              The future of <br />
              <span className="text-gradient-brand">software delivery</span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Nexus is the mission-critical foundation for elite SaaS platforms.
              Engineered for speed, security, and absolute scalability.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button
                  size="lg"
                  className="group h-13 rounded-xl bg-brand-gradient px-8 text-base font-semibold shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:brightness-110"
                >
                  Get Started Free
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-13 rounded-xl px-8 text-base font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  <PlayCircle className="mr-1 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative mt-20"
          >
            <div className="absolute -inset-1 rounded-2xl bg-brand-gradient opacity-25 blur-xl transition duration-1000 group-hover:opacity-40" />
            <div className="glass relative overflow-hidden rounded-2xl">
              <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <div className="ml-3 h-5 w-64 rounded-md bg-white/5" />
              </div>
              <div className="grid grid-cols-3 gap-4 bg-[#070709] p-5 text-left">
                {/* Main chart panel */}
                <div className="col-span-2 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Monthly Revenue
                  </div>
                  <div className="mb-4 flex items-end gap-2">
                    <span className="text-2xl font-bold text-white">$48,920</span>
                    <span className="mb-1 flex items-center gap-0.5 text-xs font-semibold text-emerald-400">
                      <TrendingUp className="h-3 w-3" /> 12.5%
                    </span>
                  </div>
                  <div className="flex h-28 items-end gap-1.5">
                    {sparkline.map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-brand-gradient" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                {/* Side stat cards */}
                <div className="space-y-4">
                  {[
                    { label: "Active Users", value: "8,402", tint: "text-violet-300" },
                    { label: "Uptime", value: "99.99%", tint: "text-emerald-300" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </div>
                      <div className={`mt-1 text-xl font-bold ${s.tint}`}>{s.value}</div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-2/3 bg-brand-gradient" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
