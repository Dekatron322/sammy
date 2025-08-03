"use client"
import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DashboardNav from "components/Navbar/DashboardNav"
import { useRouter } from "next/navigation"

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

      // Also update on window resize
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

  // Calculate gradient percentage based on scroll position
  const gradientPercentage = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollPosition / maxScroll) * 100)) : 0

  // Determine if arrows should be disabled
  const isLeftDisabled = scrollPosition <= 0
  const isRightDisabled = scrollPosition >= maxScroll

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

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <motion.div
        className="paddings flex flex-col max-sm:mt-14 md:mt-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.button onClick={handleReturn} className="mt-2 h-10 w-10">
          <motion.img src="/fresh-images/return.png" className="h-full w-full" variants={itemVariants} />
        </motion.button>

        <div className="relative mt-10">
          <div className="relative flex w-full items-center justify-between overflow-visible rounded-lg bg-[#742C33] p-8 max-sm:h-[300px] md:h-[400px]">
            <div className="relative z-10 max-sm:pb-10">
              <p className="headfont text-3xl text-white max-sm:w-[200px] max-sm:text-xl md:w-[285px]">
                Global fine wines and champagnes
              </p>
              <p className="text-white">Portfolio</p>
            </div>
            <img
              src="/fresh-images/global.png"
              alt=""
              className="absolute z-10 w-[750px] max-sm:-right-12 max-sm:-top-[18%] md:-right-20 md:-top-[30%]"
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 flex h-[122px] items-center rounded-b-lg bg-[#FF972D] p-8">
              <img src="/fresh-images/global.svg" alt="" />
            </div>
          </div>

          <motion.div
            className="my-7 flex w-full flex-col items-center justify-center md:text-center"
            variants={containerVariants}
          >
            <motion.p
              className="headfont text-5xl font-semibold text-[#800020] max-sm:text-3xl"
              variants={itemVariants}
            >
              Building Global Fine Wines in West Africa
            </motion.p>
            <motion.p className="headfont mt-2 text-lg text-[#101720] md:text-center" variants={itemVariants}>
              Expanding luxury markets and reshaping how Africa connects with premium wines and spirits
            </motion.p>

            <motion.div
              className="mt-7 flex w-full flex-col rounded-xl  md:items-center md:border-2 md:border-dashed md:border-[#800020] md:bg-white md:p-4 md:shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.p className="mt-2 text-lg font-bold text-[#10172099] md:text-center" variants={fadeInVariants}>
                Purpose and deeper achievements
              </motion.p>
              <motion.p className="mt-2 text-lg text-[#10172099] md:text-center" variants={fadeInVariants}>
                In this role, Sammy built the company's West African operations from the ground up, delivering over 100%
                business growth against target in just nine months. He led market entry strategy, managed importation
                logistics, secured key partnerships, and onboarded over 450 commercial accounts laying a strong
                foundation for long-term profitability. By adapting global brand strategies for local markets, he
                boosted brand relevance and penetration, while mentoring high-performing B2B and B2C sales teams to
                champion the portfolio's growth across Nigeria and Ghana.
              </motion.p>
              <motion.p className="my-4 text-lg text-[#10172099] md:text-center" variants={fadeInVariants}>
                Sammy Okwandu is a passionate commercial leader who has played a key role in introducing and growing
                premium beverage brands across West Africa. As Country Manager for Nigeria and Ghana at Global Fine
                Wines, he brought a fresh vision to the region, helping global brands connect meaningfully with local
                audiences and setting the stage for sustainable success.
              </motion.p>

              <motion.div
                className="flex items-center gap-2 rounded-md bg-[#FF972DCC] p-2"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              >
                <motion.img src="/fresh-images/star.svg" />
                <motion.p className="font-bold text-white">Delivered 100%+ target growth</motion.p>
                <motion.img src="/fresh-images/star.svg" />
              </motion.div>

              <motion.div className=" mt-10 grid gap-4 md:grid-cols-2 md:gap-10" variants={containerVariants}>
                {[0, 1, 2, 3].map((item) => (
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
        </div>
      </motion.div>

      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
