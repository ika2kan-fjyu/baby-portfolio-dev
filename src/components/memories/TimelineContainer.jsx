import React from 'react';
import { Sparkles } from 'lucide-react';

export function TimelineContainer({ children }) {
    return (
        <div className="px-6 py-8 min-h-screen bg-bg-base">
            <div className="flex items-center gap-2 mb-8 pl-2">
                <div className="bg-pink-100 p-2 rounded-full shadow-sm text-pink-400">
                    <Sparkles size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-700">Memories</h1>
                    <p className="text-xs text-slate-400">大切な思い出の記録</p>
                </div>
            </div>
            <div className="pl-2">
                {children}
            </div>
            <div className="h-24"></div>
        </div>
    );
}
