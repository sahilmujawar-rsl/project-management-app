export default async function DocsPage({
  params,
}: {
  params: Promise<{ id: string; slug?: string[] }>;
}) {
  const { slug } = await params;
  const path = slug?.join("/") ?? "";
  return (
    <div>
      <h2 className="text-xl font-semibold">Documentation</h2>
      <p>Requested path: {path || "(root)"}</p>
    </div>
  );
}
