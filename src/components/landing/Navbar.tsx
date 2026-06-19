"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Github, Globe, Menu, X, LayoutDashboard, LogOut, User } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient font-black text-white shadow-md shadow-primary/30 transition-transform group-hover:rotate-12">
              N
            </div>
            <span className="font-bold text-xl tracking-tighter">
              NEXUS
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Platform
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Developers
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com" target="_blank">
            <Button variant="ghost" size="icon" className="hover:bg-white/5">
              <Github size={20} />
            </Button>
          </Link>
          
          {session ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 rounded-full px-4">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => signOut()}
                className="text-muted-foreground hover:text-red-400"
              >
                <LogOut className="h-4 w-4" />
              </Button>
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-bold">
                {session.user.name?.charAt(0) || "U"}
              </div>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="font-bold">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="rounded-full bg-brand-gradient px-6 font-bold shadow-md shadow-primary/30 transition-all hover:brightness-110">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-white/10 p-4 space-y-4"
        >
          <Link href="#features" className="block text-lg font-medium">Features</Link>
          <Link href="#pricing" className="block text-lg font-medium">Pricing</Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link href="/login">
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="w-full bg-brand-gradient font-bold">Get Started</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
