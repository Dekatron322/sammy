import React, { useState } from "react"
import { CgChevronRight } from "react-icons/cg"

const BeneficiaryApp = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="nav-items-card relative flex h-full flex-col overflow-hidden p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Element with Hover Animation */}
      <div
        className={`img-element-twelve absolute bottom-[-10px] left-1/2 -translate-x-1/2 transition-transform duration-1000 ${
          isHovered ? "scale-90" : "scale-100"
        }`}
      ></div>

      {/* Content with Chevron Animation */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h3 className="h-full max-w-[913px] text-2xl font-bold max-sm:text-base">Beneficiary App</h3>
        </div>
        <p className="paragraph text-sm">
          <span className="text-[#05F29A]">What it Does:</span> Allows beneficiaries to access aid, check balances, and
          redeem funds at approved vendors.
        </p>
      </div>
    </div>
  )
}

export default BeneficiaryApp
