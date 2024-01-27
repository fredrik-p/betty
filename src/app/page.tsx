import { ebGaramond } from "./ui/fonts";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className={`${ebGaramond.className} text-6xl font-thin text-center`}>
            Site is under construction
          </h1>
        </div>
      </main>
    </>
  );
}