import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div>
      <p>Welcome to the dashboard.</p>
      <Link href="/dashboard/settings">Settings</Link>
    </div>
  );
}
