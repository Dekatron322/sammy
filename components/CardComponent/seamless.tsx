import { motion } from "framer-motion"
import React from "react"

const Seamless = () => {
  return (
    <section className="flex w-full">
      <div className="w-full gap-4 max-md:flex-col max-md:px-0 xl:my-10">
        <div className="flex w-full flex-col items-center justify-center gap-4 ">
          <motion.h2
            className="paragraph mb-7 h-full max-w-[754px] text-center text-2xl font-medium max-sm:text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Happy beneficiaries, Seamless Distribution
          </motion.h2>

          {/* Elliptical Scroll Container */}
          <div className="border-color-100 w-full overflow-hidden pb-10">
            <div className="scroll-containers animate-infinite-scroll flex w-max gap-[21px]">
              {/* First Set of Images */}
              <div className="flex gap-[21px] ">
                <img src="/scroller/Frame 1618874247.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874248.png" alt="" className="h-[159px] max-w-[110px]" />
                <img src="/scroller/Frame 1618874249.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874250.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874251.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874252.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874253.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874254.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874255.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874256.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874257.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874258.png" alt="" className="h-[159px] w-[110px]" />
              </div>
              {/* Duplicate Set of Images for Infinite Scroll */}
              <div className="flex gap-[21px]">
                <img src="/scroller/Frame 1618874247.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874248.png" alt="" className="h-[159px] max-w-[110px]" />
                <img src="/scroller/Frame 1618874249.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874250.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874251.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874252.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874253.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874254.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874255.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874256.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874257.png" alt="" className="h-[159px] w-[110px]" />
                <img src="/scroller/Frame 1618874258.png" alt="" className="h-[159px] w-[110px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Seamless
