import Link from 'next/link';
import { notFound } from 'next/navigation';
import DeleteButton from '@/app/_components/DeleteButton';

type Todo = { id: number; title: string; done: boolean };

async function getTodo(id: string) {
  const res = await fetch(`${process.env.API_URL}/todos/${id}`, { cache: 'no-store' });
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    throw new Error('Failed to load todo');
  }
  const todo: Todo = await res.json();
  return todo;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo = await getTodo(id);
  return { title: todo.title };
}

export default async function TodoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo = await getTodo(id);

  return (
    <div>
      <h1>Todo details</h1>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Done: {todo.done ? 'Yes' : 'No'}</p>
      <DeleteButton id={todo.id} />
      <p>
        <Link href="/todos">Back to todos</Link>
      </p>
    </div>
  );
}
