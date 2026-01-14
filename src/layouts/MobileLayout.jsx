import React from 'react';
import { Navigation } from '../components/Navigation';

export function MobileLayout({ children }) {
    return (
        <div className="min-h-screen bg-bg-base flex justify-center">
            <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative">
                <div className="pb-24 animate-fade-in">
                    {children}
                </div>
                <Navigation />
            </div>
        </div>
    );
}
