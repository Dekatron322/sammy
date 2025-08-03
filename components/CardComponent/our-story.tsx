import { motion } from "framer-motion"
import React from "react"

const OurStory = () => {
  return (
    <section className="section-2 relative flex w-full">
      <div className="w-full gap-4 max-md:flex-col max-md:px-0 xl:my-10">
        <div className="flex w-full flex-col items-center justify-center gap-4 max-sm:mt-10">
          <div className="card-sm flex items-center gap-2 rounded-full px-3 py-2">
            <img src="/chats transparent 1.png" alt="" className="w-7" />
            <p className="text-sm">Moments That Tell Our Story</p>
          </div>
          <motion.h2
            className="h-full max-w-[754px] text-center text-3xl font-medium max-sm:text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Snapshots of CHATS in action capturing the impact, dedication, and collaboration behind our mission
          </motion.h2>

          {/* Elliptical Scroll Container */}
          <div className="border-color-100 w-full overflow-hidden pb-10">
            <div className="elliptic-scroll-container elliptic-scroll-bottom-container">
              <div className="scroll-container animate-infinite-scroll flex w-max gap-[66px]">
                {/* First Set of Images */}
                <div className="flex gap-[66px]">
                  <img src="/Frame 1618874037 (2).png" alt="" />
                  <img src="/Frame 1618874038.png" alt="" />
                  <img src="/Frame 1618874039.png" alt="" />
                  <img src="/Frame 1618874040.png" alt="" />
                </div>
                {/* Duplicate Set of Images for Infinite Scroll */}
                <div className="flex gap-[66px]">
                  <img src="/Frame 1618874037 (2).png" alt="" />
                  <img src="/Frame 1618874038.png" alt="" />
                  <img src="/Frame 1618874039.png" alt="" />
                  <img src="/Frame 1618874040.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/gradient/Ellipse 9.png" // Replace with your image path
        alt="Gradient Background"
        className="absolute bottom-10 left-1/2 z-0 h-auto w-full max-w-[1200px] -translate-x-1/2 transform"
      />
    </section>
  )
}

export default OurStory
