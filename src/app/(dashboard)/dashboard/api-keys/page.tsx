"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Key, Plus, Copy, Eye, EyeOff, Trash2, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { toast } from "sonner";

type ApiKey = {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  env: "Production" | "Development";
};

const initialKeys: ApiKey[] = [
  { id: "1", name: "Production Server", key: "nxs_live_a1b2c3d4e5f6g7h8i9j0k1l2", created: "Mar 2, 2026", lastUsed: "2 minutes ago", env: "Production" },
  { id: "2", name: "Staging Pipeline", key: "nxs_live_z9y8x7w6v5u4t3s2r1q0p9o8", created: "Apr 14, 2026", lastUsed: "1 hour ago", env: "Production" },
  { id: "3", name: "Local Dev (Maria)", key: "nxs_test_m1n2o3p4q5r6s7t8u9v0w1x2", created: "May 28, 2026", lastUsed: "3 days ago", env: "Development" },
];

function mask(key: string) {
  return key.slice(0, 9) + "••••••••••••••••" + key.slice(-4);
}

export default function ApiKeysPage() {
  const [keys, setKeys] = useState(initialKeys);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) =>
    setRevealed((r) => ({ ...r, [id]: !r[id] }));

  const copy = async (key: string) => {
    try {
      await navigator.clipboard.writeText(key);
      toast.success("API key copied to clipboard");
    } catch {
      toast.error("Couldn't copy to clipboard");
    }
  };

  const revoke = (id: string) => {
    setKeys((k) => k.filter((x) => x.id !== id));
    toast.success("API key revoked");
  };

  const createKey = () => toast.success("New API key generated (demo)");

  return (
    <div className="space-y-8 p-8">
      <PageHeader title="API Keys" subtitle="Authenticate requests to the Nexus API.">
        <Button
          onClick={createKey}
          className="rounded-xl bg-brand-gradient font-bold text-white shadow-lg shadow-primary/25 hover:brightness-110"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create new key
        </Button>
      </PageHeader>

      {/* Security note */}
      <div className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 p-4">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm text-muted-foreground">
          Keep your keys secret. Never commit them to source control or expose them client-side.
          Compromised keys can be revoked instantly without affecting others.
        </p>
      </div>

      <Card className="glass border-none">
        <CardHeader>
          <CardTitle className="text-sm font-bold uppercase tracking-widest">Active Keys</CardTitle>
          <CardDescription className="text-xs">{keys.length} key{keys.length !== 1 && "s"} in use.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {keys.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No active keys. Create one to get started.
            </p>
          )}
          {keys.map((k, i) => (
            <motion.div
              key={k.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Key className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-bold text-white">{k.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                      k.env === "Production"
                        ? "bg-violet-500/15 text-violet-300"
                        : "bg-amber-500/15 text-amber-300"
                    }`}
                  >
                    {k.env}
                  </span>
                </div>
                <code className="block truncate font-mono text-xs text-muted-foreground">
                  {revealed[k.id] ? k.key : mask(k.key)}
                </code>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Created {k.created} · Last used {k.lastUsed}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => toggleReveal(k.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  title={revealed[k.id] ? "Hide" : "Reveal"}
                >
                  {revealed[k.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => copy(k.key)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  title="Copy"
                >
                  <Copy className="h-4 w-4" />
                </button>
                <button
                  onClick={() => revoke(k.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-red-400"
                  title="Revoke"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
