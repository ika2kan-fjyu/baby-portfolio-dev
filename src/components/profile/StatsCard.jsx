import React from 'react';
import { Ruler, Weight, Calendar } from 'lucide-react';

const icons = {
    height: Ruler,
    weight: Weight,
    age: Calendar,
};

const labels = {
    height: 'Height',
    weight: 'Weight',
    age: 'Age'
};

const colors = {
    height: 'bg-blue-100 text-blue-600',
    weight: 'bg-pink-100 text-pink-600',
    age: 'bg-amber-100 text-amber-600'
};

export function StatsCard({ type, value }) {
    const Icon = icons[type];

    return (
        <div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col items-center justify-center gap-2 aspect-square min-w-[100px] border border-slate-100">
            <div className={`p-2 rounded-full ${colors[type]}`}>
                <Icon size={20} />
            </div>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{labels[type]}</span>
            <span className="text-lg font-bold text-slate-700">{value}</span>
        </div>
    );
}
