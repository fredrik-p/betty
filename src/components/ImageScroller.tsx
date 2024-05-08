import React from 'react';
import Image from 'next/image';

type ImageScrollerProps = {
  images: { src: string; alt: string }[];
};

const ImageScroller = ({ images }: ImageScrollerProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[320px] md:w-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={600}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
