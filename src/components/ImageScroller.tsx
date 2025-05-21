import React from 'react';
import Image from 'next/image';

type ImageScrollerProps = {
  images: { src: string; alt: string }[];
  height?: number;
  width?: number;
};

const ImageScroller = ({ images, height, width }: ImageScrollerProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[100vw] md:w-auto"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={width}
              height={height}
              className="object-contain"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
