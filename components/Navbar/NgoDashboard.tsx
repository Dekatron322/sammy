import React, { useState } from "react"
import { CgChevronRight } from "react-icons/cg"

const NgoDashboard = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="nav-items-card relative flex h-full flex-col overflow-hidden p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Element with Hover Animation */}
      <div
        className={`img-element-eleven absolute bottom-[-10px] left-1/2 -translate-x-1/2 transition-transform duration-1000 ${
          isHovered ? "scale-90" : "scale-100"
        }`}
      ></div>

      {/* Content with Chevron Animation */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="h-full max-w-[913px] text-2xl font-bold max-sm:text-base">NGO Dashboard</h2>
        </div>
        <p className="paragraph text-sm">
          <span className="text-[#05F29A]">What it Does:</span> Enables NGOs to manage campaigns, verify beneficiaries,
          and generate reports for donors.
        </p>
      </div>
    </div>
  )
}

export default NgoDashboard
