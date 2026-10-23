import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  return (
    <div>
      <h2 className="text-xl font-semibold">Team</h2>
      <ul className="list-disc pl-5">
        {project.team.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
