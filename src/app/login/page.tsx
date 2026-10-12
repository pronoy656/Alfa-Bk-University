"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
  ShieldCheck,
} from "lucide-react";

function AuthContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialMode =
    pathname === "/register" || searchParams.get("mode") === "register"
      ? "register"
      : "login";

  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [identifier, setIdentifier] = useState("STU-2024-0451");
  const [password, setPassword] = useState("••••••••");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Register form states
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regRole, setRegRole] = useState("student");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const id = identifier.trim().toLowerCase();
      if (identifier.startsWith("ADM") || id.includes("admin")) {
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

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (regPassword !== regConfirmPassword) {
      alert("Passwords do not match. Please verify and try again.");
      return;
    }
    if (!agreeTerms) {
      alert("Please agree to the Alfa BK University terms of academic service.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRegSuccess(true);
      setTimeout(() => {
        if (regRole === "teacher") {
          router.push("/dashboard/teacher");
        } else {
          router.push("/dashboard/student");
        }
      }, 1000);
    }, 600);
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
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white font-sans overflow-x-hidden">
      {/* ================================================================ */}
      {/* Left Side: 50% Full-Screen Hero Visual with Deep Navy Gradient   */}
      {/* ================================================================ */}
      <div className="relative w-full md:w-1/2 min-h-[440px] md:min-h-screen flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-20 overflow-hidden shrink-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        {/* Overlay matching deep navy university brand palette */}
        <div className="absolute inset-0 bg-[#0B1E36]/85 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-[#0B1E36]/70 to-[#0B1E36]/40" />

        {/* Top: University Brand Logo */}
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="inline-block group">
            <img
              src="/University-logo.png"
              alt="Alfa BK University"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-102 drop-shadow-md"
            />
          </Link>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-xs border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-[#BE9F5A]" />
            Official Portal
          </span>
        </div>

        {/* Center / Hero Highlights */}
        <div className="relative z-10 my-auto py-10 md:py-16 max-w-lg">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Learn without <span className="text-[#BE9F5A]">limits.</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base lg:text-lg mt-5 font-normal leading-relaxed">
            Welcome to Alfa BK University&apos;s unified academic campus. Access your
            courses, lectures, assignments, and examination registers in one seamless portal.
          </p>

          <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-6 text-slate-300 text-xs sm:text-sm">
            <div>
              <p className="text-xl sm:text-2xl font-black text-white">12,000+</p>
              <p className="text-slate-400 text-xs">Active Students</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-xl sm:text-2xl font-black text-white">5</p>
              <p className="text-slate-400 text-xs">Accredited Faculties</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-xl sm:text-2xl font-black text-white">30+</p>
              <p className="text-slate-400 text-xs">Study Programs</p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Back Link */}
        <div className="relative z-10 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Alfa BK University Home</span>
          </Link>
        </div>
      </div>

      {/* ================================================================ */}
      {/* Right Side: 50% Full-Screen Interactive Form                     */}
      {/* ================================================================ */}
      <div className="w-full md:w-1/2 min-h-screen bg-white flex flex-col justify-center items-center p-6 sm:p-10 lg:p-14 xl:p-16 shrink-0">
        <div className="w-full max-w-md my-auto py-6">
          {/* ------------------------------------------------------------ */}
          {/* MODE: LOG IN                                                 */}
          {/* ------------------------------------------------------------ */}
          {mode === "login" ? (
            <>
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
                  Welcome back
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Sign in to continue to your student or faculty dashboard.
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {/* Identifier Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Student / Teacher ID or Email
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="Enter your email or ID"
                      required
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE9F5A] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE9F5A] focus:border-transparent transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded text-[#BE9F5A] border-slate-300 focus:ring-[#BE9F5A] cursor-pointer"
                    />
                    <span className="text-xs font-medium text-slate-600">Remember me</span>
                  </label>

                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("A password reset link will be sent to your registered academic email.");
                    }}
                    className="text-xs font-semibold text-[#BE9F5A] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-[#0B1E36] hover:bg-[#142d4f] text-white font-bold text-sm shadow-sm hover:shadow transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#BE9F5A]" />
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4 text-[#BE9F5A]" />
                    </>
                  )}
                </button>
              </form>

              {/* Quick Demo Access */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-slate-500">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-600">Quick Demo Access:</span>
                  <span className="text-[11px] text-slate-400">Click role to test portal</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin("student")}
                    className="px-2.5 py-2 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-[#966B15] font-bold text-xs flex flex-col items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
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
                    className="px-2.5 py-2 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-[#0B1E36] font-bold text-xs flex flex-col items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
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
                    className="px-2.5 py-2 rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs flex flex-col items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
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

              {/* Bottom toggle to register */}
              <p className="mt-6 text-center text-xs text-slate-500">
                Don&apos;t have an account yet?{" "}
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="font-bold text-[#BE9F5A] hover:underline cursor-pointer"
                >
                  Register now
                </button>
              </p>
            </>
          ) : (
            /* ------------------------------------------------------------ */
            /* MODE: REGISTER                                               */
            /* ------------------------------------------------------------ */
            <>
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
                  Create an account
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Register for academic portal access or admissions enrollment.
                </p>
              </div>

              {regSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">
                    Registration Successful!
                  </h3>
                  <p className="text-xs text-emerald-700">
                    Your candidate account has been created. Redirecting to your dashboard...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Legal Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE9F5A] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Academic or Personal Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE9F5A] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Role / Track Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Registration Category
                    </label>
                    <select
                      value={regRole}
                      onChange={(e) => setRegRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE9F5A] focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="student">Undergraduate / Graduate Student</option>
                      <option value="applicant">New Applicant / Candidate</option>
                      <option value="teacher">Faculty Member / Academic Staff</option>
                    </select>
                  </div>

                  {/* Password & Confirm Password */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                          className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE9F5A] transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={regConfirmPassword}
                          onChange={(e) => setRegConfirmPassword(e.target.value)}
                          placeholder="Enter your confirm password"
                          required
                          className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE9F5A] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="pt-0.5">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded text-[#BE9F5A] border-slate-300 focus:ring-[#BE9F5A] cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 leading-snug">
                        I agree to Alfa BK University&apos;s Academic Terms of Service and Privacy
                        Policy.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-xl bg-[#0B1E36] hover:bg-[#142d4f] text-white font-bold text-sm shadow-sm hover:shadow transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#BE9F5A]" />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Complete Registration</span>
                        <ArrowRight className="w-4 h-4 text-[#BE9F5A]" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Bottom toggle to login */}
              <p className="mt-6 text-center text-xs text-slate-500">
                Already have an academic account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="font-bold text-[#BE9F5A] hover:underline cursor-pointer"
                >
                  Log In
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0B1E36] text-white">
          <Loader2 className="w-8 h-8 animate-spin text-[#BE9F5A]" />
        </div>
      }
    >
      <AuthContent />
    </Suspense>
  );
}
