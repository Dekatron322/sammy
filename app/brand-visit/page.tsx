"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import DashboardNav from "components/Navbar/DashboardNav"
import Link from "next/link"

export default function HeroSection() {
  const router = useRouter()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const handleReturn = () => router.back()

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // 640px is Tailwind's 'sm' breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const container = scrollContainerRef.current
    if (container) {
      const updateScrollData = () => {
        setScrollPosition(container.scrollLeft)
        setMaxScroll(container.scrollWidth - container.clientWidth)

        // Calculate active index based on scroll position for mobile
        if (isMobile) {
          const itemWidth = container.scrollWidth / filteredServices.length
          const newActiveIndex = Math.floor(container.scrollLeft / itemWidth)
          setActiveIndex(newActiveIndex)
        }
      }

      updateScrollData()
      container.addEventListener("scroll", updateScrollData)
      window.addEventListener("resize", updateScrollData)

      return () => {
        container.removeEventListener("scroll", updateScrollData)
        window.removeEventListener("resize", updateScrollData)
        window.removeEventListener("resize", checkMobile)
      }
    }
  }, [isMobile, searchQuery])

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current && isMobile) {
      const container = scrollContainerRef.current
      const itemWidth = container.scrollWidth / filteredServices.length
      container.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      })
    }
  }

  const services = [
    {
      image: "/fresh-images/brand1.png",
      title: "Cognac, France",
      readMoreLink: "Discover the art of Cognac making",
    },
    {
      image: "/fresh-images/brand2.png",
      title: "Reims, France",
      readMoreLink: "Explore the heart of Champagne",
    },
    {
      image: "/fresh-images/brand3.png",
      title: "Epernay, France",
      readMoreLink: "Experience the luxury of Champagne houses",
    },
    {
      image: "/fresh-images/brand4.png",
      title: "Stellenbosch, South Africa",
      readMoreLink: "Taste the finest South African wines",
    },
    {
      image: "/fresh-images/brand5.png",
      title: "Spain",
      readMoreLink: "Savor the rich flavors of Spanish wines",
    },
    {
      image: "/fresh-images/brand6.png",
      title: "Italy",
      readMoreLink: "Indulge in the diverse wines of Italy",
    },
    {
      image: "/fresh-images/brand7.png",
      title: "Germany",
      readMoreLink: "Uncover the unique wines of Germany",
    },
    {
      image: "/fresh-images/brand8.png",
      title: "Scotland",
      readMoreLink: "Tour historic distilleries and taste fine Scotch",
    },
    {
      image: "/fresh-images/brand9.png",
      title: "United Kingdom",
      readMoreLink: "Visit picturesque vineyards and taste English wines",
    },
  ]

  // Filter services based on search query
  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.readMoreLink.toLowerCase().includes(searchQuery.toLowerCase())
  )

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

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <motion.div
        className="paddings mt-24 flex flex-col max-sm:mt-14"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex w-full justify-between">
          <motion.button
            onClick={handleReturn}
            className="mt-2 h-10 w-10 max-sm:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            <img src="/fresh-images/return.png" className="h-full w-full" alt="Return button" />
          </motion.button>
          <motion.div
            className="mt-7 flex w-full flex-col justify-center md:items-center md:text-center"
            variants={containerVariants}
          >
            <motion.p
              className="headfont text-5xl font-semibold text-[#800020] max-sm:text-3xl"
              variants={itemVariants}
            >
              Curated Cellar & Brand Visits
            </motion.p>
            <motion.p
              className="headfont mt-2 text-lg text-[#101720] max-sm:hidden md:text-center"
              variants={itemVariants}
            >
              Explore world-class regions through exclusive guided experiences.
            </motion.p>
          </motion.div>

          <p></p>
        </div>

        {/* Search Bar */}
        <div className="flex w-full justify-center">
          <motion.div className="mt-8 flex w-full max-w-[900px] justify-center  max-sm:hidden" variants={itemVariants}>
            <div className="relative flex w-full ">
              <input
                type="text"
                placeholder="Search destinations or experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full    rounded-lg border  border-gray-300 bg-[#F2F0E8] px-6 py-3 pl-12 pr-10 shadow-sm focus:border-[#800020] focus:outline-none focus:ring-1 focus:ring-[#800020]"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="mt-10 grid grid-cols-3 gap-5 scroll-smooth max-sm:flex max-sm:gap-4 max-sm:overflow-x-auto max-sm:pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div key={index} className="relative flex-shrink-0 max-sm:w-[85vw]">
                  <img src={service.image} alt={service.title} className="h-auto w-full rounded-lg object-cover" />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 z-50 flex h-[122px] flex-col rounded-b-lg p-4 max-sm:p-3"
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
                      className="headfont text-2xl font-semibold text-[#FFFFFF] max-sm:text-xl"
                      whileHover={{ color: "#E5E7EB" }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="headfont font-normal text-[#FFFFFF] max-sm:text-sm"
                      whileHover={{ color: "#E5E7EB" }}
                    >
                      {service.readMoreLink}
                    </motion.p>
                  </motion.div>
                </div>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-xl text-gray-600">No destinations found matching your search.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 rounded-full bg-[#800020] px-6 py-2 text-white hover:bg-[#600018]"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Dot Indicators - Only show on mobile and when there are multiple items */}
          {isMobile && filteredServices.length > 1 && (
            <div className="mt-4 flex justify-center max-sm:flex">
              <div className="flex space-x-2">
                {filteredServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`h-3 w-3 rounded-full ${index === activeIndex ? "bg-[#800020]" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
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
