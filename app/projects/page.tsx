import Link from "next/link";
import { filterProjects } from "@/lib/projects";
import SearchForm from "@/components/SearchForm";

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; status?: string }>;
}) {
  const { search, status } = await searchParams;
  await new Promise((r) => setTimeout(r, 1500));
  const projects = filterProjects(search, status);
  const qs = new URLSearchParams();
  if (search) qs.set("search", search);
  if (status) qs.set("status", status);
  const suffix = qs.toString() ? `?${qs.toString()}` : "";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <SearchForm />
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.id} className="border rounded p-3">
            <Link
              href={`/projects/${p.id}${suffix}`}
              className="font-semibold hover:underline"
            >
              {p.name}
            </Link>
            <div className="text-sm">
              {p.status} - {p.description}
            </div>
          </li>
        ))}
        {projects.length === 0 && <li>No projects found.</li>}
      </ul>
    </div>
  );
}
