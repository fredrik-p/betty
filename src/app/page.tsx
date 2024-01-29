import {Video} from '@/app/ui/video';
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center h-[100vh]">
         <Video />
      </main>
    </>
  );
}