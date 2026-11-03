export default async function StatsSlot() {
  const res = await fetch('http://localhost:3001/api/stats', { cache: 'no-store' });
  const stats: { total: number; done: number; open: number } = await res.json();

  return (
    <div>
      <h2>Stats</h2>
      <p>Total: {stats.total}</p>
      <p>Done: {stats.done}</p>
      <p>Open: {stats.open}</p>
    </div>
  );
}
