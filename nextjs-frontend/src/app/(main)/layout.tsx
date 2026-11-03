import Navbar from '@/app/_components/Navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: 16 }}>{children}</main>
    </>
  );
}
