import React from "react";
import { readdirSync } from "fs";
import { LayoutGrid } from "../../components/ui/layout-grid";

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
      <h1 className="text-5xl lg:text-6xl sm:text-2xl font-fancy text-gold mb-10">
        Photo Gallery
      </h1>
      <LayoutGrid cards={cards} />
    </section>
  );
};

export default GalleryPage;
