import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectOverview({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await new Promise((r) => setTimeout(r, 800));
  const project = getProject(id);
  if (!project) notFound();
  return (
    <div>
      <h2 className="text-xl font-semibold">Overview</h2>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
    </div>
  );
}
