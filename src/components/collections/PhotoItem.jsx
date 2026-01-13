import React from 'react';
import { Star } from 'lucide-react';

export function PhotoItem({ src, rating }) {
    return (
        <div className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden">
            <img src={src} alt="" className="w-full h-auto object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-white/50"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
