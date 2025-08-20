"use client"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

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
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <motion.div
        className="paddings mt-14 flex flex-col md:mt-24"
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
          <motion.div
            className="relative flex h-[400px] min-w-[calc(50%-20px)] flex-shrink-0 items-center justify-between overflow-visible rounded-lg bg-[#40495E] p-8 max-sm:h-[300px]"
            style={{ scrollSnapAlign: "start" }}
            variants={scaleUp}
          >
            <div className="relative z-10 max-sm:mb-5">
              <motion.p className="headfont text-3xl text-white" variants={fadeInVariants}>
                Pernod Ricard
              </motion.p>
              <motion.p className="text-white" variants={fadeInVariants}>
                Portfolio
              </motion.p>
            </div>
            <motion.img
              src="/fresh-images/ricard.png"
              alt=""
              className="absolute -right-10 top-0 z-10 w-[602px] max-sm:-top-8"
              style={{ transform: "translateY(-14%)" }}
              variants={slideInFromRight}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-10 flex h-[122px] items-center rounded-b-lg bg-[#FF972D] p-8 "
              variants={itemVariants}
            >
              <img src="/fresh-images/ricard.svg" alt="" className="max-sm:h-20" />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-7 flex w-full flex-col items-center justify-center md:text-center"
            variants={containerVariants}
          >
            <motion.p
              className="headfont text-5xl font-semibold text-[#800020] max-sm:text-3xl"
              variants={itemVariants}
            >
              Pouring Premium into Every Pour
            </motion.p>
            <motion.p className="headfont mt-2 text-lg text-[#101720] md:text-center" variants={itemVariants}>
              Shaping how premium spirits show up in Nigeria&apos;`s top venues
            </motion.p>

            <motion.div
              className="my-7 flex w-full flex-col rounded-xl md:items-center md:border-2 md:border-dashed md:border-[#800020] md:bg-white md:p-4 md:shadow-2xl"
              variants={scaleUp}
            >
              <motion.p className="mt-2 text-lg font-bold text-[#10172099] md:text-center" variants={fadeInVariants}>
                Purpose and deeper achievements
              </motion.p>
              <motion.p className="mt-2 text-lg text-[#10172099] md:text-center" variants={fadeInVariants}>
                Sammy Okwandu brought strategic finesse and deep industry insight to his role as National On-Trade
                Manager at Pernod Ricard West Africa, where he played a leading role in shaping the company&apos;`s
                premium footprint across Nigeria. His focus on top-tier hospitality channels enabled Pernod Ricard to
                cement its presence in the upscale On-trade space through smarter distribution, elevated brand
                visibility, and meaningful consumer engagement.
              </motion.p>
              <motion.p className="my-4 text-lg text-[#10172099] md:w-[600px] md:text-center" variants={fadeInVariants}>
                Sammy&apos;`s work redefined On-trade excellence for Pernod Ricard in Nigeria. His approach combined
                premium execution with practical market wins.
              </motion.p>

              <motion.div
                className="flex items-center justify-between gap-2 rounded-md bg-[#FF972DCC] p-2"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
                <motion.p className="font-bold text-white max-sm:text-center max-sm:text-sm" variants={fadeInVariants}>
                  Premium+ visibility boost across Nigeria
                </motion.p>
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
              </motion.div>

              <motion.div
                className="mt-10 grid gap-10 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <motion.div
                    key={item}
                    className="flex w-full flex-col gap-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={`/fresh-images/00${item}${item === 1 ? ".png" : ".svg"}`} alt="" />
                  </motion.div>
                ))}
              </motion.div>
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
