export default function LessonFeatures() {
  const features = [
    { t: "توفير الوقت والجهد", d: "إنجاز المهام بسرعة فائقة مقارنة بالإنسان.", img: "/images/ai1.jpg" },
    { t: "الدقة وتقليل الأخطاء", d: "أداء العمليات المعقدة بدقة عالية جداً.", img: "/images/ai47.jpeg" },
    { t: "المساعدة في التعليم", d: "تطوير طرق التعلم بتطبيقات تفاعلية ذكية.", img: "/images/ai9.jpg" },
    { t: "التقدم في المجال الطبي", d: "يساعد الأطباء في تشخيص الأمراض واكتشافها بشكل أسرع وأكثر دقة.", img: "/images/ai21.jpg" },
    { t: "العمل المستمر", d: "يمكنه العمل لفترات طويلة دون تعب أو توقف.", img: "/images/ai45.jpeg" },
    { t: "تحسين خدمة العملاء", d: "يساعد الذكاء الاصطناعي في الرد على استفسارات العملاء بسرعة من خلال الدردشة الآلية.", img: "/images/ai46.jpeg" }
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20 px-6 text-right" dir="rtl">

      {/* 🔵 العنوان */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-14 text-indigo-500 border-r-8 border-indigo-500 pr-4">
        مميزات الذكاء الاصطناعي
      </h1>

      {/* 🟣 الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">

        {features.map((f, i) => (
          <div 
            key={i} 
            className="group relative bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] shadow-lg hover:shadow-2xl p-6 border border-white/30 dark:border-slate-700 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >

            {/* ✨ Glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* الصورة */}
            <div className="relative z-10 w-full aspect-square rounded-3xl mb-6 overflow-hidden">
              <img 
                src={f.img} 
                alt={f.t} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* العنوان */}
            <h3 className="relative z-10 text-xl font-bold mb-3 text-indigo-500 text-center">
              {f.t}
            </h3>

            {/* الوصف */}
            <p className="relative z-10 text-slate-600 dark:text-slate-300 text-center leading-relaxed">
              {f.d}
            </p>

          </div>
        ))}

      </div>

      {/* 🔙 أزرار التنقل */}
      <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-8">

        <a 
          href="/unit1/lesson1" 
          className="text-slate-500 hover:text-indigo-500 font-semibold transition"
        >
          ← الدرس السابق
        </a>

        <a 
          href="/unit1/lesson3" 
          className="px-10 py-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          الدرس التالي: العيوب ←
        </a>

      </div>

    </div>
  );
}