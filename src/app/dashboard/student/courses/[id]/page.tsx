import StudentCourseDetailView from "@/components/student-dashboard/StudentCourseDetailView";

export default async function StudentCourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <StudentCourseDetailView courseId={id} />;
}
