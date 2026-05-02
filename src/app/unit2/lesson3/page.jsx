export default function LessonFields() {
  const fields = [
    { t: "تعلم الآلة", d: "تمكين الكمبيوتر من التعلم من الأخطاء والتجارب السابقة، تماماً مثل تعلم الطفل للكلمات.", img: "/images/ai48.jpeg" },
    { t: "معالجة اللغة الطبيعية", d: "فهم لغات البشر المختلفة والقدرة على الترجمة الفورية والإجابة عن الأسئلة.", img: "/images/ai42.png" },
    { t: "الرؤية الحاسوبية", d: "القدرة على التعرف على الوجوه والأشياء داخل الصور حتى في الزحام الشديد.", img: "/images/ai43.jpg" },
    { t: "الروبوتات الذكية", d: "أجهزة تقوم بأعمال منزلية أو طبية دقيقة وتعمل في البيئات الخطرة على البشر.", img: "/images/ai3.jpg" }
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20 px-6 text-right" dir="rtl">

      {/* 🔵 العنوان */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-500 mb-14 border-r-8 border-indigo-500 pr-4">
        الموضوع السادس: مجالات الذكاء الاصطناعي
      </h1>

      {/* 🟣 الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

        {fields.map((f, i) => (
          <div 
            key={i} 
            className="group relative flex gap-6 bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl p-6 rounded-3xl shadow-md hover:shadow-xl border border-white/30 dark:border-slate-700 items-center transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >

            {/* ✨ Glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* 🖼️ الصورة */}
            <div className="relative z-10 w-24 h-24 rounded-2xl overflow-hidden shrink-0">
              <img 
                src={f.img} 
                alt={f.t}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* 📝 النص */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-indigo-500">
                {f.t}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {f.d}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* 🎉 النهاية */}
      <div className="text-center border-t border-slate-200 dark:border-slate-700 pt-10">

        <p className="text-slate-500 dark:text-slate-400 mb-6 text-lg">
          🎉 تهانينا! لقد أتممت دراسة أساسيات الذكاء الاصطناعي
        </p>

        {/* 🔥 الأزرار */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-6">

          {/* 🎥 زرار الفيديو */}
          <a 
            href="/lesson-video"
            className="relative px-10 py-4 font-bold text-white rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 blur-sm opacity-80 group-hover:scale-110 transition duration-500"></span>

            <span className="relative z-10 flex items-center gap-2">
              🎥 مشاهدة شرح الدرس
            </span>
          </a>

          {/* 🔙 الرجوع */}
          <a 
            href="/units" 
            className="inline-flex items-center px-10 py-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            العودة للفهرس الرئيسي
          </a>

        </div>

      </div>

    </div>
  );
}