import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-thin text-center">
            Betty Norling
          </h1>
        </div>
      </main>
    </>
  );
}