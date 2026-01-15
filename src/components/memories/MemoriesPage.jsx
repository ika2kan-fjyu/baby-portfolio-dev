
import React, { useState } from 'react';
import { MemoryCard } from './MemoryCard';
import { memoriesData, profileData } from '../../data/data';
import { AgeFilter } from '../works/AgeFilter';
import { Sparkles } from 'lucide-react';

export const MemoriesPage = () => {
    const [activeAge, setActiveAge] = useState(0);

    const getAge = (dateString) => {
        const birthDate = new Date(profileData.birthDate);
        const targetDate = new Date(dateString);
        let age = targetDate.getFullYear() - birthDate.getFullYear();
        const m = targetDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && targetDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const filteredMemories = memoriesData.filter(memo => {
        const age = getAge(memo.date);
        // Treat negative age (prenatal) as 0 for this simple filter, 
        // or just strict matching. 
        // WorksPage AgeFilter has 0, 1, 2, 3.
        // If age is -1, it won't trigger activeAge === 0.
        // Let's coerce < 0 to 0 so they show up in "0歳".
        const effectiveAge = age < 0 ? 0 : age;
        return effectiveAge === activeAge;
    });

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

            <div className="mb-6 pl-2">
                <AgeFilter activeAge={activeAge} onSelect={setActiveAge} color="pink" />
            </div>

            <div className="pl-2">
                {filteredMemories.map(memo => (
                    <MemoryCard key={memo.id} {...memo} />
                ))}

                {filteredMemories.length === 0 && (
                    <div className="text-center py-20 text-slate-400 text-sm">
                        {activeAge}歳の思い出はまだありません
                    </div>
                )}
            </div>
            <div className="h-24"></div>
        </div>
    );
};
