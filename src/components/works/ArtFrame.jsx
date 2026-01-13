import React from 'react';

export function ArtFrame({ src, title, date }) {
    return (
        <div className="bg-white p-4 pb-8 rounded-sm shadow-xl shadow-slate-200 mb-8 max-w-sm mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="aspect-[4/3] bg-slate-50 overflow-hidden mb-4 border border-slate-100 shadow-inner">
                <img src={src} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
                <h3 className="font-rounded font-bold text-slate-700 text-lg">{title}</h3>
                <p className="text-xs text-slate-400 mt-1 font-mono tracking-widest">{date}</p>
            </div>
        </div>
    );
}
