"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Shield, Trash2, Mail, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { toast } from "sonner";

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full p-0.5 transition-colors ${
        enabled ? "bg-brand-gradient" : "bg-white/10"
      }`}
    >
      <motion.div
        animate={{ x: enabled ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="h-5 w-5 rounded-full bg-white shadow"
      />
    </button>
  );
}

const prefs = [
  { key: "product", icon: Mail, label: "Product updates", desc: "New features and improvements.", default: true },
  { key: "security", icon: Shield, label: "Security alerts", desc: "Sign-ins and key changes.", default: true },
  { key: "usage", icon: Bell, label: "Usage warnings", desc: "Notify at 80% of plan quota.", default: false },
  { key: "marketing", icon: Smartphone, label: "Marketing emails", desc: "Tips, offers, and news.", default: false },
];

export default function SettingsPage() {
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(prefs.map((p) => [p.key, p.default]))
  );

  const flip = (key: string) => setToggles((t) => ({ ...t, [key]: !t[key] }));

  return (
    <div className="space-y-8 p-8">
      <PageHeader title="Settings" subtitle="Manage your profile, preferences, and account security." />

      {/* Profile */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass border-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <CardTitle className="text-sm font-bold uppercase tracking-widest">Profile</CardTitle>
            </div>
            <CardDescription className="text-xs">This information is shown on your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-2xl font-black text-white shadow-lg shadow-primary/30">
                N
              </div>
              <div>
                <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 font-bold hover:bg-white/10">
                  Change avatar
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB.</p>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Full name</Label>
                <Input id="name" defaultValue="Nexus Admin" className="h-11 rounded-xl border-white/10 bg-white/5 px-4 focus-visible:ring-primary/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</Label>
                <Input id="email" type="email" defaultValue="admin@nexussaas.io" className="h-11 rounded-xl border-white/10 bg-white/5 px-4 focus-visible:ring-primary/50" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => toast.success("Profile saved")}
                className="rounded-xl bg-brand-gradient font-bold text-white shadow-lg shadow-primary/25 hover:brightness-110"
              >
                Save changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Notifications */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card className="glass border-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-primary" />
              <CardTitle className="text-sm font-bold uppercase tracking-widest">Notifications</CardTitle>
            </div>
            <CardDescription className="text-xs">Choose what we email you about.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {prefs.map((p) => (
              <div key={p.key} className="flex items-center justify-between rounded-xl px-2 py-3 transition-colors hover:bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{p.label}</p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
                <Toggle enabled={toggles[p.key]} onChange={() => flip(p.key)} />
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Security */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <Card className="glass border-none">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <CardTitle className="text-sm font-bold uppercase tracking-widest">Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div>
                <p className="text-sm font-bold text-white">Password</p>
                <p className="text-xs text-muted-foreground">Last changed 3 months ago.</p>
              </div>
              <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 font-bold hover:bg-white/10">Update</Button>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold text-white">
                  Two-factor authentication
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-emerald-400">Enabled</span>
                </p>
                <p className="text-xs text-muted-foreground">Authenticator app · added Apr 2026.</p>
              </div>
              <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 font-bold hover:bg-white/10">Manage</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Danger zone */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="border-destructive/20 bg-destructive/[0.03]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-red-400" />
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-red-400">Danger Zone</CardTitle>
            </div>
            <CardDescription className="text-xs">Irreversible and destructive actions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-white">Delete account</p>
                <p className="text-xs text-muted-foreground">Permanently remove your account and all data.</p>
              </div>
              <Button
                onClick={() => toast.error("Account deletion is disabled in the demo")}
                className="rounded-xl bg-destructive/15 font-bold text-red-400 hover:bg-destructive/25"
              >
                Delete account
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
