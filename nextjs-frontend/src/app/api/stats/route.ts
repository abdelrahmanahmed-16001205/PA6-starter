export async function GET() {
  const res = await fetch(`${process.env.API_URL}/todos`, { cache: 'no-store' });
  const todos: { id: number; title: string; done: boolean }[] = await res.json();
  const done = todos.filter((todo) => todo.done).length;
  return Response.json({ total: todos.length, done, open: todos.length - done });
}
