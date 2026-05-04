export default function LessonOne() {
  return (
    <div className="max-w-4xl mx-auto pt-20 px-6 text-right" dir="rtl">

      {/* 🔵 breadcrumb */}
      <div className="mb-10">
        <nav className="inline-flex items-center gap-2 text-slate-500 font-medium bg-white/60 dark:bg-slate-800/60 px-5 py-3 rounded-2xl backdrop-blur-xl border border-white/30 dark:border-slate-700">
          <a href="/unit1" className="hover:text-indigo-500 transition">المحتوى</a>
          <span>/</span>
          <span className="text-indigo-500 font-bold">الدرس الأول</span>
        </nav>
      </div>

      {/* 🔥 العنوان */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-12 border-r-8 border-indigo-500 pr-6">
        الموضوع الأول: تعريف الذكاء الاصطناعي
      </h1>

      <div className="space-y-10">

        {/* 🟣 القسم الأول */}
        <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl border border-white/40 dark:border-slate-700 overflow-hidden">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 blur-2xl opacity-60"></div>

          <div className="relative z-10">
            <p className="text-xl md:text-2xl leading-loose text-slate-700 dark:text-slate-300 font-medium">
              الذكاء الاصطناعي هو فرع من فروع التكنولوجيا وعلوم الحاسب، يهدف إلى تصميم برامج وأجهزة تستطيع أن 
              <span className="text-transparent bg-clip-text bg-linear-to-l from-indigo-500 to-purple-500 font-extrabold mx-2">
                تفكير وتتعلم وتتصرف
              </span>
              بطريقة تشبه الإنسان.
            </p>

            {/* ✨ البوكس المعدل */}
            <div className="mt-8 p-6 rounded-3xl backdrop-blur-xl border border-white/20 dark:border-slate-700 shadow-lg bg-white/60 dark:bg-slate-800/60">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-200 italic">
                بمعنى آخر، هو محاولة لجعل الكمبيوتر أو الآلة "ذكية"، بحيث لا تنفذ الأوامر فقط، بل تفهم المعلومات وتستخدمها لاتخاذ قرارات.
              </p>
            </div>

          </div>
        </div>

        {/* 🔵 القسم الثاني */}
        <div className="flex flex-col md:flex-row gap-8 items-center bg-linear-to-br from-indigo-500 to-purple-600 text-white p-10 rounded-[2.5rem] shadow-2xl">

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">كيف يتعلم الذكاء الاصطناعي؟</h2>

            <p className="text-xl leading-relaxed opacity-95">
              يعتمد على تدريب الأجهزة باستخدام كميات كبيرة من البيانات. فكلما زادت المعلومات التي يحصل عليها، أصبح أكثر قدرة على الفهم والتوقع، تماماً مثلما يتعلم الطفل من التجارب.
            </p>
          </div>

          <div className="w-full md:w-2/5 h-64 bg-white/10 rounded-3xl overflow-hidden backdrop-blur-xl border border-white/20">
            <img 
              src="/images/ai6.jpg" 
              alt="تعلم الذكاء الاصطناعي" 
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

        {/* ✨ القسم الثالث */}
        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-10 rounded-[2.5rem] border-2 border-dashed border-indigo-300 dark:border-slate-600">

          <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white flex items-center gap-3">
            <span className="text-3xl">💡</span>
            مثال من حياتك اليومية:
          </h3>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            عندما تستخدم الهاتف للبحث عن شيء، أو عندما يقترح لك تطبيق فيديوهات قد تعجبك، فهذا لأن الذكاء الاصطناعي تعلم من اختياراتك السابقة وفهم اهتماماتك.
          </p>

        </div>

      </div>

      {/* 🚀 زر التالي */}
      <div className="mt-16 text-left border-t border-slate-200 dark:border-slate-700 pt-10">

        <a 
          href="/unit1/lesson2" 
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          الدرس التالي: المميزات ←
        </a>

      </div>

    </div>
  );
}