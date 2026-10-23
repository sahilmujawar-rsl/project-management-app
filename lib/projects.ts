import projects from "@/data/projects.json";

export type Task = { title: string; done: boolean };
export type Project = {
  id: string;
  name: string;
  status: string;
  description: string;
  team: string[];
  tasks: Task[];
  activity: string[];
};

export const allProjects: Project[] = projects as Project[];

export function getProject(id: string): Project | undefined {
  return allProjects.find((p) => p.id === id);
}

export function filterProjects(search?: string, status?: string): Project[] {
  return allProjects.filter((p) => {
    const matchesSearch = search
      ? p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesStatus = status ? p.status === status : true;
    return matchesSearch && matchesStatus;
  });
}
