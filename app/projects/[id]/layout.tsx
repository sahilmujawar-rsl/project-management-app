import Link from "next/link";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <nav className="flex gap-3 border-b pb-2">
        <Link href={`/projects/${id}`} className="hover:underline">
          Overview
        </Link>
        <Link href={`/projects/${id}/team`} className="hover:underline">
          Team
        </Link>
        <Link href={`/projects/${id}/tasks`} className="hover:underline">
          Tasks
        </Link>
        <Link href={`/projects/${id}/activity`} className="hover:underline">
          Activity
        </Link>
        <Link href={`/projects/${id}/docs`} className="hover:underline">
          Docs
        </Link>
      </nav>
      {children}
    </div>
  );
}
