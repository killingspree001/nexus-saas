"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  Settings,
  Activity,
  FolderKanban,
  Key,
} from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-400",
  },
  {
    label: "Projects",
    icon: FolderKanban,
    href: "/projects",
    color: "text-emerald-400",
  },
  {
    label: "Usage",
    icon: Activity,
    href: "/dashboard/usage",
    color: "text-violet-400",
  },
  {
    label: "Billing",
    icon: CreditCard,
    href: "/dashboard/billing",
    color: "text-pink-400",
  },
  {
    label: "API Keys",
    icon: Key,
    href: "/dashboard/api-keys",
    color: "text-orange-400",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    color: "text-zinc-400",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 border-r border-white/5 bg-[#070709] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-12 flex items-center pl-3">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient font-black text-white shadow-md shadow-primary/30">
            N
          </div>
          <h1 className="text-xl font-bold tracking-tighter">NEXUS</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            const active = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group relative flex w-full cursor-pointer items-center justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/5 hover:text-white",
                  active ? "bg-white/10 text-white" : "text-muted-foreground",
                )}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-brand-gradient" />
                )}
                <div className="flex flex-1 items-center">
                  <route.icon
                    className={cn(
                      "mr-3 h-5 w-5 transition-colors",
                      active ? "text-primary" : route.color,
                    )}
                  />
                  {route.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-3 py-2">
         <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-primary">Pro Plan Active</p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
               <div className="h-full w-[65%] rounded-full bg-brand-gradient" />
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">650 / 1000 requests</p>
         </div>
      </div>
    </div>
  );
};
