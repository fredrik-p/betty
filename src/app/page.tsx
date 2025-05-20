import { Video } from "@/app/ui/video";
import Navbar from "../components/Navbar";
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

  const arkdesImages = [
    { src: "/arkdes_1.jpeg", alt: "Arkdes 1" },
    { src: "/arkdes_3.jpeg", alt: "Arkdes 3" }, 
    { src: "/arkdes_2.jpeg", alt: "Arkdes 2" },
  ];

  const aBodyImages = [
    { src: "/abody_2.jpeg", alt: "A Body 2" },  
    { src: "/abody_1.jpeg", alt: "A Body 1" },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <ImageScroller height={1000} width={800} images={aBodyImages}/>
        <ImageScroller width={980} height={554} images={arkdesImages} />
        <ImageScroller height={600} width={400} images={images}/> 
      <div className="flex flex-col items-center justify-center h-[100vh]">
    <Video />
      </div>    
      </main>
    </>
  );
}
