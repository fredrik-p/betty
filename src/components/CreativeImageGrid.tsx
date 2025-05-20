"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ImageItem = {
  src: string;
  alt: string;
  style: string;
};

type CreativeImageGridProps = {
  images: ImageItem[];
};

const CreativeImageGrid = ({ images }: CreativeImageGridProps) => {
  return (
    <div className="relative w-full h-[2500px]">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute ${image.style}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CreativeImageGrid;