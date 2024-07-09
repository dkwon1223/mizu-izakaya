"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";
import Link from "next/link";

const Reservations = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <Link
          href="https://www.opentable.com/r/mizu-izakaya-and-sushi-denver?corrid=0a449288-8333-41a0-aa6d-ea50f8e1d2f5&avt=eyJ2IjoyLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2024-07-09T19%3A00%3A00"
          className="text-3xl md:text-7xl font-bold dark:text-white text-center font-fancy"
        >
          Reserve a Table with Us
        </Link>
      </motion.div>
    </AuroraBackground>
  );
};

export default Reservations;
