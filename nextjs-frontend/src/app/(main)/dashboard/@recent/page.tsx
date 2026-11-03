type Todo = { id: number; title: string; done: boolean };

export default async function RecentSlot() {
  const res = await fetch(`${process.env.API_URL}/todos`, { cache: 'no-store' });
  const todos: Todo[] = await res.json();

  return (
    <div>
      <h2>Recent todos</h2>
      <ul>
        {todos.slice(-3).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
