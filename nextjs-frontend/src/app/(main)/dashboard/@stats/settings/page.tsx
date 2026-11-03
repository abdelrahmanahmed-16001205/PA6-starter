import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div>
      <h2>Settings</h2>
      <p>Dashboard settings go here.</p>
      <Link href="/dashboard">Back to dashboard</Link>
    </div>
  );
}
