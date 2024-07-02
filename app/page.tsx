import Hero from "@/components/Hero";
import Image from "next/image";
import mizuIcon from "../public/images/mizu-logo.png";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-10">
      <Image
        alt="Mizu Izakaya Icon"
        src={mizuIcon}
        style={{
          width: '10%',
          height: 'auto',
        }}
      />
      <div className="max-w-7xl w-full pt-8">
        <Hero />
      </div>
    </main>
  );
}
