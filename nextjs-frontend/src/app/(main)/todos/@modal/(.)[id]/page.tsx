import Modal from '@/app/_components/Modal';

type Todo = { id: number; title: string; done: boolean };

export default async function TodoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`${process.env.API_URL}/todos/${id}`, { cache: 'no-store' });
  const todo: Todo = await res.json();

  return (
    <Modal>
      <h2>{todo.title}</h2>
      <p>ID: {todo.id}</p>
      <p>Done: {todo.done ? 'Yes' : 'No'}</p>
    </Modal>
  );
}
