"use client"

import { useEffect, useRef, useState } from "react"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

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

  // Service data
  const services = [
    {
      image: "/fresh-images/ex1.png",
      title: "Bespoke Tasting Design",
      readMoreLink: "/exclusive/bespoke-tasting-design",
    },
    {
      image: "/fresh-images/ex2.png",
      title: "Venue & Experience Coordination",
      readMoreLink: "/exclusive/venue",
    },
    {
      image: "/fresh-images/ex3.png",
      title: "Food Pairing & Culinary Collaboration",
      readMoreLink: "/exclusive/food-pairing",
    },
    {
      image: "/fresh-images/ex4.png",
      title: "Collector & Connoisseur Services",
      readMoreLink: "/exclusive/collector",
    },
    {
      image: "/fresh-images/ex5.png",
      title: "Luxury Gifting & Keepsakes",
      readMoreLink: "/exclusive/luxury",
    },
    {
      image: "/fresh-images/ex6.png",
      title: "Virtual & Hybrid Tasting",
      readMoreLink: "/exclusive/virtual",
    },
    {
      image: "/fresh-images/ex7.png",
      title: "Brand Education",
      readMoreLink: "/exclusive/brand-education",
    },
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <div className="paddings mt-24 flex flex-col">
        <p className="headfont mb-4 text-5xl text-[#800020]">Exclusive Tasting Experiences</p>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-10 overflow-x-auto scroll-smooth py-4 max-sm:mt-10"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((service, index) => (
              <Link
                href={service.readMoreLink}
                key={index}
                className="relative h-[301px] w-[555px] flex-shrink-0 overflow-hidden max-sm:w-full"
              >
                <img src={service.image} alt={service.title} className="h-auto w-full rounded-lg object-center" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 z-50 flex h-[122px] items-center rounded-b-lg p-8"
                  style={{
                    background: "linear-gradient(to right, #666666CC, #00000099)",
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{
                    background: "linear-gradient(to right, #800020, #EA5C2B)",
                    color: "#FFFFFF",
                  }}
                >
                  <motion.h3
                    className="headfont w-[381px] text-3xl font-semibold text-[#FFFFFF]"
                    whileHover={{ color: "#E5E7EB" }}
                  >
                    {service.title}
                  </motion.h3>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="paddings relative flex items-center justify-between max-sm:mt-10 md:mt-24">
            <button
              onClick={scrollLeft}
              disabled={isLeftDisabled}
              className={`z-10 rounded-xl p-3 text-white transition-colors ${
                isLeftDisabled ? "cursor-not-allowed bg-[#80002066]" : "bg-[#800020] hover:bg-[#600018]"
              }`}
              aria-label="Previous image"
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
            </button>

            {/* Connecting line with dynamic gradient - now properly constrained between arrows */}
            <div className="absolute left-0 right-0 mx-auto flex w-[calc(100%-120px)] items-center xl:w-[calc(100%-190px)] 2xl:w-[calc(100%-290px)]">
              <div className="relative h-1 w-full bg-gray-300">
                <div
                  className="absolute left-0 top-0 h-full bg-[#800020] transition-all duration-300"
                  style={{
                    width: `${gradientPercentage}%`,
                  }}
                />
              </div>
            </div>

            <button
              onClick={scrollRight}
              disabled={isRightDisabled}
              className={`z-10 rounded-xl p-3 text-white transition-colors ${
                isRightDisabled ? "cursor-not-allowed bg-[#80002066]" : "bg-[#800020] hover:bg-[#600018]"
              }`}
              aria-label="Next image"
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
            </button>
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
