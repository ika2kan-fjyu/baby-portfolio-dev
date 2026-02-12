export const profileData = {
    name: "太郎 (Taro)",
    birthDate: "2026-01-01",
    currentStats: {
        height: { value: "58.4 cm", date: "2026-04-20" },
        weight: { value: "6.0 kg", date: "2026-04-20" },
        age: "0歳4ヶ月"
    },
    likes: ["しましまぐるぐる"],
    dislikes: ["ブロッコリー", "着替え"],
    personality: "よだれが増えてきた。手をおしゃぶりがわりに吸うのが好き。"
};

export const achievementsData = [
    {
        id: "first-step",
        category: "activity",
        title: "初めての一歩",
        date: "2025-05-10",
        isUnlocked: true,
        icon: "👣"
    },
    {
        id: "first-word",
        category: "language",
        title: "パパと言えた",
        date: "2025-06-20",
        isUnlocked: true,
        icon: "🗣️"
    },
    {
        id: "spoons",
        category: "food",
        title: "スプーン食べ",
        date: "",
        isUnlocked: false,
        icon: "🥄"
    },
    {
        id: "run",
        category: "activity",
        title: "かけっこ",
        date: "",
        isUnlocked: false,
        icon: "🏃‍♀️"
    }
];

export const memoriesData = [
    {
        id: 1,
        date: "2025-12-24",
        title: "クリスマス",
        description: "初めてのサンタさんに大泣き！でもプレゼントは離しませんでした。",
        tags: ["イベント", "冬"],
        image: "https://images.unsplash.com/photo-1543332143-4e8c27e3256f?q=80&w=340"
    },
    {
        id: 2,
        date: "2025-08-15",
        title: "海デビュー",
        description: "波にびっくりしてパパにしがみついていました。",
        tags: ["夏", "旅行"],
        image: ""
    }
];

export const collectionsData = [
    { id: 1, src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=300", title: "お気に入りの積み木", tags: ["おもちゃ"] },
    { id: 2, src: "https://images.unsplash.com/photo-1543332143-4e8c27e3256f?q=80&w=300", title: "くまのぬいぐるみ", tags: ["おもちゃ", "ぬいぐるみ"] },
    { id: 3, src: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=300", title: "はじめての絵本", tags: ["本"] },
    { id: 4, src: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=300", title: "音の出るおもちゃ", tags: ["おもちゃ", "音楽"] },
    { id: 5, src: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=300", title: "動物図鑑", tags: ["本"] },
    { id: 6, src: "https://images.unsplash.com/photo-1505693444086-7a1ebce51c46?q=80&w=300", title: "お出かけ用バギー", tags: ["おもちゃ"] },
];

import work1 from '../assets/works/work1.png';
import work2 from '../assets/works/work2.png';
import work3 from '../assets/works/work3.png';
import work4 from '../assets/works/work4.png';

export const worksData = [
    { id: 1, src: work1, title: "初めての殴り書き", age: 0, date: "2024-12-10" },
    { id: 2, src: work2, title: "手形アート", age: 1, date: "2025-05-15" },
    { id: 3, src: work3, title: "謎の生物", age: 1, date: "2025-08-20" },
    { id: 4, src: work4, title: "ママの顔", age: 2, date: "2026-06-01" },
];

