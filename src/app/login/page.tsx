"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("STU-2024-0451");
  const [password, setPassword] = useState("••••••••");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const id = identifier.trim().toLowerCase();
      if (
        identifier.startsWith("ADM") ||
        id.includes("admin")
      ) {
        router.push("/dashboard/admin");
      } else if (
        identifier.startsWith("FAC") ||
        identifier.startsWith("TCH") ||
        id.includes("rahman") ||
        id.includes("teacher")
      ) {
        router.push("/dashboard/teacher");
      } else {
        router.push("/dashboard/student");
      }
    }, 400);
  };

  const handleDemoLogin = (role: "student" | "teacher" | "admin") => {
    setLoading(true);
    if (role === "student") {
      setIdentifier("STU-2024-0451");
      setPassword("password123");
      setTimeout(() => router.push("/dashboard/student"), 300);
    } else if (role === "teacher") {
      setIdentifier("FAC-CSE-018");
      setPassword("password123");
      setTimeout(() => router.push("/dashboard/teacher"), 300);
    } else if (role === "admin") {
      setIdentifier("ADM-MAIN-001");
      setPassword("password123");
      setTimeout(() => router.push("/dashboard/admin"), 300);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#8B98A5] md:p-6 lg:p-12 items-center justify-center font-sans">
      {/* 1440x900 Card / Full Screen Canvas */}
      <div className="w-full max-w-6xl min-h-[640px] md:h-[760px] bg-white rounded-none md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Brand Visual & Hero */}
        <div className="relative w-full md:w-1/2 min-h-[380px] md:min-h-full flex flex-col justify-between p-8 sm:p-12 lg:p-14 overflow-hidden">
          {/* Background Image with Deep Navy Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          {/* Overlay matching Figma's deep navy color */}
          <div className="absolute inset-0 bg-[#0B1E36]/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-[#0B1E36]/60 to-transparent" />

          {/* Top Brand Tag */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D5A754] flex items-center justify-center font-black text-sm text-[#0B1E36] shadow-md">
              ABK
            </div>
            <span className="text-white font-bold text-base tracking-wide">
              ABK e-Learning
            </span>
          </div>

          {/* Middle / Bottom Content */}
          <div className="relative z-10 my-auto py-8">
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.15] tracking-tight">
              Learn without limits.
            </h1>
            <p className="text-slate-200 text-sm sm:text-base mt-4 max-w-md font-normal leading-relaxed">
              Access your courses, lectures, assignments and grades — all in one place.
            </p>
          </div>

          {/* Bottom Navigation Back Link */}
          <div className="relative z-10 pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Alfa BK University Home</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-[#0B1E36] tracking-tight">
                Welcome back
              </h2>
              <p className="text-sm text-slate-500 mt-1.5 font-medium">
                Sign in to continue to your dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Identifier Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Student / Teacher ID or Email
                </label>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="e.g. STU-2024-0451"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-[#EEDBBA] bg-[#FFF8ED] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D5A754] focus:border-transparent transition-all"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-[#EEDBBA] bg-[#FFF8ED] text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D5A754] focus:border-transparent transition-all pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#C58B24] border-slate-300 focus:ring-[#D5A754] cursor-pointer"
                  />
                  <span className="text-xs font-medium text-slate-600">
                    Remember me
                  </span>
                </label>

                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("A password reset link will be sent to your registered academic email.");
                  }}
                  className="text-xs font-semibold text-[#C58B24] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-[#C58B24] hover:bg-[#B3791B] text-white font-bold text-sm shadow-md transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Log In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Helper */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600">Quick Demo Access:</span>
                <span className="text-[11px] text-slate-400">Click to switch role & enter</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleDemoLogin("student")}
                  className="px-2.5 py-2 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 text-[#A06E1A] font-bold text-xs flex flex-col items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
                  title="STU-2024-0451 - Shahriar Kabir"
                >
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    Student
                  </span>
                  <span className="text-[10px] font-normal text-amber-700/80">Shahriar</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin("teacher")}
                  className="px-2.5 py-2 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 text-[#0B1E36] font-bold text-xs flex flex-col items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
                  title="FAC-CSE-018 - Dr. Rahman"
                >
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-blue-600" />
                    Teacher
                  </span>
                  <span className="text-[10px] font-normal text-slate-600">Dr. Rahman</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin("admin")}
                  className="px-2.5 py-2 rounded-lg border border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs flex flex-col items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
                  title="ADM-MAIN-001 - Registrar Admin"
                >
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-purple-600" />
                    Admin
                  </span>
                  <span className="text-[10px] font-normal text-purple-700">Registrar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
