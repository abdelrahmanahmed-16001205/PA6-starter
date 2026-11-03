import Link from 'next/link';

export default function PageA() {
  return (
    <div>
      <h1>Page A</h1>
      <Link href="/playground/b">Go to page B</Link>
    </div>
  );
}
