"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: { monthly: "$0", yearly: "$0" },
    description: "Ideal for solo developers and experimentation.",
    features: ["5 Projects", "Standard Analytics", "Community Support", "Basic Security"],
    buttonText: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: { monthly: "$29", yearly: "$19" },
    description: "The complete toolkit for scaling businesses.",
    features: ["Unlimited Projects", "Deep Analytics", "Priority 24/7 Support", "Advanced RBAC", "Custom Domains"],
    buttonText: "Upgrade Now",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "High-security, high-scale bespoke solutions.",
    features: ["White Labeling", "Dedicated Account Manager", "Custom SLA", "Audit Logs", "VPC Deployment"],
    buttonText: "Contact Sales",
    variant: "outline" as const,
  },
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative bg-[#020202]">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-gradient"
          >
            Predictable <span className="text-primary italic">Pricing</span>
          </motion.h2>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? "text-white" : "text-muted-foreground"}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-6 rounded-full bg-white/10 relative p-1 transition-colors hover:bg-white/20"
            >
              <motion.div 
                animate={{ x: isYearly ? 24 : 0 }}
                className="w-4 h-4 rounded-full bg-primary"
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-white" : "text-muted-foreground"}`}>
              Yearly <span className="text-primary text-[10px] font-bold uppercase ml-1">Save 30%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col rounded-3xl p-10 ${
                plan.popular
                  ? "glass-strong border-primary/40 shadow-[0_0_60px_-15px_var(--brand)]"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="pointer-events-none absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/40">
                    Recommended
                  </div>
                </>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-black tracking-tighter">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly !== "Custom" && (
                    <span className="text-muted-foreground font-medium text-lg">/mo</span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-5 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm group/item">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`h-12 w-full rounded-xl text-sm font-bold transition-all ${
                  plan.popular
                    ? "bg-brand-gradient shadow-lg shadow-primary/30 hover:brightness-110"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
                variant={plan.variant}
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
