import { Video } from "@/app/ui/video";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ImageScroller from "@/components/ImageScroller";

export default function Home() {
  const images = [
    { src: "/Betty10689-edited.jpg", alt: "Betty" },
    { src: "/Betty10702edited.jpg", alt: "Betty" },
    { src: "/Betty10711_edited.jpg", alt: "Betty" },
    { src: "/Betty10788_edited.jpg", alt: "Betty" },
    { src: "/Betty10827_edited.jpg", alt: "Betty" },
    { src: "/Betty10842_edit_2.jpg", alt: "Betty" },
    { src: "/Betty10848_edited.jpg", alt: "Betty" },
  ];
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <ImageScroller images={images}/>
     
  
      <div className="flex flex-col items-center justify-center h-[100vh]">
    <Video />
      </div>    
      </main>
    </>
  );
}
