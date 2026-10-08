"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { TeacherCoursesList } from "@/components/teacher-dashboard";

export default function TeacherCoursesPage() {
  const router = useRouter();

  return (
    <TeacherCoursesList
      onSelectCourse={(courseId) => {
        router.push(`/dashboard/teacher/courses/${courseId}`);
      }}
    />
  );
}
