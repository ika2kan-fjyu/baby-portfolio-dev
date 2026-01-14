import React, { useState } from 'react';
import { ArtFrame } from './ArtFrame';
import { AgeFilter } from './AgeFilter';
import { worksData } from '../../data/mockData';
import { Palette } from 'lucide-react';

export function WorksPage() {
    const [activeAge, setActiveAge] = useState(0);

    const filteredWorks = worksData.filter(work => work.age === activeAge);

    return (
        <div className="px-6 py-8 pb-24 min-h-screen bg-bg-base">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-violet-100 p-2 rounded-full text-violet-500">
                    <Palette size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-700">Works</h1>
                    <p className="text-xs text-slate-400">小さな画伯の美術館</p>
                </div>
            </div>

            <AgeFilter activeAge={activeAge} onSelect={setActiveAge} color="purple" />

            <div className="mt-6">
                {filteredWorks.map(work => (
                    <ArtFrame key={work.id} {...work} />
                ))}

                {filteredWorks.length === 0 && (
                    <div className="text-center py-20 text-slate-400 text-sm">
                        {activeAge}歳の作品はまだありません
                    </div>
                )}
            </div>
        </div>
    );
}
