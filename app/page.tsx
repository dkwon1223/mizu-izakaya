import Hero from "@/components/Hero";
import Image from "next/image";
import mizuLogo from "../public/images/mizu-logo.png";
import About from "@/components/About";
import { GallerySlideshow } from "@/components/GallerySlideshow";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-black bg-contain bg-no-repeat flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl w-screen px-12 py-12 bg-building-exterior bg-cover bg-no-repeat bg-left-bottom">
        <Link href={"/"}>
          <Image
            alt="Mizu Izakaya Icon"
            src={mizuLogo}
            className="w-28 sm:w-24 lg:w-40 mb-4 absolute top-12 left-16 z-10 cursor-pointer"
          />
        </Link>
        <Hero />
      </div>
      <div className="max-w-8xl w-screen px-12 py-12 text-white bg-black bg-dot-white/[0.2]">
        <About />
      </div>
      <div className="max-w-8xl w-screen px-12 py-12 text-white bg-main bg-cover bg-no-repeat">
        <GallerySlideshow />
      </div>
    </main>
  );
}
