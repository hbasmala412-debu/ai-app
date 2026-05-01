export default function LessonTypes() {
  const types = [
    {
      ar: "الذكاء الاصطناعي الضيق",
      en: "Narrow AI",
      desc: [
        "هذا النوع من الذكاء الاصطناعي يركز على أداء مهمة محددة، مثل:",
        "التعرف على الوجوه أو ترجمة اللغات.",
        "مثال:",
        "روبوت يستطيع لعب الشطرنج ببراعة، لكنه لا يستطيع القيام بأي شيء آخر."
      ],
      img: "/images/ai15.webp"
    },
    {
      ar: "الذكاء الاصطناعي العام",
      en: "General Artificial Intelligence (GAI)",
      desc: [
        "هذا النوع من الذكاء الاصطناعي أكثر تطورًا، ويمكنه أداء أي مهمة يستطيع الإنسان القيام بها.",
        "مثال:",
        "روبوت يحاكي الإنسان بشكل كامل، حيث يمكنه التفكير، والابتكار، وحل المشكلات المعقدة، والتعلم، والتكيف مع المواقف المختلفة."
      ],
      img: "/images/ai11.jpg"
    },
    {
      ar: "الذكاء الاصطناعي الفائق",
      en: "Super Artificial Intelligence (SAI)",
      desc: [
        "هذا النوع هو الأكثر تطورًا.",
        "يمكنه حل المشكلات التي يصعب على البشر حلها بسهولة،",
        "كما يستطيع اكتشاف أشياء جديدة لم نتخيلها من قبل."
      ],
      img: "/images/ai18.jpg"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto pt-20 px-6 text-right" dir="rtl">

      {/* 🔵 العنوان */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-500 mb-14 border-r-8 border-indigo-500 pr-4">
        الموضوع الرابع: أنواع الذكاء الاصطناعي
      </h1>

      {/* 🟣 الكروت */}
      <div className="space-y-10 mb-16">

        {types.map((type, i) => (
          <div 
            key={i} 
            className="group relative flex flex-col md:flex-row gap-8 bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl border border-white/30 dark:border-slate-700 items-center transition-all duration-300 overflow-hidden"
          >

            {/* ✨ Glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* 📝 النص */}
            <div className="relative z-10 flex-1">

              {/* عربي */}
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-500 mb-2">
                {type.ar}
              </h2>

              {/* إنجليزي */}
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">
                {type.en}
              </p>

              {/* الشرح */}
              <div className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {type.desc.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

            </div>

            {/* 🖼️ الصورة */}
            <div className="relative z-10 w-full md:w-2/5 h-56 rounded-3xl overflow-hidden">
              <img 
                src={type.img} 
                alt={type.ar}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

          </div>
        ))}

      </div>

      {/* 🚀 زر التالي */}
      <div className="text-left border-t border-slate-200 dark:border-slate-700 pt-8">
        <a 
          href="/unit2/lesson2" 
          className="inline-flex items-center px-8 py-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          الدرس التالي: التطبيقات ←
        </a>
      </div>

    </div>
  );
}