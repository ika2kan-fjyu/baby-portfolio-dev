import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, BookHeart, Trophy, Image, Palette } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
    { to: '/', icon: User, label: 'Profile', color: 'text-theme-blue' },
    { to: '/memories', icon: BookHeart, label: 'Memories', color: 'text-theme-pink' },
    { to: '/achievements', icon: Trophy, label: 'Achievements', color: 'text-theme-yellow' },
    { to: '/collections', icon: Image, label: 'Collections', color: 'text-theme-mint' },
    { to: '/works', icon: Palette, label: 'Works', color: 'text-theme-lavender' },
];

export function Navigation() {
    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4">
            <div className="bg-white/90 backdrop-blur-md border border-white/40 shadow-xl shadow-slate-200/50 rounded-full px-6 py-4 flex justify-between items-center">
                {navItems.map(({ to, icon: Icon, label, color }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            cn(
                                "flex flex-col items-center gap-1 transition-all duration-300",
                                isActive ? "scale-110 -translate-y-1" : "opacity-50 hover:opacity-80 scale-100"
                            )
                        }
                    >
                        {({ isActive }) => {
                            // Map theme colors to specific hex or tailwind classes for active state
                            const activeColorClass = {
                                'Profile': 'text-sky-400',
                                'Memories': 'text-pink-400',
                                'Achievements': 'text-amber-400',
                                'Collections': 'text-emerald-400',
                                'Works': 'text-violet-400'
                            }[label];

                            return (
                                <div className="relative p-1 flex flex-col items-center">
                                    <Icon
                                        size={26}
                                        className={cn(
                                            "transition-all duration-300",
                                            isActive ? cn("stroke-[2.5px]", activeColorClass) : "text-slate-300 stroke-[1.5px]"
                                        )}
                                    />
                                    {isActive && (
                                        <div className={cn("absolute -bottom-2 w-1 h-1 rounded-full", activeColorClass.replace('text-', 'bg-'))} />
                                    )}
                                </div>
                            );
                        }}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
