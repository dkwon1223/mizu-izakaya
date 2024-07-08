import React from 'react'
import { Tabs } from '@/components/Tabs'
import Link from 'next/link';
import Image from 'next/image';
import mizuLogo from "../../public/images/mizu-logo.png";

const MenuPage = () => {
  return (
    <section className='bg-black bg-dot-white/[0.2] w-screen h-full flex justify-center'>
        <Link href={"/"}>
        <Image
            alt="Mizu Izakaya Icon"
            src={mizuLogo}
            className="w-28 sm:w-24 lg:w-40 mb-4 absolute top-12 left-16"
        />
      </Link>
        <div className='w-full max-w-7xl flex flex-col items-center justify-center'>
            <h1 className="text-5xl lg:text-6xl sm:text-2xl font-fancy text-gold my-12">Explore the Menu</h1>
            <Tabs />
        </div>
    </section>
  )
}

export default MenuPage