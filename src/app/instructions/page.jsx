"use client";

export default function InstructionsPage() {
  const steps = [
    {
      icon: "🎯",
      title: "ابدأ من الصفحة الرئيسية",
      desc: "هتلاقي كل الأقسام زي المحتوى، الاختبارات، والأنشطة التفاعلية.",
    },
    {
      icon: "📚",
      title: "اختار وحدة تعليمية",
      desc: "كل وحدة فيها دروس مرتبة من الأسهل للأصعب.",
    },
    {
      icon: "🧠",
      title: "ذاكر الدروس كويس",
      desc: "اقرأ المحتوى وافهم الأمثلة قبل ما تنتقل للدرس اللي بعده.",
    },
    {
      icon: "📝",
      title: "حل الاختبار",
      desc: "اختبر نفسك وشوف نتيجتك فورًا بعد الانتهاء.",
    },
    {
      icon: "🎮",
      title: "جرب النشاط التفاعلي",
      desc: "اسحب الكروت وركبها صح عشان تثبت فهمك بطريقة ممتعة.",
    },
    {
      icon: "🧭",
      title: "استخدم شريط التنقل",
      desc: "من الأزرار اللي فوق تقدر تتنقل بسهولة بين الصفحات زي المحتوى، الاختبارات، النشاط، والتعليمات.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20 pb-16 px-6 text-right">

      {/* العنوان بدون إيموجي */}
      <h1
  className="text-4xl md:text-5xl font-black text-center mb-14"
  style={{ color: "var(--text-primary)" }}
>
  كيفية استخدام المنصة
</h1>

      {/* الكروت */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-white/40 dark:border-slate-700 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              
              {/* الأيقونة */}
              <div className="text-3xl group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* العنوان */}
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {step.title}
              </h2>
            </div>

            {/* الوصف */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* نص تحت */}
      <div className="mt-16 text-center">
        <p className="text-lg text-slate-600 dark:text-slate-400">
          ابدأ بالدروس بالترتيب، وبعدها جرب الاختبار والنشاط لتحصل على أفضل تجربة تعليمية
        </p>
      </div>
    </div>
  );
}