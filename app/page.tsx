import Hero from "@/components/Hero";
import Image from "next/image";
import mizuIcon from "../public/images/mizu-logo.png";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-main bg-contain bg-no-repeat flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl w-screen px-12 py-12 bg-building-exterior bg-cover bg-no-repeat bg-left-bottom">
        <Image
          alt="Mizu Izakaya Icon"
          src={mizuIcon}
          className="w-28 sm:w-24 lg:w-40 mb-4"
        />
        <Hero />
      </div>
      <div className="max-w-8xl w-screen px-12 py-12 bg-contain bg-main text-white">
        <About />
      </div>
    </main>
  );
}
