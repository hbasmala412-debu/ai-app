"use client";
import { useState, useEffect } from "react";

const originalCards = [
  { id: 1, img: "/images/ai5.jpg", match: 0 },
  { id: 2, img: "/images/ai42.png", match: 1 },
  { id: 3, img: "/images/ai41.jpg", match: 2 },
  { id: 4, img: "/images/ai52.jpg", match: 3 },
  { id: 5, img: "/images/ai9.jpg", match: 4 },
];

export default function ActivityPage() {
  const [cards, setCards] = useState([]);
  const [dragged, setDragged] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const labels = [
    "من تطبيقات الذكاء الاصطناعي",
    "من مجالات الذكاء الاصطناعي",
    "الذكاء الاصطناعي الضيق",
    "من عيوب الذكاء الاصطناعي",
    "من مميزات الذكاء الاصطناعي",
  ];

  // 🔀 خلط الكروت
  const shuffleCards = () => {
    const shuffled = [...originalCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setAnswers({});
    setResult(null);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleDrop = (index) => {
    if (dragged !== null) {
      setAnswers({ ...answers, [index]: dragged });
      setDragged(null);
    }
  };

  const checkAnswers = () => {
    let score = 0;
    Object.keys(answers).forEach((key) => {
      const card = originalCards.find((c) => c.id === answers[key]);
      if (card.match == key) score++;
    });
    setResult(score);
  };

  return (
    <div className="max-w-6xl mx-auto pt-24 pb-16 px-6 text-right">
      
      {/* العنوان */}
      <h1 className="text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">
        نشاط تفاعلي  (اسحب ووصل)
      </h1>

      {/* الكروت */}
      <div className="flex justify-center gap-6 flex-wrap mb-12">
        {cards.map((card) => {
          // لو الكارت اتحط خلاص نخفيه
          const isUsed = Object.values(answers).includes(card.id);

          if (isUsed) return null;

          return (
            <div
              key={card.id}
              draggable
              onDragStart={() => setDragged(card.id)}
              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing hover:scale-110 transition"
            >
              <img
                src={card.img}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* أماكن الإسقاط */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
        {labels.map((label, index) => (
          <div key={index} className="text-center">
            
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className="h-32 border-2 border-dashed rounded-2xl flex items-center justify-center bg-white/60 dark:bg-slate-800/60 backdrop-blur hover:border-indigo-500 transition relative"
            >
              {answers[index] ? (
                <img
                  src={
                    originalCards.find((c) => c.id === answers[index]).img
                  }
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <span
  className="text-sm"
  style={{ color: "var(--text-primary)", opacity: 0.5 }}
>
  اسحب هنا
</span>
              )}
            </div>

            <p
  className="mt-4 font-bold text-sm md:text-base"
  style={{ color: "var(--text-primary)", opacity: 0.9 }}
>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* الأزرار */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        
        <button
          onClick={checkAnswers}
          className="px-10 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:scale-105 transition"
        >
          تحقق من الإجابات
        </button>

        <button
          onClick={shuffleCards}
          className="px-10 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-black transition"
        >
          إعادة النشاط 🔄
        </button>

      </div>

      {/* النتيجة */}
      {result !== null && (
        <div className={`mt-10 text-center text-2xl font-bold ${
          result >= 4 ? "text-green-500" : "text-red-500"
        }`}>
          نتيجتك: {result} / 5 🎯
        </div>
      )}
    </div>
  );
}