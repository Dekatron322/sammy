import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"
import { CgGlobe } from "react-icons/cg"
import { FaGlobeAmericas } from "react-icons/fa"
import { PiDotsThreeOutlineFill, PiShareFatThin } from "react-icons/pi"

const WhyChats = () => {
  return (
    <div className="section-1 patternImage flex w-full flex-col gap-4">
      <div className="paddings w-full gap-6 max-md:flex-col max-md:px-0 ">
        <div className=" flex w-full flex-col items-center justify-center gap-6 max-sm:mt-10 xl:px-20">
          <motion.h2
            className="mb-7 h-full text-center text-4xl font-medium max-sm:text-3xl md:leading-[55px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Why CHATS?
          </motion.h2>
        </div>
        <div className="grid gap-10 xl:grid-cols-3">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="h-[160px]">
              <Image src="/gov/Frame 1618874215.png" alt="" width={285} height={139} className="mb-6" />
            </div>
            <h5 className="mb-2 font-medium">Centralized Campaign Oversight</h5>
            <p className="paragraph text-center">
              Manage multiple aid initiatives from a single dashboard. Monitor disbursement progress,{" "}
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="h-[160px]">
              <Image src="/gov/Frame 1618874225.png" alt="" width={285} height={139} className="mb-6" />
            </div>
            <h5 className="mb-2">Beneficiary Database Management</h5>
            <p className="paragraph text-center">
              Leverage advanced tools to verify, organize, and update beneficiary information securely.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="h-[160px]">
              <Image src="/gov/Frame 1618874227.png" alt="" width={280} height={139} className="mb-6" />
            </div>
            <h5 className="mb-2">Comprehensive Reporting and Analytics</h5>
            <p className="paragraph text-center">
              Manage multiple aid initiatives from a single dashboard. Monitor disbursement progress,{" "}
            </p>
          </div>
        </div>
      </div>

      <section className="relative rounded-[10px] bg-[#05F29A]">
        <div className="img-element absolute bottom-0 left-10"></div>

        <div className="flex h-full w-full items-center justify-center p-6">
          <p className=" max-w-[961px] text-center text-[32px] font-medium text-[#000000] max-sm:text-lg">
            &quot;The greatest good is often achieved through the simplest means.&quot; - This quote emphasises the
            importance of finding efficient and streamlined solutions in humanitarian work, which is precisely what
            CHATS aims to provide
          </p>
        </div>
      </section>
    </div>
  )
}

export default WhyChats
