export default async function ArchivePage({
  params,
}: {
  params: Promise<{ year?: string[] }>;
}) {
  const { year } = await params;
  return (
    <div>
      <h1>Archive</h1>
      <p>{year ? year[0] : 'All years'}</p>
    </div>
  );
}
