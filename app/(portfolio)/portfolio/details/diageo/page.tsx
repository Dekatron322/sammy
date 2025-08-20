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
          <motion.div
            className="relative flex h-[400px] min-w-[calc(50%-20px)] flex-shrink-0 items-center justify-between overflow-visible rounded-lg bg-[#5C5C4D] p-8 max-sm:h-[300px]"
            style={{ scrollSnapAlign: "start" }}
            variants={scaleUp}
          >
            <div className="relative z-10 mb-10">
              <motion.p className="headfont w-[285px] text-3xl text-white" variants={fadeInVariants}>
                Diageo
              </motion.p>
              <motion.p className="text-white" variants={fadeInVariants}>
                Portfolio
              </motion.p>
            </div>
            <motion.img
              src="/fresh-images/diageo2.svg"
              alt=""
              className="absolute -top-[18%] right-0 z-10 w-[144px] max-sm:-top-[25%] max-sm:w-[120px] md:right-10"
              variants={slideInFromRight}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-10 flex h-[122px] items-center rounded-b-lg bg-[#FF972D] p-8"
              variants={itemVariants}
            >
              <img src="/fresh-images/diageo.svg" alt="" />
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
              Elevating Diageo&apos;s Premium Spirits
            </motion.p>
            <motion.p className="headfont mt-2 text-lg text-[#101720] md:text-center" variants={itemVariants}>
              Shaping strategy, growing sales, and building standout premium spirits experiences
            </motion.p>

            <motion.div
              className="my-7 flex w-full flex-col md:items-center md:rounded-xl md:border-2 md:border-dashed md:border-[#800020] md:bg-white md:p-4 md:shadow-2xl"
              variants={scaleUp}
            >
              <motion.p className="mt-2 text-lg font-bold text-[#10172099] md:text-center" variants={fadeInVariants}>
                Purpose and deeper achievements
              </motion.p>
              <motion.p className="mt-2 text-lg text-[#10172099] md:text-center" variants={fadeInVariants}>
                In this role, Sammy drove over £28 million in gross sales and more than 122,000 nine-litre case
                depletions in a single fiscal year. He managed multi-million-pound customer marketing budgets,
                delivering consistent 20%+ ROI through focused below-the-line activations and smart commercial planning.
                His leadership strengthened Diageo&apos;s market share, opened new commercial accounts, and streamlined
                partnerships, ensuring flawless execution across channels.
              </motion.p>
              <motion.p className="my-4 text-lg text-[#10172099] md:text-center" variants={fadeInVariants}>
                Sammy Okwandu is a dynamic marketing leader who helped shape Diageo&apos;s premium spirits business in
                Nigeria. As Head of Customer Marketing for International Premium Spirits and Reserve Brands, he brought
                fresh strategies, strong commercial vision, and a passion for growing iconic brands in one of
                Africa&apos;s most vibrant markets.
              </motion.p>

              <motion.div
                className="flex w-full items-center justify-between gap-2 rounded-md bg-[#FF972DCC] p-2"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
                <motion.p className="font-bold text-white max-sm:text-center max-sm:text-sm" variants={fadeInVariants}>
                  £28M in gross sales
                </motion.p>
                <motion.img src="/fresh-images/star.svg" variants={fadeInVariants} />
              </motion.div>

              <motion.div className="mt-10 grid gap-10 md:grid-cols-2" variants={containerVariants}>
                {[4, 5, 6, 7].map((item) => (
                  <motion.div
                    key={item}
                    className="flex w-full flex-col gap-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={`/fresh-images/02${item}.svg`} alt="" />
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
