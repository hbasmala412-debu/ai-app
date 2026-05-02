export default function LessonVideo() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-20 pb-20">

      {/* 🎬 العنوان */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center text-indigo-500">
         شرح الدرس
      </h1>

      {/* ✏️ وصف بسيط */}
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 text-center mb-10 max-w-2xl leading-relaxed">
        هذا الفيديو يقدم شرح مبسط لمجالات الذكاء الاصطناعي لمساعدتك على الفهم بشكل أفضل 👇
      </p>

      {/* 📹 الفيديو */}
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">

        <video
          src="/video/ai100.mp4"
          controls
          className="w-full h-full"
        ></video>

      </div>

    </div>
  );
}