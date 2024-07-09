"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xl mx-auto z-50 border border-gold rounded-full font-fancy text-xl sm:text-lg",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Mizu</HoveredLink>
            <HoveredLink href="/#about">About</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/gallery" className="font-fancy text-xl sm:text-lg text-white">Gallery</Link>
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/menu">View Menu</HoveredLink>
            <HoveredLink href="https://order.toasttab.com/online/mizu-izakaya">
              Order Online
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href="/reservations" className="font-fancy text-xl sm:text-lg text-white">Reservations</Link>
      </Menu>
    </div>
  );
}

export default NavBar;
