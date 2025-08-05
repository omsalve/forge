"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Dumbbell, Bot, Settings } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/workout", icon: Dumbbell, label: "Workout" },
  { href: "/ai", icon: Bot, label: "Ghost AI" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-2 top-1/2 -translate-y-1/2 h-[200px] w-20 flex flex-col items-center justify-between bg-black/70 rounded-full py-6 backdrop-blur-md border border-white/10">
      <div className="flex flex-col items-center gap-6">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className="relative text-white/70 hover:text-white transition"
              title={label}
            >
              {/* Dot removed */}
              <Icon size={20} />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
