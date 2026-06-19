"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient font-black text-white shadow-md shadow-primary/30 transition-transform group-hover:rotate-12">
                N
              </div>
              <span className="font-bold text-2xl tracking-tighter">NEXUS</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-8">
              The mission-critical foundation for high-performance SaaS platforms. 
              Built for developers who refuse to settle for average.
            </p>
            <div className="flex items-center gap-4">
              {[Github, Twitter, Linkedin, Globe].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:scale-110 transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} NEXUS TECHNOLOGY GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">System Status: Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
