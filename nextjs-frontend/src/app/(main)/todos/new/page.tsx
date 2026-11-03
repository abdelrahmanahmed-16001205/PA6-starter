'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewTodoPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.message);
      return;
    }
    router.push('/todos');
  }

  return (
    <div>
      <h1>New todo</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <button type="submit">Create</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
