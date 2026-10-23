import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <aside className="w-40 border-r pr-3 space-y-2">
        <div className="font-bold">Dashboard</div>
        <Link href="/dashboard" className="block hover:underline">
          Overview
        </Link>
        <Link href="/dashboard/analytics" className="block hover:underline">
          Analytics
        </Link>
        <Link href="/dashboard/reports" className="block hover:underline">
          Reports
        </Link>
        <Link href="/dashboard/team" className="block hover:underline">
          Team
        </Link>
        <Link href="/projects" className="block hover:underline">
          Projects
        </Link>
      </aside>
      <section className="flex-1">{children}</section>
    </div>
  );
}
