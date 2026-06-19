"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Enterprise-grade security & RBAC" },
  { icon: Zap, label: "Sub-second performance, edge-ready" },
  { icon: Globe, label: "Scales from zero to millions of users" },
];

export const AuthShell = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative grid min-h-screen lg:grid-cols-2">
      {/* Left — brand panel */}
      <div className="relative hidden overflow-hidden border-r border-white/5 lg:flex lg:flex-col lg:justify-between p-12">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-gradient opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="animate-grid absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

        <Link href="/" className="group relative z-10 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient font-black text-white shadow-lg shadow-primary/30 transition-transform group-hover:rotate-12">
            N
          </div>
          <span className="text-xl font-bold tracking-tighter">NEXUS</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-md"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-gradient">
            The mission-critical foundation for{" "}
            <span className="text-gradient-brand">elite SaaS</span> platforms.
          </h2>
          <div className="mt-10 space-y-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Icon className="h-4 w-4" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Trusted by 12,000+ developers worldwide
        </div>
      </div>

      {/* Right — form */}
      <div className="relative flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          {/* Mobile logo */}
          <Link href="/" className="mb-10 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient font-black text-white">
              N
            </div>
            <span className="text-xl font-bold tracking-tighter">NEXUS</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          </div>

          {children}
        </motion.div>
      </div>
    </div>
  );
};
