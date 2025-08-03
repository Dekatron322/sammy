import React, { useState } from "react"

const FieldAgentApp = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isAgentHovered, setIsAgentHovered] = useState(false)

  return (
    <div className="flex min-h-[246px] w-full flex-col justify-between gap-4 rounded-[25px] bg-[#05F29A] p-4">
      {/* Background Image Div with Overlay */}
      {/* Bottom Section */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex h-[115.5px] w-full items-center  gap-4 overflow-hidden rounded-[20px] bg-[#151E22] px-6"
      >
        <div
          className={`img-element-nine absolute bottom-0 right-[-12px] transition-transform duration-300 ${
            isHovered ? "translate-x-[-5px]" : ""
          }`}
        ></div>

        <div className="flex flex-col gap-2">
          <h2 className="text-white">Field Agent App</h2>
          <p className="text-xs  text-[#FFFFFFE5] xl:max-w-[205px]">
            <span className="text-[#05F29A]">What it Does:</span> Field agents can verify beneficiaries, distribute aid,
            and report on-ground activities.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        onMouseEnter={() => setIsAgentHovered(true)}
        onMouseLeave={() => setIsAgentHovered(false)}
        className="relative flex h-[115.5px] w-full items-center gap-4  overflow-hidden rounded-[20px] bg-[#F8F8F8] px-6"
      >
        <div
          className={`img-element-ten absolute bottom-0 right-[-12px] transition-transform duration-300 ${
            isAgentHovered ? "translate-x-[-5px]" : ""
          }`}
        ></div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[#151E22]">Vendor App</h2>
          <p className="text-xs  text-[#7D7D7D] xl:max-w-[205px]">
            <span className="text-[#05F29A]">What it Does:</span> Vendors can redeem digital vouchers, process NFC
            payments, and track disbursements
          </p>
        </div>
      </div>
    </div>
  )
}

export default FieldAgentApp
