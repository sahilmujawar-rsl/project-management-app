import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function TasksPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  return (
    <div>
      <h2 className="text-xl font-semibold">Tasks</h2>
      <ul className="list-disc pl-5">
        {project.tasks.map((t, i) => (
          <li key={i}>
            {t.title} {t.done ? "(done)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
