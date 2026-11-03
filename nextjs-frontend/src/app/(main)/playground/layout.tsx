import Counter from '@/app/_components/Counter';

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Layout counter</h2>
      <Counter />
      {children}
    </div>
  );
}
