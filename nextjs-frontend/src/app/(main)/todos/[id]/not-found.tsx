import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Todo not found</h2>
      <p>This todo does not exist.</p>
      <Link href="/todos">Back to todos</Link>
    </div>
  );
}
