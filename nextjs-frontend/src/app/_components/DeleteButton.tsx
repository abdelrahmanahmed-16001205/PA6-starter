'use client';

import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();

  async function handleDelete() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, { method: 'DELETE' });
    router.push('/todos');
  }

  return <button onClick={handleDelete}>Delete</button>;
}
