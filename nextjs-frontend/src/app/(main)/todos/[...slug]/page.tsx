export default async function TodosSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Catch-all page</h1>
      <p>{JSON.stringify(slug)}</p>
    </div>
  );
}
