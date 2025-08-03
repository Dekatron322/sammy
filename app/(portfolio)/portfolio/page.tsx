"use client"

import { useRef, useState, useEffect } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [isHovered, setIsHovered] = useState<number | null>(null)

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

  const gradientPercentage = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollPosition / maxScroll) * 100)) : 0
  const isLeftDisabled = scrollPosition <= 0
  const isRightDisabled = scrollPosition >= maxScroll

  // Portfolio items data for cleaner JSX
  const portfolioItems = [
    {
      id: 1,
      href: "portfolio/details/ricard",
      bgColor: "bg-[#40495E]",
      title: "Pernod Ricard",
      subtitle: "Portfolio",
      image: "/fresh-images/ricard.png",
      logo: "/fresh-images/ricard.svg",
      imageClass: "absolute -right-10 top-0 z-10 w-[602px]",
      imageStyle: { transform: "translateY(-10%)" },
    },
    {
      id: 2,
      href: "portfolio/details/moet",
      bgColor: "bg-[#4B4A4A]",
      title: "Moet Hennessy",
      subtitle: "Portfolio",
      image: "/fresh-images/moet.png",
      logo: "/fresh-images/path221.svg",
      imageClass: "absolute -top-[5%] right-8 z-10 w-[151px]",
      imageStyle: { transform: "translateY(-10%)" },
    },
    {
      id: 3,
      href: "portfolio/details/fine-wine",
      bgColor: "bg-[#742C33]",
      title: "Global fine wines and champagnes",
      subtitle: "Portfolio",
      image: "/fresh-images/global.png",
      logo: "/fresh-images/global.svg",
      imageClass: "absolute -right-20  max-sm:-right-10 z-10 w-[750px]",
      titleClass: "w-[285px]",
      imageStyle: { transform: "translateY(-10%)" },
    },
    {
      id: 4,
      href: "portfolio/details/diageo",
      bgColor: "bg-[#5C5C4D]",
      title: "Diageo",
      subtitle: "Portfolio",
      image: "/fresh-images/diageo2.svg",
      logo: "/fresh-images/diageo.svg",
      imageClass: "absolute -top-[1%] right-10 z-10 w-[144px]",
      titleClass: "w-[285px]",
    },
    {
      id: 5,
      href: "portfolio/details/remy",
      bgColor: "bg-[#7B383F]",
      title: "Remy Cointreau",
      subtitle: "Portfolio",
      image: "/fresh-images/remy.svg",
      logo: "/fresh-images/remyc.svg",
      imageClass: "absolute top-[5%] right-10 z-10 w-[144px]",
      titleClass: "w-[285px]",
    },
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <div className="paddings mt-24 flex flex-col">
        <motion.p
          className="headfont text-5xl text-[#800020] max-sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          View Collection
        </motion.p>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-10 overflow-x-auto scroll-smooth pt-14 max-sm:mt-10 md:mt-20"
            style={{
              scrollbarWidth: "none",
              scrollSnapType: "x mandatory",
              scrollPadding: "0 24px",
            }}
          >
            {portfolioItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative flex h-[400px] flex-shrink-0 items-center justify-between overflow-visible rounded-lg max-sm:h-[300px] max-sm:w-[400px] md:min-w-[calc(50%-20px)] ${item.bgColor} p-8`}
                style={{ scrollSnapAlign: "start" }}
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className={`headfont text-3xl text-white max-sm:text-xl ${item.titleClass || ""}`}>{item.title}</p>
                  <p className="text-white">{item.subtitle}</p>
                </motion.div>

                <motion.img
                  src={item.image}
                  alt=""
                  className={item.imageClass}
                  style={item.imageStyle || {}}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: isHovered === item.id ? 1.05 : 1,
                    y: isHovered === item.id ? "-12%" : item.imageStyle?.transform ? "-10%" : "-20%",
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 z-10 flex h-[122px] items-center rounded-b-lg bg-[#FF972D] p-8 max-sm:h-[100px]"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img src={item.logo} alt="" className="max-sm:h-12" />
                </motion.div>

                {/* Hover overlay effect */}
                <AnimatePresence>
                  {isHovered === item.id && (
                    <motion.div
                      className="absolute inset-0 z-20 bg-black/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>

          <div className="paddings relative mt-24 flex items-center justify-between">
            <motion.button
              onClick={scrollLeft}
              disabled={isLeftDisabled}
              className={`z-10 rounded-xl p-3 text-white transition-colors ${
                isLeftDisabled ? "cursor-not-allowed bg-[#80002066]" : "bg-[#800020] hover:bg-[#600018]"
              }`}
              aria-label="Previous image"
              whileHover={!isLeftDisabled ? { scale: 1.1 } : {}}
              whileTap={!isLeftDisabled ? { scale: 0.95 } : {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="absolute left-0 right-0 mx-auto flex w-[calc(100%-120px)] items-center md:w-[calc(100%-290px)]">
              <div className="relative h-1 w-full bg-gray-300">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#800020]"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${gradientPercentage}%`,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            <motion.button
              onClick={scrollRight}
              disabled={isRightDisabled}
              className={`z-10 rounded-xl p-3 text-white transition-colors ${
                isRightDisabled ? "cursor-not-allowed bg-[#80002066]" : "bg-[#800020] hover:bg-[#600018]"
              }`}
              aria-label="Next image"
              whileHover={!isRightDisabled ? { scale: 1.1 } : {}}
              whileTap={!isRightDisabled ? { scale: 0.95 } : {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
