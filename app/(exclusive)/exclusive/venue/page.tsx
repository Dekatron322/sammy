"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import DashboardNav from "components/Navbar/DashboardNav"

export default function HeroSection() {
  const router = useRouter()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  const handleReturn = () => router.back()

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const updateScrollData = () => {
        setScrollPosition(container.scrollLeft)
        setMaxScroll(container.scrollWidth - container.clientWidth)
      }

      updateScrollData()
      container.addEventListener("scroll", updateScrollData)
      window.addEventListener("resize", updateScrollData)

      return () => {
        container.removeEventListener("scroll", updateScrollData)
        window.removeEventListener("resize", updateScrollData)
      }
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const gradientHover = {
    initial: { background: "linear-gradient(to right, #666666CC, #00000099)" },
    hover: {
      background: "linear-gradient(to right, #800020, #EA5C2B)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <motion.div
        className="paddings mt-24 flex flex-col max-sm:mt-14"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.button
          onClick={handleReturn}
          className="mt-2 h-10 w-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={itemVariants}
        >
          <img src="/fresh-images/return.png" className="h-full w-full" />
        </motion.button>

        <motion.div className="relative mt-10" variants={containerVariants}>
          <motion.div className="relative w-full flex-shrink-0" variants={scaleUp}>
            <motion.img
              src="/fresh-images/venue.png"
              alt="Venue & Experience Coordination"
              className="h-[428px] w-full rounded-lg object-cover max-sm:h-[250px]"
              variants={fadeInVariants}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-50 flex h-[122px] rounded-b-lg p-8 md:items-center"
              variants={gradientHover}
              initial="initial"
              whileHover="hover"
            >
              <motion.h3
                className="headfont w-[381px] text-3xl font-semibold text-[#FFFFFF]"
                whileHover={{ color: "#E5E7EB" }}
              >
                Venue & Experience Coordination
              </motion.h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-7 flex w-full flex-col justify-center md:items-center md:text-center"
            variants={containerVariants}
          >
            <motion.p
              className="headfont text-5xl font-semibold text-[#800020] max-sm:text-3xl"
              variants={itemVariants}
            >
              Venue & Experience Coordination
            </motion.p>
            <motion.p className="headfont mt-2 text-lg text-[#101720] md:text-center" variants={itemVariants}>
              In-Home or Destination Tasting
            </motion.p>

            <motion.div
              className="my-7 flex w-full flex-col md:items-center md:rounded-xl md:border-2 md:border-dashed md:border-[#800020] md:bg-white md:p-4 md:shadow-2xl"
              variants={scaleUp}
            >
              <motion.p className="mt-2 text-lg text-[#101720CC] md:text-center " variants={fadeInVariants}>
                Designing a tasting in the client&apos;s home, private venue, yacht, or luxury hospitality suite.
              </motion.p>
              <motion.p className="mt-4 text-lg font-bold text-[#101720CC] md:text-center " variants={fadeInVariants}>
                Partnerships with Exclusive Venues:
              </motion.p>
              <motion.p className="text-lg  text-[#101720CC] md:text-center " variants={fadeInVariants}>
                Hosting at upscale restaurants, private clubs, vineyards, distilleries, or art galleries.
              </motion.p>
              <motion.p className="mt-4 text-lg font-bold text-[#101720CC] md:text-center " variants={fadeInVariants}>
                Atmosphere Design:
              </motion.p>
              <motion.p className=" text-lg  text-[#101720CC] md:text-center " variants={fadeInVariants}>
                Tailoring ambiance (glassware, music, lighting, aroma elements) for an immersive, multi-sensory
                experience.
              </motion.p>

              <motion.a
                href="/lets-talk"
                className="my-4 flex w-36 rounded-md border border-[#73001A] px-8 py-3 text-center text-[#101720] transition-all duration-200 ease-in-out hover:bg-[#73001A] hover:text-white"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
