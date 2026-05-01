export default function LessonApps() {
  const apps = [
    { 
      t: "سيارات ذاتية القيادة", 
      d: "تعتمد على الكاميرات والحساسات لرؤية الطريق واتخاذ قرارات فورية مثل التوقف أو الالتفاف دون تدخل بشري.", 
      img: "/images/ai17.jpg",
      info: "🚗 تعتمد على تحليل البيانات في الوقت الحقيقي لاتخاذ قرارات خلال أجزاء من الثانية."
    },
    { 
      t: "المساعد الشخصي الذكي", 
      d: "مثل Siri و Alexa، تقوم بفهم لغة البشر الطبيعية وتنفيذ الأوامر وتقديم اقتراحات بناءً على عاداتك.", 
      img: "/images/ai20.jpg",
      info: "🎙️ يتطور مع الوقت من خلال تعلم تفضيلات المستخدم وسلوكه اليومي."
    },
    { 
      t: "الألعاب الذكية", 
      d: "تستخدم الذكاء الاصطناعي لجعل اللعبة أكثر متعة وتحديًا من خلال التفاعل مع اللاعب.", 
      img: "/images/ai2.jpg",
      info: "🎮 بعض الألعاب تغير مستواها تلقائيًا حسب أداء اللاعب."
    },
    { 
      t: "الأطباء الرقميون", 
      d: "يساعد الذكاء الاصطناعي الأطباء في تشخيص الأمراض وعلاجها بسرعة ودقة أعلى.", 
      img: "/images/ai13.webp",
      info: "🏥 يمكنه تحليل صور الأشعة واكتشاف الأمراض بدقة عالية."
    },
    { 
      t: "المترجم الفوري", 
      d: "يمكن ترجمة الكلمات والجمل فورًا، مما يسهل التواصل بين الأشخاص من لغات مختلفة.", 
      img: "/images/ai55.png",
      info: "🌍 يدعم مئات اللغات ويساعد في كسر حواجز التواصل."
    },
    { 
      t: "التسوق الذكي", 
      d: "تقدم مواقع التسوق اقتراحات لمنتجات مناسبة لك بناءً على اهتماماتك.", 
      img: "/images/ai38.jpeg",
      info: "🛒 يعتمد على سجل البحث والمشتريات لعرض منتجات مناسبة لك."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20 px-6 text-right" dir="rtl">

      {/* 🔵 العنوان */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-500 mb-14 border-r-8 border-indigo-500 pr-4">
        الموضوع الخامس: تطبيقات الذكاء الاصطناعي
      </h1>

      {/* 🟣 الكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

        {apps.map((app, i) => (
          <div 
            key={i} 
            className="group bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl shadow-md hover:shadow-xl overflow-hidden border border-white/30 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1"
          >

            {/* 🖼️ الصورة (أصغر + متناسقة) */}
            <div className="w-full h-44 overflow-hidden">
              <img 
                src={app.img} 
                alt={app.t}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* 📝 المحتوى */}
            <div className="p-6">

              <h3 className="text-xl font-bold mb-3 text-indigo-500">
                {app.t}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {app.d}
              </p>

              {/* 💡 معلومة مخصصة */}
              <div className="p-3 bg-indigo-50/80 dark:bg-slate-900/80 rounded-xl text-xs border border-indigo-100 dark:border-slate-700">
                {app.info}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* 🔙 التنقل */}
      <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-8">

        <a 
          href="/unit2/lesson1" 
          className="text-slate-500 hover:text-indigo-500 font-semibold transition"
        >
          ← الدرس السابق
        </a>

        <a 
          href="/unit2/lesson3" 
          className="px-8 py-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          الدرس التالي: المجالات ←
        </a>

      </div>

    </div>
  );
}