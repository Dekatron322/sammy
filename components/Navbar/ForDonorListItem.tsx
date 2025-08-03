import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import { CgChevronRight } from "react-icons/cg"

const ForDonorsListItem = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/donors"
      className="nav-items-card relative flex h-full flex-col overflow-hidden p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Element with Hover Animation */}
      <div
        className={`img-element-six absolute right-[-10px] top-0 transition-transform duration-300 ${
          isHovered ? "translate-x-[-10px]" : ""
        }`}
      ></div>

      {/* Content with Chevron Animation */}
      <div className="mt-auto flex flex-col justify-end gap-4">
        <div className="flex items-center gap-2">
          <h2 className="h-full max-w-[913px] text-2xl font-bold max-sm:text-base">For Donors</h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <CgChevronRight className="text-2xl" />
          </motion.div>
        </div>
        <p className="paragraph text-sm">
          Track your contributions in real-time and build confidence with CHATS. Whether donating{" "}
          <motion.span
            className="inline-block"
            animate={{
              fontWeight: isHovered ? 700 : 400,
              scale: isHovered ? 1 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            publicly
          </motion.span>{" "}
          or{" "}
          <motion.span
            className="inline-block"
            animate={{
              fontWeight: isHovered ? 700 : 400,
              scale: isHovered ? 1 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            anonymously
          </motion.span>
          , our platform ensures your support reaches the right hands efficiently and transparently.
        </p>
      </div>
    </Link>
  )
}

export default ForDonorsListItem
