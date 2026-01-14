import React, { useState, useMemo } from 'react';
import { PhotoItem } from './PhotoItem';
import { collectionsData } from '../../data/mockData';
import { Image as ImageIcon, X } from 'lucide-react';

export function CollectionsPage() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTag, setActiveTag] = useState("All");

    // Extract unique tags
    const allTags = useMemo(() => {
        const tags = new Set(collectionsData.flatMap(item => item.tags));
        return ["All", ...Array.from(tags)];
    }, []);

    // Filter items
    const filteredItems = useMemo(() => {
        if (activeTag === "All") return collectionsData;
        return collectionsData.filter(item => item.tags.includes(activeTag));
    }, [activeTag]);

    return (
        <div className="px-6 py-8 pb-24 min-h-screen bg-bg-base relative">
            <div className="flex items-center gap-2 mb-8 pl-2">
                <div className="bg-emerald-100 p-2 rounded-full text-emerald-500">
                    <ImageIcon size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-700">Collections</h1>
                    <p className="text-xs text-slate-400">赤ちゃんのお気に入りグッズ</p>
                </div>
            </div>

            {/* Tag Filter */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`
                            px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                            ${activeTag === tag
                                ? "bg-emerald-500 text-white shadow-md shadow-emerald-200"
                                : "bg-white text-slate-500 hover:bg-slate-50"}
                        `}
                    >
                        {tag === "All" ? "すべて" : tag}
                    </button>
                ))}
            </div>

            <div className="columns-2 gap-4 space-y-4">
                {filteredItems.map(item => (
                    <PhotoItem
                        key={item.id}
                        {...item}
                        onClick={() => setSelectedItem(item)}
                    />
                ))}
            </div>

            {/* Soft Popup */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedItem(null)}
                    />
                    <div className="relative bg-white w-full max-w-sm rounded-[40px] p-6 shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute right-4 top-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        <div className="aspect-square rounded-[32px] overflow-hidden mb-6 shadow-md">
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                {selectedItem.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {selectedItem.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
