"use client"
import DashboardNav from "components/Navbar/DashboardNav"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const handleReturn = () => router.back()

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section className="relative h-svh w-full overflow-hidden bg-[#F5F5F5]">
      <DashboardNav />

      <div className="paddings flex h-[calc(100vh-60px)] flex-col gap-10 max-sm:mt-14 md:mt-24">
        <button onClick={handleReturn} className="mt-2 h-10 w-10">
          <img src="/fresh-images/return.png" className="h-full w-full" />
        </button>

        <div className="flex h-12 items-center gap-1">
          <h1 className="headfont text-4xl font-bold  text-[#73001A] md:text-6xl lg:text-5xl">Next</h1>
          <img src="/fresh-images/nextx.png" className="mt-2 h-10 w-10" />
        </div>

        <div className="flex flex-col gap-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="headfont max-w-md text-5xl max-sm:text-4xl"
          >
            Episode 01
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="headfont text-xl text-[#101720]"
          >
            Bottles and Business
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#10172099] md:w-[489px]"
          >
            Lorem ipsum dolor sit amet consectetur. Duis netus lectus urna nunc feugiat sed. Non ridiculus orci id sit
            condimentum in faucibus fermentum. Ullamcorper urna libero morbi ac.
          </motion.p>
          <div className="mt-4 flex gap-7">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-2 rounded-md bg-[#73001A] px-4 py-3 text-white hover:bg-[#5a0015] md:px-8"
              onClick={openModal}
            >
              <Image src="/fresh-images/play.png" height={24} width={24} alt="" />
              Play podcast
            </motion.button>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-md border border-[#73001A] px-4 py-3 text-[#101720CC] transition-all duration-200 ease-in-out hover:bg-[#80002066] md:px-8"
              href="/meet-sammy/see-more"
            >
              View on YouTube
            </motion.a>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 hidden h-full w-[80%] -translate-y-1/2 transform md:block">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 right-0 top-0 z-10 h-full w-full rotate-0 transform rounded-lg"
            >
              <Image src="/fresh-images/podcast.png" alt="Spirits bottle" fill className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Podcast2 image positioned at the bottom */}
        <div className="absolute bottom-0 right-10 hidden w-full md:block">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="height={441} relative z-10 mx-auto  w-full max-w-[715px]"
            >
              <Image
                src="/fresh-images/podcast2.png"
                alt="Spirits bottle"
                height={441}
                width={715}
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 "
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl rounded-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -right-2 -top-2 z-10 rounded-full bg-[#73001A] p-2 text-white hover:bg-[#5a0015]"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="aspect-video w-full overflow-hidden rounded-xl  bg-gray-800">
                {/* Replace this with your actual video player component */}
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="relative h-20 w-20">
                      <Image src="/fresh-images/play.png" alt="Play" fill className="object-contain" />
                    </div>
                    <p className="mt-4 text-xl text-white">Episode 01 - Bottles and Business</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-gray-400">(↔)</span>
                      <span className="text-white">next </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mt-2 flex flex-col gap-2 rounded-xl bg-[#8000204D] p-4">
                <h3 className="headfont text-xl font-bold text-[#800020]">Episode 01</h3>
                <p className="text-gray-300">Bottles and Business</p>
                <div className="mt-4 flex w-full items-center justify-between">
                  <Image src="/fresh-images/pod.png" height={40} width={40} alt="" />
                  <div className="flex items-center gap-2">
                    <p className="text-xl text-[#FFFFFF99]">next</p>
                    <Image src="/fresh-images/next-pod.svg" height={19} width={11} alt="" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
