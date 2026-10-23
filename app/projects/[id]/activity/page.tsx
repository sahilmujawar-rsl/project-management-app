import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  return (
    <div>
      <h2 className="text-xl font-semibold">Activity</h2>
      <ul className="list-disc pl-5">
        {project.activity.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
