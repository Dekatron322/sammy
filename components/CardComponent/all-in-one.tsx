import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"
import { CgGlobe } from "react-icons/cg"
import { FaGlobeAmericas } from "react-icons/fa"
import { PiDotsThreeOutlineFill, PiShareFatThin } from "react-icons/pi"

const AllInOne = () => {
  return (
    <div className="flex w-full">
      <div className="paddings w-full gap-6 max-md:flex-col max-md:px-0 ">
        <div className="mt-14 flex w-full flex-col items-center justify-center gap-6 max-sm:mt-10 xl:px-20">
          <motion.h2
            className="h-full text-center text-4xl font-medium max-sm:text-3xl md:leading-[55px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            Aid Delivery, Simplified with CHATS
          </motion.h2>
          <p className="paragraph max-w-[771px] text-center">
            With the CHATS <span className="paragraph-2">NGO</span> Dashboard, you gain complete visibility into your
            direct aid programs. <span className="paragraph-2">Manage disbursements</span>, verify beneficiaries, and
            track progress in real-time. This level of control ensures your resources are used wisely and that aid
            reaches those who need it most.
          </p>

          <p className="paragraph max-w-[771px] text-center">
            For agencies funding third-party <span className="paragraph-2">NGOs</span>, the CHATS Donor Dashboard offers
            unparalleled <span className="paragraph-2">transparency and accountability</span>. Monitor fund allocation,
            track campaign progress, and ensure your partners are delivering results.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AllInOne
