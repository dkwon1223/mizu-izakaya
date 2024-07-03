"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";

export function GallerySlideshow() {
  const images = [
    "https://resizer.otstatic.com/v2/photos/xlarge/1/25095639.webp",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/64318982.webp",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/50580209.webp",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/41884826.webp",
  ];
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-5xl lg:text-6xl sm:text-2xl font-fancy text-gold mb-10">
        Photo Gallery
      </h1>
      <ImagesSlider className="h-[40rem] rounded-lg max-w-4xl" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <Link href={"/gallery"}>
            <button className="px-4 py-2 backdrop-blur-sm border bg-gold/10 border-gold/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>View More →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-yellow-500 to-transparent" />
            </button>
          </Link>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
