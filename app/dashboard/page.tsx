import { Suspense } from "react";

async function RecentActivity() {
  await new Promise((r) => setTimeout(r, 1500));
  return (
    <div className="border p-3 rounded">
      <h3 className="font-semibold">Recent Activity</h3>
      <ul className="list-disc pl-5">
        <li>Project created</li>
        <li>Task completed</li>
      </ul>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Central hub of Project Explorer.</p>
      <Suspense
        fallback={
          <div className="border p-3 rounded animate-pulse">
            Loading recent activity...
          </div>
        }
      >
        <RecentActivity />
      </Suspense>
    </div>
  );
}
