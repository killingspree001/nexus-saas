"use client";

import { motion } from "framer-motion";
import { CreditCard, Check, Download, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/PageHeader";

const invoices = [
  { id: "INV-2026-006", date: "Jun 1, 2026", amount: "$29.00", status: "Paid" },
  { id: "INV-2026-005", date: "May 1, 2026", amount: "$29.00", status: "Paid" },
  { id: "INV-2026-004", date: "Apr 1, 2026", amount: "$29.00", status: "Paid" },
  { id: "INV-2026-003", date: "Mar 1, 2026", amount: "$29.00", status: "Paid" },
  { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$29.00", status: "Paid" },
];

const planFeatures = ["Unlimited projects", "150K requests / mo", "Priority 24/7 support", "Advanced RBAC"];

export default function BillingPage() {
  return (
    <div className="space-y-8 p-8">
      <PageHeader title="Billing" subtitle="Manage your subscription, payment method, and invoices.">
        <Button className="rounded-xl border border-white/10 bg-white/5 font-bold hover:bg-white/10" variant="outline">
          Billing portal
        </Button>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Current plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2"
        >
          <Card className="glass-strong relative overflow-hidden border-primary/30">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-primary">
                  Pro Plan — Active
                </CardTitle>
              </div>
              <CardDescription className="text-xs">Renews on July 1, 2026.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tighter text-white">$29</span>
                <span className="text-lg font-medium text-muted-foreground">/mo</span>
              </div>
              <div className="mb-8 grid grid-cols-2 gap-3">
                {planFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-xl bg-brand-gradient font-bold text-white shadow-lg shadow-primary/25 hover:brightness-110">
                  Upgrade to Enterprise
                </Button>
                <Button variant="ghost" className="rounded-xl font-bold text-muted-foreground hover:text-foreground">
                  Cancel plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment method */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="glass h-full border-none">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest">Payment Method</CardTitle>
              <CardDescription className="text-xs">Charged automatically each cycle.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-12 items-center justify-center rounded-md bg-brand-gradient">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Visa •••• 4242</p>
                  <p className="text-xs text-muted-foreground">Expires 08 / 2028</p>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-xl border-white/10 bg-white/5 font-bold hover:bg-white/10">
                Update card
              </Button>
              <p className="text-xs text-muted-foreground">
                Next charge: <span className="font-bold text-white">$29.00</span> on Jul 1, 2026.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Invoices */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <Card className="glass border-none">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-widest">Invoices</CardTitle>
            <CardDescription className="text-xs">Download receipts for your records.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-xl border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <th className="px-4 py-3">Invoice</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.02]">
                      <td className="px-4 py-3 font-mono text-xs text-white">{inv.id}</td>
                      <td className="px-4 py-3 text-muted-foreground">{inv.date}</td>
                      <td className="px-4 py-3 font-bold text-white">{inv.amount}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground transition-colors hover:text-primary">
                          <Download className="h-3.5 w-3.5" /> PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
