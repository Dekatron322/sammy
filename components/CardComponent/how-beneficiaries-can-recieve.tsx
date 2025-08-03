import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

const HowBeneficiariesCanRecieve = () => {
  return (
    <section className="section-1 relative flex w-full  overflow-hidden">
      <div className="mt-6   w-full gap-4 max-md:flex-col  max-md:px-0 md:mb-16">
        <div className="flex w-full flex-col items-center justify-center gap-4   max-sm:mt-10   ">
          <div className="card-sm flex items-center gap-2 rounded-full px-3 py-2">
            <img src="/chats transparent 1.png" alt="" className="w-7" />
            <p className="text-sm">How Beneficiaries can recieve</p>
          </div>
          <motion.h2
            className="h-full max-w-[555px] text-center text-5xl font-medium max-sm:text-2xl  xl:leading-[64.8px] "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <span className="text-[#05F29A]">CHATS</span> Offers Seamless Disbursement Options
          </motion.h2>

          <div className="  flex  w-full flex-col items-center justify-center gap-10">
            <div className="border-color-100 max-w-[1104px] gap-[66px] border-b pb-10 xl:flex">
              <img src="/Frame 1618874007.png" alt="" className="xl:h-[181px] xl:w-[306px]" />
              <div className="flex flex-col items-start gap-2 xl:gap-5">
                <h2 className="text-3xl font-medium max-sm:mt-3 max-sm:text-2xl">Paper payment voucher</h2>
                <p className="paragraph font-normal  xl:max-w-[669px]  xl:text-[20px]">
                  Beneficiaries can get unique payment vouches that would be scannedby the vendor for the payment
                </p>
                <Link
                  href="https://calendly.com/convexitytech/chats"
                  target="_blank"
                  className="primary-text-100 flex items-center gap-2 underline"
                >
                  Get Started <img src="/weui_arrow-filled.png" className="h-6 w-3" />{" "}
                </Link>
              </div>
            </div>
            <div className="border-color-100 max-w-[1104px] gap-[66px] border-b pb-10 xl:flex">
              <img src="/Frame 1618874007 (1).png" alt="" className="xl:h-[181px] xl:w-[306px]" />
              <div className="flex flex-col items-start gap-2 xl:gap-5">
                <h2 className="text-3xl font-medium max-sm:mt-3 max-sm:text-2xl">NFC TAP to Pay</h2>
                <p className="paragraph max-w-[669px]  font-normal  xl:text-[20px]">
                  Physical card enable transactions offline via NFC Embedded devices, ideal for those without phones
                </p>
                <Link
                  href="https://calendly.com/convexitytech/chats"
                  target="_blank"
                  className="primary-text-100 flex items-center gap-2 underline"
                >
                  Get Started <img src="/weui_arrow-filled.png" className="h-6 w-3" />{" "}
                </Link>
              </div>
            </div>
            <div className="border-color-100 max-w-[1104px] gap-[66px] border-b pb-10 xl:flex">
              <img src="/Frame 1618874007 (1).png" alt="" className="xl:h-[181px] xl:w-[306px]" />
              <div className="flex flex-col items-start gap-2 xl:gap-5">
                <h2 className="text-3xl font-medium max-sm:mt-3 max-sm:text-2xl">Android Application</h2>
                <p className="paragraph max-w-[669px]  font-normal  xl:text-[20px]">
                  Funds are credited directly to beneficiaries , cHATS linked wallet, accessible to all
                </p>
                <Link
                  href="https://calendly.com/convexitytech/chats"
                  target="_blank"
                  className="primary-text-100 flex items-center gap-2 underline"
                >
                  Get Started <img src="/weui_arrow-filled.png" className="h-6 w-3" />{" "}
                </Link>
              </div>
            </div>
            <div className="border-color-100 max-w-[1104px] gap-[66px] border-b pb-10 xl:flex">
              <img src="/Frame 1618874007.png" alt="" className="xl:h-[181px] xl:w-[306px]" />
              <div className="flex flex-col items-start gap-2 xl:gap-5">
                <h2 className="text-3xl font-medium max-sm:mt-3 max-sm:text-2xl">SMS/USSD (For Feature Phone)</h2>
                <p className="paragraph max-w-[669px]  font-normal  xl:text-[20px]">
                  Text based codes allow easy fund redemption for beneficiaries without smartphone
                </p>
                <Link
                  href="https://calendly.com/convexitytech/chats"
                  target="_blank"
                  className="primary-text-100 flex items-center gap-2 underline"
                >
                  Get Started <img src="/weui_arrow-filled.png" className="h-6 w-3" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/gradient/Ellipse 9.png" // Replace with your image path
        alt="Gradient Background"
        className="absolute bottom-[-550px] left-1/2 z-0 h-auto w-full max-w-[1200px] -translate-x-1/2 transform"
      />
    </section>
  )
}

export default HowBeneficiariesCanRecieve
