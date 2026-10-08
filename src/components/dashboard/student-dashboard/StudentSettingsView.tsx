"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Save,
  Edit2,
  CheckCircle2,
  ShieldCheck,
  Building,
  Camera,
} from "lucide-react";

export default function StudentSettingsView() {
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Editable Student Profile State
  const [profile, setProfile] = useState({
    fullName: "Shahriar Kabir",
    id: "STU-2024-0451",
    email: "shahriar.kabir@student.alfa.edu.rs",
    personalEmail: "shahriar.dev@gmail.com",
    phone: "+381 64 123 4567",
    currentAddress: "Bulevar Mihajla Pupina 115, Novi Beograd, Serbia",
    permanentAddress: "Belgrade, Serbia",
    birthDate: "2003-03-14",
    bloodGroup: "B+",
    // Academic fields
    cgpa: "3.71",
    completedCredits: "118 / 140",
    batch: "Batch 2024 (28th Intake)",
    program: "BSc in Computer Science & Engineering",
    department: "Department of Computer Science & Engineering",
    faculty: "Faculty of Information Technologies",
    semester: "8th Semester (Final Year)",
    // Guardian
    guardianName: "Mr. Kabir Ahmed",
    guardianRelation: "Father",
    guardianPhone: "+381 64 987 6543",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
            Account & Profile Settings
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
            Manage your personal data, university registration details, and contact preferences
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition active:scale-95 cursor-pointer self-start sm:self-auto ${
            isEditing
              ? "bg-slate-200 text-slate-800 hover:bg-slate-300"
              : "bg-[#C69234] hover:bg-[#B87A1E] text-white shadow-2xs"
          }`}
        >
          <Edit2 className="w-3.5 h-3.5" />
          <span>{isEditing ? "Cancel Editing" : "Edit Profile"}</span>
        </button>
      </div>

      {/* Save Success Alert Banner */}
      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="text-xs">
            <strong className="font-bold">Profile Updated Successfully!</strong> All modifications have been synchronized with your central student dossier.
          </div>
        </div>
      )}

      {/* Profile Overview Card */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
              alt={profile.fullName}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-slate-100 shadow-xs"
            />
            {isEditing && (
              <button
                type="button"
                onClick={() => alert("Photo upload picker")}
                className="absolute -bottom-1 -right-1 p-2 rounded-xl bg-[#0B1E36] text-white hover:bg-[#162D4E] transition shadow-xs cursor-pointer"
                title="Change Photo"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {profile.fullName}
              </h2>
              <span className="rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 px-2.5 py-0.5 text-[11px] font-bold">
                {profile.id}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              {profile.program}
            </p>
            <p className="text-xs text-slate-400">
              {profile.department} · {profile.faculty}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 text-xs font-bold">
            Academic Status: Active Regular
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Academic Information Section (Readonly display of official university records) */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <GraduationCap className="w-5 h-5 text-[#C69234]" />
            <h3 className="text-base font-bold text-slate-900">
              Academic Registration & Institutional Standing
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-1">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                Cumulative CGPA
              </span>
              <span className="text-xl font-black text-slate-900 block">
                {profile.cgpa} <span className="text-xs font-normal text-slate-400">/ 4.00</span>
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold">First Class Standing</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-1">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                Completed Credits
              </span>
              <span className="text-xl font-black text-slate-900 block">
                {profile.completedCredits}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">84% of curriculum completed</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-1">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                Current Semester
              </span>
              <span className="text-base font-bold text-slate-900 block pt-1">
                {profile.semester}
              </span>
              <span className="text-[11px] text-[#C69234] font-medium">Fall 2026 Academic Term</span>
            </div>

            <div className="space-y-1">
              <label className="text-slate-500 font-medium block">Batch / Intake</label>
              <input
                type="text"
                disabled={!isEditing}
                value={profile.batch}
                onChange={(e) => setProfile({ ...profile, batch: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 disabled:opacity-80"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-500 font-medium block">Program Degree</label>
              <input
                type="text"
                disabled
                value={profile.program}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-600 cursor-not-allowed"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-500 font-medium block">Department</label>
              <input
                type="text"
                disabled
                value={profile.department}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-600 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Personal & Contact Details Section (Editable) */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <User className="w-5 h-5 text-[#C69234]" />
            <h3 className="text-base font-bold text-slate-900">
              Personal & Contact Information
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
            <div className="space-y-1">
              <label className="text-slate-700 font-semibold block">Full Name</label>
              <input
                type="text"
                required
                disabled={!isEditing}
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 disabled:bg-slate-50 focus:border-[#C69234] focus:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold block">University Student Email</label>
              <input
                type="email"
                disabled
                value={profile.email}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-600 cursor-not-allowed"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold block">Personal Email</label>
              <input
                type="email"
                disabled={!isEditing}
                value={profile.personalEmail}
                onChange={(e) => setProfile({ ...profile, personalEmail: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 disabled:bg-slate-50 focus:border-[#C69234] focus:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold block">Mobile Phone Number</label>
              <input
                type="tel"
                disabled={!isEditing}
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 disabled:bg-slate-50 focus:border-[#C69234] focus:outline-hidden"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-slate-700 font-semibold block">Current Residential Address</label>
              <input
                type="text"
                disabled={!isEditing}
                value={profile.currentAddress}
                onChange={(e) => setProfile({ ...profile, currentAddress: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 disabled:bg-slate-50 focus:border-[#C69234] focus:outline-hidden"
              />
            </div>
          </div>
        </div>

        {/* Guardian & Emergency Contact */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <ShieldCheck className="w-5 h-5 text-[#C69234]" />
            <h3 className="text-base font-bold text-slate-900">
              Guardian & Emergency Contact
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
            <div className="space-y-1">
              <label className="text-slate-700 font-semibold block">Guardian Name</label>
              <input
                type="text"
                disabled={!isEditing}
                value={profile.guardianName}
                onChange={(e) => setProfile({ ...profile, guardianName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 disabled:bg-slate-50 focus:border-[#C69234] focus:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold block">Relationship</label>
              <input
                type="text"
                disabled={!isEditing}
                value={profile.guardianRelation}
                onChange={(e) => setProfile({ ...profile, guardianRelation: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 disabled:bg-slate-50 focus:border-[#C69234] focus:outline-hidden"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold block">Emergency Phone</label>
              <input
                type="tel"
                disabled={!isEditing}
                value={profile.guardianPhone}
                onChange={(e) => setProfile({ ...profile, guardianPhone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 disabled:bg-slate-50 focus:border-[#C69234] focus:outline-hidden"
              />
            </div>
          </div>
        </div>

        {/* Save Changes Floating Action Bar */}
        {isEditing && (
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-between gap-4 sticky bottom-6 z-20">
            <span className="text-xs text-slate-500 font-medium">
              You have unsaved changes. Review before saving.
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                Discard
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs font-bold shadow-xs transition active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
