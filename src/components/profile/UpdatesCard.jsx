import React from 'react';
import { Rocket } from 'lucide-react';

export function UpdatesCard({ updates }) {
    if (!updates || updates.length === 0) return null;

    return (
        <div className="mx-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-violet-500">
                <Rocket size={18} />
                <span className="font-bold text-sm">更新情報</span>
            </div>
            <div className="flex flex-col gap-2">
                {updates.map((update, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 font-bold shrink-0">
                            {update.date.replace(/-/g, '/')}
                        </span>
                        <p className="text-sm text-slate-700 truncate">
                            {update.message}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
