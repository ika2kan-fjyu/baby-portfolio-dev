import React from 'react';
import { cn } from '../../lib/utils';

export function AgeFilter({ activeAge, onSelect }) {
    const ages = [0, 1, 2, 3];

    return (
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {ages.map(age => (
                <button
                    key={age}
                    onClick={() => onSelect(age)}
                    className={cn(
                        "px-5 py-2 rounded-full whitespace-nowrap transition-colors text-sm font-bold border",
                        activeAge === age
                            ? "bg-theme-lavender border-theme-lavender text-violet-700"
                            : "bg-white border-slate-200 text-slate-400"
                    )}
                >
                    {age} 歳
                </button>
            ))}
        </div>
    );
}
