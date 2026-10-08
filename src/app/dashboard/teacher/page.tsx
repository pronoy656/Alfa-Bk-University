"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { TeacherOverview } from "@/components/teacher-dashboard";

export default function TeacherOverviewPage() {
  const router = useRouter();

  const handleNavigate = (tabId: string) => {
    switch (tabId) {
      case "courses":
        router.push("/dashboard/teacher/courses");
        break;
      case "assignments":
        router.push("/dashboard/teacher/assignments");
        break;
      case "upload-lecture":
        router.push("/dashboard/teacher/upload-lecture");
        break;
      case "attendance":
        router.push("/dashboard/teacher/attendance");
        break;
      case "grades":
        router.push("/dashboard/teacher/grades");
        break;
      default:
        router.push(`/dashboard/teacher/${tabId}`);
    }
  };

  return <TeacherOverview onNavigateTab={handleNavigate} />;
}
