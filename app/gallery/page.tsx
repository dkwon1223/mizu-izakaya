import React from "react";
import { readdirSync } from "fs";
import { LayoutGrid } from "../../components/ui/layout-grid";
import mizuLogo from "../../public/images/mizu-logo.png";
import Image from "next/image";
import Link from "next/link";

const imageFiles = readdirSync("public/gallery");

const randomArray = [
  0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20, 23, 24, 27, 28, 31, 32, 35, 36, 39,
];
const images = imageFiles.map((file, index) => ({
  id: index + 1,
  content: <img src={`/gallery/${file}`} alt={`Image ${index + 1}`} />,
  className: randomArray.includes(index) ? "col-span-2" : "col-span-1",
  thumbnail: `/gallery/${file}`,
}));

const galleryImages = [...images];

const cards = galleryImages.map((image) => {
  return {
    id: image.id,
    content: image.content,
    className: image.className,
    thumbnail: image.thumbnail,
  };
});

const GalleryPage = () => {
  return (
    <section className="max-w-8xl w-screen px-12 py-24 text-white bg-black bg-dot-white/[0.2] flex flex-col justify-center items-center">
      <Link href={"/"}>
        <Image
          alt="Mizu Izakaya Icon"
          src={mizuLogo}
          className="w-28 sm:w-24 lg:w-40 mb-4 absolute top-12 left-16 cursor-pointer"
        />
      </Link>
      <div className="w-full h-full flex flex-col items-center justify-center my-12">
        <h1 className="text-5xl lg:text-6xl sm:text-2xl font-fancy text-gold mb-10">
          Photo Gallery
        </h1>
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
};

export default GalleryPage;
