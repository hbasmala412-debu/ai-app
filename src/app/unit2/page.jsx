export default function Unit2Page() {
  const lessons = [
    { 
      id: 1, 
      title: "الموضوع الرابع: أنواع الذكاء الاصطناعي", 
      path: "/unit2/lesson1",
      icon: "📊"
    },
    { 
      id: 2, 
      title: "الموضوع الخامس: تطبيقات الذكاء الاصطناعي", 
      path: "/unit2/lesson2",
      icon: "🚗"
    },
    { 
      id: 3, 
      title: "الموضوع السادس: مجالات الذكاء الاصطناعي", 
      path: "/unit2/lesson3",
      icon: "🧠"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto pt-25 px-6 text-right">

      {/* 🔵 الهيدر */}
      <div className="mb-16">
        <h1
  className="text-4xl md:text-5xl font-extrabold mb-6 border-r-8 border-indigo-500 pr-4"
  style={{ color: "var(--text-primary)" }}
>
  الوحدة الثانية: رحلة في عالم الذكاء الاصطناعي
</h1>

        <p
  className="text-xl leading-relaxed"
  style={{ color: "var(--text-primary)", opacity: 0.8 }}
>
  اكتشف كيف يتنوع الذكاء الاصطناعي وكيف يغير عالمنا اليوم.
</p>
      </div>

      {/* 🟣 قائمة الدروس */}
      <div className="grid gap-6">

        {lessons.map((lesson) => (
          <a 
            href={lesson.path} 
            key={lesson.id}
            className="group"
          >
            <div className="relative flex items-center justify-between p-8 rounded-3xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-white/30 dark:border-slate-700 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

              {/* ✨ Glow */}
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>

              {/* المحتوى */}
              <div className="relative z-10 flex items-center gap-6">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {lesson.icon}
                </span>

                <h2 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {lesson.title}
                </h2>
              </div>

              {/* زر الدخول */}
              <div className="relative z-10 text-indigo-500 text-lg font-semibold opacity-0 group-hover:opacity-100 transition">
                دخول الدرس ←
              </div>

            </div>
          </a>
        ))}

      </div>

      {/* 🔙 زر الرجوع */}
      <div className="mt-16 text-center">
        <a 
          href="/units" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-indigo-400 text-indigo-500 hover:bg-indigo-500/10 transition font-semibold"
        >
          العودة إلى الوحدات
        </a>
      </div>

    </div>
  );
}