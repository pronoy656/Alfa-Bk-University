# 🎓 Alfa BK University Portal & Academic Management System

An integrated, enterprise-grade digital campus ecosystem and academic management platform designed for **Alfa BK University** (Belgrade, Serbia). The system bridges prospective students, enrolled learners, faculty members, and university administration into a single, cohesive academic workspace.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [System Architecture & Portals](#-system-architecture--portals)
- [Public University Web Portal](#-public-university-web-portal)
- [Student Academic Portal](#-student-academic-portal)
- [Faculty & Teacher Portal](#-faculty--teacher-portal)
- [University Administration Portal](#-university-administration-portal)
- [User Roles & Demo Access](#-user-roles--demo-access)
- [Setup & Launch Instructions](#-setup--launch-instructions)

---

## 🌟 Project Overview

Alfa BK University Portal is built to streamline academic administration, simplify digital learning, and deliver a modern student experience. The platform unites two interconnected systems:

1. **Public Institutional Web Presence:** Showcases accredited academic programs, faculty profiles, admissions pipelines, university governance, research facilities, and campus events.
2. **Unified Role-Based Academic Dashboards:** Provides personalized, secure workflows for Students, Teachers, and University Administrators to handle everything from live timed quizzes and assignment submissions to grade moderation and schedule planning.

---

## 🏛️ System Architecture & Portals

The application is structured around four primary portals:

```text
Alfa BK University Platform
│
├── 🌐 Public University Portal     (Information, Faculties, Programs, Admissions)
│
├── 🎓 Student Academic Portal        (Courses, Timed Quizzes, Assignments, Grades, Attendance)
│
├── 👨‍🏫 Faculty & Teacher Portal      (Course Management, Lecture Publishing, Assessment Creation)
│
└── 🏢 University Administration     (15 Governance Modules: Students, Staff, Routines, Transcripts)
```

---

## 🌐 Public University Web Portal

The public web experience provides clear, accessible information for students, guardians, international applicants, and researchers.

### 1. Homepage & University Identity
- **Campus Hero Section:** Visual overview of university achievements, faculty accreditations, and academic calendar dates.
- **Accredited Faculties Showcase:** Direct access to all 6 core faculties with department listings and faculty deans.
- **Academic Highlights & Statistics:** Enrolled student figures, international partner universities, and career placement rates.
- **Campus News & Events:** Dynamic newsfeed featuring conferences, guest lectures, student symposiums, and cultural events.

### 2. Faculty Portals
Dedicated hubs with program curricula, department leadership, and research focus areas:
- **Faculty of Information Technologies (FIT):** Computer science, software engineering, and artificial intelligence programs.
- **Faculty of Mathematics and Computer Science:** Applied mathematics, algorithmic theory, and data analytics.
- **Faculty of Finance, Banking and Audit:** International finance, banking regulations, and corporate accounting.
- **Faculty of Management and Sports:** Sport management, organizational leadership, and sports marketing.
- **Faculty of Foreign Languages:** Applied linguistics, translation studies, and philology.
- **Faculty of Psychology:** Clinical psychology, cognitive behavioral studies, and counseling.

### 3. Study Programs & Admissions
- **Program Directory:** Comprehensive listing of Undergraduate (BSc), Master's (MSc), and Doctoral (PhD) degree tracks.
- **Curriculum Details:** Term-by-term syllabus outlines, course prerequisites, and European Credit Transfer System (ECTS) point distributions.
- **Online Admissions Application:** Digital application form with program selection, document submission guidance, and entry requirement details.

### 4. Governance & University Services
- **Rectorate & Leadership:** Administrative governance structure, university senate, and rector messages.
- **History & International Relations:** University heritage, Erasmus+ collaborations, and international academic exchanges.
- **Digital Library & Archives:** Access to academic publications, master's theses, and digital research repositories.
- **Electronic Services Hub:** Central launchpad for e-Student services, e-Employee administrative tools, and e-Learning systems.

---

## 🎓 Student Academic Portal

The Student Portal (`/dashboard/student`) provides enrolled learners with a comprehensive self-service academic cockpit.

### 1. Academic Dashboard & Status Widgets
- **Academic Performance Tracker:** Instant visibility of Cumulative Grade Point Average (CGPA), total earned credits, and semester completion status.
- **Attendance Rate Gauge:** Overall lecture attendance percentage with automated eligibility alerts.
- **Today's Schedule:** Quick glance at today's active classes, lecture halls, and instructor details.
- **Pending Deliverables:** Urgent assignment deadlines and upcoming examination alerts.

### 2. Course Management & Dynamic Courseware
Each enrolled course (e.g. *Database Management System - CSE-305*) features an 8-tab learning hub:

- **Tab 1: Overview**
  - Course scope, prerequisites, textbook references, and learning objectives.
  - Official grade weighting breakdown (20% Assignments, 15% Quizzes, 25% Mid-Term, 40% Final Exam).
  - Instructor office hours and communication channels.
- **Tab 2: Lectures**
  - Full module catalog (12+ lecture modules) with integrated streaming preview and downloadable slide decks.
- **Tab 3: Study Materials**
  - Textbooks, lecture presentation files, SQL database scripts, cheatsheets, and exercise files with direct download actions.
- **Tab 4: Assignments**
  - Status badges for coursework (`Pending`, `Submitted`, `Graded`).
  - Clear deadline timers and mark allocations.
  - **Submit Assignment Modal:** Drag-and-drop solution uploader (.pdf, .zip), instruction reviews, and optional student notes for instructors.
- **Tab 5: Interactive Timed Quizzes**
  - **15-Minute Countdown Engine:** Live timer with automated submission when time expires.
  - **10-Question Assessment Screen:** Multiple-choice questions with selectable radio choices.
  - **Question Jump Bar:** Rapid pagination pills (Q1–Q10) showing answered, current, and unanswered items.
  - **Instant Scoring:** Automated grading calculation with percentage review upon submission.
- **Tab 6: Examinations**
  - Schedules for mid-term and final examinations with designated hall numbers and seating blocks.
  - Syllabus coverage guidelines and past year examination question paper download triggers.
- **Tab 7: Discussion Forum**
  - Interactive Q&A thread board for students to ask technical questions.
  - Community upvoting and verified instructor replies.
- **Tab 8: Announcements Feed**
  - Instructor notices regarding deadline extensions, laboratory arrangements, and examination guidelines.

### 3. Class & Exam Routines
- **Weekly Class Timetable:** Day-by-day weekly grid displaying lecture times, room allocations, course titles, and faculty instructors.
- **Semester Exam Routine:** Complete examination timetable with dates, start/end times, invigilators, and hall allocations.

### 4. Attendance & Academic Transcripts
- **Subject-Wise Attendance:** Detailed percentage meters for every course, present/absent tallies, and minimum percentage eligibility indicators.
- **Academic Results & Transcripts:** Official semester results table displaying course codes, credit hours, numerical scores, letter grades, and GPA calculations.

### 5. Communication & Profile Management
- **Notices & Bulletins:** Official university administrative memos and holiday schedules.
- **Faculty Messaging:** Direct communication channel to consult course instructors.
- **Settings:** Profile details, emergency contacts, academic enrollment info, and security credentials.

---

## 👨‍🏫 Faculty & Teacher Portal

The Teacher Portal (`/dashboard/teacher`) gives professors and instructors full control over course delivery and student evaluation.

### 1. Instructor Cockpit
- High-level overview of assigned courses, total enrolled students, pending assignment submissions, and upcoming lectures.
- Direct shortcuts to create assignments, schedule quizzes, or upload new lectures.

### 2. Course & Lecture Management
- **Course Rosters:** Access all assigned courses with student rosters and progress statistics.
- **Upload Lecture Modal:** Add new lecture recordings, attach slide decks (PDF/PPTX), specify durations, and write lecture outlines.

### 3. Assessment & Grading Tools
- **Assignment Builder:** Publish coursework with custom deadlines, total marks, late submission penalties, and permitted file formats (.pdf, .docx, .zip).
- **Quiz Creator:** Schedule timed assessments with configurable question counts, time durations (15 to 60 mins), and delivery formats.
- **Grade Book:** Record and moderate scores for mid-term exams, quizzes, laboratory tasks, and final term papers.

### 4. Routine & Announcements
- **Teaching Timetable:** View personal weekly lecture hours and allocated classroom venues.
- **Course Announcements:** Publish announcements and notifications to all students enrolled in a specific course.

---

## 🏢 University Administration Portal

The Administrator Portal (`/dashboard/admin`) centralizes academic governance, records, and university compliance across 15 dedicated modules:

| Administrative Module | Purpose & Scope |
| :--- | :--- |
| **Students Management** | Enrolled student records, admissions data, program transfers, and status tracking. |
| **Teachers & Faculty** | Faculty member directory, departmental assignments, and teaching allocations. |
| **Academic Programs** | Degree program configurations, credit structures, and study track management. |
| **Departments & Faculties** | Department leadership, administrative units, and faculty grouping. |
| **Course Catalog** | Master course registry, credit ratings, and prerequisites. |
| **Semester Management** | Academic terms, registration windows, and term progression calendars. |
| **Central Routine** | Master timetable scheduling and classroom venue allocation across all faculties. |
| **Exams & Invigilation** | Central exam session scheduling, hall capacities, and invigilator rosters. |
| **Academic Results** | University-wide grade publication, transcript certification, and GPA calculations. |
| **Attendance Monitoring** | Institutional attendance audits and eligibility clearance. |
| **Announcements** | Campus-wide circulars, official decrees, and holiday schedules. |
| **Document Archive** | Official university policies, bylaws, accreditation forms, and templates. |
| **Institutional Reports** | Statistical reports on student retention, performance, and faculty workload. |
| **System Settings** | Role permissions, term dates, and portal configuration controls. |

---

## 🔑 User Roles & Demo Access

The portal includes an interactive demo authentication screen (`/login`) enabling instant testing across all three primary roles:

| User Role | Demo ID | Default Password | Initial Route |
| :--- | :--- | :--- | :--- |
| **Student** | `STU-2024-0451` *(Shahriar Kabir)* | *(any password)* | `/dashboard/student` |
| **Teacher** | `FAC-CSE-018` *(Dr. Rahman)* | *(any password)* | `/dashboard/teacher` |
| **Administrator** | `ADM-MAIN-001` *(Central Admin)* | *(any password)* | `/dashboard/admin` |

---

## 🚀 Setup & Launch Instructions

### Prerequisites
- Node runtime environment installed on your machine.
- A package manager (`npm`, `pnpm`, or `yarn`).

### Quick Start

1. **Clone the project repository:**
   ```bash
   git clone https://github.com/pronoy656/Alfa-Bk-University.git
   cd Alfa-Bk-University
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local application server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the public portal, or go to [http://localhost:3000/login](http://localhost:3000/login) to access the role dashboards.

### Production Build Verification
To compile and test the full application build:
```bash
npm run build
npm run start
```
