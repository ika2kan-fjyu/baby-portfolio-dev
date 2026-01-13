import React from 'react';
import { Heart, Frown, Sparkles } from 'lucide-react';

export function IdentityCard({ likes, dislikes, personality }) {
    return (
        <div className="mx-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6">
            <div>
                <div className="flex items-center gap-2 mb-3 text-pink-500">
                    <Heart size={18} fill="currentColor" />
                    <span className="font-bold text-sm">好きなもの</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {likes.map(like => (
                        <span key={like} className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                            {like}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-3 text-indigo-500">
                    <Sparkles size={18} />
                    <span className="font-bold text-sm">性格・特徴</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed p-4 bg-slate-50 rounded-2xl">
                    {personality}
                </p>
            </div>
        </div>
    );
}
