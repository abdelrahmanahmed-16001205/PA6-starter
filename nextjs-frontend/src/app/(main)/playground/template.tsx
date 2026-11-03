import Counter from '@/app/_components/Counter';

export default function PlaygroundTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Template counter</h2>
      <Counter />
      {children}
    </div>
  );
}
