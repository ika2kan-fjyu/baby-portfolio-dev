import React from 'react';
import { PhotoItem } from './PhotoItem';
import { collectionsData } from '../../data/mockData';
import { Image as ImageIcon } from 'lucide-react';

export function CollectionsPage() {
    return (
        <div className="px-6 py-8 pb-24 min-h-screen bg-bg-base">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-emerald-100 p-2 rounded-full text-emerald-500">
                    <ImageIcon size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-700">Collections</h1>
                    <p className="text-xs text-slate-400">お気に入りの写真たち</p>
                </div>
            </div>

            <div className="columns-2 gap-4 space-y-4">
                {collectionsData.map(item => (
                    <PhotoItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}
