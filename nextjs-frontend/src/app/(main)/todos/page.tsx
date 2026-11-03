import Link from 'next/link';

type Todo = { id: number; title: string; done: boolean };

export default async function TodosPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const res = await fetch(`${process.env.API_URL}/todos`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to load todos');
  }
  const todos: Todo[] = await res.json();

  const shown = todos.filter((todo) => {
    if (status === 'done') return todo.done;
    if (status === 'open') return !todo.done;
    return true;
  });

  return (
    <div>
      <h1>Todos</h1>
      <p>
        <Link href="/todos">All</Link> | <Link href="/todos?status=done">Done</Link> |{' '}
        <Link href="/todos?status=open">Open</Link>
      </p>
      <ul>
        {shown.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link> - {todo.done ? 'Done' : 'Open'}
          </li>
        ))}
      </ul>
    </div>
  );
}
