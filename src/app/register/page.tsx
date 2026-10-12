"use client";

import { Suspense } from "react";
import LoginPage from "../login/page";

export default function RegisterPage() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}
