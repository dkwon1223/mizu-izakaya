"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Hero = () => {
  return (
    <section className="font-fancy">
        <HeroHighlight>
        <motion.h1
            initial={{
            opacity: 0,
            y: 20,
            }}
            animate={{
            opacity: 1,
            y: [20, -5, 0],
            }}
            transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl text-neutral-700 dark:text-gold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
            Authentic flavors,
            <br></br>
            lively ambiance, 
            <br></br>
            and the spirit of Japanese cuisine.
            <br></br>
            <br></br>
            <Highlight className="text-black dark:text-gold">
                A true Izakaya experience.
            </Highlight>
        </motion.h1>
        </HeroHighlight>
    </section>
  );
};

export default Hero;
