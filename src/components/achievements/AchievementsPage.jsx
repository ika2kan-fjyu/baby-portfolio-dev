import React, { useState } from 'react';
import { CategoryTabs } from './CategoryTabs';
import { AchievementItem } from './AchievementItem';
import { achievementsData } from '../../data/data';
import { Trophy } from 'lucide-react';

export function AchievementsPage() {
    const [activeCategory, setActiveCategory] = useState('body');

    const filteredAchievements = achievementsData.filter(
        item => item.category === activeCategory
    );

    return (
        <div className="px-6 py-8 pb-24 min-h-screen bg-bg-base">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-full bg-amber-100 text-amber-500">
                    <Trophy size={32} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-700">Achievements</h1>
                    <p className="text-xs text-slate-400">成長の記録</p>
                </div>
            </div>

            <CategoryTabs activeCategory={activeCategory} onSelect={setActiveCategory} />

            <div className="grid grid-cols-3 gap-3">
                {filteredAchievements.map(item => (
                    <AchievementItem key={item.id} {...item} />
                ))}
            </div>

            {/* Placeholder for empty state */}
            {filteredAchievements.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-sm">
                    まだ記録がありません
                </div>
            )}
        </div>
    );
}
