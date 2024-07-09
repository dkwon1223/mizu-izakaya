"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import omakaseTable from "../public/images/omakase-table.jpg";
import interior1 from "../public/images/interior1.jpg";
import sushi1 from "../public/images/sushi1.jpg";
import bar from "../public/images/bar.jpg";

const aboutContent = [
  {
    title: "What is an Izakaya?",
    description: (
      <>
        <p>
          An Izakaya is best described as a Japanese restaurant serving
          tapas-style food meant to be shared among friends. It is a casual
          after-work drinking place where people relax and enjoy good food and
          drink.
        </p>
      </>
    ),
    image: omakaseTable,
    alt: "Image of dining private dining room",
  },
  {
    title: "Our Story",
    description: (
      <>
        <p>
          Established in the vibrant Low Highlands neighborhood of Denver in the
          autumn of 2016, Mizu Izakaya introduced the essence of authentic
          Izakaya dining to the area. Our journey starts from the moment you
          step through our doors into a meticulously crafted, Japanese-inspired
          contemporary environment. At Mizu Izakaya, we are dedicated to
          delivering a genuine and immersive dining experience.
        </p>
      </>
    ),
    image: interior1,
    alt: "Image of the overlooking main dining room",
  },
  {
    title: "Quality Ingredients",
    description: (
      <>
        <p>
          Mizu Izakaya brings the freshest sushi to Denver. Our owner, Li,
          virtually handpicks our sushi from Japan’s fish market. Literally! As
          the sun rises in Japan to the opening of the fish market, he connects
          via video call to view and pick our fish. Our menu comprises of a
          variety of Japanese dishes, including a full sushi bar, toriaezu
          (small plates), bichotan grill (Japanese charcoal grill), agemono
          (fried), ramen, raw bar, and oshokuyi (large plates).
        </p>
      </>
    ),
    image: sushi1,
    alt: "Image of assorted sushi platter on wooden board",
  },
  {
    title: "Crafted Excellence",
    description: (
      <>
        <p>
          The highlight of an Izakaya is our bar! We are the home of the largest
          collection of Japanese Whisky and Sake, our bar program is led by the
          top, award-winning bartenders in Colorado, offering craft cocktails
          that are truly unique to Mizu Izakaya. Our late-night bar programming,
          Bar Ginza, provides an exclusive menu, including bartenders’ choice.
          We also offer after-hour and late-night happy hour menus daily.
        </p>
      </>
    ),
    image: bar,
    alt: "Image of an extensive bar with various Japanese whiskeys",
  },
];

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center z-10 max-w-7xl sm:w-screen" id="about">
      <h1 className="text-5xl lg:text-6xl sm:text-2xl font-fancy text-gold mb-10">
        About
      </h1>
      <TracingBeam className="px-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative">
          {aboutContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-gold rounded-full text-xl sm:text-2xl lg:text-3xl w-fit px-4 py-1 mb-4 font-fancy">
                {item.title}
              </h2>

              <div className="text-lg sm:text-md lg:text-xl  prose prose-sm dark:prose-invert font-clean text-wrap">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    height="700"
                    width="1000"
                    className="rounded-lg mb-10 object-contain"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
};

export default About;
