"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { CyberDashboard } from "@/components/cyber-dashboard";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <>
      <CyberDashboard />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      </main>
    </>
  );
}
