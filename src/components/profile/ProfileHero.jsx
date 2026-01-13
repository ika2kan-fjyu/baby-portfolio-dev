import React from 'react';

export function ProfileHero({ name, imageUrl }) {
    return (
        <div className="relative pt-12 pb-24 overflow-hidden rounded-b-[3rem] bg-theme-blue/30">
            {/* Decorative blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-[-10%] w-48 h-48 bg-blue-200/40 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md text-xl">
                        👶
                    </div>
                </div>

                <h1 className="mt-4 text-2xl font-bold text-slate-700 tracking-wide text-center">
                    {name}
                </h1>
                <div className="mt-1 w-8 h-1 bg-theme-blue rounded-full opacity-50" />
            </div>
        </div>
    );
}
