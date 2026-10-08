"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  User,
  Clock,
  Calendar,
  FileText,
  PlayCircle,
  Download,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  Bell,
  Award,
  Upload,
  X,
  ChevronRight,
  ChevronLeft,
  Send,
  ThumbsUp,
  FileCode,
  ShieldCheck,
  Check,
  Timer,
} from "lucide-react";
import {
  DashboardModal,
  DashboardButton,
  DashboardBadge,
} from "@/components/dashboard/shared";

interface StudentCourseDetailViewProps {
  courseId: string;
}

export default function StudentCourseDetailView({ courseId }: StudentCourseDetailViewProps) {
  const [activeTab, setActiveTab] = useState<
    | "Overview"
    | "Lectures"
    | "Materials"
    | "Assignments"
    | "Quizzes"
    | "Exams"
    | "Discussion"
    | "Announcements"
  >("Overview");

  // Course Details
  const courseData = {
    id: courseId,
    code: "CSE-305",
    title: "Database Management System",
    credits: 3.0,
    instructor: "Dr. Rahman",
    instructorRole: "Associate Professor, Dept. of CSE",
    instructorEmail: "rahman@alfa.edu.rs",
    officeHours: "Sun & Tue 11:00 AM - 01:00 PM (Room 412)",
    schedule: "Sun & Tue · 09:00 AM - 10:30 AM · Room 302",
    progress: 62,
    enrolledCount: 45,
    description:
      "Comprehensive study of relational database models, entity-relationship diagrams, SQL query optimization, transaction processing, indexing architectures, normalization algorithms, and ACID guarantees in distributed systems.",
  };

  // 1. ASSIGNMENTS STATE & MODAL
  const [assignments, setAssignments] = useState([
    {
      id: "asg-4",
      title: "Assignment 04: Normalization and BCNF Decomposition",
      deadline: "Oct 25, 2026, 11:59 PM",
      dueDaysLeft: "3 Days Remaining",
      totalMarks: 20,
      status: "pending" as "pending" | "submitted" | "graded",
      grade: null as string | null,
      allowedFormats: ".PDF, .ZIP",
      instructions:
        "Complete the 5 normalization problems attached. You must demonstrate step-by-step minimal key generation and BCNF decomposition without loss of dependency.",
    },
    {
      id: "asg-3",
      title: "Assignment 03: Relational Algebra & Complex SQL Queries",
      deadline: "Oct 12, 2026, 11:59 PM",
      dueDaysLeft: "Completed",
      totalMarks: 20,
      status: "graded" as "pending" | "submitted" | "graded",
      grade: "19 / 20 (Grade: A+)",
      allowedFormats: ".SQL, .PDF",
      instructions: "Implement schema and write queries utilizing grouping, CTEs, and correlated subqueries.",
    },
    {
      id: "asg-2",
      title: "Assignment 02: ER Modeling & Relational Schema Mapping",
      deadline: "Sep 28, 2026, 11:59 PM",
      dueDaysLeft: "Completed",
      totalMarks: 15,
      status: "graded" as "pending" | "submitted" | "graded",
      grade: "15 / 15 (Grade: A+)",
      allowedFormats: ".PDF",
      instructions: "Map university library management system into 3NF relational schemas.",
    },
  ]);

  const [submitModalAssignment, setSubmitModalAssignment] = useState<typeof assignments[0] | null>(null);
  const [submissionFile, setSubmissionFile] = useState<string | null>(null);
  const [submissionComments, setSubmissionComments] = useState("");
  const [isSubmittingTask, setIsSubmittingTask] = useState(false);

  const handleSubmitAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitModalAssignment) return;
    setIsSubmittingTask(true);

    setTimeout(() => {
      setAssignments((prev) =>
        prev.map((a) =>
          a.id === submitModalAssignment.id
            ? { ...a, status: "submitted", dueDaysLeft: "Submitted on time" }
            : a
        )
      );
      setIsSubmittingTask(false);
      setSubmitModalAssignment(null);
      setSubmissionFile(null);
      setSubmissionComments("");
    }, 800);
  };

  // 2. QUIZ ENGINE STATE (10 Questions with Timer)
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizId, setCurrentQuizId] = useState<string | null>(null);
  const [quizTimerSeconds, setQuizTimerSeconds] = useState(15 * 60); // 15 mins
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "Which normal form deals with removing transitive functional dependencies?",
      options: [
        "First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
        "Boyce-Codd Normal Form (BCNF)",
      ],
      correct: 2,
    },
    {
      id: 2,
      question: "In relational algebra, which operator is represented by the Greek letter Sigma (σ)?",
      options: ["Projection", "Selection", "Cartesian Product", "Join"],
      correct: 1,
    },
    {
      id: 3,
      question: "What does the 'I' stand for in ACID properties of transaction management?",
      options: ["Integrity", "Isolation", "Index", "Iteration"],
      correct: 1,
    },
    {
      id: 4,
      question: "Which of the following index types is most efficient for range queries (e.g. BETWEEN 20 AND 50)?",
      options: ["Hash Index", "B+ Tree Index", "Bitmap Index", "Dense Cluster Index"],
      correct: 1,
    },
    {
      id: 5,
      question: "A relation is in BCNF if for every functional dependency X -> Y, X is a:",
      options: ["Foreign Key", "Candidate Key / Super Key", "Composite Attribute", "Primary Key only"],
      correct: 1,
    },
    {
      id: 6,
      question: "Which SQL clause is used to filter records after aggregate grouping with GROUP BY?",
      options: ["WHERE", "ORDER BY", "HAVING", "LIMIT"],
      correct: 2,
    },
    {
      id: 7,
      question: "What is the primary drawback of using BCNF decomposition over 3NF synthesis?",
      options: [
        "It might not preserve all functional dependencies",
        "It generates duplicate records",
        "It is always a lossy join decomposition",
        "It requires hash indexing",
      ],
      correct: 0,
    },
    {
      id: 8,
      question: "In two-phase locking protocol (2PL), once a transaction releases a lock, it can:",
      options: [
        "Acquire new shared locks only",
        "Acquire exclusive locks only",
        "Not acquire any further locks",
        "Restart immediately",
      ],
      correct: 2,
    },
    {
      id: 9,
      question: "Which recovery log technique forces all dirty buffer pages to disk periodically?",
      options: ["WAL Protocol", "Checkpointing", "Shadow Paging", "Undo-Redo Phase"],
      correct: 1,
    },
    {
      id: 10,
      question: "Which join operation returns all matched tuples plus unmatched tuples from both tables?",
      options: ["Left Outer Join", "Right Outer Join", "Full Outer Join", "Natural Inner Join"],
      correct: 2,
    },
  ];

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (quizMode && !quizSubmitted && quizTimerSeconds > 0) {
      interval = setInterval(() => {
        setQuizTimerSeconds((prev) => {
          if (prev <= 1) {
            handleAutoSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizMode, quizSubmitted, quizTimerSeconds]);

  const handleStartQuiz = (qId: string) => {
    setCurrentQuizId(qId);
    setQuizMode(true);
    setQuizTimerSeconds(15 * 60);
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const handleSelectOption = (optionIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIdx]: optionIdx,
    }));
  };

  const handleAutoSubmitQuiz = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // 3. DISCUSSION FORUM STATE
  const [discussionThreads, setDiscussionThreads] = useState([
    {
      id: "th-1",
      author: "Shahriar Kabir",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      time: "2 hours ago",
      question: "How do we identify redundant functional dependencies when computing the canonical cover in Assignment 4?",
      upvotes: 6,
      answers: [
        {
          id: "ans-1",
          author: "Dr. Rahman",
          isInstructor: true,
          time: "1 hour ago",
          text: "Shahriar, test each dependency X -> A by removing it from F. Then compute the attribute closure of X with respect to the remaining dependencies F'. If A is still in X+, then X -> A is redundant and can be pruned.",
        },
      ],
    },
    {
      id: "th-2",
      author: "Tania Ahmed",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      time: "Yesterday",
      question: "Will the Quiz 2 test B+ Tree deletion re-balancing cases?",
      upvotes: 4,
      answers: [
        {
          id: "ans-2",
          author: "Dr. Rahman",
          isInstructor: true,
          time: "Yesterday",
          text: "Focus primarily on B+ Tree insertion splits and node capacity bounds. Deletion merges will only be tested conceptually.",
        },
      ],
    },
  ]);

  const [newQuestionText, setNewQuestionText] = useState("");

  const handlePostQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newThread = {
      id: `th-${Date.now()}`,
      author: "Shahriar Kabir",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      time: "Just now",
      question: newQuestionText.trim(),
      upvotes: 0,
      answers: [],
    };

    setDiscussionThreads([newThread, ...discussionThreads]);
    setNewQuestionText("");
  };

  const tabs = [
    "Overview",
    "Lectures",
    "Materials",
    "Assignments",
    "Quizzes",
    "Exams",
    "Discussion",
    "Announcements",
  ] as const;

  return (
    <div className="w-full space-y-6">
      {/* 1. Header with Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/student/courses"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>My Courses</span>
          </Link>
          <span className="text-xs text-slate-400">/</span>
          <span className="text-xs font-bold text-slate-800">{courseData.code}</span>
        </div>

        <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-3.5 py-1 text-xs font-bold self-start sm:self-auto">
          Active Fall 2026 Term
        </span>
      </div>

      {/* 2. Course Hero Banner */}
      <div className="rounded-3xl bg-[#0B1E36] p-6 sm:p-8 text-white shadow-xs relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#C69234] text-white font-bold text-[11px] shadow-2xs">
                {courseData.code} · {courseData.credits} Credits
              </span>
              <span className="text-slate-300 font-medium">
                {courseData.schedule}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
              {courseData.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {courseData.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#C69234]" />
                Instructor: <strong className="text-white">{courseData.instructor}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C69234]" />
                Office Hours: {courseData.officeHours}
              </span>
            </div>
          </div>

          {/* Syllabus Progress Card */}
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-xs border border-white/10 shrink-0 w-full md:w-64 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-300">
              <span>Syllabus Covered</span>
              <span className="text-lg font-bold text-white">{courseData.progress}%</span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#C69234] h-full rounded-full transition-all duration-500"
                style={{ width: `${courseData.progress}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-400 block pt-1">
              12 of 18 Lectures Completed
            </span>
          </div>
        </div>
      </div>

      {/* 3. Secondary 8-Tabs Navigation Bar (Matching User Audio) */}
      <div className="border-b border-slate-200 bg-white rounded-2xl px-4 shadow-2xs">
        <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto scrollbar-none py-2 text-xs sm:text-sm font-semibold">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setQuizMode(false);
                }}
                className={`py-2.5 px-3 rounded-xl whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? "bg-[#0B1E36] text-white shadow-2xs font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab}
                {tab === "Assignments" && (
                  <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-[#C69234] text-white">
                    1
                  </span>
                )}
                {tab === "Quizzes" && (
                  <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-blue-500 text-white">
                    1
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. TAB CONTENTS */}

      {/* ==================== TAB 1: OVERVIEW ==================== */}
      {activeTab === "Overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* Learning Outcomes */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Course Learning Outcomes & Objectives
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Design normalized relational databases meeting 3NF and BCNF requirements.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Formulate optimized complex SQL queries and analyze explain execution plans.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Understand transaction concurrency isolation levels, deadlock handling, and recovery logs.</span>
                  </div>
                </div>
              </div>

              {/* Course Grading Weightage */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Grading Criteria & Weightage Breakdown
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">Assignments</span>
                    <p className="text-xl font-bold text-slate-900 mt-1">20%</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">Quizzes</span>
                    <p className="text-xl font-bold text-slate-900 mt-1">15%</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">Mid-Term Exam</span>
                    <p className="text-xl font-bold text-slate-900 mt-1">25%</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">Final Exam</span>
                    <p className="text-xl font-bold text-[#C69234] mt-1">40%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructor & Quick Info */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Faculty Instructor</h3>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt={courseData.instructor}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{courseData.instructor}</h4>
                    <span className="text-xs text-slate-500">{courseData.instructorRole}</span>
                  </div>
                </div>
                <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                  <p><strong>Email:</strong> {courseData.instructorEmail}</p>
                  <p><strong>Office Hours:</strong> {courseData.officeHours}</p>
                </div>
                <Link
                  href="/dashboard/student/messages"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0B1E36] hover:bg-[#162D4E] text-white text-xs font-bold transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Message to Dr. Rahman</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 2: LECTURES ==================== */}
      {activeTab === "Lectures" && (
        <div className="space-y-6">
          {/* Lecture Stream Player Mock */}
          <div className="rounded-3xl border border-slate-200/80 bg-slate-950 p-6 sm:p-8 text-white shadow-2xs overflow-hidden relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold text-[#D5A754] uppercase tracking-wider">
                  NOW STREAMING · SESSION 12
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  Lecture 12: BCNF vs 3NF Decomposition & Minimal Covers
                </h3>
              </div>
              <button
                type="button"
                onClick={() => alert("Downloading lecture slides PDF")}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Slides</span>
              </button>
            </div>

            <div className="my-6 aspect-video max-h-[380px] w-full bg-slate-900 rounded-2xl flex items-center justify-center relative border border-white/10 overflow-hidden">
              <PlayCircle className="w-16 h-16 text-[#C69234] hover:scale-110 transition cursor-pointer" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-black/60 backdrop-blur-xs p-3 rounded-xl">
                <span>00:00 / 48:20</span>
                <span>Instructor: Dr. Rahman · 1080p HD</span>
              </div>
            </div>
          </div>

          {/* Modules Accordion List */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">Recorded Lecture Library</h3>
            <div className="space-y-3">
              {[
                { title: "Lecture 01: Introduction to DBMS Architecture", dur: "45 mins", date: "Sep 05", watched: true },
                { title: "Lecture 02: Relational Model & Keys", dur: "42 mins", date: "Sep 09", watched: true },
                { title: "Lecture 03: Entity Relationship (ER) Diagrams", dur: "50 mins", date: "Sep 12", watched: true },
                { title: "Lecture 04: Extended ER & Constraints", dur: "40 mins", date: "Sep 16", watched: true },
                { title: "Lecture 05: Relational Algebra Operations", dur: "48 mins", date: "Sep 20", watched: true },
                { title: "Lecture 06: Basic SQL & DDL Operations", dur: "45 mins", date: "Sep 25", watched: true },
                { title: "Lecture 07: Complex Joins, Subqueries & Aggregates", dur: "52 mins", date: "Sep 30", watched: true },
                { title: "Lecture 08: Views, Triggers and Stored Procedures", dur: "46 mins", date: "Oct 03", watched: true },
                { title: "Lecture 09: Functional Dependencies & Closure", dur: "44 mins", date: "Oct 07", watched: true },
                { title: "Lecture 10: First, Second and Third Normal Forms", dur: "55 mins", date: "Oct 10", watched: true },
                { title: "Lecture 11: Boyce-Codd Normal Form (BCNF)", dur: "47 mins", date: "Oct 14", watched: true },
                { title: "Lecture 12: BCNF vs 3NF Decomposition & Minimal Covers", dur: "48 mins", date: "Oct 17", watched: false },
              ].map((lec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-4 transition"
                >
                  <div className="flex items-center gap-3">
                    <PlayCircle className="w-5 h-5 text-slate-600 shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{lec.title}</h4>
                      <span className="text-[11px] text-slate-400">{lec.dur} · Streamed on {lec.date}</span>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${lec.watched ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"}`}>
                    {lec.watched ? "Completed" : "Watch Now"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 3: MATERIALS ==================== */}
      {activeTab === "Materials" && (
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Reference Materials & Lecture Notes</h3>
              <p className="text-xs text-slate-500">Download syllabus notes, slides decks, and SQL templates</p>
            </div>
            <button
              type="button"
              onClick={() => alert("Downloading all semester materials in a single ZIP...")}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition"
            >
              Download All (.ZIP)
            </button>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { name: "Silberschatz - Database System Concepts (7th Edition).pdf", size: "32.4 MB", type: "Textbook PDF", date: "Sep 01" },
              { name: "Module 01: Relational Model Foundations Slides Deck.pptx", size: "8.6 MB", type: "Slides PPTX", date: "Sep 10" },
              { name: "University DB Sample Schema Dump & Data Seeder.sql", size: "1.2 MB", type: "SQL Script", date: "Sep 22" },
              { name: "Module 02: Advanced SQL Query Patterns Cheatsheet.pdf", size: "4.1 MB", type: "PDF Notes", date: "Sep 28" },
              { name: "Module 03: Normalization Step-by-Step Proof Guide.pdf", size: "5.8 MB", type: "PDF Notes", date: "Oct 12" },
            ].map((mat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-100/70 flex items-center justify-between gap-4 transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#C69234]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{mat.name}</h4>
                    <span className="text-[11px] text-slate-400">{mat.type} · {mat.size} · Uploaded {mat.date}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Downloading: ${mat.name}`)}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-white text-slate-700 transition cursor-pointer shrink-0"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================== TAB 4: ASSIGNMENTS (With Submit Modal) ==================== */}
      {activeTab === "Assignments" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Coursework Assignments</h3>
              <p className="text-xs text-slate-500">Track deadlines, submit deliverables, and review evaluations</p>
            </div>
          </div>

          <div className="space-y-4">
            {assignments.map((asg) => (
              <div
                key={asg.id}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs hover:border-slate-300 transition flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#C69234]">
                      {asg.totalMarks} Points
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-400">
                      Formats: {asg.allowedFormats}
                    </span>
                    {asg.status === "pending" && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {asg.dueDaysLeft}
                      </span>
                    )}
                    {asg.status === "submitted" && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                        Submitted · Evaluation Pending
                      </span>
                    )}
                    {asg.status === "graded" && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Graded: {asg.grade}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {asg.title}
                  </h4>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {asg.instructions}
                  </p>

                  <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Deadline: <strong className="text-slate-700">{asg.deadline}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {asg.status === "pending" ? (
                    <button
                      type="button"
                      onClick={() => setSubmitModalAssignment(asg)}
                      className="px-5 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs font-bold shadow-xs transition active:scale-95 cursor-pointer flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Submit Assignment</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => alert(`Reviewing your submission file for ${asg.title}`)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition cursor-pointer"
                    >
                      View Submission
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* SUBMIT ASSIGNMENT MODAL (Powered by Reusable DashboardModal) */}
          <DashboardModal
            isOpen={!!submitModalAssignment}
            onClose={() => setSubmitModalAssignment(null)}
            badge="Assignment Submission"
            badgeColor="gold"
            title={submitModalAssignment?.title || ""}
            subtitle={`Deadline: ${submitModalAssignment?.deadline || ""}`}
            maxWidth="lg"
            footerActions={
              <>
                <DashboardButton
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setSubmitModalAssignment(null)}
                >
                  Cancel
                </DashboardButton>
                <DashboardButton
                  type="submit"
                  form="submit-assignment-form"
                  variant="gold"
                  size="sm"
                  loading={isSubmittingTask}
                >
                  Confirm & Submit Deliverable
                </DashboardButton>
              </>
            }
          >
            {submitModalAssignment && (
              <form
                id="submit-assignment-form"
                onSubmit={handleSubmitAssignment}
                className="space-y-4"
              >
                {/* File Upload Dropzone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Upload Solution File (.pdf or .zip) <span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={() => setSubmissionFile("Normalization_Solution_Shahriar_Kabir.pdf")}
                    className="border-2 border-dashed border-slate-200 hover:border-[#C69234] rounded-2xl p-6 text-center cursor-pointer bg-slate-50/60 transition"
                  >
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    {submissionFile ? (
                      <div className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{submissionFile} (Ready to upload)</span>
                      </div>
                    ) : (
                      <>
                        <p className="text-xs font-semibold text-slate-700">
                          Click to attach solution PDF or drag file here
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1">
                          Accepted: {submitModalAssignment.allowedFormats} (Max 25MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Comments for Instructor */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Student Notes / Comments (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={submissionComments}
                    onChange={(e) => setSubmissionComments(e.target.value)}
                    placeholder="Add any notes about your solution steps or problem assumptions..."
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] resize-none"
                  />
                </div>
              </form>
            )}
          </DashboardModal>
        </div>
      )}

      {/* ==================== TAB 5: QUIZZES (With 15-Min Timer & 10 Questions Engine) ==================== */}
      {activeTab === "Quizzes" && (
        <div className="space-y-6">
          {!quizMode ? (
            /* Quiz Cards List */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Course Quizzes & Online Tests</h3>
                  <p className="text-xs text-slate-500">Timed assessments with automated grading</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Quiz 02: Active Quiz */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-amber-50 text-amber-800 border border-amber-200 px-3 py-0.5 text-xs font-bold">
                        Available Now · 1 Attempt
                      </span>
                      <span className="text-xs font-bold text-[#C69234]">15 Points</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mt-3">
                      Quiz 02: Normalization, BCNF & 3NF Synthesis
                    </h4>

                    <p className="text-xs text-slate-500 mt-1">
                      10 Multiple Choice Questions covering functional dependencies, candidate keys, and decomposition algorithms.
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-3 mt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Timer className="w-3.5 h-3.5 text-slate-400" />
                        <span>Timer: <strong>15 Minutes</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                        <span>Total: <strong>10 Questions</strong></span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartQuiz("q-2")}
                    className="w-full py-3 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs font-bold transition active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Start Quiz (15 Mins)</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </button>
                </div>

                {/* Quiz 01: Completed */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-0.5 text-xs font-bold">
                        Completed & Graded
                      </span>
                      <span className="text-xs font-bold text-emerald-600">Score: 14 / 15 (93%)</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mt-3">
                      Quiz 01: Relational Algebra & SQL Foundations
                    </h4>

                    <p className="text-xs text-slate-500 mt-1">
                      Completed on Sep 22, 2026. Review questions and explanations below.
                    </p>

                    <div className="text-xs text-slate-400 pt-3 mt-3 border-t border-slate-100">
                      <span>Submitted in 11 minutes · Correct: 14/15</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert("Viewing Quiz 01 results and solution review...")}
                    className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition cursor-pointer"
                  >
                    View Score Details & Review
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Quiz Engine Screen */
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
              {quizSubmitted ? (
                /* Result Screen */
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <Award className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Quiz Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    You scored <strong className="text-emerald-600 font-extrabold text-base">{quizScore} out of 10 ({quizScore * 10}%)</strong>.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuizMode(false)}
                      className="px-5 py-2.5 rounded-xl bg-[#0B1E36] text-white text-xs font-bold hover:bg-[#162D4E] transition"
                    >
                      Return to Quizzes List
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Question & Timer Screen */
                <div className="space-y-6">
                  {/* Top Bar with Live Timer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B1E36] text-white">
                    <div>
                      <span className="text-[10px] font-bold text-[#D5A754] uppercase tracking-wider">
                        QUIZ 02 IN PROGRESS
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        Question {currentQuestionIdx + 1} of {quizQuestions.length}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 text-white font-mono font-bold text-sm">
                        <Timer className="w-4 h-4 text-[#D5A754]" />
                        <span>{formatTimer(quizTimerSeconds)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleAutoSubmitQuiz}
                        className="px-4 py-1.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs font-bold transition cursor-pointer"
                      >
                        Finish Quiz
                      </button>
                    </div>
                  </div>

                  {/* 10-Question Pagination Jump Bar */}
                  <div className="flex flex-wrap items-center gap-2">
                    {quizQuestions.map((_, idx) => {
                      const isAnswered = selectedAnswers[idx] !== undefined;
                      const isCurrent = idx === currentQuestionIdx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentQuestionIdx(idx)}
                          className={`w-9 h-9 rounded-xl text-xs font-bold transition cursor-pointer ${
                            isCurrent
                              ? "bg-[#0B1E36] text-white shadow-2xs ring-2 ring-[#C69234]"
                              : isAnswered
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {/* Current Question Body */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      Q{currentQuestionIdx + 1}. {quizQuestions[currentQuestionIdx].question}
                    </h3>

                    {/* Options (Radio selection) */}
                    <div className="space-y-2.5">
                      {quizQuestions[currentQuestionIdx].options.map((opt, oIdx) => {
                        const isSelected = selectedAnswers[currentQuestionIdx] === oIdx;
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => handleSelectOption(oIdx)}
                            className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "border-[#C69234] bg-amber-50/50 text-slate-900 shadow-2xs font-bold"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? "bg-[#C69234] text-white"
                                    : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span>{opt}</span>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-[#C69234]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      disabled={currentQuestionIdx === 0}
                      onClick={() => setCurrentQuestionIdx((p) => p - 1)}
                      className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    {currentQuestionIdx === quizQuestions.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleAutoSubmitQuiz}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition cursor-pointer"
                      >
                        Submit Final Answers
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setCurrentQuestionIdx((p) => p + 1)}
                        className="px-5 py-2 rounded-xl bg-[#0B1E36] hover:bg-[#162D4E] text-white text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Next Question</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ==================== TAB 6: EXAMS ==================== */}
      {activeTab === "Exams" && (
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">Examination Schedules & Guidelines</h3>
            <p className="text-xs text-slate-500">Official invigilation halls, syllabi, and past exam questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Mid-Term */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Completed Mid-Term
              </span>
              <h4 className="text-base font-bold text-slate-900">Mid-Term Examination</h4>
              <div className="text-xs text-slate-600 space-y-1">
                <p><strong>Date & Time:</strong> Sep 24, 2026 · 10:00 AM - 11:30 AM</p>
                <p><strong>Venue:</strong> Room 302 (Engineering Building)</p>
                <p><strong>Weightage:</strong> 25% of total course marks</p>
                <p><strong>Score:</strong> 23 / 25 (Grade: A)</p>
              </div>
            </div>

            {/* Final Exam */}
            <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/40 space-y-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                Scheduled · Fall 2026
              </span>
              <h4 className="text-base font-bold text-slate-900">Final Term Comprehensive Exam</h4>
              <div className="text-xs text-slate-700 space-y-1">
                <p><strong>Scheduled Date:</strong> Nov 18, 2026 · 09:30 AM - 12:30 PM</p>
                <p><strong>Venue:</strong> Central Auditorium (Desk Hall A)</p>
                <p><strong>Weightage:</strong> 40% of total grade</p>
                <p><strong>Syllabus:</strong> Comprehensive (Modules 1 through 5)</p>
              </div>
              <button
                type="button"
                onClick={() => alert("Downloading past 3 years Final Exam Question Papers PDF...")}
                className="w-full mt-2 py-2 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Past Exam Papers</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 7: DISCUSSION ==================== */}
      {activeTab === "Discussion" && (
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">Course Discussion & Q&A Forum</h3>
            <p className="text-xs text-slate-500">Ask questions, share insights, and receive verified answers from Dr. Rahman</p>
          </div>

          {/* Post Question Form */}
          <form onSubmit={handlePostQuestion} className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <textarea
              rows={2}
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              placeholder="Ask a technical question about SQL, normalization, or transactions..."
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 focus:outline-hidden focus:border-[#C69234] resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!newQuestionText.trim()}
                className="px-5 py-2 rounded-xl bg-[#0B1E36] hover:bg-[#162D4E] text-white text-xs font-bold transition disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
              >
                <Send className="w-3 h-3" />
                <span>Post Question</span>
              </button>
            </div>
          </form>

          {/* Threads List */}
          <div className="space-y-4">
            {discussionThreads.map((th) => (
              <div key={th.id} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img src={th.avatar} alt={th.author} className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-xs font-bold text-slate-800">{th.author}</span>
                    <span className="text-[10px] text-slate-400">· {th.time}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {th.upvotes}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                  {th.question}
                </p>

                {/* Answers */}
                {th.answers.map((ans) => (
                  <div key={ans.id} className="ml-4 pl-4 border-l-2 border-[#C69234] space-y-1 pt-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-slate-900">{ans.author}</span>
                      {ans.isInstructor && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C69234] text-white">
                          Verified Instructor
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400">· {ans.time}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{ans.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================== TAB 8: ANNOUNCEMENTS ==================== */}
      {activeTab === "Announcements" && (
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Instructor Announcements</h3>
            <p className="text-xs text-slate-500">Official course memos published by Dr. Rahman</p>
          </div>

          <div className="space-y-4 pt-2">
            {[
              {
                date: "Oct 17, 2026",
                title: "Assignment 04 Submission Deadline Extended",
                text: "Due to server maintenance on the central laboratory server, the submission deadline for Assignment 04 (Normalization) is extended to Sunday, October 25th at 11:59 PM.",
              },
              {
                date: "Oct 10, 2026",
                title: "Quiz 02 Syllabus and Practice Problems Available",
                text: "Quiz 02 will be conducted online next week covering Boyce-Codd Normal Form and minimal keys. Practice slides have been uploaded under the Materials tab.",
              },
              {
                date: "Sep 22, 2026",
                title: "Mid-Term Examination Hall Allotment",
                text: "The mid-term examination will be held in Room 302. Please ensure you carry your university photo ID card and physical stationery.",
              },
            ].map((ann, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#C69234] flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5" />
                    Announcement
                  </span>
                  <span className="text-slate-400 font-medium">{ann.date}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{ann.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{ann.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
