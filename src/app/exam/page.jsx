"use client";
import { useState } from "react";

export default function Exam() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      q: "ما هو نوع الذكاء الذي يركز على أداء مهمة واحدة محددة؟",
      options: ["الذكاء العام", "الذكاء الضيق", "الذكاء الفائق"],
      ans: 1 
    },
    {
      id: 2,
      q: "من مميزات الذكاء الاصطناعي التي تساعد في المجال الطبي:",
      options: ["زيادة وقت الانتظار", "تشخيص الأمراض بدقة وأسرع", "الاستغناء عن الأطباء تماماً"],
      ans: 1
    },
    {
      id: 3,
      q: "أي من الآتي يعتبر من عيوب الذكاء الاصطناعي؟",
      options: ["توفير الوقت", "تحسين خدمة العملاء", "انتهاك خصوصية البيانات"],
      ans: 2
    },
    {
      id: 4,
      q: "تعتبر السيارات ذاتية القيادة مثالاً شهيراً على:",
      options: ["تطبيقات الذكاء الاصطناعي", "أنواع الذاكرة البشرية", "تطوير الهواتف المحمولة"],
      ans: 0
    },
    {
      id: 5,
      q: "ما هو المجال الذي يهدف لفهم لغة البشر والرد عليها؟",
      options: ["الرؤية الحاسوبية", "معالجة اللغة الطبيعية", "الروبوتات"],
      ans: 1
    }
  ];

  const handleSelect = (questionId, optionIndex) => {
    setSelectedOptions(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    if (Object.keys(selectedOptions).length < questions.length) {
      alert("الرجاء الإجابة على جميع الأسئلة أولاً");
      return;
    }

    let currentScore = 0;
    questions.forEach((q) => {
      if (selectedOptions[q.id] === q.ans) {
        currentScore++;
      }
    });

    setScore(currentScore);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = (Object.keys(selectedOptions).length / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto pt-20 px-6 text-right" dir="rtl">

      {/* 🔵 العنوان */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 text-indigo-500">
        اختبر معلوماتك
      </h2>

      {/* 📊 Progress */}
      <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full mb-10 overflow-hidden">
        <div 
          className="h-full bg-linear-to-r from-indigo-500 to-purple-500 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* 🏆 النتيجة */}
      {showResults && (
        <div className={`mb-10 p-8 rounded-[2rem] text-center shadow-2xl text-white ${
          score >= 3 
            ? "bg-linear-to-r from-green-500 to-emerald-600" 
            : "bg-linear-to-r from-red-500 to-pink-600"
        }`}>
          <h3 className="text-2xl font-bold mb-2">
            {score === questions.length 
              ? "ممتاز! علامة كاملة 🏆" 
              : score >= 3 
              ? "أحسنتِ، عمل جيد! ✨" 
              : "حاولي مرة أخرى ✍️"}
          </h3>
          <p className="text-xl">نتيجتك {score} / {questions.length}</p>
        </div>
      )}

      {/* ❓ الأسئلة */}
      <div className="space-y-8">
        {questions.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl p-6 rounded-3xl shadow-md hover:shadow-xl border border-white/30 dark:border-slate-700 transition-all"
          >

            <p className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
              {item.id}. {item.q}
            </p>

            <div className="grid gap-3">
              {item.options.map((opt, i) => {
                const isSelected = selectedOptions[item.id] === i;
                const isCorrect = showResults && i === item.ans;
                const isWrong = showResults && isSelected && i !== item.ans;

                return (
                  <button
                    key={i}
                    disabled={showResults}
                    onClick={() => handleSelect(item.id, i)}
                    className={`p-4 rounded-xl text-right transition-all border ${
                      isCorrect
                        ? "bg-green-100 border-green-500 text-green-800 font-bold"
                        : isWrong
                        ? "bg-red-100 border-red-500 text-red-800"
                        : isSelected
                        ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white border-none shadow-md"
                        : "hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

          </div>
        ))}

        {/* 🚀 زر */}
        {!showResults ? (
          <button 
            onClick={handleSubmit}
            className="w-full py-5 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-bold text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
          >
            تسليم الإجابات وعرض النتيجة
          </button>
        ) : (
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-5 rounded-full bg-slate-800 text-white font-bold text-xl shadow-lg hover:bg-black transition"
          >
            إعادة الاختبار
          </button>
        )}

      </div>
    </div>
  );
}