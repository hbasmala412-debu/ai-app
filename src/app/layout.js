"use client";
import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 1. قراءة الحالة فوراً عند تحميل الصفحة
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* السكربت ده ضروري جداً عشان يمنع الوميض ويخلي الصفحة تبدأ باللون الصح */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })()
            `,
          }}
        />
      </head>
      <body>
        <nav className="fixed top-0 right-0 w-full z-50 backdrop-blur-xl bg-white/30 dark:bg-black/30 border-b border-white/20 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
            
            <div className="w-28 h-20">
              <img src="/images/log2.png" alt="logo" className="w-full h-full object-contain" />
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 font-medium text-[16px]">
              <a href="/" className="hover:text-indigo-500 transition">الرئيسية</a>
              <a href="/about" className="hover:text-indigo-500 transition">حول المنصة</a>
              <a href="/instructions" className="hover:text-indigo-500 transition">التعليمات</a>
              <a href="/units" className="hover:text-indigo-500 transition">المحتوى</a>
              <a href="/activity" className="hover:text-indigo-500 transition">النشاط</a>
              <a href="/exam" className="hover:text-indigo-500 transition">الاختبارات</a>
            </div>

            {/* الزرار هنا ظاهر دايماً مش هيختفي */}
            <label className="switch">
              <input 
                type="checkbox" 
                checked={isDark} 
                onChange={toggleTheme} 
                readOnly // عشان نضمن إن التغيير يتم عن طريق الـ state بس
              />
              <span className="slider"></span>
            </label>

          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}