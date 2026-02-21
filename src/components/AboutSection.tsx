"use client";
import { ShieldCheck, Search, FileWarning, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const steps = [
    {
      title: "Locate ISI Mark",
      desc: "Find the ISI mark on the product packaging. Look for the 'CM/L' followed by a 7 or 8-digit number.",
      icon: Search,
      color: "blue"
    },
    {
      title: "Verify Instantly",
      desc: "Enter the code in our portal. We query the official (mock) BIS registry to check license validity.",
      icon: ShieldCheck,
      color: "saffron"
    },
    {
      title: "Report if Invalid",
      desc: "If the product is expired, suspended, or not found, generate a formal complaint draft with just one click.",
      icon: FileWarning,
      color: "red"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-navy mb-4">How BIS Saathi Protects You</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          BIS certification ensures that products meet specific safety and quality standards set by the Indian government.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300 ${
                  step.color === 'blue' ? 'bg-navy' : 
                  step.color === 'saffron' ? 'bg-saffron' : 'bg-red-600'
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-navy mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-6 flex items-center text-sm font-bold text-navy/40 uppercase tracking-widest">
                <span>Step 0{idx + 1}</span>
                <div className="flex-grow ml-4 h-px bg-slate-100"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-saffron/10 px-4 py-2 rounded-full border border-saffron/20">
            <HelpCircle className="w-4 h-4 text-saffron" />
            <span className="text-xs font-bold text-saffron uppercase tracking-widest">Did you know?</span>
          </div>
          <h3 className="text-4xl font-extrabold text-navy">Why BIS Certification Matters?</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            ISI marks are mandatory for several products like electrical appliances, helmets, pressure cookers, and infant foods. 
            Using non-standard products can lead to serious safety hazards, including fires, explosions, or health issues.
          </p>
          <div className="space-y-4">
            {[
              "Mandatory for core safety products",
              "Ensures quality and performance",
              "Protects consumer rights",
              "Facilitates legal action against counterfeiters"
            ].map(item => (
              <div key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
           <div className="aspect-video bg-navy rounded-[3rem] shadow-3xl flex items-center justify-center p-12 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-blue-800 opacity-50"></div>
              <div className="grid grid-cols-2 gap-4 relative z-10 w-full">
                 <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 aspect-square flex flex-col items-center justify-center text-white text-center">
                   <ShieldCheck className="w-12 h-12 mb-2 text-saffron" />
                   <p className="font-bold">Authentic</p>
                 </div>
                 <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 aspect-square flex flex-col items-center justify-center text-white text-center transform translate-y-8">
                   <FileWarning className="w-12 h-12 mb-2 text-red-400" />
                   <p className="font-bold">Fraud Alert</p>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
};
