import { AboutSection } from "@/components/AboutSection";
import { Info, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-slate-50 py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-navy/5 px-4 py-2 rounded-full mb-6 border border-navy/10">
            <Info className="w-4 h-4 text-navy" />
            <span className="text-xs font-bold text-navy uppercase tracking-widest">About the Initiative</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-navy mb-8 tracking-tighter">
            Ensuring Standards, <br />
            <span className="text-saffron">Empowering Millions.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            BIS Saathi is a community-driven platform designed to eliminate fake and non-compliant products from the Indian market.
          </p>
        </div>
      </div>

      <AboutSection />

      <div className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black text-navy mb-4">Official BIS Contact</h3>
          <p className="text-slate-500">For direct official queries, reach out to regional centers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: "Phone", val: "+91 11 2323 0131", icon: Phone },
             { label: "Email", val: "complaints@bis.gov.in", icon: Mail },
             { label: "Headquarters", val: "Manak Bhawan, Delhi", icon: MapPin },
           ].map((contact, i) => (
             <div key={i} className="flex flex-col items-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-navy/20 transition group">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-white transition-colors">
                  <contact.icon className="w-6 h-6" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{contact.label}</p>
                <p className="text-sm font-bold text-navy text-center">{contact.val}</p>
             </div>
           ))}
        </div>
      </div>
      
      {/* FAQ Sneak Peek */}
      <div className="bg-navy py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <ShieldCheck className="w-16 h-16 text-saffron mx-auto mb-8 animate-bounce" />
           <h2 className="text-4xl font-black mb-6">Join the Quality Revolution</h2>
           <p className="text-white/60 mb-10 leading-relaxed text-lg">
             Your single verification can prevent a potential accident. Be a Saathi today.
           </p>
           <button className="bg-saffron text-navy px-12 py-5 rounded-2xl font-black hover:scale-105 transition shadow-2xl shadow-saffron/20">
              Get Started Now
           </button>
        </div>
      </div>
    </main>
  );
}
