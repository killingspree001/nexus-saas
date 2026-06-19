"use client";

import { motion } from "framer-motion";
import { 
  Plus, 
  Search, 
  MoreVertical, 
  ExternalLink,
  Folder,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock data for now since we don't have a live DB yet
const projects = [
  { id: "1", name: "Nexus SaaS", description: "The ultimate boilerplate for elite developers.", status: "active", createdAt: "2 days ago" },
  { id: "2", name: "CryptoPulse", description: "Real-time analytics for decentralized finance.", status: "active", createdAt: "1 week ago" },
  { id: "3", name: "Mothersaid Rebuild", description: "Redesigning the non-profit digital experience.", status: "completed", createdAt: "1 month ago" },
];

export default function ProjectsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">Projects</h1>
          <p className="text-muted-foreground text-sm font-medium mt-1">
            Manage your infrastructure and application environments.
          </p>
        </div>
        <Button className="rounded-xl bg-brand-gradient px-6 font-bold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110">
          <Plus className="mr-2 h-4 w-4" />
          Create New Project
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search projects..." 
            className="pl-10 glass border-none h-12 rounded-xl focus-visible:ring-primary"
          />
        </div>
        <button className="glass px-6 h-12 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">
          Filter
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass border-none group cursor-pointer hover:border-primary/50 transition-all overflow-hidden">
              <div className="h-1.5 w-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-primary" />
                    <CardTitle className="text-lg font-black uppercase tracking-tight">{project.name}</CardTitle>
                  </div>
                  <CardDescription className="text-xs font-medium text-muted-foreground line-clamp-1">
                    {project.description}
                  </CardDescription>
                </div>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mt-2">
                   <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${project.status === 'active' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{project.status}</span>
                   </div>
                   <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock size={12} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{project.createdAt}</span>
                   </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white/[0.02] border-t border-white/5 flex justify-between items-center py-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">View Analytics</span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-white transition-colors" />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
        
        {/* Empty State / Add New Card */}
        <button className="border-2 border-dashed border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-white/5 transition-all group min-h-[220px]">
           <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all">
              <Plus size={24} />
           </div>
           <span className="text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">Add New Module</span>
        </button>
      </div>
    </div>
  );
}
