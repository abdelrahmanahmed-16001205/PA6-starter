export default async function HelpPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return (
    <div>
      <h1>Help</h1>
      <p>Help &gt; {slug.join(' > ')}</p>
    </div>
  );
}
