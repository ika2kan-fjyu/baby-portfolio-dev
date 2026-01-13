import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MobileLayout } from './layouts/MobileLayout';
import { ProfileHero } from './components/profile/ProfileHero';
import { StatsCard } from './components/profile/StatsCard';
import { IdentityCard } from './components/profile/IdentityCard';
import { profileData } from './data/mockData';
import profileImage from './assets/profileImage.jpg';

const Profile = () => {
  const birthDate = new Date(profileData.birthDate);
  const today = new Date();

  // 生後日数の計算
  const diffTime = Math.abs(today - birthDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
  // 月齢の計算（簡易的な例）
  let months = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
  if (today.getDate() < birthDate.getDate()) {
    months--;
  }
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const ageString = years > 0 ? `${years}歳${remainingMonths}ヶ月` : `${remainingMonths}ヶ月`;
  return (
    <div className="min-h-full pb-20">
      <ProfileHero
        name={profileData.name}
        imageUrl={profileImage}
      />

      <div className="px-6 -mt-8 relative z-20">
        <div className="flex justify-between gap-3">
          <StatsCard type="height" value={profileData.currentStats.height} />
          <StatsCard type="weight" value={profileData.currentStats.weight} />
          <StatsCard
            type="age"
            value={
              <div className="flex flex-col items-center leading-tight">
                <span>{ageString}</span>
                <span className="text-[10px] text-slate-400 font-normal mt-0.5">
                  生後{diffDays}日
                </span>
              </div>
            }
          />
        </div>
      </div>

      <div className="mt-8">
        <IdentityCard
          likes={profileData.likes}
          dislikes={profileData.dislikes}
          personality={profileData.personality}
        />
      </div>

      <div className="h-10" /> {/* Spacer */}
    </div>
  );
};

import { MemoryCard } from './components/memories/MemoryCard';
import { TimelineContainer } from './components/memories/TimelineContainer';
import { memoriesData } from './data/mockData';

const Memories = () => (
  <TimelineContainer>
    {memoriesData.map(memo => (
      <MemoryCard key={memo.id} {...memo} />
    ))}
  </TimelineContainer>
);

import { AchievementsPage } from './components/achievements/AchievementsPage';

const Achievements = () => <AchievementsPage />;
import { CollectionsPage } from './components/collections/CollectionsPage';

const Collections = () => <CollectionsPage />;

import { WorksPage } from './components/works/WorksPage';

const Works = () => <WorksPage />;


function App() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
}

export default App;

