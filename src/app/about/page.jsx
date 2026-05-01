export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">

      <div className="max-w-5xl w-full text-center">

        {/* 🔵 العنوان */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-14 text-right pr-6 border-r-8 border-indigo-500 rounded-sm">
          حول المنصة
        </h2>

        {/* 🟣 الكارد */}
        <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-white/40 dark:border-slate-700 overflow-hidden">

          {/* ✨ Glow خفيف */}
          <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 blur-2xl opacity-60"></div>

          <div className="relative z-10 text-right">

            <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 mb-10 font-medium leading-relaxed">
              هذه المنصة هي مشروع تعليمي يهدف إلى تبسيط مفاهيم الذكاء الاصطناعي للطلاب، مع التركيز على المحتوى التفاعلي والتطبيقات العملية في حياتنا اليومية.
            </p>

            {/* خط فاصل */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-10"></div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              تم تصميم المحتوى بعناية ليشمل التعريفات، المميزات، العيوب، والأنواع المختلفة للتقنيات الحديثة، لتمكين الجيل القادم من فهم أدوات المستقبل.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}