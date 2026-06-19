"use client";

import { motion } from "framer-motion";
import {
  Zap,
  BarChart3,
  CreditCard,
  Lock,
  Globe,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    title: "Secure Auth",
    description: "Enterprise-grade security with NextAuth and RBAC.",
    icon: Lock,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Global Scalability",
    description: "Edge-ready infrastructure that grows with your user base without breaking a sweat.",
    icon: Globe,
    className: "md:col-span-2 md:row-span-1",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Stripe Engine",
    description: "Seamless subscription lifecycles, webhooks, and billing management automated for you.",
    icon: CreditCard,
    className: "md:col-span-2 md:row-span-2",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Real-time Analytics",
    description: "Deep insights into your MRR, churn, and user engagement metrics.",
    icon: BarChart3,
    className: "md:col-span-1 md:row-span-2",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "High Performance",
    description: "Optimized with Next.js 14 App Router and Turbopack for sub-second speeds.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    title: "AI Infrastructure",
    description: "Ready-to-use hooks for OpenAI, Anthropic, and vector database integrations.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "Modular Design",
    description: "Clean architecture that separates concerns and makes scaling a breeze.",
    icon: Layers,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-cyan-500/10 text-cyan-500",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden border-t border-white/5 py-28">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            Platform
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold tracking-tight text-gradient lg:text-5xl"
          >
            Engineering <span className="text-gradient-brand">excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We don't just build websites. We engineer high-performance business engines 
            designed to scale from zero to millions of users.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`glass group relative flex cursor-default flex-col justify-between overflow-hidden p-8 transition-colors hover:border-primary/30 ${feature.className}`}
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset ring-white/10 ${feature.color} transition-transform group-hover:scale-110`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className="relative mt-4 flex translate-y-1 items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                Learn more <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
