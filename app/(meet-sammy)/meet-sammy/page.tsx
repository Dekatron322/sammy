"use client"

import DashboardNav from "components/Navbar/DashboardNav"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const firstImages: string[] = [
    "/fresh-images/sammy.png",
    "/fresh-images/sammy2.png",
    "/fresh-images/sammy3.png",
    "/fresh-images/sammy4.png",
  ]

  const [currentFirstImageIndex, setCurrentFirstImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFirstImageIndex((prev) => (prev === firstImages.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentFirstImage = firstImages[currentFirstImageIndex]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <div className="paddings mx-auto flex items-center max-sm:mb-10 max-sm:mt-20 max-sm:h-1/2 md:h-[calc(100vh-80px)]">
        <div className="z-10 w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="headfont text-5xl font-bold leading-[60px] text-[#73001A] md:text-6xl lg:text-5xl"
          >
            I'm Sammy Okwandu,
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="headfont max-w-md text-lg"
          >
            Professional Wines & Spirits Explorer
          </motion.p>

          <p className="my-5 md:w-[575px]">
            Exploring the delicate balance of blends fuels my passion. Join me in discovering the rich stories,
            cultures, craftsmanship, and business behind the world's most iconic wine and spirit brands.
          </p>

          <div className="mt-10 flex gap-7">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-md bg-[#73001A] px-8 py-3 text-white hover:bg-[#5a0015]"
              href="/meet-sammy/podcast"
            >
              View podcasts
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-md border border-[#73001A] px-8 py-3 text-[#101720CC] transition-all duration-200 ease-in-out hover:bg-[#80002066]"
              href="/meet-sammy/see-more"
            >
              See More
            </motion.a>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 hidden h-full w-[80%] -translate-y-1/2 transform md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFirstImage}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 right-0 top-20 z-10 h-full w-full rotate-12 transform rounded-lg"
            >
              <Image src={currentFirstImage as any} alt="Spirits bottle" fill className="object-cover" priority />

              {/* Stripes overlay - positioned to the right */}
              <div className="absolute inset-y-0 right-0 z-20 h-full w-[50%]">
                <Image
                  src="/fresh-images/stripe2.png"
                  alt="Stripes pattern"
                  fill
                  className="object-contain opacity-70 mix-blend-overlay"
                  style={{ right: "-130px" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-0 top-0 h-full w-full">
            <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#73001A] opacity-10 blur-xl"></div>
            <div className="absolute right-1/4 top-2/3 h-48 w-48 rounded-full bg-[#73001A] opacity-10 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Award image moved to almost bottom of the page */}
      <div className="paddings absolute left-0 right-0 flex max-sm:hidden md:bottom-20">
        <Image src="/fresh-images/award.png" alt="Stripes pattern" width={469} height={89} className="max-sm:hidden" />
      </div>
      <div className=" flex flex-col gap-10 p-10 max-sm:bg-[#F3E6E9] ">
        <img src="/fresh-images/mobile/award1.svg" alt="Stripes pattern" className="sm:hidden" />

        <img src="/fresh-images/mobile/award3.svg" alt="Stripes pattern" className="sm:hidden" />

        <img src="/fresh-images/mobile/award2.svg" alt="Stripes pattern" className="sm:hidden" />
      </div>
    </section>
  )
}
