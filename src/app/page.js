"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 gap-16 pt-20">

      {/* 🟣 الكلام */}
      <div className="flex-[1.5] text-right animate-fade-in">
        
        <h1
          className="text-5xl md:text-7xl font-black mb-6 leading-tight transition-colors duration-300"
          style={{ color: isDark ? "#ffffff" : "#0f172a" }}
        >
          اكتشف مستقبل
          <span className="inline-block mr-4 text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500">
            الذكاء الاصطناعي
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl leading-relaxed transition-colors duration-300"
          style={{ color: isDark ? "#e2e8f0" : "#334155" }}
        >
          منصة تعليمية متطورة تهدف إلى تبسيط مفاهيم الذكاء الاصطناعي وتطبيقاته في حياتنا اليومية.
        </p>

        <div className="flex gap-6 justify-start flex-wrap">

  {/* 🔥 زرار أساسي */}
  <a
    href="/units"
    className="relative px-10 py-4 font-semibold text-white rounded-full overflow-hidden group"
  >
    <span className="absolute inset-0 bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 transition-all duration-500 group-hover:scale-110 blur-sm"></span>
    
    <span className="relative z-10">
      ابدأ التعلم
    </span>
  </a>

  {/* ✨ زرار outline */}
  <a
    href="/about"
    className="relative px-10 py-4 font-semibold rounded-full border border-indigo-400 text-indigo-500 overflow-hidden group"
  >
    <span className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
    
    <span className="relative z-10">
      تعرف علينا
    </span>
  </a>

</div>
      </div>

      {/* 🔵 الصورة */}
      <div className="flex-1 w-full max-w-lg animate-fade-in">
        
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">

          {/* Glow effect */}
          <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 via-purple-500/10 to-blue-500/20 blur-2xl opacity-70"></div>

          <img
            src="/images/ai99.png"
            alt="AI Concept"
            className="relative w-full h-auto object-cover rounded-[2.5rem] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

      </div>

    </div>
  );
}