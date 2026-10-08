"use client";

import React, { useState } from "react";
import {
  Search,
  Send,
  Paperclip,
  CheckCheck,
  MoreVertical,
  Phone,
  Video,
  Smile,
  Circle,
  Clock,
} from "lucide-react";

interface Message {
  id: string;
  sender: "faculty" | "student";
  text: string;
  time: string;
}

interface Conversation {
  id: string;
  name: string;
  role: string;
  course: string;
  avatarUrl: string;
  online: boolean;
  unreadCount?: number;
  lastMessage: string;
  lastTime: string;
  messages: Message[];
}

export default function StudentMessagesView() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "c-1",
      name: "Dr. Rahman",
      role: "Associate Professor",
      course: "Database Management (CSE-305)",
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      online: true,
      unreadCount: 1,
      lastMessage: "Please check the revised SQL indexing slides uploaded today.",
      lastTime: "10:14 AM",
      messages: [
        {
          id: "m-1",
          sender: "student",
          text: "Assalamu Alaikum Dr. Rahman, could you please clarify question 3 regarding BCNF decomposition from Assignment 4?",
          time: "09:45 AM",
        },
        {
          id: "m-2",
          sender: "faculty",
          text: "Wa Alaikum Assalam Shahriar. In step 3, make sure you compute the canonical cover first before projecting functional dependencies.",
          time: "09:52 AM",
        },
        {
          id: "m-3",
          sender: "student",
          text: "Understood, thank you sir! I have submitted the draft PDF.",
          time: "10:02 AM",
        },
        {
          id: "m-4",
          sender: "faculty",
          text: "Please check the revised SQL indexing slides uploaded today.",
          time: "10:14 AM",
        },
      ],
    },
    {
      id: "c-2",
      name: "Dr. Hasan Mahmud",
      role: "Professor & Head of Dept.",
      course: "Software Engineering (CSE-310)",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      online: true,
      lastMessage: "The class presentation schedule has been confirmed for Monday.",
      lastTime: "Yesterday",
      messages: [
        {
          id: "m-21",
          sender: "faculty",
          text: "The class presentation schedule has been confirmed for Monday.",
          time: "Yesterday, 04:30 PM",
        },
      ],
    },
    {
      id: "c-3",
      name: "Ms. Farhana Sultana",
      role: "Assistant Professor",
      course: "Computer Networking (CSE-320)",
      avatarUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
      online: false,
      lastMessage: "Your lab packet sniffing report score has been updated.",
      lastTime: "Oct 06",
      messages: [
        {
          id: "m-31",
          sender: "faculty",
          text: "Your lab packet sniffing report score has been updated.",
          time: "Oct 06, 02:15 PM",
        },
      ],
    },
    {
      id: "c-4",
      name: "Prof. Dr. Milan Stanković",
      role: "Senior Chair",
      course: "Artificial Intelligence (CSE-401)",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
      online: true,
      lastMessage: "Good job on the heuristic search formulation for A* pathfinding.",
      lastTime: "Oct 04",
      messages: [
        {
          id: "m-41",
          sender: "faculty",
          text: "Good job on the heuristic search formulation for A* pathfinding.",
          time: "Oct 04, 11:20 AM",
        },
      ],
    },
    {
      id: "c-5",
      name: "Registrar Academic Helpdesk",
      role: "University Administration",
      course: "Student Advisory & Records",
      avatarUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
      online: false,
      lastMessage: "Spring 2027 course pre-advising is active until Nov 10.",
      lastTime: "Sep 28",
      messages: [
        {
          id: "m-51",
          sender: "faculty",
          text: "Spring 2027 course pre-advising is active until Nov 10.",
          time: "Sep 28, 09:00 AM",
        },
      ],
    },
  ]);

  const [activeConvId, setActiveConvId] = useState<string>("c-1");
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const activeConv =
    conversations.find((c) => c.id === activeConvId) || conversations[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: "student",
      text: inputText.trim(),
      time: "Just now",
    };

    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === activeConvId) {
          return {
            ...c,
            lastMessage: inputText.trim(),
            lastTime: "Just now",
            messages: [...c.messages, newMsg],
          };
        }
        return c;
      })
    );

    setInputText("");

    // Simulate faculty response after 1.5s
    setTimeout(() => {
      const replyMsg: Message = {
        id: `reply-${Date.now()}`,
        sender: "faculty",
        text: "Thank you for the update. I will review it shortly.",
        time: "Just now",
      };

      setConversations((prev) =>
        prev.map((c) => {
          if (c.id === activeConvId) {
            return {
              ...c,
              lastMessage: replyMsg.text,
              lastTime: "Just now",
              messages: [...c.messages, replyMsg],
            };
          }
          return c;
        })
      );
    }, 1500);
  };

  const filteredConversations = conversations.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] tracking-tight">
          Faculty Messages & Advising
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
          Direct communication with your course instructors, academic advisor, and university support
        </p>
      </div>

      {/* Main 2-Column Chat Container */}
      <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col md:flex-row min-h-[640px] max-h-[780px]">
        {/* Left Column: Inbox List */}
        <div className="w-full md:w-80 lg:w-96 border-r border-slate-100 flex flex-col shrink-0 bg-slate-50/40">
          {/* Search Bar */}
          <div className="p-4 border-b border-slate-100 bg-white">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty or course..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-slate-100/70 border border-slate-200/60 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#C69234]"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100/60">
            {filteredConversations.map((c) => {
              const isActive = c.id === activeConvId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setActiveConvId(c.id);
                    // Mark read
                    setConversations((prev) =>
                      prev.map((item) =>
                        item.id === c.id ? { ...item, unreadCount: 0 } : item
                      )
                    );
                  }}
                  className={`w-full p-4 flex items-start gap-3 text-left transition cursor-pointer ${
                    isActive
                      ? "bg-white border-l-4 border-[#C69234] shadow-2xs"
                      : "hover:bg-white/80"
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={c.avatarUrl}
                      alt={c.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    {c.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {c.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                        {c.lastTime}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-[#C69234] block truncate">
                      {c.course}
                    </span>

                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {c.lastMessage}
                    </p>
                  </div>

                  {c.unreadCount ? (
                    <span className="w-5 h-5 rounded-full bg-[#C69234] text-white text-[10px] font-bold flex items-center justify-center shrink-0 self-center">
                      {c.unreadCount}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Conversation Thread */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={activeConv.avatarUrl}
                  alt={activeConv.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                />
                {activeConv.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  {activeConv.name}
                </h3>
                <span className="text-xs text-slate-500 block">
                  {activeConv.role} · <strong className="text-[#C69234] font-medium">{activeConv.course}</strong>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                {activeConv.online ? "Online Now" : "Offline"}
              </span>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/30">
            {/* Timestamp pill */}
            <div className="flex justify-center my-2">
              <span className="px-3 py-1 rounded-full bg-slate-200/70 text-[10px] font-semibold text-slate-600">
                Today, October 08, 2026
              </span>
            </div>

            {activeConv.messages.map((m) => {
              const isStudent = m.sender === "student";

              return (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    isStudent ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-md p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isStudent
                        ? "bg-[#0B1E36] text-white rounded-br-xs shadow-2xs"
                        : "bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs shadow-2xs"
                    }`}
                  >
                    {m.text}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 px-1">
                    <span>{m.time}</span>
                    {isStudent && <CheckCheck className="w-3 h-3 text-blue-500" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={handleSendMessage}
            className="p-3.5 sm:p-4 border-t border-slate-100 bg-white flex items-center gap-2"
          >
            <button
              type="button"
              onClick={() => alert("Attach lecture brief or draft document...")}
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer shrink-0"
              title="Attach File"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Write a message to ${activeConv.name}...`}
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#C69234]"
            />

            <button
              type="submit"
              disabled={!inputText.trim()}
              className="px-4 py-2.5 rounded-xl bg-[#C69234] hover:bg-[#B87A1E] text-white text-xs font-bold transition active:scale-95 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0 flex items-center gap-1.5 shadow-2xs"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
