import React from 'react';
import { Tag } from 'lucide-react';

export function MemoryCard({ date, title, description, tags, image }) {
    return (
        <div className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline Dot & Line */}
            <div className="absolute left-0 top-0 h-full w-px bg-theme-pink/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-theme-pink ring-4 ring-white" />
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-shadow">
                {image && (
                    <div className="h-48 overflow-hidden">
                        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                )}
                <div className="p-5">
                    <div className="text-xs font-bold text-pink-400 mb-1 tracking-wider">{date}</div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <div key={tag} className="flex items-center gap-1 text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                                <Tag size={12} />
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
