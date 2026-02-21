"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, LayoutDashboard, Info, Home, ShieldCheck } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Verify', href: '/', icon: ShieldCheck },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'How It Works', href: '/about', icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-navy text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-saffron p-1.5 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-navy" />
            </div>
            <span className="text-xl font-bold tracking-tight">BIS Saathi</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1.5 px-3 py-2 rounded-md transition-all duration-200",
                    isActive ? "text-saffron bg-white/10" : "hover:text-saffron hover:bg-white/5"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
             {/* Mobile menu would go here, keeping it simple for now */}
             <button className="p-2 rounded-md hover:bg-white/10">
                <Search className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
