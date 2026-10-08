"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { UploadLectureForm } from "@/components/teacher-dashboard";

export default function UploadLecturePage() {
  const router = useRouter();

  return (
    <UploadLectureForm
      onSuccess={() => {
        router.push("/dashboard/teacher/courses/cse-305");
      }}
      onCancel={() => {
        router.back();
      }}
    />
  );
}
