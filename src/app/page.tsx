import { VerificationSection } from "@/components/VerificationSection";
import { ShieldCheck, Award, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfdff]">
      {/* Hero Section */}
      <div className="bg-navy text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-saffron/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20 animate-fade-in">
            <Zap className="w-4 h-4 text-saffron fill-saffron" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Verified Indian Quality</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Trust But <span className="text-saffron italic">Verify.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Every product you use should meet the gold standard of safety. 
            Join thousands of Quality Ambassadors in ensuring compliance across the nation.
          </p>
        </div>
        
        {/* Floating Stats */}
        <div className="max-w-4xl mx-auto px-4 -mb-16 mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 relative z-20">
           {[
             { label: "Products Monitored", val: "50,000+", icon: ShieldCheck },
             { label: "Active Validators", val: "12,400+", icon: Award },
             { label: "Cases Resolved", val: "3,200+", icon: Zap },
           ].map((stat, i) => (
             <div key={i} className={`bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center border border-slate-50 transition-transform hover:scale-105 duration-300 ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
               <stat.icon className="w-8 h-8 text-navy mb-2" />
               <p className="text-2xl font-black text-navy">{stat.val}</p>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="pt-24 pb-20">
        <VerificationSection />
      </div>

      {/* Trust Badges */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Trusted By Indian Institutions</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple mock logos via text */}
             <span className="text-2xl font-black">NITI AAYOG</span>
             <span className="text-2xl font-black">BIS INDIA</span>
             <span className="text-2xl font-black">QUALITY COUNCIL</span>
             <span className="text-2xl font-black">FSSAI WATCH</span>
          </div>
        </div>
      </div>
    </main>
  );
}
