import React from 'react';
import { cn } from '../../lib/utils';
import { Lock } from 'lucide-react';

export function AchievementItem({ title, date, isUnlocked, icon }) {
    return (
        <div className={cn(
            "aspect-square rounded-3xl flex flex-col items-center justify-center p-2 transition-all relative",
            isUnlocked ? "bg-white shadow-sm" : "bg-slate-100/50"
        )}>
            <div className={cn(
                "text-4xl mb-2 transition-all",
                isUnlocked ? "" : "grayscale opacity-30 blur-[1px]"
            )}>
                {icon}
            </div>

            <h3 className={cn(
                "text-xs font-bold text-center line-clamp-2",
                isUnlocked ? "text-slate-700" : "text-slate-400"
            )}>
                {title}
            </h3>

            {isUnlocked ? (
                <span className="text-[10px] text-amber-500 font-bold mt-1">{date}</span>
            ) : (
                <div className="absolute top-2 left-2">
                    <Lock className="text-slate-300 opacity-50" size={24} />
                </div>
            )}

            {isUnlocked && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-theme-yellow ring-2 ring-white" />
            )}
        </div>
    );
}
