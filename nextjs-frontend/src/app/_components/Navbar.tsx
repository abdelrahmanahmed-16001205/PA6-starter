'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/todos', label: 'Todos' },
  { href: '/todos/new', label: 'New todo' },
  { href: '/help/todos/create', label: 'Help' },
  { href: '/archive', label: 'Archive' },
  { href: '/playground/a', label: 'Playground' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #ccc' }}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{ fontWeight: pathname === link.href ? 'bold' : 'normal' }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
