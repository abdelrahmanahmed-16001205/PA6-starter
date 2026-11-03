import Link from 'next/link';

export default async function HomePage() {
  const res = await fetch('http://localhost:3001/api/stats', { cache: 'no-store' });
  const stats: { total: number; done: number; open: number } = await res.json();

  return (
    <div>
      <h1>Todo App</h1>
      <p>Total: {stats.total}</p>
      <p>Done: {stats.done}</p>
      <p>Open: {stats.open}</p>
      <ul>
        <li><Link href="/todos">All todos</Link></li>
        <li><Link href="/todos?status=done">Done todos</Link></li>
        <li><Link href="/todos?status=open">Open todos</Link></li>
        <li><Link href="/todos/new">Create a todo</Link></li>
        <li><Link href="/todos/1">Todo 1</Link></li>
        <li><Link href="/todos/5/edit">/todos/5/edit (catch-all)</Link></li>
        <li><Link href="/help/todos/create">Help: todos / create</Link></li>
        <li><Link href="/archive">Archive</Link></li>
        <li><Link href="/archive/2025">Archive 2025</Link></li>
        <li><Link href="/playground/a">Playground A</Link></li>
        <li><Link href="/playground/b">Playground B</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/settings">Dashboard settings</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </div>
  );
}
