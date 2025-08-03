import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import { CgChevronLeft, CgChevronRight } from "react-icons/cg"

const ForGovOfficialsListItem = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/government-officials"
      className="nav-items-card relative flex h-full flex-col overflow-hidden p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Element with Hover Animation */}
      <div
        className={`img-element-seven absolute right-[-10px] top-0 transition-transform duration-300 ${
          isHovered ? "translate-x-[-10px]" : ""
        }`}
      ></div>

      {/* Content with Chevron Animation */}
      <div className="mt-auto flex flex-col justify-end gap-4">
        <div className="flex items-center gap-2">
          <h2 className="h-full max-w-[913px] text-2xl font-medium max-sm:text-base">For Gov Officials</h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <CgChevronRight className="text-2xl" />
          </motion.div>
        </div>
        <p className="paragraph text-sm">
          Partner with CHATS to drive impactful humanitarian initiatives. Our platform offers secure, accountable
          solutions for distributing aid while ensuring visibility across every stage of the process.
        </p>
      </div>
    </Link>
  )
}

export default ForGovOfficialsListItem
