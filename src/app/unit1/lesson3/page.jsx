export default function LessonDisadvantages() {
  const bads = [
    { t: "فقدان الوظائف", d: "اعتماد الشركات على الآلات قد يقلل فرص العمل للبشر.", img: "/images/ai51.jpg" },
    { t: "التكلفة العالية", d: "تحتاج أنظمة الذكاء الاصطناعي لميزانيات كبيرة لتطويرها.", img: "/images/ai53.jpg" },
    { t: "الاعتماد الزائد عليه", d: "قد يتوقف الإنسان عن التفكير وحل المشكلات بنفسه مع الوقت.", img: "/images/ai22.jpg" },
    { t: "الاعتماد على البيانات", d: "إذا كانت البيانات غير دقيقة، تكون النتائج غير صحيحة.", img: "/images/ai50.jpg" },
    { t: "إمكانية سوء الاستخدام", d: "قد يُستخدم في أغراض غير أخلاقية مثل الاختراق أو التضليل.", img: "/images/ai10.jpg" },
    { t: "انتهاك الخصوصية", d: "قد يؤدي إلى جمع بيانات شخصية بشكل مفرط.", img: "/images/ai52.jpg" }
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20 px-6 text-right" dir="rtl">

      {/* 🔴 العنوان */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-14 text-red-500 border-r-8 border-red-500 pr-4">
        عيوب الذكاء الاصطناعي
      </h1>

      {/* 🟥 الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">

        {bads.map((b, i) => (
          <div 
            key={i} 
            className="group relative bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] shadow-lg hover:shadow-2xl p-6 border border-white/30 dark:border-slate-700 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >

            {/* ✨ Glow أحمر خفيف */}
            <div className="absolute inset-0 bg-linear-to-tr from-red-500/10 via-orange-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* الصورة */}
            <div className="relative z-10 w-full aspect-square rounded-3xl mb-6 overflow-hidden">
              <img 
                src={b.img} 
                alt={b.t} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* العنوان */}
            <h3 className="relative z-10 text-xl font-bold mb-3 text-red-500 text-center">
              {b.t}
            </h3>

            {/* الوصف */}
            <p className="relative z-10 text-slate-600 dark:text-slate-300 text-center leading-relaxed">
              {b.d}
            </p>

          </div>
        ))}

      </div>

      {/* 🔙 التنقل */}
      <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-8">

        <a 
          href="/unit1/lesson2" 
          className="text-slate-500 hover:text-red-500 font-semibold transition"
        >
          ← الدرس السابق
        </a>

        <a 
          href="/unit2/lesson1" 
          className="px-10 py-4 rounded-full bg-linear-to-r from-emerald-500 to-green-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          بداية الوحدة الثانية ←
        </a>

      </div>

    </div>
  );
}