"use client"

import DashboardNav from "components/Navbar/DashboardNav"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const firstImages = ["/fresh-images/bg.png", "/fresh-images/bg2.png", "/fresh-images/bg5.png"] as const

  const secondImages = ["/fresh-images/bg1.png", "/fresh-images/bg3.png", "/fresh-images/bg4.png"] as const

  const mobileBgImages = [
    "/fresh-images/mobile/3ba613fb8d97b4d2df0680fac80a0063be1093f4.jpg",
    "/fresh-images/mobile/42af4e6adf57c82e74b622aa73a20b562e6981f3.jpg",
    "/fresh-images/mobile/61cf7207b29e59dcd36f191fb4a1a2e6d2bd0876.jpg",
    "/fresh-images/mobile/f1594f87cf7249ec47ca4181c6a1566acc54f35b.jpg",
  ] as const

  const [currentFirstImageIndex, setCurrentFirstImageIndex] = useState(0)
  const [currentSecondImageIndex, setCurrentSecondImageIndex] = useState(0)
  const [currentMobileBgIndex, setCurrentMobileBgIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMobile) {
        setCurrentFirstImageIndex((prev) => (prev === firstImages.length - 1 ? 0 : prev + 1))
        setCurrentSecondImageIndex((prev) => (prev === secondImages.length - 1 ? 0 : prev + 1))
      } else {
        setCurrentMobileBgIndex((prev) => (prev === mobileBgImages.length - 1 ? 0 : prev + 1))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isMobile])

  const currentFirstImage = firstImages[currentFirstImageIndex]
  const currentSecondImage = secondImages[currentSecondImageIndex]
  const currentMobileBg = mobileBgImages[currentMobileBgIndex]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      {isMobile && (
        <div className="fixed inset-0 z-0">
          <Image src={currentMobileBg!} alt="Mobile background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
      )}

      <DashboardNav />

      <div className="relative flex h-[calc(100vh-1px)] flex-col-reverse items-center md:flex-row">
        <div
          className={`paddings z-10 w-full md:mt-0 md:w-1/2 ${
            isMobile ? "flex h-full flex-col items-center justify-center bg-black bg-opacity-50 p-6 text-center" : ""
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`headfont mb-6 text-4xl font-bold md:text-6xl lg:text-7xl lg:leading-[80px] ${
              isMobile ? "text-white" : ""
            }`}
          >
            Hi, <span className="text-[#73001A]">I&apos;m Sammy! </span>
            <br className="max-sm:hidden" />
            Wines & Spirits <span className="text-[#73001A]">Enthusiast.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-8 max-w-md text-lg ${isMobile ? "text-white" : ""}`}
          >
            I&apos;m Sammy Okwandu, a passionate connoisseur of wines and spirits. Unraveling flavors is more than a
            pastime — it&apos;s a journey.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-md bg-[#73001A] px-8 py-3 text-white hover:bg-[#5a0015]"
            href="/lets-talk"
          >
            Let&apos;s talk
          </motion.a>
        </div>

        {!isMobile && (
          <div className="relative h-[400px] w-full transform md:absolute md:right-0 md:top-1/2 md:h-full md:w-[80%] md:-translate-y-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFirstImage}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 right-0 top-0 z-10 h-full w-full transform rounded-lg md:rotate-12"
              >
                <Image src={currentFirstImage!} alt="Spirits bottle" fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSecondImage}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute bottom-0 right-0 top-0 z-20 h-full w-full transform rounded-lg md:-rotate-12"
              >
                <Image src={currentSecondImage!} alt="Spirits bottle" fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>

            <div className="absolute right-0 top-0 h-full w-full">
              <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#73001A] opacity-10 blur-xl"></div>
              <div className="absolute right-1/4 top-2/3 h-48 w-48 rounded-full bg-[#73001A] opacity-10 blur-xl"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
