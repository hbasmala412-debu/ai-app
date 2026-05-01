"use client";
import { useState, useEffect } from "react";

export default function UnitsIndex() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto pt-20 px-6 text-right">

      {/* 🔵 العنوان */}
      <h1 className="text-4xl md:text-5xl font-black mb-16 text-center text-indigo-500">
        اختر الوحدة التعليمية
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* 📘 Unit 1 */}
        <a href="/unit1" className="group">
          <div className="relative flex flex-col bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/30 dark:border-slate-700 overflow-hidden">

            {/* ✨ Glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* الصورة */}
            <div className="w-full aspect-square max-h-80 overflow-hidden">
              <img 
                src="/images/ai3.jpg" 
                alt="الوحدة الأولى" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* المحتوى */}
            <div className="relative z-10 p-8">
              <h2 className="text-3xl font-bold mb-4 text-indigo-500">
                الوحدة الأولى
              </h2>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                مقدمة شاملة عن الذكاء الاصطناعي، تعريفه، مميزاته وعيوبه.
              </p>

              <div className="mt-8 flex justify-end">
                <span className="px-6 py-3 bg-linear-to-r from-indigo-500 to-blue-500 text-white rounded-2xl font-bold shadow-md group-hover:scale-105 transition">
                  دخول ←
                </span>
              </div>
            </div>

          </div>
        </a>

        {/* 📗 Unit 2 */}
        <a href="/unit2" className="group">
          <div className="relative flex flex-col bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/30 dark:border-slate-700 overflow-hidden">

            {/* Glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* الصورة */}
            <div className="w-full aspect-square max-h-80 overflow-hidden">
              <img 
                src="/images/ai8.jpg" 
                alt="الوحدة الثانية" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* المحتوى */}
            <div className="relative z-10 p-8">
              <h2 className="text-3xl font-bold mb-4 text-indigo-500">
                الوحدة الثانية
              </h2>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                أساسيات الذكاء الاصطناعي، أنواعه، مجالاته وتطبيقاته العملية.
              </p>

              <div className="mt-8 flex justify-end">
                <span className="px-6 py-3 bg-linear-to-r from-indigo-500 to-blue-500 text-white rounded-2xl font-bold shadow-md group-hover:scale-105 transition">
                  دخول ←
                </span>
              </div>
            </div>

          </div>
        </a>

      </div>
    </div>
  );
}