export default function DashboardLayout({
  children,
  stats,
  recent,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  recent: React.ReactNode;
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
      <div style={{ display: 'flex', gap: 40 }}>
        <section>{stats}</section>
        <section>{recent}</section>
      </div>
    </div>
  );
}
