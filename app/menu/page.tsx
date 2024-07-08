import React from 'react'
import { Tabs } from '@/components/Tabs'

const MenuPage = () => {
  return (
    <section className='bg-black bg-dot-white/[0.2] h-screen w-screen flex justify-center'>
        <div className='w-full max-w-7xl flex flex-col items-center justify-center'>
            <h1 className="text-5xl lg:text-6xl sm:text-2xl font-fancy text-gold mb-10">Explore the Menu</h1>
            <Tabs />
        </div>
    </section>
  )
}

export default MenuPage