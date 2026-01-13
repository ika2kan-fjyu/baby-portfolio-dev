import React from 'react';
import { cn } from '../../lib/utils';
import { MessageCircleIcon, PersonStanding, Gamepad, Soup } from 'lucide-react';

const categories = [
    { id: 'body', label: 'Body', icon: PersonStanding },
    { id: 'language', label: 'Language', icon: MessageCircleIcon },
    { id: 'food', label: 'Food', icon: Soup },
    { id: 'activity', label: 'Activity', icon: Gamepad },
];

export function CategoryTabs({ activeCategory, onSelect }) {
    return (
        <div className="flex justify-center gap-4 mb-8">
            {categories.map(({ id, label, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => onSelect(id)}
                    className={cn(
                        "flex flex-col items-center gap-1 px-4 py-3 rounded-2xl transition-all w-24",
                        activeCategory === id
                            ? "bg-theme-yellow shadow-md text-amber-700 scale-105"
                            : "bg-white text-slate-400 hover:bg-slate-50"
                    )}
                >
                    <Icon size={24} />
                    <span className="text-xs font-bold">{label}</span>
                </button>
            ))}
        </div>
    );
}
