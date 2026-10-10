"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CourseDetailModules } from "@/components/dashboard/teacher-dashboard";

export default function CourseDetailPage() {
  const router = useRouter();

  return (
    <CourseDetailModules
      onBackToCourses={() => {
        router.push("/dashboard/teacher/courses");
      }}
    />
  );
}
