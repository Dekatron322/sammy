"use client"
import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
              src="/fresh-images/img02.png"
              alt="Procurement & Sourcing"
              className="h-[428px] w-full rounded-lg object-cover max-sm:h-[250px]"
              variants={fadeInVariants}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-50 flex h-[122px] items-center rounded-b-lg p-8"
              variants={gradientHover}
              initial="initial"
              whileHover="hover"
            >
              <motion.h3
                className="headfont w-[381px] text-3xl font-semibold text-[#FFFFFF]"
                whileHover={{ color: "#E5E7EB" }}
              >
                Procurement & Sourcing
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
              Procurement & Sourcing
            </motion.p>
            <motion.p className="headfont mt-2 text-lg text-[#101720] md:text-center" variants={itemVariants}>
              Hard to find bottles? I've got you covered.
            </motion.p>

            <motion.div
              className="my-7 flex w-full flex-col md:items-center md:rounded-xl md:border-2 md:border-dashed md:border-[#800020] md:bg-white md:p-4 md:shadow-2xl"
              variants={scaleUp}
            >
              <motion.p className="mt-2 text-lg text-[#10172099] md:text-center" variants={fadeInVariants}>
                Whether you're after rare vintages, limited editions, or the perfect bottle for a special moment, I tap
                into trusted networks and auctions to source exceptional wines and spirits tailored just for you
              </motion.p>

              <motion.div
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#FF972DCC] p-2"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
                <motion.p className="font-bold text-white" variants={fadeInVariants}>
                  500+ rare bottles sourced
                </motion.p>
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
              </motion.div>

              <motion.div
                className="my-4 flex items-center justify-center gap-2 rounded-md bg-[#FF972DCC] p-2"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
                <motion.p className="font-bold text-white" variants={fadeInVariants}>
                  60+ exclusive producers in network
                </motion.p>
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
              </motion.div>

              <motion.div
                className="mb-4 flex items-center justify-center gap-2 rounded-md bg-[#FF972DCC] p-2"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
                <motion.p className="text-sm font-bold text-white" variants={fadeInVariants}>
                  99% client satisfaction on custom selection
                </motion.p>
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
              </motion.div>

              <motion.a
                href="/lets-talk"
                className="flex w-36 justify-center rounded-md border border-[#73001A] px-8 py-3 text-[#101720CC] transition-all duration-200 ease-in-out hover:bg-[#80002066]"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                Let's Talk
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
