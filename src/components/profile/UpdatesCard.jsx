import React from 'react';
import { Bell } from 'lucide-react';

export function UpdatesCard({ updates }) {
    if (!updates || updates.length === 0) return null;

    return (
        <div className="mx-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-violet-500">
                <Bell size={18} />
                <span className="font-bold text-sm">最近のアップデート</span>
            </div>
            <div className="flex flex-col gap-3">
                {updates.map((update, index) => (
                    <div key={index} className="flex flex-col gap-1 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-violet-200 before:rounded-full">
                        <span className="text-[10px] text-slate-400 font-bold tracking-wider">
                            {update.date.replace(/-/g, '/')}
                        </span>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            {update.message}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
