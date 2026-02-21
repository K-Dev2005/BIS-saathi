import { GamificationDashboard } from "@/components/GamificationDashboard";
import { Award, TrendingUp, ShieldCheck } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-black text-navy mb-2">Your Impact Dashboard</h1>
              <p className="text-slate-500 font-medium">Tracking your contribution to India's quality standards.</p>
            </div>
            <div className="flex gap-4">
               <div className="bg-green-50 px-4 py-2 rounded-xl border border-green-100 flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-green-700">System Online</span>
               </div>
               <div className="bg-navy text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-saffron" />
                  <span>Growth: +42%</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
             {[
               { label: "Level", val: "Gold", sub: "Top 5%", icon: Award },
               { label: "Reports", val: "12", sub: "Last 30 days", icon: ShieldCheck },
               { label: "Community", val: "1.2k", sub: "Peers helped", icon: TrendingUp },
               { label: "Points", val: "220", sub: "Until next rank", icon: TrendingUp },
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start space-x-4">
                  <div className="bg-slate-50 p-2 rounded-lg">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-black text-navy leading-tight">{item.val}</p>
                    <p className="text-[10px] font-medium text-slate-400">{item.sub}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      <GamificationDashboard />
      
      <div className="max-w-7xl mx-auto px-4 pb-20 mt-8">
        <div className="bg-navy rounded-[3rem] p-12 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-saffron/20 blur-[120px]"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                 <h2 className="text-4xl font-black mb-4 tracking-tight">Ready to do more?</h2>
                 <p className="text-white/60 text-lg leading-relaxed">
                    Volunteer as a Field Quality Inspector to help BIS perform onsite audits in your city. Earn 500+ points and premium digital certifications.
                 </p>
              </div>
              <button className="bg-saffron text-navy px-10 py-5 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl shadow-saffron/20 whitespace-nowrap">
                 Apply for Field Audit
              </button>
           </div>
        </div>
      </div>
    </main>
  );
}
