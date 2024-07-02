import Hero from "@/components/Hero";
import Image from "next/image";
import mizuIcon from "../public/images/mizu-logo.png";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full py-12">
        <Image
          alt="Mizu Izakaya Icon"
          src={mizuIcon}
          style={{
            width: "12%",
            height: "auto",
            marginBottom: "2%"
          }}
        />
        <Hero />
      </div>
    </main>
  );
}
