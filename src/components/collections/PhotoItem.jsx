import React from 'react';

export function PhotoItem({ src, onClick }) {
    return (
        <div
            onClick={onClick}
            className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-200 active:scale-95"
        >
            <img src={src} alt="" className="w-full h-auto object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
}
