import React, { useState } from "react"
import { CgChevronRight } from "react-icons/cg"

const DonorDashboard = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex h-full flex-col  overflow-hidden rounded-[25px] bg-[#151E22] p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Element with Hover Animation */}
      <div
        className={`img-element-thirtheen absolute bottom-[-10px] left-1/2 -translate-x-1/2 transition-transform duration-1000 ${
          isHovered ? "scale-95" : "scale-100"
        }`}
      ></div>
      <div className="img-element-fourtheen absolute bottom-0 right-0"></div>

      {/* Content with Chevron Animation */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="h-full max-w-[913px] text-2xl font-bold text-[#ffffff] max-sm:text-base">Donor Dashboard</h2>
        </div>
        <p className=" text-sm text-[#ffffff]">
          <span className="text-[#05F29A]">What it Does:</span> Allows donors to contribute securely to campaigns, track
          their impact, and receive detailed reports.
        </p>
      </div>
    </div>
  )
}

export default DonorDashboard
