"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";
import { useEffect, useRef } from "react";

const Reservations = () => {
  const dataFetch = useRef(false);
  useEffect(() => {
    const openTableWrapper: any = document.getElementById("openTableWrapper");

    const script = document.createElement("script");
    script.id = "openTableWidget";
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://www.opentable.com/widget/reservation/loader?rid=298771&type=standard&theme=wide&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=true&ot_source=Restaurant%20website&cfe=true`;
    if (dataFetch.current) {
      return;
    }
    dataFetch.current = true;
    openTableWrapper.appendChild(script);
  }, []);

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
        <div className="text-3xl md:text-7xl font-bold text-white dark:text-white text-center font-fancy">
          Reserve a Table with Us
          <div id="openTableWrapper" className="h-12"></div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Reservations;
